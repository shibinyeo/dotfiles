define(["core/CoreAPI","core/vendor/DropletJS.PubSub.min","components/Prompt/PromptSurvey/View","core/Time"],function(API,PubSub,View,Time){return class{view=null;PROMPT_AT_TIME_OF_DAY=14*Time.HOUR;DEFAULT_INTERVAL=2*Time.DAY;constructor(){this.view=new View}async initAsync(){return new Promise(async resolve=>(await API.Settings.initAsync(),await this.canShowPrompt()?(this.mountView(),resolve(!0)):resolve(!1)))}mountView(){API.Analytics.event("PROMPT_SURVEY_SHOW"),this.view.init(),this.addListeners()}addListeners(){PubSub.listen("PromptSurvey.openSurvey",async _=>{API.Analytics.event("PROMPT_SURVEY_CTA_CLICKED"),await API.Settings.setAsync({promptSurvey:!0})}),PubSub.listen("PromptSurvey.close",_=>{API.Analytics.event("PROMPT_SURVEY_DISMISSED"),this.reschedulePrompt()})}async canShowPrompt(){var isPromptSurvey=API.Settings.get("promptSurvey");if(1!=isPromptSurvey)return null==(isPromptSurvey=API.Settings.get("promptSurveyAt"))?(await this.reschedulePrompt(),!1):new Date(isPromptSurvey)<=new Date}async reschedulePrompt(){let interval=API.Settings.get("promptSurveyInterval");null==interval?interval=this.DEFAULT_INTERVAL:interval*=2;var nextPromptAt=Time.getToday()+interval+this.PROMPT_AT_TIME_OF_DAY;await API.Settings.setAsync({promptSurveyAt:nextPromptAt}),await API.Settings.setAsync({promptSurveyInterval:interval})}}});