define(["core/Logger","core/CoreAPI"],function(Logger,API){return class{key="";value=null;expiration=null;timer=null;done=!1;interval=60;constructor(key){this.key=this.stripDelayedWritePrefix(key)}add(value,delayNum,delayUnit){delayNum=API.Date.timeUnitToMilliseconds(delayNum,delayUnit),delayUnit=(new Date).getTime();this.expiration=delayUnit+delayNum,this.value=value,this.save()}save(){var obj={};obj[this.getDelayedWriteKey()]=JSON.stringify(this),API.Storage.set(obj)}load(){var key=this.getDelayedWriteKey(),key=API.Storage.get(key),key=JSON.parse(key);this.revive(key)}check(){!this.done&&this.isExpired()&&this.write()}write(){var obj={};obj[this.key]=JSON.stringify(this.value),API.Storage.set(obj),API.Storage.remove(this.getDelayedWriteKey()),this.done=!0}isExpired(){var nowTime=(new Date).getTime();return null!==this.expiration&&nowTime>this.expiration}getDelayedWriteKey(){return this.getDelayedWriteKeyPrefix()+this.key}getDelayedWriteKeyPrefix(){return"dw_"}stripDelayedWritePrefix(key){return 0===key.indexOf(this.getDelayedWriteKeyPrefix())?key.substr(this.getDelayedWriteKeyPrefix().length):key}toJSON(){return{key:this.key,value:this.value,expiration:this.expiration,done:this.done}}}});