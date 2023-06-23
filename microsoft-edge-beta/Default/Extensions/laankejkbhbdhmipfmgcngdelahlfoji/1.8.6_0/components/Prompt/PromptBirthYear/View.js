define(["core/CoreAPI","core/vendor/Brightline.min","core/vendor/DropletJS.PubSub.min","core/vendor/text!components/Prompt/PromptBirthYear/template.html"],(API,Brightline,PubSub,promptBirthYearTpl)=>{return class{constructor(){}init(){var html=new Brightline(promptBirthYearTpl).render();this.isOptionsPage()?(document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",html),document.getElementById("promptingBirthYear").classList.add("fixed-bottom-block")):(document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",html),document.getElementById("promptingBirthYear").classList.add("fixed-bottom-block-popup")),API.StayFocusd.localizeHTML(document),this.bindUIHandlers()}isExtensionPage(){return location.hostname===API.Chrome.Extension.getID()}isOptionsPage(){return this.isExtensionPage()&&"/options.html"===location.pathname}closePrompting(){document.getElementById("promptingBirthYear").classList.add("hidden")}bindUIHandlers(){document.getElementById("birthYear").addEventListener("input",e=>{document.getElementById("promptWarningMessage").classList.add("hidden"),4<e.target.value.length&&(e.target.value=e.target.value.slice(0,-1))}),document.getElementById("btnSubmitBirthYear").addEventListener("click",()=>{var age=document.getElementById("birthYear").value;this.validateBirthYear(age)&&(PubSub.publish("PromptBirthYear.submit",{year:age}),this.closePrompting())}),document.getElementById("closePrompting").addEventListener("click",()=>{this.closePrompting(),PubSub.publish("PromptBirthYear.close")}),API.Analytics.bindHtmlEvents()}validateBirthYear(birthYear){var yearInt=Number(birthYear);return isNaN(yearInt)?(this.showWarningMessage(API.Chrome.Translation.get("birthYearErrorsNan")),!1):4!=birthYear.length?(this.showWarningMessage(API.Chrome.Translation.get("birthYearErrorsLength")),!1):this.isUnderCurrentYear(birthYear)?this.isUnder100(birthYear)?(document.getElementById("promptWarningMessage").classList.add("hidden"),!0):(this.showWarningMessage(API.Chrome.Translation.get("birthYearErrorsAgeMax")),!1):(this.showWarningMessage(API.Chrome.Translation.get("birthYearErrorsAgeMin")),!1)}isUnder100(birthYear){return(new Date).getFullYear()-birthYear<100}isUnderCurrentYear(birthYear){return birthYear<(new Date).getFullYear()}showWarningMessage(message){document.getElementById("promptWarningMessage").innerText=message,document.getElementById("promptWarningMessage").classList.remove("hidden")}}});