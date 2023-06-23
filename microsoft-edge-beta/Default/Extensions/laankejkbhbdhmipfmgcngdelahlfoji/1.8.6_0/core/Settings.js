define(["core/Logger","core/Storage"],function(Logger,Storage){var API;return{MAX_BACKUP_VERSIONS:5,keys:["activeDays","activeHours","activeHoursQueue","blacklist","challengeRequired","challengeText","countdownForOutgoingLinks","customStayFocusdMsg","disableActivityMonitor","disableSync","disableUpdatePopup","firstInstallDate","firstInstallAllowanceExpiration","hideAllowSiteLink","hideInfoBar","maxTimeAllowed","notificationSettings","nuclearOptionSettings","productivityBypass","resetTimeQueue","resetTimestamp","resetTime","whitelist","hasAcceptedToS","hasAcceptedPrivacyPolicy","explicitlyDeclinedPrivacyPolicy","is18OrOlder","age","isNewUser","promptBirthYearAt","promptBirthYearInterval","promptReview","promptReviewAt","promptReviewInterval","promptSurvey","promptSurveyAt","promptSurveyInterval"],cache:{},backupKeys:[],initialized:!1,initAPI:function(theAPI){(API=theAPI).mixin("Settings",{init:this.init.bind(this),initAsync:this.initAsync.bind(this),get:this.get.bind(this),set:this.set.bind(this),setAsync:this.setAsync.bind(this),refresh:this.refresh.bind(this),remove:this.remove.bind(this),restoreBackup:this.restoreBackup.bind(this)})},init:function(callback){var self;this.initialized?"function"==typeof callback&&callback():((self=this).initialized=!0,this.cache={},Storage.init(function(){self.initBackups(),self.refresh(callback)}))},initAsync(){return new Promise(res=>this.init(res))},refresh:function(callback){for(var initCount=0,numKeys=this.keys.length,self=this,i=0;i<numKeys;i++)!function(key){Storage.refresh(key,function(value){self.cache[key]=void 0!==value?value:null,++initCount===numKeys&&"function"==typeof callback&&callback()})}(this.keys[i])},get:function(key){if(this.inCache(key))return this.cache[key];throw new Error("[Settings.get()] "+key+" is not registered as a key in Settings.js")},set:function(items,callback,bucket,allowUnregisteredSettings){for(var key in this.saveBackup(),items)if(items.hasOwnProperty(key)){if(!this.inCache(key)&&!allowUnregisteredSettings)throw new Error("[Settings.get()] "+key+" is not registered as a key in Settings.js");this.cache[key]=items[key]}Storage.set(items,function(){"function"==typeof callback&&callback()},bucket)},setAsync(items,bucket,allowUnregisteredSettings){return new Promise(res=>this.set(items,res,bucket,allowUnregisteredSettings))},remove:function(key){this.inCache(key)&&(this.cache[key]=null),Storage.remove(key)},initBackups:function(){var self=this;Storage.get("backupKeys",function(backupKeys){self.backupKeys="string"==typeof backupKeys?JSON.parse(backupKeys):[],self.deleteOrphanedBackups(self.backupKeys)})},saveBackup:function(){var key="backup-"+(new Date).getTime(),obj=(this.backupKeys.length>=this.MAX_BACKUP_VERSIONS&&this.pruneBackups(),this.backupKeys.unshift(key),{});obj[key]=JSON.stringify(this.cache),obj.backupKeys=JSON.stringify(this.backupKeys),Storage.setBucket(key,"HTML5"),Storage.set(obj,function(){})},restoreBackup:function(version){var self=this;if(!(version=version||this.backupKeys.shift()))return console.error("No backup available to restore"),!1;Storage.get(version,function(backupString){if("string"==typeof backupString)try{var backup=JSON.parse(backupString);Storage.set(backup,function(){Storage.remove(version),Storage.set({backupKeys:JSON.stringify(self.backupKeys)},function(){API.Chrome.Extension.reload()})})}catch(e){self.restoreBackup()}else self.restoreBackup()})},pruneBackups:function(){var oldKey;this.isArray(this.backupKeys)&&(oldKey=this.backupKeys.pop(),Storage.remove(oldKey))},deleteOrphanedBackups:function(backupKeys){for(var validBackupKeys={},i=0;i<backupKeys.length;i++)validBackupKeys[backupKeys[i]]=1;Storage.getAll("HTML5",function(items){for(var key in items)!items.hasOwnProperty(key)||0!==key.indexOf("backup-")||key in validBackupKeys||!function(key){Storage.remove(key,function(){},"HTML5")}(key)}),Storage.get("storageMap",function(data){var item,hasChanged=!1;for(item in data)!data.hasOwnProperty(item)||0!==item.indexOf("backup-")||item in validBackupKeys||(delete data[item],hasChanged=!0);hasChanged&&Storage.saveMap(data)})},inCache:function(key){return void 0!==this.cache[key]},isArray:function(obj){return"object"==typeof obj&&null!==obj&&"number"==typeof obj.length}}});