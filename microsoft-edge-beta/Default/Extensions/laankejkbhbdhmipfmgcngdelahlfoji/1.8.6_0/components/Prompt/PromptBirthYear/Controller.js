define(["core/CoreAPI","core/vendor/DropletJS.PubSub.min","components/Prompt/PromptBirthYear/View","core/Time"],function(API,PubSub,View,Time){return class{view=null;PROMPT_AT_TIME_OF_DAY=14*Time.HOUR;DEFAULT_INTERVAL=2*Time.DAY;constructor(){this.view=new View}async initAsync(){return new Promise(async resolve=>(await API.Settings.initAsync(),await this.canShowPrompt()?(this.mountView(),resolve(!0)):resolve(!1)))}mountView(){API.Analytics.event("PROMPT_BIRTHYEAR_SHOW"),this.view.init(),this.addListeners()}addListeners(){PubSub.listen("PromptBirthYear.submit",async(_,{year})=>{await API.Settings.setAsync({age:year}),API.Analytics.event("PROMPT_BIRTHYEAR_SUBMITED")}),PubSub.listen("PromptBirthYear.close",async _=>{API.Analytics.event("PROMPT_BIRTHYEAR_DISMISSED"),this.reschedulePrompt()})}async canShowPrompt(){var promptAt;return null==API.Settings.get("age")&&(null==(promptAt=API.Settings.get("promptBirthYearAt"))?(await this.reschedulePrompt(),!1):new Date(promptAt)<=new Date)}async reschedulePrompt(){let interval=API.Settings.get("promptBirthYearInterval");null==interval?interval=this.DEFAULT_INTERVAL:interval*=2;var nextPromptAt=Time.getToday()+interval+this.PROMPT_AT_TIME_OF_DAY;await API.Settings.setAsync({promptBirthYearAt:nextPromptAt}),await API.Settings.setAsync({promptBirthYearInterval:interval})}}});