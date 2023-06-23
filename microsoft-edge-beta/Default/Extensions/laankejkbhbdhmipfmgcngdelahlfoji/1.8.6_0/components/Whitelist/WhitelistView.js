define(["core/Logger","core/CoreAPI","core/vendor/jquery.min","core/vendor/Brightline.min","core/vendor/text!components/Whitelist/whitelist.tpl","components/List/ListView"],function(Logger,API,$,Brightline,allowedSitesTpl,ListView){return class extends ListView{setJQuery(jQuery){$=jQuery||$,super.setJQuery(jQuery)}refreshList(){super.refreshList($("#allowedSitesList"),$("#newAllowedSites"))}render(){return super.render(allowedSitesTpl)}bindUIHandlers(){super.bindUIHandlers(),this.bindWhitelistUIHandlers()}bindWhitelistUIHandlers(){var $newAllowedSites=$("#newAllowedSites"),$addAllowedSitesInput=$("input[name=addAllowedSites]"),self=this;API.NuclearOption.isActive()?($newAllowedSites.val(API.Chrome.Translation.get("cannotAddAllowedSitesDuringNuclearOption")),$newAllowedSites.prop("disabled",!0),$newAllowedSites.addClass("disabled"),$addAllowedSitesInput.prop("disabled",!0)):($newAllowedSites.val(""),$newAllowedSites.prop("disabled",!1),$newAllowedSites.removeClass("disabled"),$addAllowedSitesInput.prop("disabled",!1),$addAllowedSitesInput.click(function(){API.PubSub.publish(self.getClassName()+".domains.add.WHITELIST")}))}getNewDomains(){return super.getNewDomains($("#newAllowedSites").val())}}});