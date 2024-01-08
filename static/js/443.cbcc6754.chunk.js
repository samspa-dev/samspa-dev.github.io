/*! For license information please see 443.cbcc6754.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkexfuncs=self.webpackChunkexfuncs||[]).push([[443],{8443:function(t,e,n){n.r(e),n.d(e,{scopeCss:function(){return A}});var r=n(3433),c="-shadowcsshost",o="-shadowcssslotted",s="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("("+c+a,"gim"),u=new RegExp("("+s+a,"gim"),l=new RegExp("("+o+a,"gim"),f=c+"-no-combinator",p=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,v=/::slotted/gim,m=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,_=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S=/(^.*?[^\\])??((:+)(.*)|$)/,W="%BLOCK%",k=function(t,e){var n=O(t),r=0;return n.escapedString.replace(w,(function(){var t=arguments.length<=2?void 0:arguments[2],c="",o=arguments.length<=4?void 0:arguments[4],s="";o&&o.startsWith("{"+W)&&(c=n.blocks[r++],o=o.substring(8),s="{");var a=e({selector:t,content:c});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(a.content).concat(o)}))},O=function(t){for(var e=t.split(b),n=[],r=[],c=0,o=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&c--,c>0?o.push(a):(o.length>0&&(r.push(o.join("")),n.push(W),o=[]),n.push(a)),"{"===a&&c++}return o.length>0&&(r.push(o.join("")),n.push(W)),{escapedString:n.join(""),blocks:r}},j=function(t,e,n){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(e[2]){for(var c=e[2].split(","),o=[],s=0;s<c.length;s++){var a=c[s].trim();if(!a)break;o.push(n(f,a,e[3]))}return o.join(",")}return f+e[3]}))},E=function(t,e,n){return t+e.replace(c,"")+n},R=function(t,e,n){return e.indexOf(c)>-1?E(t,e,n):t+e+n+", "+e+" "+t+n},C=function(t,e){var n=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e);return!n.test(t)},T=function(t,e){return t.replace(S,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")}))},L=function(t,e,n){e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}));for(var r,c="."+e,o=function(t){var r=t.trim();if(!r)return"";if(t.indexOf(f)>-1)r=function(t,e,n){if(g.lastIndex=0,g.test(t)){var r=".".concat(n);return t.replace(p,(function(t,e){return T(e,r)})).replace(g,r+" ")}return e+" "+t}(t,e,n);else{var o=t.replace(g,"");o.length>0&&(r=T(o,c))}return r},s=function(t){var e=[],n=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,r){var c="__ph-".concat(n,"__");return e.push(r),n++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,r,c){var o="__ph-".concat(n,"__");return e.push(c),n++,r+o})),placeholders:e}}(t),a="",i=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=s.content).indexOf(f)>-1);null!==(r=u.exec(t));){var h=r[1],d=t.slice(i,r.index).trim(),v=(l=l||d.indexOf(f)>-1)?o(d):d;a+="".concat(v," ").concat(h," "),i=u.lastIndex}var m,x=t.substring(i);return a+=(l=l||x.indexOf(f)>-1)?o(x):x,m=s.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,e){return m[+e]}))},$=function t(e,n,r,c,o){return k(e,(function(e){var o=e.selector,s=e.content;return"@"!==e.selector[0]?o=function(t,e,n,r){return t.split(",").map((function(t){return r&&t.indexOf("."+r)>-1?t.trim():C(t,e)?L(t,e,n).trim():t.trim()})).join(", ")}(e.selector,n,r,c):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,n,r,c)),{selector:o.replace(/\s{2,}/g," ").trim(),content:s}}))},y=function(t,e,n,r,a){var p=function(t,e){var n="."+e+" > ",r=[];return t=t.replace(l,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){for(var o=e[2].trim(),s=e[3],a=n+o+s,i="",u=e[4]-1;u>=0;u--){var l=e[5][u];if("}"===l||","===l)break;i=l+i}var p=i+a,h="".concat(i.trimRight()).concat(a.trim());if(p.trim()!==h.trim()){var g="".concat(h,", ").concat(p);r.push({orgSelector:p,updatedSelector:g})}return a}return f+e[3]})),{selectors:r,cssText:t}}(t=function(t){return j(t,u,R)}(t=function(t){return j(t,i,E)}(t=t.replace(m,s).replace(d,c).replace(v,o))),r);return t=function(t){return h.reduce((function(t,e){return t.replace(e," ")}),t)}(t=p.cssText),e&&(t=$(t,e,n,r)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(n))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}},A=function(t,e,n){var c=e+"-h",o=e+"-s",s=t.match(_)||[];t=function(t){return t.replace(x,"")}(t);var a=[];if(n){var i=function(t){var e="/*!@___".concat(a.length,"___*/"),n="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:n}),t.selector=e+t.selector,t};t=k(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=k(t.content,i),t):t}))}var u=y(t,e,c,o);return t=[u.cssText].concat((0,r.Z)(s)).join("\n"),n&&a.forEach((function(e){var n=e.placeholder,r=e.comment;t=t.replace(n,r)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=443.cbcc6754.chunk.js.map