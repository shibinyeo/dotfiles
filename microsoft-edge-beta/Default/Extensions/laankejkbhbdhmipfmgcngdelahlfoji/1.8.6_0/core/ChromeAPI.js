define(function(){return{initAPI:function(API){API.mixin("Chrome",{Extension:{addListener:this.exists("runtime")?this.addRuntimeListener.bind(this):this.throwMisusedAPIException,connect:this.exists("runtime","connect")?chrome.runtime.connect.bind(chrome.runtime):this.throwMisusedAPIException,getID:this.exists("runtime")?function(){return chrome.runtime.id}:this.throwMisusedAPIException,getURL:this.exists("extension","getURL")?chrome.extension.getURL.bind(chrome.extension):this.throwMisusedAPIException,reload:this.exists("runtime","reload")?chrome.runtime.reload.bind(chrome.runtime):this.throwMisusedAPIException,getVersion:this.exists("runtime","getManifest")?this.getVersion.bind(this):this.throwMisusedAPIException,setUninstallURL:this.exists("runtime","setUninstallURL")?chrome.runtime.setUninstallURL.bind(chrome.runtime):this.throwMisusedAPIException},Message:{on:this.exists("runtime")?chrome.runtime.onMessage:this.throwMisusedAPIException,send:this.exists("runtime","sendMessage")?chrome.runtime.sendMessage.bind(chrome.runtime):this.throwMisusedAPIException,sendToTab:this.exists("tabs","sendMessage")?chrome.tabs.sendMessage.bind(chrome.tabs):this.throwMisusedAPIException},Notification:{create:this.exists("notifications","create")?chrome.notifications.create.bind(chrome.notifications):this.throwMisusedAPIException,clear:this.exists("notifications","clear")?chrome.notifications.clear.bind(chrome.notifications):this.throwMisusedAPIException},Storage:{addListener:this.exists("storage")?this.addStorageListener.bind(this):this.throwMisusedAPIException,getLocal:this.exists("storage")?chrome.storage.local.get.bind(chrome.storage.local):this.throwMisusedAPIException,getSync:this.exists("storage")?chrome.storage.sync.get.bind(chrome.storage.sync):this.throwMisusedAPIException,removeLocal:this.exists("storage")?chrome.storage.local.remove.bind(chrome.storage.local):this.throwMisusedAPIException,removeSync:this.exists("storage")?chrome.storage.sync.remove.bind(chrome.storage.sync):this.throwMisusedAPIException,setLocal:this.exists("storage")?chrome.storage.local.set.bind(chrome.storage.local):this.throwMisusedAPIException,setSync:this.exists("storage")?chrome.storage.sync.set.bind(chrome.storage.sync):this.throwMisusedAPIException},Tab:{addListener:this.exists("tabs")?this.addTabsListener.bind(this):this.throwMisusedAPIException,create:this.exists("tabs","create")?chrome.tabs.create.bind(chrome.tabs):this.throwMisusedAPIException,getAllInWindow:this.exists("tabs","query")?this.getAllTabsInWindow.bind(this):this.throwMisusedAPIException,getCurrent:this.exists("tabs","getCurrent")?chrome.tabs.getCurrent.bind(chrome.tabs):this.throwMisusedAPIException,getSelected:this.exists("tabs","query")?this.getSelectedTab.bind(this):this.throwMisusedAPIException,remove:this.exists("tabs","remove")?chrome.tabs.remove.bind(chrome.tabs):this.throwMisusedAPIException,update:this.exists("tabs","update")?chrome.tabs.update.bind(chrome.tabs):this.throwMisusedAPIException},Translation:{get:this.exists("i18n","getMessage")?chrome.i18n.getMessage.bind(chrome.i18n):this.throwMisusedAPIException},Window:{addListener:this.exists("windows")?this.addWindowsListener.bind(this):this.throwMisusedAPIException,getLastFocused:this.exists("windows","getLastFocused")?chrome.windows.getLastFocused.bind(chrome.windows):this.throwMisusedAPIException},Icon:{setBadgeColor:this.exists("browserAction","setBadgeBackgroundColor")?chrome.browserAction.setBadgeBackgroundColor.bind(chrome.browserAction):this.throwMisusedAPIException,setBadgeText:this.exists("browserAction","setBadgeText")?chrome.browserAction.setBadgeText.bind(chrome.browserAction):this.throwMisusedAPIException,setURL:this.exists("browserAction","setIcon")?chrome.browserAction.setIcon.bind(chrome.browserAction):this.throwMisusedAPIException},Alarms:{addListener:this.exists("alarms")?this.addAlarmsListener.bind(this):this.throwMisusedAPIException,ensure:this.exists("alarms")?this.ensureAlarm.bind(this):this.throwMisusedAPIException}})},getSelectedTab:function(windowID,callback){var query={active:!0};windowID?query.windowId=windowID:query.currentWindow=!0,chrome.tabs.query(query,function(tabs){tabs=0<tabs.length?tabs[0]:{};"function"==typeof callback&&callback(tabs)})},getAllTabsInWindow:function(windowID,callback){var query={};windowID?query.windowId=windowID:query.currentWindow=!0,chrome.tabs.query(query,function(tabs){"function"==typeof callback&&callback(tabs)})},getVersion(){return chrome.runtime.getManifest().version},async ensureAlarm(name,alarmInfo){return new Promise(res=>{chrome.alarms.get(name,alarm=>{alarm||chrome.alarms.create(name,alarmInfo),res()})})},addRuntimeListener:function(listenTo,listener){this.addListener("runtime",listenTo,listener)},addStorageListener:function(listenTo,listener){this.addListener("storage",listenTo,listener)},addTabsListener:function(listenTo,listener){this.addListener("tabs",listenTo,listener)},addWindowsListener:function(listenTo,listener){this.addListener("windows",listenTo,listener)},addAlarmsListener(listenTo,listener){this.addListener("alarms",listenTo,listener)},addListener:function(type,listenTo,listener){void 0!==chrome[type][listenTo]&&chrome[type][listenTo].addListener(listener)},exists:function(apiName,method){var exists=chrome&&"object"==typeof chrome[apiName];return exists=exists&&method?"function"==typeof chrome[apiName][method]:exists},throwMisusedAPIException:function(){throw new Error("Improper use of chrome API in content script!")}}});