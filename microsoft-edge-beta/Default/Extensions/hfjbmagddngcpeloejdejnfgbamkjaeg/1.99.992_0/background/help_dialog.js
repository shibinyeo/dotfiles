"use strict"
;__filename="background/help_dialog.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./i18n"],function(e,t,n,o,a,r,i){
var s,l,c,u,d,p,g,m,b,v;Object.defineProperty(t,"__esModule",{value:true}),t.eo=t.Pu=t.parseHTML=void 0,s=null,
c=new Map,t.parseHTML=function(e){var t,i=51===n.kn,s=e.indexOf("</style>")+8,c=e.slice(0,s),u=e.slice(s).trim()
;return i&&i&&(c=c.replace(/contain:\s?[\w\s]+/g,"contain: none !important")),u=u.replace(/\$(\w+)/g,function(e,t){var n
;return null!==(n=l.get(t))&&void 0!==n?n:t}),t=o.qu({homePage:n.Q.to,version:n.Q.no,release:r.Or("vimium://release"),
reviewPage:(n.Xn?"https://microsoftedge.microsoft.com/addons/detail/aibcglbfblnogfjhbcmmpobjhnomhcdo":"https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/$id/reviews").replace("$id",function(){
return a.t.runtime.id}),webStore:l.get(n.Xn?"edgestore":"webstore"),
browserHelp:n.Xn?"https://support.microsoft.com/help/4531783/microsoft-edge-keyboard-shortcuts":"https://support.google.com/chrome/answer/157179"
}),[c,u=u.replace(/\{\{(\w+)}}/g,function(e,n){return t[n]||e})]},u=function(e,a){var r,c,u,d,p;return l=n.oo[1],
s&&!n.oo[0]||(s=t.parseHTML(n.oo[0]),n.oo[0]=""),r=new Map,c=!e,a=e||!!a,n.Hu.forEach(function(e,o){var a,i,s
;/^<v-.\w*>/.test(o)||(a=e.ao,38===e.Nu&&e.ju&&(n.ro(e),a=e.ao),i=t.eo(a),(s=r.get(i))?s.push([o,e]):r.set(i,[[o,e]]))
}),u=e?" "+l.get("cmdList"):"",d=o.qu({title2:u&&(u.includes(" ",1)?u:u.trimLeft()),
name2:" - "+i.Fn("name").split(" - ")[1],tip:a&&l.get("tipClickToCopy")||"",
lbPad:a?'\n\t\t<tr><td class="HelpTd TdBottom">&#160;</td></tr>':""}),p=s[1].replace(/\{\{(\w+)}}/g,function(e,t){var n
;return null!==(n=d[t])&&void 0!==n?n:m(t,r,c,a)}),s[0]+p},t.Pu=u,d=function(e,t){return e.includes(t)},p=function(e,t){
return e.startsWith(t)},g=function(e,t){return e.endsWith(t)},t.eo=function(e){
return d(e,"Mode")&&d(e,".activate")&&(e=d(e,"ModeTo")?e.replace("ModeTo",""):e.replace("Mode","")),
g(e,"Unhover")?e=e.replace("Unhover","Leave"):g(e,"Goto")?e=e.replace("Goto",""):"clearContentSetting"===e?e="".concat(e,"s"):d(e,"CS")?e=p(e,"clear")?"clearContentSettings":e.replace("CS","ContentSetting"):d(e,"vateUrl")?e=e.replace("vateUrl","vateEditUrl"):g(e,"TabSelection")?e=e.replace("TabSelection","Tabs"):"quickNext"===e?e="nextTab":"newTab"===e?e="createTab":"closeSomeOtherTabs"===e?e="closeOtherTabs":"simBackspace"===e?e="simulateBackspace":"showHUD"===e||"showHud"===e?e="showTip":"wait"===e&&(e="blank"),
e},m=function(e,t,n,a){var r,i,s=l.get("cmdParams")||" (use *)",u="",d=v[e],p=function(e){
var i,p,g,m,v,T,k,$,w,f=d[e],h=t.get(f);if(n&&!h)return r=e,"continue";if((i=e<d.length-1&&1===d[e+1])&&e++,
g="$"===(p=e<d.length-1?d[e+1]:"a")[0]?(e++,
p.slice(1)):"",m=-2,v="",(T=c.get(f))||(T=[l.get(f).replace("<","&lt;").replace(">","&gt;"),g?s.replace("*",function(){
return g}):" "],c.set(f,T)),h&&h.length>0){for(v='\n\t\t<span class="HelpKey">',k=0;k<h.length;k++){
if(m>42&&k<h.length-1){v+="</span>\n\t<span>+ ".concat(h.length-k," \u2026");break}
m>=0&&(v+='</span> <span class="HelpKey">'),v+=o.At(($=h[k])[0]),m+=$[0].length+2}v+="</span>\n\t"}w=a?T[0]+T[1]:T[0],
m<=12?u+=b(i,v,w,a?f:""):(u+=b(i,v,"",""),u+=b(i,"",w,a?f:"")),r=e};for(i=0;i<d.length;i++)p(i),i=r;return u},
b=function(e,t,n,o){var a=e?'<tr class="HelpAdv">\n\t':"<tr>\n\t";return n?(a+='<td class="HelpTd HelpKeys">',a+=t,
a+='</td>\n\t<td class="HelpTd HelpCommandInfo">',a+=n,o&&(a+='<span class="HelpCommandName" role="button">(',a+=o,
a+=")</span>\n\t")):(a+='<td class="HelpTd HelpKeys HelpLongKeys" colspan="2">',a+=t),a+"</td>\n</tr>\n"},(v={
__proto__:null,
pageNavigation:["LinkHints.activate",'$button=""/right, touch=false/true/"auto"',"LinkHints.activateOpenInNewTab","LinkHints.activateOpenInNewForegroundTab","LinkHints.activateWithQueue","scrollDown","$keepHover=true|false|auto|never","scrollUp","$keepHover=true|false|auto|never","scrollLeft","scrollRight","scrollToTop","scrollToBottom","scrollToLeft",1,"scrollToRight",1,"scrollPageDown","scrollPageUp","scrollPxDown",1,"scrollPxUp",1,"scrollPxLeft",1,"scrollPxRight",1,"scrollFullPageDown","scrollFullPageUp","scrollSelect",1,'$dir=down|up, position=""|begin|end',"reload","$hard","reloadTab","reloadGivenTab",1,"$hard, bypassCache","zoom","$in, out, reset","zoomIn",1,"zoomOut",1,"zoomReset",1,"toggleViewSource",1,"copyCurrentUrl","$type=url/title/frame, decoded","copyCurrentTitle","switchFocus",'$flash, select=""/all/all-line/start/end',"focusInput",'$keep, select=""/all/all-line/start/end',"LinkHints.activateCopyLinkUrl","LinkHints.activateCopyLinkText","$join:boolean/string","openCopiedUrlInCurrentTab","openCopiedUrlInNewTab","goUp","$trailingSlash=null/true/false","goToRoot","LinkHints.activateCopyImage",1,"$richText=safe","LinkHints.activateDownloadImage",1,"LinkHints.activateOpenImage",1,"$auto=true","LinkHints.activateDownloadLink",1,"LinkHints.activateOpenIncognito",1,"LinkHints.activateOpenUrl",1,"LinkHints.activateFocus","LinkHints.activateHover",1,"$showUrl=true","LinkHints.activateLeave",1,"LinkHints.unhoverLast",1,"LinkHints.activateSearchLinkText","LinkHints.activateEdit","LinkHints.activateSelect","$visual=true, caret, then:{}","LinkHints.click","$direct=true|element|sel|focus|click|sel,focus,click","simulateBackspace","dispatchEvent",1,'$key="key,keyCode,code",init:{}',"goNext","$sed=true, patterns:string, rel:string, noRel, isNext","goPrevious","nextFrame","mainFrame","parentFrame","enterInsertMode","$key:string, unhover, reset","enterVisualMode","enterVisualLineMode","Marks.activateCreate","$swap","Marks.activate","$prefix=true, swap, mapKey","Marks.clearLocal",1,"Marks.clearGlobal",1,"openUrl","$url:string, urls:string[], reuse=newFg/current/newBg/reuse, incognito, window, position","focusOrLaunch",1,"$url:string, prefix"],
vomnibarCommands:["Vomnibar.activate",'$keyword="", url:boolean/string',"Vomnibar.activateInNewTab","$keyword, url","Vomnibar.activateBookmarks","Vomnibar.activateBookmarksInNewTab","Vomnibar.activateHistory","Vomnibar.activateHistoryInNewTab","Vomnibar.activateTabs","Vomnibar.activateEditUrl",1,"Vomnibar.activateEditUrlInNewTab",1,"LinkHints.activateOpenVomnibar","$url, newtab, then:{}","toggleVomnibarStyle",1,"$style=dark, current"],
historyNavigation:["goBack","$reuse=current/newBg/newFg","goForward","reopenTab",1],
findCommands:["enterFindMode","$last, selected=true","performFind","performBackwardsFind","performAnotherFind","clearFindHistory",1],
tabManipulation:["nextTab","$blur","previousTab","$blur","firstTab","lastTab","createTab","duplicateTab","removeTab",'$keepWindow=""/always, mayClose, goto=""/left/right/previous',"removeRightTab",1,"restoreTab","restoreGivenTab",1,"discardTab",1,"moveTabToNextWindow",1,"$last, position, right=true, tabs","moveTabToNewWindow",1,"$limited=null/true/false","moveTabToIncognito",1,"joinTabs","sortTabs","$sort=recency|createTime","togglePinTab","toggleMuteTab","$all, other","visitPreviousTab","$blur, acrossWindows, onlyActive","closeTabsOnLeft",1,"$$count=0","closeTabsOnRight",1,"$$count=0","closeOtherTabs",1,'$filter=""/url/url+hash/url+title',"moveTabLeft",1,"$group=true","moveTabRight",1,"$group=true","toggleContentSetting",1,"$type=images","enableContentSettingTemp",1,"clearContentSettings",1,"copyWindowInfo",1,'$format="${title}: ${url}", join:true/string, decoded',"captureTab","toggleWindow",'$states="normal maximized"'],
misc:["showHelp","autoCopy","$text: string, url, decoded","autoOpen","searchAs","$copied=true, selected=true","searchInAnother","$keyword, reuse=current/newFg/newBg/reuse","showTip","$text:string","openBookmark","$title, path","addBookmark",1,"$folder:string","toggleStyle",1,"$id/selector:string, css: string","toggleLinkHintCharacters",1,"$value:string","editText",1,"$run:string, dom=false","toggleSwitchTemp",1,"$key:string, [value:any]","passNextKey",1,"$expect:string, normal","debugBackground",1,"reset",1,"runKey",1,"$expect:Envs, keys:KeySequence[]|string","sendToExtension",1,"$id:string, data:any, raw","confirm",1,"$ask:string, $then, $else","blank",1]
}).misc.push("closeDownloadBar"),n.Xn&&v.tabManipulation.push("toggleReaderMode",1)});