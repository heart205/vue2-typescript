const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.C4FEnjRa.js","assets/chunks/framework.Kkfsnacg.js"])))=>i.map(i=>d[i]);
import{_ as k,d as it,o as x,c as A,k as w,r as q,n as bt,h as b,S as de,m as Nt,a1 as fe,a2 as pe,g as W,y as Ht,a3 as me,j as It,N as he,b as et,w as M,a4 as ge,E as ve,F as ye,J as we,t as Ct,a5 as _e,a6 as Wt,M as Zt,Y as jt,a7 as ht,a8 as gt,T as Gt,u as Xt,L as xe,D as S,e as Et,I as D,p as be,q as Ce,a9 as $e,aa as ke,v as vt,ab as Ae,ac as Le,ad as Te,ae as Re,af as Ee,ag as Se,ah as Oe,ai as Pe,aj as Be,ak as Fe,z as De,al as Ve,am as Me,an as Ne}from"./chunks/framework.Kkfsnacg.js";import{t as He}from"./chunks/theme.DvjBKSnx.js";const Ie=it({name:"DemoBlock",props:{customClass:String}}),We={class:"demoblock-view"};function Ze(t,e,n,o,s,i){return x(),A("div",{class:bt(["demoblock",[t.customClass?t.customClass:""]])},[w("div",We,[q(t.$slots,"default",{},void 0,!0)])],2)}const je=k(Ie,[["render",Ze],["__scopeId","data-v-5ae70bb9"]]);function Yt(t){return fe()?(pe(t),!0):!1}function ct(t){return typeof t=="function"?t():Nt(t)}const rt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ge=Object.prototype.toString,Xe=t=>Ge.call(t)==="[object Object]",Ye=()=>{};function ze(t){let e;function n(){return e||(e=t()),e}return n.reset=async()=>{const o=e;e=void 0,o&&await o},n}function Ue(t,e,n={}){const{immediate:o=!0}=n,s=b(!1);let i=null;function c(){i&&(clearTimeout(i),i=null)}function r(){s.value=!1,c()}function l(...u){c(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,t(...u)},ct(e))}return o&&(s.value=!0,rt&&l()),Yt(r),{isPending:de(s),start:l,stop:r}}function qe(t){var e;const n=ct(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ke=rt?window:void 0,zt=rt?window.navigator:void 0;function Ut(...t){let e,n,o,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,o,s]=t,e=Ke):[e,n,o,s]=t,!e)return Ye;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const i=[],c=()=>{i.forEach(f=>f()),i.length=0},r=(f,d,g,p)=>(f.addEventListener(d,g,p),()=>f.removeEventListener(d,g,p)),l=Ht(()=>[qe(e),ct(s)],([f,d])=>{if(c(),!f)return;const g=Xe(d)?{...d}:d;i.push(...n.flatMap(p=>o.map(v=>r(f,p,v,g))))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return Yt(u),u}function Je(){const t=b(!1);return me()&&It(()=>{t.value=!0}),t}function qt(t){const e=Je();return W(()=>(e.value,!!t()))}function St(t,e={}){const{controls:n=!1,navigator:o=zt}=e,s=qt(()=>o&&"permissions"in o);let i;const c=typeof t=="string"?{name:t}:t,r=b(),l=()=>{i&&(r.value=i.state)},u=ze(async()=>{if(s.value){if(!i)try{i=await o.permissions.query(c),Ut(i,"change",l),l()}catch{r.value="prompt"}return i}});return u(),n?{state:r,isSupported:s,query:u}:r}function Qe(t={}){const{navigator:e=zt,read:n=!1,source:o,copiedDuring:s=1500,legacy:i=!1}=t,c=qt(()=>e&&"clipboard"in e),r=St("clipboard-read"),l=St("clipboard-write"),u=W(()=>c.value||i),f=b(""),d=b(!1),g=Ue(()=>d.value=!1,s);function p(){c.value&&r.value!=="denied"?e.clipboard.readText().then(m=>{f.value=m}):f.value=h()}u.value&&n&&Ut(["copy","cut"],p);async function v(m=ct(o)){u.value&&m!=null&&(c.value&&l.value!=="denied"?await e.clipboard.writeText(m):a(m),f.value=m,d.value=!0,g.start())}function a(m){const y=document.createElement("textarea");y.value=m??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function h(){var m,y,_;return(_=(y=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:y.toString())!=null?_:""}return{isSupported:u,text:f,copied:d,copy:v}}const Ot="demoblock",tn="is-",V=(t,e,n,o,s)=>{let i=`${t}-${e}`;return n&&(i+=`-${n}`),o&&(i+=`__${o}`),s&&(i+=`--${s}`),i},en=Symbol("namespaceContextKey"),nn=t=>{const e=he(en,b(Ot));return W(()=>Nt(e)||Ot)},on=(t,e)=>{const n=nn();return{namespace:n,b:(a="")=>V(n.value,t,a,"",""),e:a=>a?V(n.value,t,"",a,""):"",m:a=>a?V(n.value,t,"","",a):"",be:(a,h)=>a&&h?V(n.value,t,a,h,""):"",em:(a,h)=>a&&h?V(n.value,t,"",a,h):"",bm:(a,h)=>a&&h?V(n.value,t,a,"",h):"",bem:(a,h,m)=>a&&h&&m?V(n.value,t,a,h,m):"",is:(a,...h)=>{const m=h.length>=1?h[0]:!0;return a&&m?`${tn}${a}`:""},cssVar:a=>{const h={};for(const m in a)a[m]&&(h[`--${n.value}-${m}`]=a[m]);return h},cssVarName:a=>`--${n.value}-${a}`,cssVarBlock:a=>{const h={};for(const m in a)a[m]&&(h[`--${n.value}-${t}-${m}`]=a[m]);return h},cssVarBlockName:a=>`--${n.value}-${t}-${a}`}};function sn(t){return btoa(unescape(encodeURIComponent(t)))}const cn="App.vue",rn=t=>{const e=decodeURIComponent(t),n={[cn]:e},o=sn(JSON.stringify(n)),s=`https://play.vuejs.org/#${o}`;return{encoded:o,link:s}},an={name:"FluentCheckmarkCircle16Filled"},ln={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},un=w("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.12 4.164L7.25 9.042L5.854 7.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0l3.224-3.234a.5.5 0 0 0-.708-.706Z"},null,-1),dn=[un];function fn(t,e,n,o,s,i){return x(),A("svg",ln,dn)}const pn=k(an,[["render",fn]]),mn={name:"FluentDismissCircle16Filled"},hn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},gn=w("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2ZM6.534 5.839a.5.5 0 0 0-.638.057l-.057.07a.5.5 0 0 0 .057.638L7.293 8L5.896 9.396l-.057.07a.5.5 0 0 0 .057.638l.07.057a.5.5 0 0 0 .638-.057L8 8.707l1.396 1.397l.07.057a.5.5 0 0 0 .638-.057l.057-.07a.5.5 0 0 0-.057-.638L8.707 8l1.397-1.396l.057-.07a.5.5 0 0 0-.057-.638l-.07-.057a.5.5 0 0 0-.638.057L8 7.293L6.604 5.896l-.07-.057Z"},null,-1),vn=[gn];function yn(t,e,n,o,s,i){return x(),A("svg",hn,vn)}const wn=k(mn,[["render",yn]]),_n={name:"FluentErrorCircle16Filled"},xn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},bn=w("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 8a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Zm0-5.5a.5.5 0 0 0-.492.41L7.5 5v3.5l.008.09a.5.5 0 0 0 .984 0L8.5 8.5V5l-.008-.09A.5.5 0 0 0 8 4.5Z"},null,-1),Cn=[bn];function $n(t,e,n,o,s,i){return x(),A("svg",xn,Cn)}const kn=k(_n,[["render",$n]]);let An=0;function Ln(){return"message_"+An++}const Tn=it({components:{FluentCheckmarkCircle16Filled:pn,FluentDismissCircle16Filled:wn,FluentErrorCircle16Filled:kn},setup(){const t={info:"FluentErrorCircle16Filled",success:"FluentCheckmarkCircle16Filled",warning:"FluentDismissCircle16Filled",error:"FluentErrorCircle16Filled"},e=b([]);function n(s){const i=Ln(),c={name:i,show:!0,...s};e.value.push(c);const r=s.duration;setTimeout(()=>{o(i)},r*1e3)}function o(s){for(const[i,c]of e.value.entries())if(c.name===s){e.value.splice(i,1);break}}return{components:t,messages:e,add:n,remove:o}}}),Rn={class:"demoblock-message-content"};function En(t,e,n,o,s,i){return x(),et(ge,{name:"demoblock-fade-transition",tag:"div",class:"demoblock-messages"},{default:M(()=>[(x(!0),A(ye,null,ve(t.messages,c=>(x(),A("div",{key:c.name,class:"demoblock-message-wrap"},[w("div",{class:bt(["demoblock-message",c.type?`demoblock-message--${c.type}`:""])},[(x(),et(we(t.components[c.type]),{class:"demoblock-message-icon"})),w("div",Rn,Ct(c.content),1)],2)]))),128))]),_:1})}const yt=k(Tn,[["render",En],["__scopeId","data-v-d2fa662c"]]);yt.newInstance=(t={})=>{const e=document.createElement("div"),s=_e({render(){return Wt(yt,{...t,ref:"messageRef"})}}).mount(e).$refs.messageRef;return document.body.appendChild(e.firstElementChild),{add(i){s.add(i)},remove(i){s.remove(i)}}};let mt;function Sn(){return mt=mt||yt.newInstance(),mt}function tt(t,{duration:e=3,type:n=""}){Sn().add({content:t,duration:e,type:n})}const Pt={info(t,e){return tt(t,{...e,type:"info"})},warning(t,e){return tt(t,{...e,type:"warning"})},success(t,e){return tt(t,{...e,type:"success"})},error(t,e){return tt(t,{...e,type:"error"})}},On={name:"RiFlaskLine"},Pn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Bn=w("path",{fill:"currentColor",d:"M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.281 9.276A1.5 1.5 0 0 1 18.655 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.281-9.276A8 8 0 0 0 9 7.243V4H8V2h8Zm-2.613 8.001h-2.776a9.986 9.986 0 0 1-.374 1.071l-.158.362L6.124 20h11.75l-3.954-8.566A9.99 9.99 0 0 1 13.387 10ZM11 7.243c0 .253-.01.506-.028.758h2.057a9.59 9.59 0 0 1-.02-.364L13 7.243V4h-2v3.243Z"},null,-1),Fn=[Bn];function Dn(t,e,n,o,s,i){return x(),A("svg",Pn,Fn)}const Vn=k(On,[["render",Dn]]),Mn={name:"RiGithubLine"},Nn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Hn=w("path",{fill:"currentColor",d:"M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"},null,-1),In=[Hn];function Wn(t,e,n,o,s,i){return x(),A("svg",Nn,In)}const Zn=k(Mn,[["render",Wn]]),jn={name:"RiFileCopyLine"},Gn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Xn=w("path",{fill:"currentColor",d:"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z"},null,-1),Yn=[Xn];function zn(t,e,n,o,s,i){return x(),A("svg",Gn,Yn)}const Un=k(jn,[["render",zn]]),qn={name:"RiCodeLine"},Kn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Jn=w("path",{fill:"currentColor",d:"m23 12l-7.071 7.07l-1.414-1.413L20.172 12l-5.657-5.657l1.414-1.414L23 11.999ZM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12Z"},null,-1),Qn=[Jn];function to(t,e,n,o,s,i){return x(),A("svg",Kn,Qn)}const eo=k(qn,[["render",to]]),no={name:"EpCaretTop"},oo={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024"},so=w("path",{fill:"currentColor",d:"M512 320L192 704h639.936z"},null,-1),io=[so];function co(t,e,n,o,s,i){return x(),A("svg",oo,io)}const ro=k(no,[["render",co]]),wt=Math.min,Z=Math.max,nt=Math.round,O=t=>({x:t,y:t}),ao={left:"right",right:"left",bottom:"top",top:"bottom"},lo={start:"end",end:"start"};function Bt(t,e,n){return Z(t,wt(e,n))}function at(t,e){return typeof t=="function"?t(e):t}function N(t){return t.split("-")[0]}function lt(t){return t.split("-")[1]}function Kt(t){return t==="x"?"y":"x"}function Jt(t){return t==="y"?"height":"width"}function ut(t){return["top","bottom"].includes(N(t))?"y":"x"}function Qt(t){return Kt(ut(t))}function uo(t,e,n){n===void 0&&(n=!1);const o=lt(t),s=Qt(t),i=Jt(s);let c=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(c=ot(c)),[c,ot(c)]}function fo(t){const e=ot(t);return[_t(t),e,_t(e)]}function _t(t){return t.replace(/start|end/g,e=>lo[e])}function po(t,e,n){const o=["left","right"],s=["right","left"],i=["top","bottom"],c=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:o:e?o:s;case"left":case"right":return e?i:c;default:return[]}}function mo(t,e,n,o){const s=lt(t);let i=po(N(t),n==="start",o);return s&&(i=i.map(c=>c+"-"+s),e&&(i=i.concat(i.map(_t)))),i}function ot(t){return t.replace(/left|right|bottom|top/g,e=>ao[e])}function ho(t){return{top:0,right:0,bottom:0,left:0,...t}}function go(t){return typeof t!="number"?ho(t):{top:t,right:t,bottom:t,left:t}}function st(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ft(t,e,n){let{reference:o,floating:s}=t;const i=ut(e),c=Qt(e),r=Jt(c),l=N(e),u=i==="y",f=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,g=o[r]/2-s[r]/2;let p;switch(l){case"top":p={x:f,y:o.y-s.height};break;case"bottom":p={x:f,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-s.width,y:d};break;default:p={x:o.x,y:o.y}}switch(lt(e)){case"start":p[c]-=g*(n&&u?-1:1);break;case"end":p[c]+=g*(n&&u?-1:1);break}return p}const vo=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:c}=n,r=i.filter(Boolean),l=await(c.isRTL==null?void 0:c.isRTL(e));let u=await c.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:d}=Ft(u,o,l),g=o,p={},v=0;for(let a=0;a<r.length;a++){const{name:h,fn:m}=r[a],{x:y,y:_,data:R,reset:C}=await m({x:f,y:d,initialPlacement:o,placement:g,strategy:s,middlewareData:p,rects:u,platform:c,elements:{reference:t,floating:e}});if(f=y??f,d=_??d,p={...p,[h]:{...p[h],...R}},C&&v<=50){v++,typeof C=="object"&&(C.placement&&(g=C.placement),C.rects&&(u=C.rects===!0?await c.getElementRects({reference:t,floating:e,strategy:s}):C.rects),{x:f,y:d}=Ft(u,g,l)),a=-1;continue}}return{x:f,y:d,placement:g,strategy:s,middlewareData:p}};async function te(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:c,elements:r,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:g=!1,padding:p=0}=at(e,t),v=go(p),h=r[g?d==="floating"?"reference":"floating":d],m=st(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(h)))==null||n?h:h.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(r.floating)),boundary:u,rootBoundary:f,strategy:l})),y=d==="floating"?{...c.floating,x:o,y:s}:c.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(r.floating)),R=await(i.isElement==null?void 0:i.isElement(_))?await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1}:{x:1,y:1},C=st(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:_,strategy:l}):y);return{top:(m.top-C.top+v.top)/R.y,bottom:(C.bottom-m.bottom+v.bottom)/R.y,left:(m.left-C.left+v.left)/R.x,right:(C.right-m.right+v.right)/R.x}}const yo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:i,rects:c,initialPlacement:r,platform:l,elements:u}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:a=!0,...h}=at(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=N(s),y=N(r)===r,_=await(l.isRTL==null?void 0:l.isRTL(u.floating)),R=g||(y||!a?[ot(r)]:fo(r));!g&&v!=="none"&&R.push(...mo(r,a,v,_));const C=[r,...R],pt=await te(e,h),Q=[];let Y=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&Q.push(pt[m]),d){const F=uo(s,c,_);Q.push(pt[F[0]],pt[F[1]])}if(Y=[...Y,{placement:s,overflows:Q}],!Q.every(F=>F<=0)){var At,Lt;const F=(((At=i.flip)==null?void 0:At.index)||0)+1,Rt=C[F];if(Rt)return{data:{index:F,overflows:Y},reset:{placement:Rt}};let z=(Lt=Y.filter(H=>H.overflows[0]<=0).sort((H,I)=>H.overflows[1]-I.overflows[1])[0])==null?void 0:Lt.placement;if(!z)switch(p){case"bestFit":{var Tt;const H=(Tt=Y.map(I=>[I.placement,I.overflows.filter(U=>U>0).reduce((U,ue)=>U+ue,0)]).sort((I,U)=>I[1]-U[1])[0])==null?void 0:Tt[0];H&&(z=H);break}case"initialPlacement":z=r;break}if(s!==z)return{reset:{placement:z}}}return{}}}};async function wo(t,e){const{placement:n,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),c=N(n),r=lt(n),l=ut(n)==="y",u=["left","top"].includes(c)?-1:1,f=i&&l?-1:1,d=at(e,t);let{mainAxis:g,crossAxis:p,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return r&&typeof v=="number"&&(p=r==="end"?v*-1:v),l?{x:p*f,y:g*u}:{x:g*u,y:p*f}}const _o=function(t){return{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,s=await wo(e,t);return{x:n+s.x,y:o+s.y,data:s}}}},xo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:i=!0,crossAxis:c=!1,limiter:r={fn:h=>{let{x:m,y}=h;return{x:m,y}}},...l}=at(t,e),u={x:n,y:o},f=await te(e,l),d=ut(N(s)),g=Kt(d);let p=u[g],v=u[d];if(i){const h=g==="y"?"top":"left",m=g==="y"?"bottom":"right",y=p+f[h],_=p-f[m];p=Bt(y,p,_)}if(c){const h=d==="y"?"top":"left",m=d==="y"?"bottom":"right",y=v+f[h],_=v-f[m];v=Bt(y,v,_)}const a=r.fn({...e,[g]:p,[d]:v});return{...a,data:{x:a.x-n,y:a.y-o}}}}};function P(t){return ee(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function B(t){var e;return(e=(ee(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ee(t){return t instanceof Node||t instanceof $(t).Node}function E(t){return t instanceof Element||t instanceof $(t).Element}function T(t){return t instanceof HTMLElement||t instanceof $(t).HTMLElement}function Dt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function bo(t){return["table","td","th"].includes(P(t))}function $t(t){const e=kt(),n=L(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Co(t){let e=X(t);for(;T(e)&&!dt(e);){if($t(e))return e;e=X(e)}return null}function kt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function dt(t){return["html","body","#document"].includes(P(t))}function L(t){return $(t).getComputedStyle(t)}function ft(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(P(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Dt(t)&&t.host||B(t);return Dt(e)?e.host:e}function ne(t){const e=X(t);return dt(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&J(e)?e:ne(e)}function xt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=ne(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),c=$(s);return i?e.concat(c,c.visualViewport||[],J(s)?s:[],c.frameElement&&n?xt(c.frameElement):[]):e.concat(s,xt(s,[],n))}function oe(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=T(t),i=s?t.offsetWidth:n,c=s?t.offsetHeight:o,r=nt(n)!==i||nt(o)!==c;return r&&(n=i,o=c),{width:n,height:o,$:r}}function se(t){return E(t)?t:t.contextElement}function j(t){const e=se(t);if(!T(e))return O(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:i}=oe(e);let c=(i?nt(n.width):n.width)/o,r=(i?nt(n.height):n.height)/s;return(!c||!Number.isFinite(c))&&(c=1),(!r||!Number.isFinite(r))&&(r=1),{x:c,y:r}}const $o=O(0);function ie(t){const e=$(t);return!kt()||!e.visualViewport?$o:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ko(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==$(t)?!1:e}function K(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),i=se(t);let c=O(1);e&&(o?E(o)&&(c=j(o)):c=j(t));const r=ko(i,n,o)?ie(i):O(0);let l=(s.left+r.x)/c.x,u=(s.top+r.y)/c.y,f=s.width/c.x,d=s.height/c.y;if(i){const g=$(i),p=o&&E(o)?$(o):o;let v=g.frameElement;for(;v&&o&&p!==g;){const a=j(v),h=v.getBoundingClientRect(),m=L(v),y=h.left+(v.clientLeft+parseFloat(m.paddingLeft))*a.x,_=h.top+(v.clientTop+parseFloat(m.paddingTop))*a.y;l*=a.x,u*=a.y,f*=a.x,d*=a.y,l+=y,u+=_,v=$(v).frameElement}}return st({width:f,height:d,x:l,y:u})}function Ao(t){let{rect:e,offsetParent:n,strategy:o}=t;const s=T(n),i=B(n);if(n===i)return e;let c={scrollLeft:0,scrollTop:0},r=O(1);const l=O(0);if((s||!s&&o!=="fixed")&&((P(n)!=="body"||J(i))&&(c=ft(n)),T(n))){const u=K(n);r=j(n),l.x=u.x+n.clientLeft,l.y=u.y+n.clientTop}return{width:e.width*r.x,height:e.height*r.y,x:e.x*r.x-c.scrollLeft*r.x+l.x,y:e.y*r.y-c.scrollTop*r.y+l.y}}function Lo(t){return Array.from(t.getClientRects())}function ce(t){return K(B(t)).left+ft(t).scrollLeft}function To(t){const e=B(t),n=ft(t),o=t.ownerDocument.body,s=Z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=Z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let c=-n.scrollLeft+ce(t);const r=-n.scrollTop;return L(o).direction==="rtl"&&(c+=Z(e.clientWidth,o.clientWidth)-s),{width:s,height:i,x:c,y:r}}function Ro(t,e){const n=$(t),o=B(t),s=n.visualViewport;let i=o.clientWidth,c=o.clientHeight,r=0,l=0;if(s){i=s.width,c=s.height;const u=kt();(!u||u&&e==="fixed")&&(r=s.offsetLeft,l=s.offsetTop)}return{width:i,height:c,x:r,y:l}}function Eo(t,e){const n=K(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,i=T(t)?j(t):O(1),c=t.clientWidth*i.x,r=t.clientHeight*i.y,l=s*i.x,u=o*i.y;return{width:c,height:r,x:l,y:u}}function Vt(t,e,n){let o;if(e==="viewport")o=Ro(t,n);else if(e==="document")o=To(B(t));else if(E(e))o=Eo(e,n);else{const s=ie(t);o={...e,x:e.x-s.x,y:e.y-s.y}}return st(o)}function re(t,e){const n=X(t);return n===e||!E(n)||dt(n)?!1:L(n).position==="fixed"||re(n,e)}function So(t,e){const n=e.get(t);if(n)return n;let o=xt(t,[],!1).filter(r=>E(r)&&P(r)!=="body"),s=null;const i=L(t).position==="fixed";let c=i?X(t):t;for(;E(c)&&!dt(c);){const r=L(c),l=$t(c);!l&&r.position==="fixed"&&(s=null),(i?!l&&!s:!l&&r.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||J(c)&&!l&&re(t,c))?o=o.filter(f=>f!==c):s=r,c=X(c)}return e.set(t,o),o}function Oo(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const c=[...n==="clippingAncestors"?So(e,this._c):[].concat(n),o],r=c[0],l=c.reduce((u,f)=>{const d=Vt(e,f,s);return u.top=Z(d.top,u.top),u.right=wt(d.right,u.right),u.bottom=wt(d.bottom,u.bottom),u.left=Z(d.left,u.left),u},Vt(e,r,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Po(t){return oe(t)}function Bo(t,e,n){const o=T(e),s=B(e),i=n==="fixed",c=K(t,!0,i,e);let r={scrollLeft:0,scrollTop:0};const l=O(0);if(o||!o&&!i)if((P(e)!=="body"||J(s))&&(r=ft(e)),o){const u=K(e,!0,i,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else s&&(l.x=ce(s));return{x:c.left+r.scrollLeft-l.x,y:c.top+r.scrollTop-l.y,width:c.width,height:c.height}}function Mt(t,e){return!T(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function ae(t,e){const n=$(t);if(!T(t))return n;let o=Mt(t,e);for(;o&&bo(o)&&L(o).position==="static";)o=Mt(o,e);return o&&(P(o)==="html"||P(o)==="body"&&L(o).position==="static"&&!$t(o))?n:o||Co(t)||n}const Fo=async function(t){let{reference:e,floating:n,strategy:o}=t;const s=this.getOffsetParent||ae,i=this.getDimensions;return{reference:Bo(e,await s(n),o),floating:{x:0,y:0,...await i(n)}}};function Do(t){return L(t).direction==="rtl"}const Vo={convertOffsetParentRelativeRectToViewportRelativeRect:Ao,getDocumentElement:B,getClippingRect:Oo,getOffsetParent:ae,getElementRects:Fo,getClientRects:Lo,getDimensions:Po,getScale:j,isElement:E,isRTL:Do},Mo=(t,e,n)=>{const o=new Map,s={platform:Vo,...n},i={...s.platform,_c:o};return vo(t,e,{...s,platform:i})},No={props:{placement:{type:String,default:"top"},content:{type:String,default:""}},setup(t){const e=b(null),n=b(null),o=b(!1);function s(){Mo(e.value,n.value,{placement:t.placement,middleware:[_o(11),yo(),xo()]}).then(({x:l,y:u,placement:f,middlewareData:d})=>{var g;Object.assign((g=n.value)==null?void 0:g.style,{left:0,top:0,transform:`translate(${l}px, ${u}px)`,willChange:"transform",pointerEvents:"none"})})}function i(){o.value=!0,s()}function c(){o.value=!1}return{reference:e,floating:n,showFloating:o,componentProps:{mouseenter:i,mouseleave:c,focus:i,blur:c},showTooltip:i}}},Ho={class:"demoblock-tooltip"};function Io(t,e,n,o,s,i){return x(),A("div",Ho,[w("div",Zt({ref:"reference",class:"demoblock-tooltip-trigger"},jt(o.componentProps,!0)),[q(t.$slots,"default",{},void 0,!0)],16),ht(w("div",{ref:"floating",class:"demoblock-tooltip-content"},Ct(n.content),513),[[gt,o.showFloating]])])}const Wo=k(No,[["render",Io],["__scopeId","data-v-1aecc892"]]),Zo=it({setup(){return{ns:on("collapse-transition"),on:{beforeEnter(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0},enter(n){n.dataset.oldOverflow=n.style.overflow,n.scrollHeight!==0?(n.style.maxHeight=`${n.scrollHeight}px`,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom):(n.style.maxHeight=0,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom),n.style.overflow="hidden"},afterEnter(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow},beforeLeave(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.dataset.oldOverflow=n.style.overflow,n.style.maxHeight=`${n.scrollHeight}px`,n.style.overflow="hidden"},leave(n){n.scrollHeight!==0&&(n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0)},afterLeave(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom}}}}});function jo(t,e,n,o,s,i){return x(),et(Gt,Zt({name:t.ns.b()},jt(t.on)),{default:M(()=>[q(t.$slots,"default")]),_:3},16,["name"])}const Go=k(Zo,[["render",jo]]),Xo={components:{RiFlaskLine:Vn,RiGithubLine:Zn,RiFileCopyLine:Un,RiCodeLine:eo,EpCaretTop:ro,Tooltip:Wo,CollapseTransition:Go},props:{customClass:String,sourceCode:String},setup(t){const{copy:e}=Qe(),n=Xt(),o=xe();Ht(()=>o.path,a=>{s.value=a.split("/")});const s=b(o.path.split("/")),i=W(()=>s.value[s.value.length-1].split(".")[0]),c=W(()=>`demo-${i.value}`),r=b(null),l=b(null),u=b(null),f=()=>{const{link:a}=rn(t.sourceCode);rt&&window.open(a)},d=b(!1),g=()=>{d.value=!d.value},p=W(()=>{var a;return((a=n.theme.value.demoblock)==null?void 0:a[n.localeIndex.value])??{"view-source":"查看源代码","hide-source":"隐藏源代码","edit-in-editor":"在 Playground 中编辑","edit-on-github":"在 Github 中编辑","copy-code":"复制代码","copy-success":"复制成功","copy-error":"复制失败"}});return{blockClass:c,locale:p,source:r,control:l,demoblock:u,isExpanded:d,onControlClick:g,onCopy:async()=>{try{e(t.sourceCode),Pt.success(p.value["copy-success"])}catch{Pt.error(p.value["copy-error"])}},onPlaygroundClick:f}}},Yo=t=>(be("data-v-211b16d7"),t=t(),Ce(),t),zo={class:"demoblock-view"},Uo=Yo(()=>w("div",{class:"demoblock-divider demoblock-divider--horizontal"},null,-1)),qo={class:"demoblock-op-btns"},Ko={ref:"source",class:"demoblock-source"},Jo={class:"highlight"},Qo={class:"control-text"};function ts(t,e,n,o,s,i){const c=S("RiFlaskLine"),r=S("Tooltip"),l=S("RiGithubLine"),u=S("RiFileCopyLine"),f=S("RiCodeLine"),d=S("CollapseTransition"),g=S("EpCaretTop"),p=S("ClientOnly");return x(),et(p,null,{default:M(()=>[w("div",{ref:"demoblock",class:bt(["demoblock",o.blockClass,n.customClass?n.customClass:""])},[w("div",zo,[q(t.$slots,"default",{},void 0,!0)]),Uo,w("div",qo,[Et("",!0),Et("",!0),D(r,{placement:"top",content:o.locale["copy-code"]},{default:M(()=>[D(u,{class:"demoblock-op-btn",onClick:o.onCopy},null,8,["onClick"])]),_:1},8,["content"]),D(r,{placement:"top",content:o.locale["view-source"]},{default:M(()=>[D(f,{class:"demoblock-op-btn",onClick:o.onControlClick},null,8,["onClick"])]),_:1},8,["content"])]),D(d,null,{default:M(()=>[ht(w("div",Ko,[w("div",Jo,[q(t.$slots,"highlight",{},void 0,!0)])],512),[[gt,o.isExpanded]])]),_:3}),D(Gt,{name:"demoblock-fade-in-linear"},{default:M(()=>[ht(w("div",{ref:"control",class:"demoblock-control",onClick:e[0]||(e[0]=(...v)=>o.onControlClick&&o.onControlClick(...v))},[D(g,{class:"control-icon"}),w("span",Qo,Ct(o.locale["hide-source"]),1)],512),[[gt,o.isExpanded]])]),_:1})],2)]),_:3})}const es=k(Xo,[["render",ts],["__scopeId","data-v-211b16d7"]]),ns={extends:He,enhanceApp({app:t,router:e,siteData:n}){const o=typeof window<"u"?$e(()=>ke(()=>import("./chunks/index.C4FEnjRa.js").then(s=>s.i),__vite__mapDeps([0,1])).then(s=>s.MonacoEditor)):()=>null;t.component("MonacoEditor",o),t.component("Demo",es),t.component("DemoBlock",je)}};function le(t){if(t.extends){const e=le(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const G=le(ns),os=it({name:"VitePressApp",setup(){const{site:t}=Xt();return It(()=>{De(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&Ve(),Me(),Ne(),G.setup&&G.setup(),()=>Wt(G.Layout)}});async function ss(){const t=cs(),e=is();e.provide(Le,t);const n=Te(t.route);return e.provide(Re,n),e.component("Content",Ee),e.component("ClientOnly",Se),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),G.enhanceApp&&await G.enhanceApp({app:e,router:t,siteData:Oe}),{app:e,router:t,data:n}}function is(){return Pe(os)}function cs(){let t=vt,e;return Be(n=>{let o=Fe(n),s=null;return o&&(t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),s=import(o)),vt&&(t=!1),s},G.NotFound)}vt&&ss().then(({app:t,router:e,data:n})=>{e.go().then(()=>{Ae(e.route,n.site),t.mount("#app")})});export{ss as createApp};
