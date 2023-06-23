define(["core/Logger","core/CoreAPI","core/Message","core/vendor/DropletJS.PubSub.min","components/Popup/PopupView","components/Popup/PopupModel","components/Prompt/BasePrompt","core/Prompt"],function(Logger,API,Message,PubSub,View,Model,BasePrompt,Prompt){return class{view=null;model=null;constructor(){this.model=new Model,this.view=new View(this.model)}init(){var disableUpdatePopup;this.addListeners(),this.model.init(),this.view.init(),"true"===API.Storage.getHTML5("isUpdated")&&("true"!==(disableUpdatePopup=API.Storage.getHTML5("disableUpdatePopup"))&&!0!==disableUpdatePopup&&API.Chrome.Tab.create({url:API.Chrome.Extension.getURL("update.html")}),API.Storage.remove("isUpdated")),API.Icon.hideBadge(),(new BasePrompt).init()}addListeners(){var self=this;PubSub.listen("PopupView.button.clicked",function(message,payload){switch(payload.button){case"help":case"options":self.openPage(payload.button);break;case"nuclearOption":case"blockedSites":self.openPage("options",payload.button);break;case"close":window.close();break;case"addToList":self.addToList(payload.domain,payload.listType)}})}openPage(page,hash){page=API.Chrome.Extension.getURL(page+".html")+(hash?"#"+hash:"");API.Chrome.Tab.create({url:page})}addToList(domain,listType){var port;""!==domain&&((port=chrome.runtime.connect({name:"popup"})).postMessage({message:"PopupController.domain.add."+("black"===listType?"BLACKLIST":"WHITELIST"),payload:{domain:domain}}),port.onMessage.addListener(function(obj){return new Message(obj.message).matches("*.domain.added.*")&&PubSub.publish("PopupController.domain.added",{success:obj.payload.success}),!0}))}}});