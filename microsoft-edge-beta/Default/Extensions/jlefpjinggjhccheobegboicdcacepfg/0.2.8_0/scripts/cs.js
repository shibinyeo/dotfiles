(function ($) {


	'use strict';
	let appName = 'ColorFish';
	let $ready;
	let HTMLSTRCOPY;
	let APPCONFIG;
	let IS_CAPTURED = false;
	let $SELECTOR;
	let OPTIONS;
	let MAX_ZINDEX = 2147483646;
	let WIDGETBOTTOM = -6;
	let ISPOSITIONED = false;
	if (typeof browser !== "undefined"){
		chrome =  browser || chrome;
	}

	const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

	if (isChrome){
		$('body').addClass('color-fish-chrome');
	}

	// add scrollEnd event for jquery:
	$.fn.scrollEnd = function(callback, timeout) {
		$(this).scroll(function(){
			var $this = $(this);
			if ($this.data('scrollTimeout')) {
				clearTimeout($this.data('scrollTimeout'));
			}
			$this.data('scrollTimeout', setTimeout(callback,timeout));
		});
	};

	/*
	 * Mutates global state by setting the OPTIONS value
	 */
	function getOptions() {
		let $optsDfd = $.Deferred();
		let theseOptions = {
			openGrabbingScreenHotkey: 0,
			closePanelHotkey: 0,
			copyTextHotkey: 0
		};
		chrome.storage.local.get(theseOptions, function (opts) {
			OPTIONS = opts;
			// set the global options here
			$optsDfd.resolve();
		});

		return $optsDfd;
	}
	/*
	 * Loads the config, HTML and options before activating the widget
	 */
	function _bootStrapResources() {
		let $dfd = $.Deferred();

		$.when(
				$.get(chrome.extension.getURL('config/config.json')),
				$.get(chrome.extension.getURL('/dialog.html')),
				getOptions()
			)
			.done(function (config, htmlStr) {
				HTMLSTRCOPY = htmlStr[0];

				//ColorFish.APPCONFIG = APPCONFIG = typeof config[0] === 'string' ? JSON.parse(config[0]) : config[0];
				$dfd.resolve(APPCONFIG, HTMLSTRCOPY);
			})
			.fail(function (err) {
				$dfd.reject();
			});
		return $dfd;
	}

	let ColorFish = {

		colorFishEnable: true,
		showMagnifier: true,
		closePart: 1,

		closeColorPicking:function() {
			let $body = $('body');
			try {
				$(window).off('scroll');
				$body.removeClass('color-fish-cursor');

				$('html, body').removeClass('hideBackgroundScrollsBar');

				ColorFish.colorFishEnable = false;
				ColorFish.reset();

			}catch (e) {
				console.log(e)
			}
		},

		onUserExtensionClose: function() {
			if (ColorFish.closePart === 1 ){
				$('.ocrext-ocr-sendocr').prop('disabled', true);
				ColorFish.closeColorPicking();
				ColorFish.closePart = 2;
			}else{
				ColorFish.closePart = 1;
				ColorFish.disable();
			}
		},

		disableColorPicking: function() {
			if (ColorFish.showMagnifier){
				$('#colorFishPickArea').addClass('color-fish-hide-element');
			}else{
				$('#colorFishSimpleCursor').addClass('color-fish-hide-element');
			}
			ColorFish.colorFishEnable = false;
		},

		enableColorPicking: function( x = 0, y = 0) {
			//ColorFish.activateTabMinimization();
			$('#copyFishTutorialText').addClass('color-fish-hide-element');
			if (!ColorFish.colorFishEnable && ColorFish.closePart === 2){
				ColorFish.closePart = 1;
				setTimeout(() => chrome.runtime.sendMessage({evt: "retakeScreenshot"}), 100);
			}

			$('.ocrext-ocr-sendocr').prop('disabled', false);

			if (ColorFish.showMagnifier){
				$('#colorFishPickArea').removeClass('color-fish-hide-element');
				$('body').addClass('color-fish-cursor');
			}else{
				$('#colorFishSimpleCursor').removeClass('color-fish-hide-element');
			}

			ColorFish.colorFishEnable = true;
			if(x !== 0 && y !== 0){
				const $img = ColorFish.selectByQuerySelector('.colorFishImage'),
					$canvas = ColorFish.selectByQuerySelector('#colorFishCs');

				ColorFish.useCanvas($canvas,$img,function(){

					let p = $canvas.getContext('2d')
						.getImageData(x, y, 1, 1).data;

					ColorFish.updateColorFishColor({ 0: p[0], 1: p[1], 2: p[2] } );

					ColorFish.saveColorInStorage({ 0: p[0], 1: p[1], 2: p[2] });

				});
			}


		},
		hideProgressCursor: function(){

			$('body').removeClass('colorFishToggleCursor');

		},

		magnify: function(imgID, zoom, zoomContainer) {

			var img, glass;
			img = document.getElementById(imgID);
			/*create magnifier glass:*/
			glass =  document.getElementById(zoomContainer);
			glass.setAttribute("class", "img-magnifier-glass");
			/*set background properties for the magnifier glass:*/
			glass.style.backgroundImage = "url('" + img.src + "')";
			glass.style.backgroundRepeat = "no-repeat";
			glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
			ColorFish.hideProgressCursor();

		},

		updateColorFishColor: function (colorData, activeColorChange = false,historyClick = false) {
			const $preview = ColorFish.selectByQuerySelector('#colorFishPickArea'),
				  $simpleCursor = document.getElementById('colorFishSimpleCursor');

			if (!ColorFish.colorFishEnable && !activeColorChange && !historyClick){
				return
			}

			const HEX = ColorFish.rgbToHex(colorData[0],colorData[1],colorData[2]);
			const RGB = `${colorData[0]}, ${colorData[1]}, ${colorData[2]}`;
			const HSL = ColorFish.rgbToHsl(colorData[0],colorData[1],colorData[2]);
			const colorName = ntc.name(HEX);

			//color for area around mouse
			if (ColorFish.showMagnifier && ColorFish.colorFishEnable){
				$preview.style.borderColor = ColorFish.rgbToHex(colorData[0],colorData[1],colorData[2]);
			}else if(ColorFish.colorFishEnable){
				$simpleCursor.style.backgroundColor = ColorFish.rgbToHex(colorData[0],colorData[1],colorData[2]);
			}

			//add values in extension tab input
			$('#color-fish-hex-value').val(HEX);
			$('#color-fish-rgb-value').val(RGB);
			$('#color-fish-hsl-value').val(HSL);
			//show color name in extension tab
			$('.color-fish-selected-color-name').css('color',HEX ).text(colorName[1]);
			//change header color
			$('.ocrext-wrapper-color-fish header.ocrext-header').css('background', HEX);

		},

		clearColorsHistory: function(e){
			e.preventDefault();
			if (confirm("Delete color history: Are you sure?")) {
				chrome.storage.local.set({pickedColorList: []}, function() {
					ColorFish.renderPickedColorsList([])
				});
			}
		},

		saveColorInStorage: function(colorData){

			const RGB = `${colorData[0]}, ${colorData[1]}, ${colorData[2]}`;

			chrome.storage.local.get(['pickedColorList'], function({pickedColorList}) {
				if (pickedColorList.length > 27) {
					pickedColorList = pickedColorList.slice(Math.max(pickedColorList.length - 28, 1))
				}

				let pickedColorsList = [ ...pickedColorList, RGB ];

				chrome.storage.local.set({pickedColorList: pickedColorsList}, function() {
					ColorFish.renderPickedColorsList(pickedColorsList)
				});

			});
		},

		onHistoryColorClick: function( {target} ) {
			const $this = $(target);
			//get data attr from DOM
			const dataColor = $this.data('color');
			//convert to rgb
			const p = dataColor.replace(/\s/g,'').split(',');
			//Change extension tab color
			ColorFish.updateColorFishColor({ 0: Number(p[0]), 1: Number(p[1]), 2: Number(p[2]) }, true, true);
			//copy color value to clipboard
			ColorFish.copyColorToClipboard(dataColor);
		},

		renderPickedColorsList: function(pickedColorsList = false){
			let $colorListContainer = $('.color-fish-history-container');
			if (!pickedColorsList){
				chrome.storage.local.get(['pickedColorList'], function({pickedColorList}) {

					if(pickedColorList.length > 0 ){
						ColorFish.cancelTabMinimization()
					}

					pickedColorList.map( (color, i) => {
						$colorListContainer.prepend(`
							<div data-id="${i}" data-color="${color}" class="color-fish-history-color-item" style="background-color: rgb(${color})"></div>
						`)
					});

					$('.color-fish-history-color-item').off('click').on('click', ColorFish.onHistoryColorClick)

				});

			}else{
				$colorListContainer.html(null);
				pickedColorsList.map( (color, i) => {
					$colorListContainer.prepend(`
							<div data-id="${i}" data-color="${color}" class="color-fish-history-color-item" style="background-color: rgb(${color})"></div>
						`)
				});

				$('.color-fish-history-color-item').off('click').on('click', ColorFish.onHistoryColorClick)
			}

		},

		cancelTabMinimization: function() {
			$('.ocrext-wrapper-color-fish').removeClass('ocrext-wrapper-color-fish-minimized');
			$('header.ocrext-header').removeClass('minimized');

		},


		onColorPick: function(e,$canvas,$img,$preview) {
			let x,y;

			if(e.offsetX) {
				x = e.offsetX;
				y = e.offsetY;
			}else if(e.layerX) {
				x = e.layerX;
				y = e.layerY;
			}

			if (!ColorFish.colorFishEnable){
				ColorFish.enableColorPicking(x || 0,y || 0);
				return
			}

			$('#copyFishTutorialText').removeClass('color-fish-hide-element');


			ColorFish.useCanvas($canvas,$img,function(){

				let p = $canvas.getContext('2d')
					.getImageData(x, y, 1, 1).data;

				ColorFish.updateColorFishColor({ 0: p[0], 1: p[1], 2: p[2] } );

				ColorFish.disableColorPicking();

				ColorFish.cancelTabMinimization();

				//$('body').removeClass('color-fish-cursor');
				ColorFish.saveColorInStorage({ 0: p[0], 1: p[1], 2: p[2] });

			});

		},

		activateTabMinimization: function(){
			$('.ocrext-wrapper-color-fish').addClass('ocrext-wrapper-color-fish-minimized');
			$('header.ocrext-header').addClass('minimized');
		},

		screenshotRecapture: function(btnClicked = false){

			$('body').addClass('colorFishToggleCursor');

			ColorFish.reset();

			if (/screencapture.html/gi.test(window.location.href) && btnClicked) {
				setTimeout(() => chrome.runtime.sendMessage({evt: "captureScreen"}), 100);
			}else{
				setTimeout(() => chrome.runtime.sendMessage({evt: "retakeScreenshot"}), 100);
			}

		},

		onImageMouseMove: function (e,$img,$canvas,$preview, x = 0, y = 0, glass, $simpleCursor, zoom = 5, bw = 3, w = 0, h = 0, calibration = 44 ) {

			if(e.offsetX) {
				x = e.offsetX;
				y = e.offsetY;
			}
			else if(e.layerX) {
				x = e.layerX;
				y = e.layerY;
			}

			ColorFish.useCanvas($canvas,$img,function(){

				let p = $canvas.getContext('2d')
					.getImageData(x, y, 1, 1).data;

				ColorFish.updateColorFishColor({ 0: p[0], 1: p[1], 2: p[2] } );

			});


			if(ColorFish.showMagnifier){
				/*prevent the magnifier glass from being positioned outside the image:*/
				if (x > $img.width - (w / zoom)) {x = $img.width - (w / zoom);}
				if (x < w / zoom) {x = w / zoom;}
				if (y > $img.height - (h / zoom)) {y = $img.height - (h / zoom);}
				if (y < h / zoom) {y = h / zoom;}
				/*set the position of the magnifier glass:*/
				glass.style.left = (x - w - 200) + "px";
				glass.style.top = (y - h) + "px";
				/*display what the magnifier glass "sees":*/
				glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw - calibration ) + "px -" + ((y * zoom) - h + bw - calibration ) + "px";
			}

		},

		useCanvas: function (el,image,callback){
			el.width = image.width;
			el.height = image.height;
			el.getContext('2d')
				.drawImage(image, 0, 0, image.width, image.height);
			return callback();
		},

		componentToHex: function (c) {
			let hex = c.toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		},

		rgbToHsl: function (r, g, b){
			r /= 255, g /= 255, b /= 255;
			var max = Math.max(r, g, b), min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2;

			if(max == min){
				h = s = 0; // achromatic
			}else{
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch(max){
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2; break;
					case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
			}

			return `${Math.round(360*h)}, ${ Math.round(s * 100) }%, ${ Math.round(l * 100)}%`;
		},

		rgbToHex: function (r, g, b) {
			return "#" + ColorFish.componentToHex(r) + ColorFish.componentToHex(g) + ColorFish.componentToHex(b);
		},

		selectByQuerySelector: function (selector) {

			return document.querySelector(selector);

		},

		colorPicker: function () {

			let $img = ColorFish.selectByQuerySelector('.colorFishImage'),
				$canvas = ColorFish.selectByQuerySelector('#colorFishCs'),
				$preview = ColorFish.selectByQuerySelector('#colorFishPickArea'),x = '',y = '',
				$glass =  document.getElementById('colorFishPickArea'),
				$simpleCursor = document.getElementById('colorFishSimpleCursor'),
				$tutorialText = document.getElementById('copyFishTutorialText');

			$img.addEventListener('click',(e) => ColorFish.onColorPick(e, $canvas, $img, $preview), false);

				window.addEventListener('mousemove', function(event) {

					$tutorialText.style.left = (event.pageX - 36) + 'px';
					$tutorialText.style.top = (event.pageY + 20) + 'px';

					if (!ColorFish.colorFishEnable){
						$('#copyFishTutorialText').removeClass('color-fish-hide-element');
					}

				if (ColorFish.showMagnifier){
					$preview.style.display = 'block';
					$preview.style.left = (event.pageX - 54) + 'px';
					$preview.style.top = (event.pageY - 54) + 'px';
				}else{
					$simpleCursor.style.display = 'block';
					$simpleCursor.style.left = (event.pageX + 9) + 'px';
					$simpleCursor.style.top = (event.pageY+ 16) + 'px';
				}

			});

			$img.addEventListener('mousemove', (e) => ColorFish.onImageMouseMove(e,$img,$canvas,$preview,x,y,$glass,$simpleCursor), false);


			ColorFish.magnify('colorFishImage', 5, 'colorFishPickArea');

			if (!ColorFish.colorFishEnable){
				ColorFish.disableColorPicking();
				if (ColorFish.closePart !== 1){
					$('body').removeClass('color-fish-cursor');
				}

			}
		},

		init: function () {

			// get config information
			let self = this;
			this._initializing = true;
			this._initialized = false;
			$ready = _bootStrapResources();

			// listen to runtime messages from other pages, mainly the background page
			chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
				if (sender.tab) {
					return true;
				}
				if (request.evt === 'isavailable') {
					if (self._initialized) {
						sendResponse({
							farewell: 'isavailable:OK'
						});
					} else {
						// if not yet initialized and body is still unavailable, reject
						if (!$('body').length) {
							sendResponse({
								farewell: 'isavailable:FAIL'
							});
						} else {
							$ready.done(function () {
								self._initialize();
								sendResponse({
									farewell: 'isavailable:OK'
								});
							});
						}
					}
					return true;
				}
				if (request.evt === 'enableCapturing') {
					$ready.done(function () {
						ColorFish.colorFishEnable = true;

						sendResponse({
							message: 'enableCapturing:OK'
						});
					});


				}else if(request.evt === "CloseColorPicker") {

					ColorFish.disable();

				}else if(request.evt === 'checkLoading'){

 					if (ColorFish.state !== 'disabled'){
						sendResponse({
							message: 'OK'
						});
 					}

				}else if(request.evt === 'checkScreenCaptureLoading'){
					alert(ColorFish.colorFishEnable)
				if (ColorFish.colorFishEnable) {

					sendResponse({
						message: 'OK'
					});
				}

				}else if(request.evt === "pageScreenshotData"){

					ColorFish.enable();

					$('body').addClass('color-fish-cursor');

					ColorFish.bindScrollEvent();

					ColorFish.appendImageToWebPage(request.data);

					ColorFish.colorPicker();

					ColorFish.getCursorProperty();

				}else if (request.evt === "disableselection")  {

					if (ColorFish.state === 'disabled') {
						return true;
					}

					$ready.done(function () {
						ColorFish.disable();
					});
				}
			});
			$(document).ready(function () {
				if (!self._initialized && !self._initializing) {
					$ready.done(function () {
						self._initialize();
					});
				}
			});
			return this;
		},

		getColorVariation: function(){
			const $colorSelect = $('#colorVariation');
			chrome.storage.local.get(['colorMainVariation'], function({colorMainVariation}) {
				$colorSelect.val(colorMainVariation);
			});

		},

		getCursorProperty: function() {
			const $cursorCheckbox = $('#turnOnMagnifier');
			chrome.storage.local.get(['magnifierStatus'], function({magnifierStatus}) {
				const status = Boolean(magnifierStatus);

				if (!status){
					ColorFish.showSimpleCursor();
				}

				$cursorCheckbox.attr('checked',status);
			});
		},

		showSimpleCursor: function() {

			ColorFish.showMagnifier = false;
			$('body').removeClass('color-fish-cursor');
			if (ColorFish.colorFishEnable){
				$('#colorFishSimpleCursor').removeClass('color-fish-hide-element');
			}
			$('#colorFishPickArea').addClass('color-fish-hide-element');

		},

		showMainCursor: function() {
			ColorFish.showMagnifier = true;

			if (ColorFish.colorFishEnable){
				$('body').addClass('color-fish-cursor');
				$('#colorFishPickArea').removeClass('color-fish-hide-element');
			}
			$('#colorFishSimpleCursor').addClass('color-fish-hide-element');
		},

		copyColorToClipboard: function (colorValue = null) {

			if(!colorValue){
				return
			}

			let colorData = colorValue.replace(/\s/g,'').split(',');
			chrome.storage.local.get(['colorMainVariation'], function({colorMainVariation = 'HEX'}) {

			if(!colorMainVariation){
				colorMainVariation = 'HEX';
			}

			let text;

			switch(colorMainVariation) {
				case 'HEX':
					text = ColorFish.rgbToHex(Number(colorData[0]),Number(colorData[1]),Number(colorData[2]));
					break;
				case 'RGB':
					text = `rgb(${colorData[0]}, ${colorData[1]}, ${colorData[2]})`;
					break;
				case 'HSL':
					text = `hsl(${ColorFish.rgbToHsl(Number(colorData[0]),Number(colorData[1]),Number(colorData[2]))})`;
					break;
			}

			chrome.runtime.sendMessage({
				evt: 'copy',
				text: text
			});

			})
		},

		_initialize: function () {
			// kind of like using a lock
			this._initializing = false;
			this._initialized = true;
			ISPOSITIONED = ['absolute', 'relative', 'fixed'].indexOf($('body').css('position')) >= 0;
			this.initWidgets();
			this.getColorVariation();
			this.bindEvents();
			ColorFish.slideUp();
			ColorFish.renderPickedColorsList();
		},
		initWidgets: function () {
			$('body').append(HTMLSTRCOPY);
			$('.ocrext-title span').text(appName);
			// upgrade buttons
			$('button.ocrext-btn').each(function (i, el) {
				componentHandler.upgradeElement(el);
			});
		},

		/*
		 * Bind listeners for interactive elements exposed to user
		 * click - redo ocr, recapture, close, copy-to-clipboard
		 */
		bindEvents: function () {
			let $body = $('body');
			let $clearTrash = $('.ocrext-trash-link');
			let self = this;

			$clearTrash.click(ColorFish.clearColorsHistory);

			$body
				.on('click', '.ocrext-closeToolbar-link', function (e) {
					e.preventDefault();
					ColorFish.disable()
				})
				.on('change', '#colorVariation', function (e) {
					e.preventDefault();

					chrome.storage.local.set({colorMainVariation: this.value});
				})
				.on('change', '#turnOnMagnifier', function (e) {
					e.preventDefault();

					if (!this.checked){
						ColorFish.showSimpleCursor();
					}else{
						ColorFish.showMainCursor();
					}

					chrome.storage.local.set({magnifierStatus: this.checked});
				})
				.on('click', '.ocrext-ocr-recapture', function (e) {
					e.preventDefault();
					ColorFish.enableColorPicking();
				})
				.on('click', '.ocrext-ocr-sendocr', function (e) {
					e.preventDefault();
					ColorFish.screenshotRecapture(true);
				})
				.on('click', '.ocrext-ocr-copy', function () {
					/*Copy button click handler*/
					const colorValue = $('#color-fish-rgb-value').val() || null;
					ColorFish.copyColorToClipboard(colorValue);

				})
				.on('click', 'header.ocrext-header', function () {
					/*click handler for header*/
					let $this = $(this);

					if ($this.hasClass('minimized')) {
						ColorFish.cancelTabMinimization();
					} else {
						ColorFish.activateTabMinimization();
					}

				})
				.on('click', 'a.ocrext-settings-link', function (e) {
					/*Settings  (gear icon) click handler*/
					e.stopPropagation();
					chrome.runtime.sendMessage({
						evt: 'open-settings'
					});
				});

			/*ESC handler. */
			$(document).on('keyup', function (e) {
				if (e.keyCode === 27) {
					ColorFish.onUserExtensionClose()
				}
			});
			return this;
		},

		/*
		 * Enable selection within the viewport. Render the HTML if it does not already exist
		 * Why render again? Some rogue pages might empty the entire HTML content for some reason
		 */
		bindScrollEvent: function() {
			$(window).scrollEnd(function(){
				ColorFish.screenshotRecapture();
			}, 300);
		},

		enable: function () {
			let $body = $('body');
			$('.ocrext-ocr-sendocr').prop('disabled', false);
			$('#colorFishPickArea').removeClass('color-fish-hide-element');

			if ($('#colorFishSimpleCursor').length === 0) {
				$body.removeClass('colorFishToggleCusor').prepend(`
					 <div class="colorFishThumbnail">
					   <div id="colorFishPickArea"></div>
					   <div id="colorFishSimpleCursor" class="color-fish-hide-element"></div>
					   <div id="copyFishTutorialText" class="color-fish-hide-element">
					   		Click to select <br>
					   		another color,<br>
					   		ESC to cancel
						</div>
					 </div>
					 <canvas id="colorFishCs"></canvas>
					`)
			}

			$body.addClass('colorFishPicker')
					.find('.ocrext-wrapper-color-fish')
				  	.show();
				  	$('html, body').addClass('hideBackgroundScrollsBar');

			$body.addClass('colorFishPicker');

			ColorFish.state = 'enabled';
			return this;
		},

		/*
		 * Hide the widget. Does not destroy/recreate, the widget size isn't big enough
		 * to adversely impact page weight
		 */
		disable: function () {
			let $body = $('body');
			try {
				$(window).off('scroll');
				$body.removeClass('ocrext-overlay ocrext-ch colorFishPicker color-fish-cursor')
					.find('.ocrext-wrapper-color-fish')
					.hide();

				$('html, body').removeClass('hideBackgroundScrollsBar');

				ColorFish.state = 'disabled';
				ColorFish.reset();

				chrome.runtime.sendMessage({evt: "enableIcon"})

			}catch (e) {
				console.log(e)
			}

			return this;
		},

		// reset anything that requires resetting
		reset: function () {

			//unbind handlers
			$('.colorFishThumbnail,#colorFishCs').remove();
			window.removeEventListener('mousemove',ColorFish.onImageMouseMove);


			return this;
		},

	appendImageToWebPage: function (imageUrl) {
			$('.colorFishThumbnail').prepend(`
				<img class="colorFishImage" id="colorFishImage" style="top: ${document.documentElement.scrollTop}px" alt="colorFishMainImage" src="${imageUrl}" />
			`);

		},

		slideDown: function () {
			let $dialog = $('.ocrext-wrapper-color-fish');
			$dialog.css({
				bottom: -$dialog.height()
			});
		},

		slideUp: function () {
			$('.ocrext-wrapper-color-fish').css({
			  'bottom': WIDGETBOTTOM,
			  'z-index': MAX_ZINDEX,
			  'display': 'block',
			  'opacity': '1'
		  	});
		},

		setOverlayInformation: function (overlay, imgDataURI) {
			this._overlay = overlay;
			// this._imgDataURI = imgDataURI;
		},


	};

	getOptions().done(function () {

		$(document.body).on("keydown", function (e) {
			if (e.ctrlKey && e.shiftKey) {

				if (e.keyCode === OPTIONS.openGrabbingScreenHotkey) {
				//recapture hotkey
					ColorFish.enableColorPicking();
					e.stopPropagation();
					e.preventDefault();
					return false;
				} else if (e.keyCode === OPTIONS.closePanelHotkey) {
					ColorFish.disable();
					e.stopPropagation();
					e.preventDefault();
					return false;
				} else if (e.keyCode === OPTIONS.copyTextHotkey) {
					const colorValue = $('#color-fish-rgb-value').val() || null;
					ColorFish.copyColorToClipboard(colorValue);
					e.stopPropagation();
					e.preventDefault();
					return false;
				}
			}
		});
	});

	ColorFish.init();
}(jQuery));
