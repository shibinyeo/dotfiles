define(["core/Logger","core/vendor/jquery.min"],function(Logger,$){return{init:function(){this.addListeners()},addListeners:function(){var self=this;API.PubSub.listen({message:"*.outgoingLinks.bind",async:!0,handler:function(message,payload,callback){var response={success:self.bindOutgoingLinks()};"function"==typeof callback&&callback(response)}})},bindOutgoingLinks:function(){$("a[href]").each(function(){var href=$(this).attr("href");-1===href.indexOf("javascript:")&&"string"==typeof href&&1<href.length&&$(this).click(function(){API.PubSub.publish("ReferrerMonitor.outgoingLink.clicked",{outgoingLink:href})})})},isBlockable:function(url,outgoingLink){return null!=url&&0!==url.length&&!(null==outgoingLink||outgoingLink.length<2)&&-1<url.indexOf(outgoingLink)}}});