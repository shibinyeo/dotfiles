define(["core/Logger","core/vendor/jquery.min","core/vendor/Brightline.min","core/CoreAPI","core/vendor/text!components/ActivityMonitor/views/overlay/overlay.tpl"],function(Logger,$,Brightline,API,overlayTpl){return class{model=null;isOverlayActive=!1;isOverlayHTMLInjected=!1;render(){var template=new Brightline(overlayTpl);template.set("extensionURL",API.Chrome.Extension.getURL("/")),template.set("activityMonitorOverlayHeader",API.Chrome.Translation.get("activityMonitorOverlayHeader")),template.set("activityMonitorOverlayBody",API.Chrome.Translation.get("activityMonitorOverlayBody"));for(var i=1;i<=4;i++)template.set("activityMonitorOverlayLink"+i,API.Chrome.Translation.get("activityMonitorOverlayLink"+i));return template.render()}inject(onComplete){$("body").prepend(this.render()),this.isOverlayHTMLInjected=!0,this.bindUIHandlers(),"function"==typeof onComplete&&onComplete()}bindUIHandlers(){var self=this;$(document).on("click","#StayFocusd-unblock-link",function(){!0===self.isOverlayActive&&self.hide()}),$("body").keydown(function(){!0===self.isOverlayActive&&self.hide()})}show(){var self=this;if(!this.isOverlayHTMLInjected)return this.inject(function(){self.show()}),null;$("embed").addClass("StayFocusd-hidden"),$("object").addClass("StayFocusd-hidden"),$("applet").addClass("StayFocusd-hidden"),$("#StayFocusd-still-there").css("top",$(window).scrollTop()+"px"),$("#StayFocusd-still-there").removeClass("inactive").addClass("active"),this.isOverlayActive=!0,API.PubSub.publish("ActivityMonitor.overlay.shown")}hide(){this.isOverlayActive&&($("#StayFocusd-still-there").removeClass("active").addClass("inactive"),$("embed").removeClass("StayFocusd-hidden"),$("object").removeClass("StayFocusd-hidden"),$("applet").removeClass("StayFocusd-hidden"),this.isOverlayActive=!1,API.PubSub.publish("ActivityMonitor.overlay.hidden"))}bindActivityDetectors(){this.bindTimerReset("body");var self=this;$("iframe").each(function(){var iframeSrc=$(this).attr("src");void 0!==iframeSrc&&API.Domain.extractBaseDomain(iframeSrc)===API.Domain.extractBaseDomain(top.location.href)&&self.bindTimerReset($(this).contents().find("body"))})}bindTimerReset(element){element&&($(element).mousedown(function(){API.PubSub.publish("ActivityMonitor.activity.detected")}),$(element).mousemove(function(){API.PubSub.publish("ActivityMonitor.activity.detected")}),$(element).keypress(function(){API.PubSub.publish("ActivityMonitor.activity.detected")}))}setJQuery(jQuery){$=jQuery||$}}});