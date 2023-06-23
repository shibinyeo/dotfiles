define(["core/Logger","core/CoreAPI","core/vendor/jquery.min","core/vendor/Brightline.min","core/vendor/text!components/List/list.tpl"],function(Logger,API,$,Brightline,listTpl){return class{model=null;rendered=!1;init(){this.addListeners()}isRendered(){return!0===this.rendered}setJQuery(jQuery){$=jQuery||$}inject($container){($container=$container||$("body")).html(this.render()),this.bindUIHandlers()}render(tpl){tpl=new Brightline(tpl=tpl||"");return tpl.set("list",this.renderList()),this.rendered=!0,tpl.render()}renderList(imgClass){imgClass=imgClass||"";var template=new Brightline(listTpl),list=this.model.get();if(0===list.length)template.set("noSitesYet",API.Chrome.Translation.get("noSitesYet"));else for(var i=0;i<list.length;i++)template.set("id",this.getInstanceName()+"-"+i),template.set("imgClass",imgClass),template.set("removeFromList",API.Chrome.Translation.get("removeFromList")),template.set("domain",list[i]),template.parse("removeDomain");return template.render()}refreshList($listContainer,$listTextarea,imgClass){$listContainer.html(this.renderList(imgClass)),$listTextarea.val(""),this.bindListUIHandlers()}bindUIHandlers(){this.bindListUIHandlers()}bindListUIHandlers(){for(var list=this.model.get(),self=this,i=0;i<list.length;i++)!function(domain,id){$("#"+id+" img").click(function(){API.PubSub.publish(self.getClassName()+".domain.remove."+self.model.descriptor,{domain:domain})})}(list[i],this.getInstanceName()+"-"+i)}addListeners(){var self=this;API.PubSub.listen(["*.list.loaded."+this.model.descriptor,"*.list.saved."+this.model.descriptor],function(){self.isRendered()&&self.refreshList()})}getNewDomains(newDomains){var finalList=[];if(""!==(newDomains=newDomains||""))for(var newDomainsArray=newDomains.split("\n"),i=0;i<newDomainsArray.length;i++){var domain=newDomainsArray[i];0<domain.length&&finalList.push(domain)}return finalList}}});