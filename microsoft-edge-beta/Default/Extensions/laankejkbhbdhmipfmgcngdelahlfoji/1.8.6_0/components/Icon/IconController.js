define(["core/Logger"],function(Logger){return class{view=null;model=null;init(){}initAPI(API){API.mixin("Icon",{hideBadge:this.view.hideBadge.bind(this.view),setIcon:this.view.setIcon.bind(this.view),showBadge:this.view.showBadge.bind(this.view)})}}});