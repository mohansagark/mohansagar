var m=Object.defineProperty,v=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var i=(t,n,s)=>n in t?m(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,o=(t,n)=>{for(var s in n||(n={}))f.call(n,s)&&i(t,s,n[s]);if(r)for(var s of r(n))$.call(n,s)&&i(t,s,n[s]);return t},a=(t,n)=>v(t,d(n));import"./ToolsSettings.004b222f.js";import{a as g,c as h,d as x}from"./index.d328c175.js";import"./helpers.db3922d1.js";import{R as S,a as y}from"./RequiresUpdate.76e69211.js";import{n as e}from"./vueComponentNormalizer.87056a83.js";import{C as k}from"./Index.15fee59c.js";import A from"./Overview.d0d35d60.js";import"./Modal.1216ab78.js";import"./index.a4161053.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./default-i18n.abde8d59.js";import"./constants.a1b1778a.js";import"./isArrayLikeObject.a4a9229a.js";import"./cleanForSlug.e9a761bb.js";import"./RequiresUpdate.33501e39.js";/* empty css             */import"./params.bea1a08d.js";import"./Header.62cb09dc.js";import"./LicenseKeyBar.f184444d.js";import"./LogoGear.0c3dd5e3.js";import"./AnimatedNumber.b6059bfd.js";import"./Logo.1a5e022a.js";import"./QuestionMark.83ebd18e.js";import"./Support.b1f25bbd.js";import"./Tabs.900c61c3.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";import"./Slide.f5d21606.js";import"./Close.5e7bcb70.js";import"./Exclamation.356738ce.js";import"./Url.781a1d48.js";import"./Gear.c974e953.js";import"./Blur.8490ecd2.js";import"./Row.13b6f3f1.js";import"./Card.be971207.js";import"./Tooltip.3ec20ff5.js";import"./InternalOutbound.0e3ee7df.js";import"./DonutChartWithLegend.fe87aad2.js";import"./SeoSiteScore.48a1cf92.js";import"./Row.b5e5f12f.js";import"./RequiredPlans.2936a9d7.js";import"./Index.cb0f42fe.js";import"./Index.2f0c11d2.js";var M=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div")},R=[];const P={},c={};var b=e(P,M,R,!1,E,null,null,null);function E(t){for(let n in c)this[n]=c[n]}var T=function(){return b.exports}(),j=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div")},F=[];const w={},p={};var C=e(w,j,F,!1,L,null,null,null);function L(t){for(let n in p)this[n]=p[n]}var U=function(){return C.exports}(),q=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div")},D=[];const N={},u={};var z=e(N,q,D,!1,O,null,null,null);function O(t){for(let n in u)this[n]=u[n]}var V=function(){return z.exports}(),B=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div")},G=[];const H={},l={};var I=e(H,B,G,!1,J,null,null,null);function J(t){for(let n in l)this[n]=l[n]}var K=function(){return I.exports}(),Q=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"aioseo-link-assistant"},[s("core-main",{attrs:{"page-name":t.strings.pageName,"exclude-tabs":t.excludedTabs,showTabs:t.$route.name!=="post-report"}},[s(t.$route.name,{tag:"component"})],1),s("transition",{attrs:{name:"fade-processing-popup"}},[t.suggestionsScan.showProcessingPopup&&(t.$route.name==="links-report"||t.$route.name==="overview")&&t.suggestionsScan.percent!==100?s("core-processing-popup",{on:{"close-processing-popup":t.toggleProcessingPopup}}):t._e()],1)],1)},W=[];const X={components:{CoreMain:k,DomainsReport:T,LinksReport:U,Overview:A,PostReport:V,Settings:K},mixins:[S,y],data(){return{strings:{pageName:this.$t.__("Link Assistant",this.$td)}}},computed:a(o({},g("linkAssistant",["suggestionsScan"])),{excludedTabs(){const t=(this.$addons.isActive("aioseo-link-assistant")?this.getExcludedUpdateTabs("aioseo-link-assistant"):this.getExcludedActivationTabs("aioseo-link-assistant"))||[];return t.push("post-report"),t}}),methods:o(o({},h("linkAssistant",["toggleProcessingPopup"])),x("linkAssistant",["pollSuggestionsScan","getMenuData"])),mounted(){this.$bus.$on("changes-saved",()=>{this.getMenuData()}),this.$isPro&&this.suggestionsScan.percent!==100&&this.$addons.isActive("aioseo-link-assistant")&&!this.$addons.requiresUpgrade("aioseo-link-assistant")&&this.$addons.hasMinimumVersion("aioseo-link-assistant")&&this.pollSuggestionsScan()}},_={};var Y=e(X,Q,W,!1,Z,null,null,null);function Z(t){for(let n in _)this[n]=_[n]}var Ht=function(){return Y.exports}();export{Ht as default};
