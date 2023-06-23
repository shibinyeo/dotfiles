if (typeof browser !== "undefined") {
    chrome = browser || chrome;
}

$(function() {
  $.ajaxSetup({ cache: false });
  'use strict';
  $.getJSON(chrome.extension.getURL('config/config.json'))
    .done(function(appConfig) {
      var suppressSaves;
      var defaults = appConfig.defaults;
      var statusTimeout;


//free plan
			$('.show_status').each(function(index, el) {
					$(this).text(defaults.status);
			});



      var setChromeSyncStorage = function(obj) {
        chrome.storage.local.set(obj, function() {
          // Update status to let user know options were saved.
          $('.status-text').addClass('visible');
          clearTimeout(statusTimeout);
          statusTimeout = setTimeout(function() {
            $('.status-text').removeClass('visible');
          }, 5000);
        });
      };
         chrome.storage.local.get({
        openGrabbingScreenHotkey: defaults.openGrabbingScreenHotkey,
        closePanelHotkey: defaults.closePanelHotkey,
        copyTextHotkey: defaults.copyTextHotkey,
      }, function(items) {

        console.log('settings', items);

        // don't persist any triggered changes
        suppressSaves = true;
        // hotkey
        $('#openHotkey').val(items.openGrabbingScreenHotkey);
        $('#copyHotkey').val(items.copyTextHotkey);
        $('#closeHotkey').val(items.closePanelHotkey);
        suppressSaves = false;
      });

      $('body')
        .on('change', function(e) {
          var $target = $(e.target);
          if (suppressSaves) {
            return true;
          }

           if ($target.is("#openHotkey")) {
            setChromeSyncStorage({
              openGrabbingScreenHotkey: +$target.val()
            });
          } else if ($target.is("#copyHotkey")) {
            setChromeSyncStorage({
              copyTextHotkey: +$target.val()
            });
          }  else if ($target.is("#closeHotkey")) {
             setChromeSyncStorage({
               closePanelHotkey: +$target.val()
             });
          }
        })
        .on('submit', 'form[name=mc-embedded-subscribe-form]', function(e) {
          var $this = $(this);
          var url = $this.attr('action') + "&" + $this.serialize();
          window.open(url);
          e.preventDefault();
        });
    });

  // check file access status
  chrome.storage.local.get(['fileAccessStatus'], function(result) {
          const fileAccessStatus = result.fileAccessStatus;

          if (fileAccessStatus) {
            $('.file-access-status-done').css('display', 'block');
          }else if (!fileAccessStatus) {
              $('.file-access-status-error').css('display', 'block');
          }
  });
  //key checker
  $('.keyChecker_btn').click(function(event) {
    checkKey($('.keyChecker_input').val().toLowerCase());
  });

  let xmodule_version;
  //get xmodule version
  chrome.runtime.sendMessage({evt: "getVersion"});
  chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {

        if (request.evt === "x_module_version"){
          console.log(request.version)
          if (request.version)  {
            $('.status-box span').text(`Installed (${request.version})`).css({color: "#008000"});
            $('.status-box a').text('Check for update');

            if (xmodule_version){
              alert(`status updated: Installed (${request.version})`)
            }
          }

        }else if(request.evt === "not_installed"){

            alert(`status updated: not Installed`)

        }else if(request.message === 'showXmoduleOption'){
              let $target = $('#xmodule-item');
              $('html, body').stop().animate({
                'scrollTop': $target.offset().top - $(window).height()/3
              }, 500, 'swing', function () {
                // lets add a div in the background
                $target.css({border: '0 solid #ff0000'}).animate({
                  borderWidth: 3
                }, 1200,function() {
                  $target.animate({
                    borderWidth: 0
                  }, 600);
                });

              });
        }else if(request.message === 'reloadPage'){

          location.reload()
        }

    });

  $('#check-update-xmodule').click(() => {
    chrome.runtime.sendMessage({evt: "getVersion",check: true});
    xmodule_version = true;
  });


  //check plan button code

  $('#check-status-btn').click( function (e) {
    chrome.runtime.sendMessage({evt: "checkKey"});
  });

  //trim text in past in password field
  $(document).on('paste', '.keyChecker_input', function(e) {
    e.preventDefault();
    // prevent copying action
    const text  =  e.originalEvent.clipboardData.getData('Text')
    let withoutSpaces = text.trim();

    $(this).val(withoutSpaces);

  });
  //trim text in drop in password field
  $(document).on('drop', '.keyChecker_input', function(e) {
    e.preventDefault();
    // prevent copying action
    const text  =  e.originalEvent.dataTransfer.getData('Text')
    let withoutSpaces = text.trim();

    $(this).val(withoutSpaces);

  });

});
