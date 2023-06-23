define(["core/Logger","core/CoreAPI"],function(Logger,API){return class{view=null;model=null;init(){this.model.init(),this.model.load(),this.view.init(),this.addListeners()}addListeners(){var self=this;API.PubSub.listen({message:"*.domain.add."+this.model.descriptor,async:!0,handler(message,payload,callback){payload=self.model.add(payload.domain);"function"==typeof callback&&callback(payload)}}),API.PubSub.listen({message:"*.domain.remove."+this.model.descriptor,async:!0,handler(message,payload,callback){return API.NuclearOption.isActive()&&"blocked"===API.NuclearOption.getBlockType()?(alert(API.Chrome.Translation.get("cannotRemoveBlockedSiteDuringNuclearOption")),!1):self.model.has(payload.domain)&&API.StayFocusd.isMaxTimeAllowedExceeded()&&!self.model.canRemoveSiteWhenMaxTimeAllowedExceeded()?(alert(API.Chrome.Translation.get("cannotRemoveSiteOnceTimeIsUp")),!1):(payload=self.model.remove(payload.domain),void("function"==typeof callback&&callback(payload)))}}),API.PubSub.listen("*.domains.add."+this.model.descriptor,function(){self.addDomains()})}addDomains(){var newDomains=this.view.getNewDomains();0<newDomains.length&&this.model.addMany(newDomains)}}});