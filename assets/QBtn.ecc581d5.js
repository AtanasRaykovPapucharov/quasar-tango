import{c,h as v,K as re,k as Q,g as F,_ as ge,A as me,P as I,C as he,J as be,G as ae,I as ye,r as U,n as ke,l as P,O as pe,u as xe,E as qe}from"./index.606eac5a.js";const V={xs:18,sm:24,md:32,lg:38,xl:46},ie={size:String};function ue(e,t=V){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function Ee(e,t){return e!==void 0&&e()||t}function Ze(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function z(e,t){return e!==void 0?t.concat(e()):t}function et(e,t,n,r,l,d){t.key=r+l;const o=v(e,t,n);return l===!0?re(o,d()):o}const H="0 0 24 24",W=e=>e,D=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(le).join("|")+")"),Se=new RegExp("^("+Object.keys(oe).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),we=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,Be=/^svguse:/,Ce=/^ion-/,Le=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var G=Q({name:"QIcon",props:{...ie,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=F(),r=ue(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=c(()=>{let o,i=e.name;if(i==="none"||!i)return{none:!0};if(n.iconMapFn!==null){const s=n.iconMapFn(i);if(s!==void 0)if(s.icon!==void 0){if(i=s.icon,i==="none"||!i)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(we.test(i)===!0){const[s,y=H]=i.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,h,p]=u.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Re.test(i)===!0)return{img:!0,src:i.substring(4)};if(Be.test(i)===!0){const[s,y=H]=i.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=i.match($e);if(b!==null)o=le[b[1]](i);else if(Le.test(i)===!0)o=i;else if(Ce.test(i)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(X.test(i)===!0){o="notranslate material-symbols";const s=i.match(X);s!==null&&(i=i.substring(6),o+=se[s[1]]),q=i}else{o="notranslate material-icons";const s=i.match(Se);s!==null&&(i=i.substring(2),o+=oe[s[1]]),q=i}return{cls:o,content:q}});return()=>{const o={class:l.value,style:r.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,o,Ee(t.default)):d.value.img===!0?v(e.tag,o,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(o.class+=" "+d.value.cls),v(e.tag,o,z(t.default,[d.value.content])))}}});const _e={size:{type:[String,Number],default:"1em"},color:String};function Pe(e){return{cSize:c(()=>e.size in V?`${V[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ae=Q({name:"QSpinner",props:{..._e,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Pe(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Te(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function tt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ge(e);if(t)return t.$el||t}function nt(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Oe(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function J(e,t,n,r){n.modifiers.stop===!0&&ae(e);const l=n.modifiers.color;let d=n.modifiers.center;d=d===!0||r===!0;const o=document.createElement("span"),i=document.createElement("span"),q=ye(e),{left:b,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),h=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-b-h}px`,x=`${(u-k)/2}px`,_=d?x:`${q.top-s-h}px`;i.className="q-ripple__inner",Te(i,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${l?" text-"+l:""}`,o.setAttribute("dir","ltr"),o.appendChild(i),t.appendChild(o);const C=()=>{o.remove(),clearTimeout(L)};n.abort.push(C);let L=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,i.style.opacity=.2,L=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,L=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(C),1)},275)},250)},50)}function Y(e,{modifiers:t,value:n,arg:r}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||r,keyCodes:[].concat(l.keyCodes||13)}}var Me=me({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){r.enabled===!0&&l.qSkipRipple!==!0&&l.type===(r.modifiers.early===!0?"pointerdown":"click")&&J(l,e,r,l.qKeyEvent===!0)},keystart:Oe(l=>{r.enabled===!0&&l.qSkipRipple!==!0&&I(l,r.modifiers.keyCodes)===!0&&l.type===`key${r.modifiers.early===!0?"down":"up"}`&&J(l,e,r,!0)},300)};Y(r,t),e.__qripple=r,he(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&Y(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),be(t,"main"),delete e._qripple)}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(ce),ze={align:{type:String,validator:e=>je.includes(e)}};function Ne(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function de(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{de(e,n)}):e.add(t)}function rt(e){const t=new Set;return e.forEach(n=>{de(t,n)}),Array.from(t)}function Ke(e){return e.appContext.config.globalProperties.$router!==void 0}function at(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function De(e,t){for(const n in t){const r=t[n],l=e[n];if(typeof r=="string"){if(r!==l)return!1}else if(Array.isArray(l)===!1||l.length!==r.length||r.some((d,o)=>d!==l[o]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ie(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ve(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Ie(e[n],t[n])===!1)return!1;return!0}const fe={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},it={...fe,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Qe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=F(),{props:r,proxy:l,emit:d}=n,o=Ke(n),i=c(()=>r.disable!==!0&&r.href!==void 0),q=t===!0?c(()=>o===!0&&r.disable!==!0&&i.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):c(()=>o===!0&&i.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),b=c(()=>q.value===!0?_(r.to):null),s=c(()=>b.value!==null),y=c(()=>i.value===!0||s.value===!0),u=c(()=>r.type==="a"||y.value===!0?"a":r.tag||e||"div"),k=c(()=>i.value===!0?{href:r.href,target:r.target}:s.value===!0?{href:b.value.href,target:r.target}:{}),h=c(()=>{if(s.value===!1)return-1;const{matched:g}=b.value,{length:E}=g,S=g[E-1];if(S===void 0)return-1;const R=l.$route.matched;if(R.length===0)return-1;const B=R.findIndex(ee.bind(null,S));if(B!==-1)return B;const N=Z(g[E-2]);return E>1&&Z(S)===N&&R[R.length-1].path!==N?R.findIndex(ee.bind(null,g[E-2])):B}),p=c(()=>s.value===!0&&h.value!==-1&&De(l.$route.params,b.value.params)),f=c(()=>p.value===!0&&h.value===l.$route.matched.length-1&&Ve(l.$route.params,b.value.params)),x=c(()=>s.value===!0?f.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":p.value===!0?` ${r.activeClass}`:"":"");function _(g){try{return l.$router.resolve(g)}catch{}return null}function C(g,{returnRouterError:E,to:S=r.to,replace:R=r.replace}={}){if(r.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||r.target==="_blank")return Promise.resolve(!1);g.preventDefault();const B=l.$router[R===!0?"replace":"push"](S);return E===!0?B:B.then(()=>{}).catch(()=>{})}function L(g){if(s.value===!0){const E=S=>C(g,S);d("click",g,E),g.defaultPrevented!==!0&&E()}else d("click",g)}return{hasRouterLink:s,hasHrefLink:i,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:C,navigateOnClick:L}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Fe={xs:8,sm:10,md:14,lg:20,xl:24},Ue=["button","submit","reset"],He=/[^\s]\/[^\s]/,We=["flat","outline","push","unelevated"];function ve(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}function ut(e){const t=ve(e);return t!==void 0?{[t]:!0}:{}}const Xe={...ie,...fe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...We.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ze.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Ge={...Xe,round:Boolean};function Je(e){const t=ue(e,Fe),n=Ne(e),{hasRouterLink:r,hasLink:l,linkTag:d,linkAttrs:o,navigateOnClick:i}=Qe({fallbackTag:"button"}),q=c(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),b=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>s.value===!0?e.tabindex||0:-1),u=c(()=>ve(e,"standard")),k=c(()=>{const f={tabindex:y.value};return l.value===!0?Object.assign(f,o.value):Ue.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),r.value!==!0&&He.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),h=c(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=c(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:d,navigateOnClick:i,isActionable:s}}const{passiveCapture:$}=xe;let A=null,T=null,O=null;var lt=Q({name:"QBtn",props:{...Ge,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:r}=F(),{classes:l,style:d,innerClasses:o,attributes:i,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Je(e),u=U(null),k=U(null);let h=null,p,f=null;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=c(()=>({center:e.round})),L=c(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),g=c(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const a={onClick:S,onKeydown:R,onMousedown:N};if(r.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${m}`]=B}return a}return{onClick:P}}),E=c(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:d.value,...i.value,...g.value}));function S(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,$),u.value!==null&&u.value.removeEventListener("blur",K,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,$),u.value.addEventListener("blur",K,$)}}s(a)}}function R(a){u.value!==null&&(n("keydown",a),I(a,[13,32])===!0&&T!==u.value&&(T!==null&&M(),a.defaultPrevented!==!0&&(u.value.focus(),T=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,$)),P(a)))}function B(a){u.value!==null&&(n("touchstart",a),a.defaultPrevented!==!0&&(A!==u.value&&(A!==null&&M(),A=u.value,h=a.target,h.addEventListener("touchcancel",w,$),h.addEventListener("touchend",w,$)),p=!0,f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,p=!1},200)))}function N(a){u.value!==null&&(a.qSkipRipple=p===!0,n("mousedown",a),a.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,$)))}function w(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(T===u.value&&I(a,[13,32])===!0){const m=new MouseEvent("click",a);m.qKeyEvent=!0,a.defaultPrevented===!0&&qe(m),a.cancelBubble===!0&&ae(m),u.value.dispatchEvent(m),P(a),a.qKeyEvent=!0}n("keyup",a)}M()}}function M(a){const m=k.value;a!==!0&&(A===u.value||O===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),A===u.value&&(h!==null&&(h.removeEventListener("touchcancel",w,$),h.removeEventListener("touchend",w,$)),A=h=null),O===u.value&&(document.removeEventListener("mouseup",w,$),O=null),T===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,$),T=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return ke(()=>{M(!0)}),Object.assign(r,{click:a=>{y.value===!0&&S(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(v(G,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&a.push(v("span",{class:"block"},[e.label])),a=z(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(v(G,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:L.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},a)),e.loading!==null&&m.push(v(pe,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Ae)])]:null)),re(v(b.value,E.value,m),[[Me,_.value,void 0,C.value]])}}});export{G as Q,z as a,ie as b,Ze as c,Te as d,et as e,at as f,tt as g,Ee as h,Ae as i,it as j,Qe as k,nt as l,lt as m,rt as n,ut as o,ue as u,Ke as v};
