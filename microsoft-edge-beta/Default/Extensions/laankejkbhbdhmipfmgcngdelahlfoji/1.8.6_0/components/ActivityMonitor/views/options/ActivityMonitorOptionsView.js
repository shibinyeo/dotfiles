define(["core/Logger","core/vendor/jquery.min","core/vendor/Brightline.min","core/CoreAPI","core/vendor/text!components/ActivityMonitor/views/options/options.tpl"],function(Logger,$,Brightline,API,optionsTpl){return class{model=null;setJQuery(jQuery){$=jQuery||$}render(model){var template=new Brightline(optionsTpl),template=(model.isDisabled()&&template.set("checked",'checked="checked"'),$(template.render()));return this.bindUIHandlers(model,template),template}bindUIHandlers(model,html){$("#disableActivityMonitor",html).click(function(){model.toggle()})}}});