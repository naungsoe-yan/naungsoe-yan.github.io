(function(e){function t(t){for(var n,a,u=t[0],r=t[1],v=t[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,v||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],n=!0,u=1;u<c.length;u++){var r=c[u];0!==o[r]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=t,u=u.slice();for(var v=0;v<u.length;v++)t(u[v]);var l=r;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"034f":function(e,t,c){"use strict";var n=c("85ec"),o=c.n(n);o.a},"08ef":function(e,t,c){var n={"./cv-accordion/cv-accordion-item.vue":"71e2","./cv-accordion/cv-accordion-skeleton.vue":"5244","./cv-accordion/cv-accordion.vue":"7b73","./cv-breadcrumb/cv-breadcrumb-item.vue":"55dc","./cv-breadcrumb/cv-breadcrumb-skeleton.vue":"5cb9","./cv-breadcrumb/cv-breadcrumb.vue":"6f06","./cv-button/cv-button-set.vue":"d897","./cv-button/cv-button-skeleton.vue":"0b06","./cv-button/cv-button.vue":"b281","./cv-button/cv-icon-button.vue":"4204","./cv-checkbox/cv-checkbox-skeleton.vue":"250c","./cv-checkbox/cv-checkbox.vue":"8c9d","./cv-code-snippet/cv-code-snippet-skeleton.vue":"fe2e","./cv-code-snippet/cv-code-snippet.vue":"f090","./cv-combo-box/cv-combo-box.vue":"5785","./cv-content-switcher/cv-content-switcher-button.vue":"15b9","./cv-content-switcher/cv-content-switcher-content.vue":"fc85","./cv-content-switcher/cv-content-switcher.vue":"7938","./cv-data-table/cv-data-table-action.vue":"baa6","./cv-data-table/cv-data-table-cell.vue":"7dc9","./cv-data-table/cv-data-table-row.vue":"411e","./cv-data-table/cv-data-table-skeleton.vue":"6ec6","./cv-data-table/cv-data-table.vue":"5617","./cv-date-picker/cv-date-picker.vue":"c924","./cv-dropdown/cv-dropdown-item.vue":"3ace","./cv-dropdown/cv-dropdown-skeleton.vue":"60c8","./cv-dropdown/cv-dropdown.vue":"1b7e","./cv-file-uploader/cv-file-uploader-skeleton.vue":"6c41","./cv-file-uploader/cv-file-uploader.vue":"7608","./cv-form/cv-form-group.vue":"3b05","./cv-form/cv-form-item.vue":"4813","./cv-form/cv-form.vue":"b155","./cv-inline-loading/cv-inline-loading.vue":"b55f","./cv-inline-notification/cv-inline-notification.vue":"9041","./cv-link/cv-link.vue":"e7e8","./cv-list/cv-list-item.vue":"a1d7","./cv-list/cv-list.vue":"21cd","./cv-loading/cv-loading.vue":"dbb8","./cv-modal/cv-modal.vue":"7346","./cv-multi-select/cv-multi-select.vue":"998c","./cv-number-input/cv-number-input-skeleton.vue":"e7c1","./cv-number-input/cv-number-input.vue":"0ffa","./cv-overflow-menu/cv-overflow-menu-item.vue":"5ed7","./cv-overflow-menu/cv-overflow-menu.vue":"b3a0","./cv-pagination/cv-pagination.vue":"8913","./cv-progress/cv-progress-step.vue":"4a7f","./cv-progress/cv-progress.vue":"01f6","./cv-radio-button/cv-radio-button.vue":"f243","./cv-radio-button/cv-radio-group.vue":"d923","./cv-search/cv-search.vue":"c005","./cv-select/cv-select-optgroup.vue":"6d31","./cv-select/cv-select-option.vue":"47d6","./cv-select/cv-select.vue":"c429","./cv-skeleton-text/cv-skeleton-text.vue":"85b3","./cv-slider/cv-slider-skeleton.vue":"30e3","./cv-slider/cv-slider.vue":"bf03","./cv-structured-list/cv-structured-list-data.vue":"6e05","./cv-structured-list/cv-structured-list-heading.vue":"e4ed","./cv-structured-list/cv-structured-list-item.vue":"43ca","./cv-structured-list/cv-structured-list.vue":"5bbf","./cv-tabs/cv-tab.vue":"e417","./cv-tabs/cv-tabs-skeleton.vue":"0e4a","./cv-tabs/cv-tabs.vue":"e464","./cv-tag/cv-tag-skeleton.vue":"21ca","./cv-tag/cv-tag.vue":"022c","./cv-text-area/cv-text-area.vue":"0019","./cv-text-input/cv-text-input.vue":"50e5","./cv-tile/cv-tile.vue":"4143","./cv-time-picker/cv-time-picker.vue":"1b53","./cv-toast-notification/cv-toast-notification.vue":"d64c","./cv-toggle/cv-toggle-skeleton.vue":"a32c","./cv-toggle/cv-toggle.vue":"761e","./cv-toolbar/cv-toolbar-divider.vue":"3ad3","./cv-toolbar/cv-toolbar-option.vue":"fbb6","./cv-toolbar/cv-toolbar-search.vue":"5907","./cv-toolbar/cv-toolbar-title.vue":"142c","./cv-toolbar/cv-toolbar.vue":"9783","./cv-tooltip/cv-definition-tooltip.vue":"9963","./cv-tooltip/cv-interactive-tooltip.vue":"d69a","./cv-tooltip/cv-tooltip.vue":"c332","./cv-ui-shell/cv-content.vue":"5326","./cv-ui-shell/cv-header-global-action.vue":"0df1","./cv-ui-shell/cv-header-menu-button.vue":"6bef","./cv-ui-shell/cv-header-menu-item.vue":"246e","./cv-ui-shell/cv-header-menu.vue":"a418","./cv-ui-shell/cv-header-name.vue":"49aa","./cv-ui-shell/cv-header-nav.vue":"ac7f","./cv-ui-shell/cv-header-panel.vue":"9af7","./cv-ui-shell/cv-header-side-nav-items.vue":"3e68","./cv-ui-shell/cv-header.vue":"21d9","./cv-ui-shell/cv-side-nav-icon.vue":"50a2","./cv-ui-shell/cv-side-nav-items.vue":"340a","./cv-ui-shell/cv-side-nav-link.vue":"4a05","./cv-ui-shell/cv-side-nav-menu-item.vue":"e2eb","./cv-ui-shell/cv-side-nav-menu.vue":"6f68","./cv-ui-shell/cv-side-nav.vue":"342a","./cv-ui-shell/cv-skip-to-content.vue":"cb8f","./cv-ui-shell/cv-switcher-item-link.vue":"cf28","./cv-ui-shell/cv-switcher-item.vue":"a4cd","./cv-ui-shell/cv-switcher.vue":"c3d0"};function o(e){var t=i(e);return c(t)}function i(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="08ef"},1947:function(e,t,c){},"39af":function(e,t,c){"use strict";var n=c("b11d"),o=c.n(n);o.a},"45c8":function(e,t,c){"use strict";var n=c("1947"),o=c.n(n);o.a},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("2b0e"),o=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{attrs:{id:"app"}},[c("AppHeader"),c("AppContent")],1)},i=[],a=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("cv-header",{attrs:{"aria-label":"Carbon header"}},[c("cv-skip-to-content",{attrs:{href:"#main-content"}},[e._v(" Skip to content ")]),c("cv-header-name",{attrs:{href:"javascript:void(0)",prefix:"Sticky header"}}),c("template",{slot:"header-global"},[c("cv-header-global-action",{attrs:{"aria-label":"Notifications","aria-controls":"notifications-panel"}},[c("Notification20")],1),c("cv-header-global-action",{attrs:{"aria-label":"User avatar","aria-controls":"user-panel"}},[c("UserAvatar20")],1),c("cv-header-global-action",{attrs:{"aria-label":"App switcher","aria-controls":"switcher-panel"}},[c("AppSwitcher20")],1)],1)],2)},u=[],r=c("45c1"),v=c("4f6b"),l=c("9638"),s={name:"AppHeader",components:{Notification20:r["a"],UserAvatar20:v["a"],AppSwitcher20:l["a"]}},d=s,p=c("2877"),m=Object(p["a"])(d,a,u,!1,null,null,null),b=m.exports,f=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{ref:"content",staticClass:"content"},[c("page-toolbar"),c("section",[c("h2",[e._v("Text Input")]),c("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")]),c("cv-text-input",{attrs:{placeholder:"click to see browser behaviour on mobile device"}})],1),c("section",[c("h2",[e._v("Text Area")]),c("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")]),c("cv-text-area",{attrs:{placeholder:"click to see browser behaviour on mobile device"}})],1),e._m(0),c("annotation-toolbar",{ref:"toolbar"})],1)},h=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",[c("h2",[e._v("Typography")]),c("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")])])}],g=c("39c3"),w=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("cv-toolbar",[c("cv-toolbar-search"),c("cv-overflow-menu",{staticClass:"bx--toolbar-action",attrs:{"flip-menu":""}},[c("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Action 1")]),c("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Action 2")]),c("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Action 3")])],1)],1)},k=[],x={name:"PageToolbar"},y=x,A=(c("39af"),Object(p["a"])(y,w,k,!1,null,"ac1ee516",null)),_=A.exports,q=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("cv-toolbar",[c("cv-icon-button",{attrs:{icon:e.iconTextScale}}),c("cv-icon-button",{attrs:{icon:e.iconTextKerning}}),c("cv-icon-button",{attrs:{icon:e.iconTextHighlight}})],1)},j=[],O=c("4f33"),T=c("8180"),C=c("d2a6"),N={name:"AnnotationToolbar",computed:{iconTextScale:function(){return O["a"]},iconTextKerning:function(){return T["a"]},iconTextHighlight:function(){return C["a"]}}},S=N,E=(c("871f"),Object(p["a"])(S,q,j,!1,null,null,null)),P=E.exports,$={name:"AppContent",components:{PageToolbar:_,AnnotationToolbar:P},data:function(){return{popper:null}},mounted:function(){var e=this,t=this.$refs.toolbar.$el;t.style.display="none",document.addEventListener("selectionchange",(function(){e.popper&&e.popper.destroy&&(e.popper.destroy(),e.popper=null);var c=document.getSelection();if(c.isCollapsed)t.style.display="none";else{t.style.display="";var n=c.anchorNode.parentElement;e.popper=Object(g["a"])(n,t)}}))}},D=$,I=(c("45c8"),Object(p["a"])(D,f,h,!1,null,null,null)),H=I.exports,L={name:"App",components:{AppHeader:b,AppContent:H}},M=L,U=(c("034f"),Object(p["a"])(M,o,i,!1,null,null,null)),V=U.exports,J=(c("5e20"),c("e615"));n["a"].config.productionTip=!1,n["a"].use(J["a"]),new n["a"]({render:function(e){return e(V)}}).$mount("#app")},"85ec":function(e,t,c){},"871f":function(e,t,c){"use strict";var n=c("e182"),o=c.n(n);o.a},b11d:function(e,t,c){},e182:function(e,t,c){}});
//# sourceMappingURL=app.dba9239c.js.map