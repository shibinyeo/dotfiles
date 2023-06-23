'use strict';
var TAB_AVAILABILITY_TIMEOUT = 150;
$.ajaxSetup({ cache: false });
let activeOnTab = {};
let isUpdated = false;
const screenshotDelay  = 3000;

if (typeof browser !== "undefined"){
	chrome = browser || chrome;
}

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

class ColorFish {

	capture() {
		try {

			chrome.tabs.captureVisibleTab(null, {
				format: 'png'
			}, this.handleCapture)

			// fallback for chrome before 5.0.372.0
		} catch (e) {
			chrome.tabs.captureVisibleTab(null, this.handleCapture)
		}

	}

	//if browser action on click is desktop capture set green icon
	changeIcon = (tabId,url) => {
		if (url && (/^chrome\-extension:\/\//.test(url) || /^chrome:\/\//.test(url) ||  /^about:/g.test(url)  || /^https:\/\/chrome\.google\.com\/webstore\//.test(url))) {
			if (/screencapture.html/gi.test(url)) {
				//console.log('screen selection activate')
			}else {
				chrome.browserAction.setIcon({
					'path': {
						'16': 'images/icon-16_desktop.png',
						'32': 'images/icon-32_desktop.png',
						'64': 'images/icon-64_desktop.png'
					},
					tabId
				});
			}

		}
	};

	handleCapture(capturedImage) {
		console.log(capturedImage)
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

			disableIcon(tabs[0].id,tabs[0].url);
			chrome.tabs.sendMessage(tabs[0].id, {evt: "pageScreenshotData" , data: capturedImage});

		});
	};

	handleReceiveImageFromXmodule( result ) {
		imageURI = btoa(atob(imageURI) + atob(result.buffer))
		if (result.rangeEnd >= totalSize || result.rangeEnd <= result.rangeStart){
			result.buffer = imageURI;

			chrome.tabs.sendMessage(optionsTabId,{
				evt: 'desktopcaptureData',
				result: result
			});
		}else{

			params = {
				path: imagepath,
				rangeStart:  result.rangeEnd
			};

			invokeAsync("read_file_range", params);
		}

	}

	loadFiles(tabId) {
		let files = ["styles/material.min.css", "styles/cs.css", "scripts/jquery.min.js", "scripts/material.min.js","scripts/ntc.js", "scripts/cs.js"];
		let result = Promise.resolve();
		files.forEach(function (file) {
			result = result.then(function () {
				if (/css$/.test(file)) {
					return colorFish.insertCSS(tabId, file);
				} else {
					return colorFish.executeScript(tabId, file);
				}
			});
		});

		return result;
	};

	executeScript(tabId, file) {
		return new Promise(function (resolve, reject) {
			chrome.tabs.executeScript(tabId, {
				file: file
			}, function () {
				resolve();
			});
		});
	};

	insertCSS(tabId, file) {
		return new Promise(function (resolve, reject) {
			chrome.tabs.insertCSS(tabId, {
				file: file
			}, function () {
				resolve();
			});
		});
	};

	connectToXmodule() {

		errorConnect = false;
		port = chrome.runtime.connectNative("com.a9t9.kantu.cv");

		port.onMessage.addListener(function( {result} ) {

			if( typeof result === 'object'){
				console.log(result,"file_range");
				colorFish.handleReceiveImageFromXmodule(result);

			}else if( typeof result === 'number'){
				console.log(result,"file_size");
				totalSize = result;
				invokeAsync("read_file_range", params)

			}else if(isLetter(result) === null) {
				console.log(result, "version")
				chrome.runtime.sendMessage({evt: "x_module_version", version: result});

			}else {
				console.log(result,"screen capture");
				imagepath = result;
				imageURI="";
				params = {
					path:  result,
					rangeStart: 0
				};
				invokeAsync("get_file_size", params);

			}

		});

		port.onDisconnect.addListener(function() {
			errorConnect = true;
			console.log("Disconnected");
		});

	};

}

const colorFish = new ColorFish();
let nextInvocationId = 0;
let port = null;
let params;
let totalSize;
let optionsTabId;
let imageURI = '';
let imagepath;
let errorConnect = false;

function isLetter(str) {
	try{
		return str.match(/[a-z]/i);
	}catch (e) {
		return false
	}

}

const  invoke  = async (method , params) => {

	const id = nextInvocationId++;
	const requestObject = {
		id: id,
		method: method,
		params: params
	};


	return Promise.resolve(port.postMessage(requestObject));
};

const invokeAsync = async (method,params) => {

	return new Promise((resolve, reject) => {
		invoke(method, params, (result, error) => {
			console.log(error)
			if (error) {
				reject(error);
			} else {
				console.log(result)
				resolve(result);
			}
		});
	});
};

colorFish.connectToXmodule();

function updateIcons() {

	chrome.tabs.query({}, function (tabs) {
		for (var i = 0; i < tabs.length; i++) {
			var tab = tabs[i];

			enableIcon(tab.id);
			colorFish.changeIcon(tab.id, tab.url);
		}
	});
}

function disableIcon(tabId) {
	//activeOnTab[tabId] = false;
	chrome.browserAction.setTitle(
		{
			title: "close ColorPicker",
			tabId: tabId
		} // object
	);

	chrome.browserAction.setIcon({
		'path': {
			'16': 'images/icon-16_disabled.png',
			'32': 'images/icon-32_disabled.png',
			'64': 'images/icon-64_disabled.png'
		},
		tabId: tabId
	});

	// //remove color "blinking" on icon change
	// setTimeout(() => {
	// 	chrome.browserAction.disable(tabId);
	// },50);


}

function enableIcon(tabId) {
	activeOnTab[tabId] = true;
	chrome.browserAction.enable(tabId);

	chrome.browserAction.setTitle(
		{
			title: "run ColorPicker",
			tabId: tabId
		} // object
	);

	if (isUpdated) {
		chrome.browserAction.setBadgeText({text: 'new'});
	} else {


		chrome.browserAction.setBadgeText({text: ''});
		chrome.browserAction.setIcon({
			'path': {
				'19': 'images/icon-16.png',
				'38': 'images/icon-32.png'
			},
			tabId: tabId
		});
	}
}


function captureScreen() {
//	colorFish.capture();

	if (errorConnect === false) {
		console.log(port)
		chrome.notifications.create({
			type: 'basic',
			iconUrl: 'images/icon-64.png',
			title: "Desktop capture",
			message: `About to take desktop screenshot in 3 seconds`
		});

		setTimeout(() => {

			invokeAsync("capture_desktop", undefined);
			chrome.tabs.create({
				url: chrome.extension.getURL('/screencapture.html')
			}, function (destTab) {
				optionsTabId = destTab.id;
			});

		},screenshotDelay)
	}else{

		chrome.notifications.create({
			type: 'basic',
			iconUrl: 'images/icon-64.png',
			title: "Desktop capture",
			message: `Please install the Copyfish Desktop Screenshot module first`
		});

		openXmoduleInstallOption();

	}

}

function openXmoduleInstallOption() {

	setTimeout(function () {

		if (isChrome){
			chrome.runtime.openOptionsPage(function (){

				setTimeout(function () {
					chrome.runtime.sendMessage({message: "showXmoduleOption"});
				},300)
			})
		}else{
			let createData = {
				type: "normal",
				url: "/options.html"
			};
			browser.windows.create(createData).then(() =>{
				setTimeout(function () {
					chrome.runtime.sendMessage({message: "showXmoduleOption"});
				},300)
			});
		}


	},500)
}

// supports autotimeout
function isTabAvailable(tabId) {
	function _checkAvailability() {
		var _tabId = tabId;
		var $dfd = $.Deferred();
		chrome.tabs.sendMessage(_tabId, {
			evt: 'isavailable'
		}, function (resp) {
			if ($dfd.state() !== 'rejected') {
				if (resp && resp.farewell === 'isavailable:OK') {
					$dfd.resolve();
				} else if (resp && resp.farewell === 'isavailable:FAIL') {
					$dfd.reject();
				}
			}
		});

		setTimeout(function () {
			if ($dfd.state() !== 'resolved') {
				$dfd.reject();
			}
		}, TAB_AVAILABILITY_TIMEOUT);

		return $dfd;
	}

	return _checkAvailability();
}

// ensure the config is available before doing anything else
$.getJSON(chrome.extension.getURL('config/config.json'))
	.done(function (appConfig) {

		chrome.contextMenus.create({
			contexts: ['browser_action'],
			title: 'Desktop Color Picker',
			id: 'capture-desktop',
			onclick: captureScreen
		});

		chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
			enableIcon(tabId);
		});

		chrome.storage.local.get(['pickedColorList'], function ({ pickedColorList }) {
			if (!pickedColorList) {
				// first run of the extension, set everything
				chrome.storage.local.set(appConfig.defaults);

			}
		});


		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
			chrome.tabs.get(tab.id, function(tab){
				colorFish.changeIcon(tab.id, tab.url)
			});
		});

		chrome.tabs.onActivated.addListener(function(activeInfo) {
			// how to fetch tab url using activeInfo.tabid
			chrome.tabs.get(activeInfo.tabId, function(tab){
				colorFish.changeIcon(activeInfo.tabId,tab.url)
			});
		});

		chrome.browserAction.onClicked.addListener(
			function(tab) {

				const url = tab.url || !1;

				if (/screencapture.html/gi.test(url)) {


					chrome.browserAction.getTitle({ tabId: tab.id },function (title) {
						if (title !== 'close ColorPicker'){
							activate(tab);
						}else{
							chrome.tabs.sendMessage(tab.id, {evt: "CloseColorPicker"});
						}
					});

					return
				 }

				chrome.tabs.sendMessage(tab.id, {evt: "checkLoading"}, function(response) {
						var lastError = chrome.runtime.lastError;
						if (lastError) {
							if (url && (/^chrome\-extension:\/\//.test(url) || /^chrome:\/\//.test(url) ||  /^about:/g.test(url) || /^https:\/\/chrome\.google\.com\/webstore\//.test(url))) {
									captureScreen();
							}else {
								activate(tab);
							}
							return
						}

						chrome.tabs.sendMessage(tab.id, {evt: "CloseColorPicker"});

					});
			}
		);

		function activate(tab) {
			chrome.tabs.sendMessage(tab.id, {
				evt: 'disableselection'
			});

			if (isUpdated) {
				chrome.tabs.create({
					url: "https://ui.vision/colorfish/whatsnew?b=chrome"
				});

				isUpdated = false;
				updateIcons();
				return;
			}


			isTabAvailable(tab.id)
				.done(function () {
					console.log('activate for this tab')
					chrome.tabs.sendMessage(tab.id, {
						evt: 'enableCapturing'
					},function ({message}) {

						if (message.includes('OK')){
							colorFish.capture();
						}

					});
				})
				.fail(function () {
					colorFish.loadFiles(tab.id)
						.then(function () {
							console.log('stated loading',132123)
							isTabAvailable(tab.id)
								.done(function () {
									chrome.tabs.sendMessage(tab.id, {
										evt: 'enableCapturing'
									},function ({message}) {

										if (message.includes('OK')){
											colorFish.capture();
										}

									});
								})
								.fail(function () {
									let wantScreenCapture = confirm('Unable to capture screen, please try again when is loaded.\n Do you want to capture the desktop instead?');

									if (wantScreenCapture === true){
										captureScreen();
									}
									enableIcon(tab.id);
								});
						})
						.catch(() => {
							let wantScreenCapture = confirm("Screen capture");

							if (wantScreenCapture === true){
								captureScreen();
							}
							enableIcon(tab.id);
						});
				});
		}

		chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
			var tab = sender.tab;
			var copyDiv;
			var overlayInfo;
			var imgDataURI;
			if (!tab) {
				return false;
			}

			if(request.evt === 'getVersion' ){

				colorFish.connectToXmodule();

				setTimeout(() => {
					if(errorConnect === true && request.check === true) {
						chrome.runtime.sendMessage({evt: "not_installed"});
						return
					}
					invokeAsync("get_version", undefined);

				},1000)


			}
			if (request.evt === 'ready') {
				enableIcon(tab.id);
				sendResponse({
					farewell: 'ready:OK'
				});
				return true;
			}else if(request.evt === 'captureScreen'){
				captureScreen();
			}else if(request.evt === "retakeScreenshot"){

				colorFish.capture();

			}else if(request.evt === "enableIcon"){
				enableIcon(sender.tab.id);
			} else if (request.evt === 'activate') {
				activate(tab);
			} else if (request.evt === 'capture-screen') {
				chrome.tabs.captureVisibleTab(function (dataURL) {
					chrome.tabs.getZoom(tab.id, function (zf) {
						sendResponse({
							dataURL: dataURL,
							zf: zf
						});
					});
				});
				return true;
			} else if (request.evt === 'capture-done') {
				enableIcon(tab.id);
				sendResponse({
					farewell: 'capture-done:OK'
				});
			} else if (request.evt === 'copy') {
				if (isChrome){
					copyDiv = document.createElement('div');
					copyDiv.contentEditable = true;
					document.body.appendChild(copyDiv);
					copyDiv.textContent = request.text;
					copyDiv.unselectable = 'off';
					copyDiv.focus();
					document.execCommand('SelectAll');
					document.execCommand('Copy', false, null);
					document.body.removeChild(copyDiv);
				}else{
					navigator.clipboard.writeText(request.text).then(function() {
						/* clipboard successfully set */
					}, function() {
						/* clipboard write failed */
					});
				}

				sendResponse({
					farewell: 'copy:OK'
				});
			} else if (request.evt === 'open-settings') {
				chrome.tabs.create({
					'url': chrome.extension.getURL('options.html')
				});
				sendResponse({
					farewell: 'open-settings:OK'
				});
			} else if (request.evt === 'get-best-server') {
				OcrDS.getBest().done(function (server) {
					sendResponse({
						server: server
					});
				});
				return true;
			} else if (request.evt === 'set-server-responsetime') {
				OcrDS.set(request.serverId, request.serverResponseTime).done(function () {
					sendResponse({
						farewell: 'set-server-responsetime:OK'
					});
				});
				return true;
			}
		});
	});
//


//TODO активировать эту часть кода перед продакщеном


chrome.runtime.onInstalled.addListener(function (object) {
	if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
		//Open page after installation
		chrome.tabs.create({
			url: "https://ui.vision/colorFish/welcome?b=chrome"
		});

		updateIcons();
	} else if (object.reason === chrome.runtime.OnInstalledReason.UPDATE) {
		// Update icon for all tabs
		isUpdated = true;
		updateIcons();
	}
});


//detect file access status
chrome.extension.isAllowedFileSchemeAccess((status) => {
		chrome.storage.local.set({fileAccessStatus: status});
});

// Open page after uninstall
chrome.runtime.setUninstallURL("https://ui.vision/colorfish/why?b=chrome");
