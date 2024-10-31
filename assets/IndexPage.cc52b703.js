import{c as d,k as $,h as g,A as Ce,y as M,p as qe,B as Pe,C as X,D as Z,I as oe,l as ee,J as te,r as J,w as N,g as U,a4 as _e,a8 as Se,H as re,a9 as we,o as pe,n as he,aa as Be,i as le,v as F,x as ke,M as $e,P as B,Q as ne,R as Q,S as b,f as k,_ as R,F as ie,$ as se,Z as Ve,U as A,Y as ue,V as ae,W as H,ab as Ie}from"./index.5b60ec7f.js";import{g as ce,s as de,d as Ae,e as Te,a as ye,u as be,b as Oe,c as je,f as Fe}from"./use-quasar.8fd58a35.js";import{l as Qe,h as T,v as Ne,e as De,j as G,a as xe,m as Ee,Q as ve}from"./QBtn.65aee399.js";const ze={ratio:[String,Number]};function Le(e,n){return d(()=>{const a=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}var fe=$({name:"QVideo",props:{...ze,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const n=Le(e),a=d(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>g("div",{class:a.value,style:n.value},[g("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});function Me(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,r)=>{const o=parseFloat(a);o&&(n[r]=o)}),n}var Re=Ce({name:"touch-swipe",beforeMount(e,{value:n,arg:a,modifiers:r}){if(r.mouse!==!0&&M.has.touch!==!0)return;const o=r.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Me(a),direction:ce(r),noop:qe,mouseStart(l){de(l,t)&&Pe(l)&&(X(t,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(l,!0))},touchStart(l){if(de(l,t)){const i=l.target;X(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","notPassiveCapture"],[i,"touchend","end","notPassiveCapture"]]),t.start(l)}},start(l,i){M.is.firefox===!0&&Z(e,!0);const m=oe(l);t.event={x:m.left,y:m.top,time:Date.now(),mouse:i===!0,dir:!1}},move(l){if(t.event===void 0)return;if(t.event.dir!==!1){ee(l);return}const i=Date.now()-t.event.time;if(i===0)return;const m=oe(l),x=m.left-t.event.x,u=Math.abs(x),y=m.top-t.event.y,c=Math.abs(y);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&c<t.sensitivity[1]){t.end(l);return}}else if(window.getSelection().toString()!==""){t.end(l);return}else if(u<t.sensitivity[2]&&c<t.sensitivity[2])return;const v=u/i,C=c/i;t.direction.vertical===!0&&u<c&&u<100&&C>t.sensitivity[0]&&(t.event.dir=y<0?"up":"down"),t.direction.horizontal===!0&&u>c&&c<100&&v>t.sensitivity[0]&&(t.event.dir=x<0?"left":"right"),t.direction.up===!0&&u<c&&y<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<c&&y>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>c&&x<0&&c<100&&v>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>c&&x>0&&c<100&&v>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ee(l),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ae(),t.styleCleanup=_=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const S=()=>{document.body.classList.remove("no-pointer-events--children")};_===!0?setTimeout(S,50):S()}),t.handler({evt:l,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:i,distance:{x:u,y:c}})):t.end(l)},end(l){t.event!==void 0&&(te(t,"temp"),M.is.firefox===!0&&Z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),l!==void 0&&t.event.dir!==!1&&ee(l),t.event=void 0)}};if(e.__qtouchswipe=t,r.mouse===!0){const l=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";X(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}M.has.touch===!0&&X(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchswipe;a!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&a.end(),a.handler=n.value),a.direction=ce(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(te(n,"main"),te(n,"temp"),M.is.firefox===!0&&Z(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function He(){let e=Object.create(null);return{getCache:(n,a)=>e[n]===void 0?e[n]=typeof a=="function"?a():a:e[n],setCache(n,a){e[n]=a},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Ke={name:{required:!0},disable:Boolean},ge={setup(e,{slots:n}){return()=>g("div",{class:"q-panel scroll",role:"tabpanel"},T(n.default))}},Ue={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},We=["update:modelValue","beforeTransition","transition"];function Ye(){const{props:e,emit:n,proxy:a}=U(),{getCache:r}=He(),{registerTimeout:o}=Te();let t,l;const i=J(null),m=J(null);function x(s){const f=e.vertical===!0?"up":"left";w((a.$q.lang.rtl===!0?-1:1)*(s.direction===f?1:-1))}const u=d(()=>[[Re,x,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),y=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),c=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),_=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),S=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);N(()=>e.modelValue,(s,f)=>{const P=V(s)===!0?E(s):-1;l!==!0&&j(P===-1?0:P<E(f)?-1:1),i.value!==P&&(i.value=P,n("beforeTransition",s,f),o(()=>{n("transition",s,f)},e.transitionDuration))});function p(){w(1)}function O(){w(-1)}function D(s){n("update:modelValue",s)}function V(s){return s!=null&&s!==""}function E(s){return t.findIndex(f=>f.props.name===s&&f.props.disable!==""&&f.props.disable!==!0)}function z(){return t.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function j(s){const f=s!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(s===-1?y.value:c.value):null;m.value!==f&&(m.value=f)}function w(s,f=i.value){let P=f+s;for(;P!==-1&&P<t.length;){const Y=t[P];if(Y!==void 0&&Y.props.disable!==""&&Y.props.disable!==!0){j(s),l=!0,n("update:modelValue",Y.props.name),setTimeout(()=>{l=!1});return}P+=s}e.infinite===!0&&t.length!==0&&f!==-1&&f!==t.length&&w(s,s===-1?t.length:-1)}function W(){const s=E(e.modelValue);return i.value!==s&&(i.value=s),!0}function h(){const s=V(e.modelValue)===!0&&W()&&t[i.value];return e.keepAlive===!0?[g(Se,_.value,[g(S.value===!0?r(C.value,()=>({...ge,name:C.value})):ge,{key:C.value,style:v.value},()=>s)])]:[g("div",{class:"q-panel scroll",style:v.value,key:C.value,role:"tabpanel"},[s])]}function I(){if(t.length!==0)return e.animated===!0?[g(_e,{name:m.value},h)]:h()}function L(s){return t=Qe(T(s.default,[])).filter(f=>f.props!==null&&f.props.slot===void 0&&V(f.props.name)===!0),t.length}function q(){return t}return Object.assign(a,{next:p,previous:O,goTo:D}),{panelIndex:i,panelDirectives:u,updatePanelsList:L,updatePanelIndex:W,getPanelContent:I,getEnabledPanels:z,getPanels:q,isValidPanelName:V,keepAliveProps:_,needsUniqueKeepAliveWrapper:S,goToPanelByOffset:w,goToPanel:D,nextPanel:p,previousPanel:O}}var Xe=$({name:"QCarouselSlide",props:{...Ke,imgSrc:String},setup(e,{slots:n}){const a=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>g("div",{class:"q-carousel__slide",style:a.value},T(n.default))}});let K=0;const Ge={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Je=["update:fullscreen","fullscreen"];function Ze(){const e=U(),{props:n,emit:a,proxy:r}=e;let o,t,l;const i=J(!1);Ne(e)===!0&&N(()=>r.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),N(()=>n.fullscreen,y=>{i.value!==y&&m()}),N(i,y=>{a("update:fullscreen",y),a("fullscreen",y)});function m(){i.value===!0?u():x()}function x(){i.value!==!0&&(i.value=!0,l=r.$el.parentNode,l.replaceChild(t,r.$el),document.body.appendChild(r.$el),K++,K===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:u},re.add(o))}function u(){i.value===!0&&(o!==void 0&&(re.remove(o),o=void 0),l.replaceChild(r.$el,t),i.value=!1,K=Math.max(0,K-1),K===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return we(()=>{t=document.createElement("span")}),pe(()=>{n.fullscreen===!0&&x()}),he(u),Object.assign(r,{toggleFullscreen:m,setFullscreen:x,exitFullscreen:u}),{inFullscreen:i,toggleFullscreen:m}}const et=["top","right","bottom","left"],tt=["regular","flat","outline","push","unelevated"];var nt=$({name:"QCarousel",props:{...ye,...Ue,...Ge,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>tt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>et.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Je,...We],setup(e,{slots:n}){const{proxy:{$q:a}}=U(),r=be(e,a);let o=null,t;const{updatePanelsList:l,getPanelContent:i,panelDirectives:m,goToPanel:x,previousPanel:u,nextPanel:y,getEnabledPanels:c,panelIndex:v}=Ye(),{inFullscreen:C}=Ze(),_=d(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),S=d(()=>e.vertical===!0?"vertical":"horizontal"),p=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),O=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${S.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${p.value}`:"")),D=d(()=>{const h=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?h.reverse():h}),V=d(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),E=d(()=>e.navigationActiveIcon||V.value),z=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));N(()=>e.modelValue,()=>{e.autoplay&&j()}),N(()=>e.autoplay,h=>{h?j():o!==null&&(clearTimeout(o),o=null)});function j(){const h=Be(e.autoplay)===!0?Math.abs(e.autoplay):5e3;o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,h>=0?y():u()},h)}pe(()=>{e.autoplay&&j()}),he(()=>{o!==null&&clearTimeout(o)});function w(h,I){return g("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${h} q-carousel__navigation--${p.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[g("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},c().map(I))])}function W(){const h=[];if(e.navigation===!0){const I=n["navigation-icon"]!==void 0?n["navigation-icon"]:q=>g(G,{key:"nav"+q.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${q.active===!0?"":"in"}active`,...q.btnProps,onClick:q.onClick}),L=t-1;h.push(w("buttons",(q,s)=>{const f=q.props.name,P=v.value===s;return I({index:s,maxIndex:L,name:f,active:P,btnProps:{icon:P===!0?E.value:V.value,size:"sm",...z.value},onClick:()=>{x(f)}})}))}else if(e.thumbnails===!0){const I=e.controlColor!==void 0?` text-${e.controlColor}`:"";h.push(w("thumbnails",L=>{const q=L.props;return g("img",{key:"tmb#"+q.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${q.name===e.modelValue?"":"in"}active`+I,src:q.imgSrc||q["img-src"],onClick:()=>{x(q.name)}})}))}return e.arrows===!0&&v.value>=0&&((e.infinite===!0||v.value>0)&&h.push(g("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center`},[g(G,{icon:D.value[0],...z.value,onClick:u})])),(e.infinite===!0||v.value<t-1)&&h.push(g("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center`},[g(G,{icon:D.value[1],...z.value,onClick:y})]))),xe(n.control,h)}return()=>(t=l(n),g("div",{class:O.value,style:_.value},[De("div",{class:"q-carousel__slides-container"},i(),"sl-cont",e.swipeable,()=>m.value)].concat(W())))}}),at=$({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const a=d(()=>{const r=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${r.length!==0?" "+r:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>g("div",{class:a.value},T(n.default))}}),ot=$({name:"QBtnToggle",props:{...Oe,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(n=>("label"in n||"icon"in n||"slot"in n)&&"value"in n)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:n,emit:a}){const r=d(()=>e.options.find(c=>c.value===e.modelValue)!==void 0),o=d(()=>({type:"hidden",name:e.name,value:e.modelValue})),t=je(o),l=d(()=>Ee(e)),i=d(()=>({rounded:e.rounded,dense:e.dense,...l.value})),m=d(()=>e.options.map((c,v)=>{const{attrs:C,value:_,slot:S,...p}=c;return{slot:S,props:{key:v,"aria-pressed":_===e.modelValue?"true":"false",...C,...p,...i.value,disable:e.disable===!0||p.disable===!0,color:_===e.modelValue?u(p,"toggleColor"):u(p,"color"),textColor:_===e.modelValue?u(p,"toggleTextColor"):u(p,"textColor"),noCaps:u(p,"noCaps")===!0,noWrap:u(p,"noWrap")===!0,size:u(p,"size"),padding:u(p,"padding"),ripple:u(p,"ripple"),stack:u(p,"stack")===!0,stretch:u(p,"stretch")===!0,onClick(O){x(_,c,O)}}}}));function x(c,v,C){e.readonly!==!0&&(e.modelValue===c?e.clearable===!0&&(a("update:modelValue",null,null),a("clear")):a("update:modelValue",c,v),a("click",C))}function u(c,v){return c[v]===void 0?e[v]:c[v]}function y(){const c=m.value.map(v=>g(G,v.props,v.slot!==void 0?n[v.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&r.value===!0&&t(c,"push"),xe(n.default,c)}return()=>g(at,{class:"q-btn-toggle",...l.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},y)}}),me=$({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const a=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(e.tag,{class:a.value},T(n.default))}}),rt=$({name:"QCard",props:{...ye,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=U(),r=be(e,a),o=d(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>g(e.tag,{class:o.value},T(n.default))}}),lt=$({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:a}}=U(),r=le(ke,F);if(r===F)return console.error("QPage needs to be a deep child of QLayout"),F;if(le($e,F)===F)return console.error("QPage needs to be child of QPageContainer"),F;const t=d(()=>{const i=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const m=r.isContainer.value===!0?r.containerHeight.value:a.screen.height;return e.styleFn(i,m)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-i+"px":a.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":a.screen.height-i+"px"}}),l=d(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:l.value,style:t.value},T(n.default))}});var it=(e,n)=>{const a=e.__vccOpts||e;for(const[r,o]of n)a[r]=o;return a};const st={class:"q-pa-md"},ut={key:0},ct={key:0,style:{width:"350px",height:"230px"}},dt={class:"row justify-center"},vt={class:"text-h6"},ft={class:"q-pl-xs"},gt={class:"q-pl-xs"},mt=Object.assign({name:"IndexPage"},{__name:"IndexPage",props:{cardObject:{type:Object,required:!0}},setup(e){const n=Fe(),a=J("Front Ocho");return(r,o)=>(B(),ne(lt,{class:"flex flex-center bg-image"},{default:Q(()=>[b("div",st,[k(rt,{class:"my-card",style:Ie({backgroundColor:ae(n).dark.isActive?"rgba(0, 0, 0, 0.5)":"rgba(255, 255, 255, 0.6)"})},{default:Q(()=>[e.cardObject.video?(B(),R("div",ut,[Array.isArray(e.cardObject.video)?(B(),R("div",ct,[k(nt,{animated:"",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),infinite:"",style:{width:"350px",height:"200px"}},{default:Q(()=>[(B(!0),R(ie,null,se(e.cardObject.video,(t,l)=>(B(),ne(Xe,{key:l,name:t.name},{default:Q(()=>[k(fe,{class:"absolute-full",src:`https://www.youtube.com/embed/${t.src}?rel=0`,style:{width:"350px",height:"200px"}},null,8,["src"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),b("div",dt,[k(ot,{dense:"","no-caps":"",glossy:"","toggle-color":"black",modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value=t),options:[...e.cardObject.video.map(t=>({label:t.name,value:t.name}))]},null,8,["modelValue","options"])])])):(B(),ne(fe,{key:1,src:`https://www.youtube.com/embed/${e.cardObject.video}?rel=0`,style:{width:"350px",height:"200px"}},null,8,["src"]))])):Ve("",!0),k(me,null,{default:Q(()=>[b("div",vt,A(e.cardObject.term),1)]),_:1}),k(me,{class:"q-pt-none"},{default:Q(()=>[b("p",null,A(e.cardObject.description.what_it_is),1),o[6]||(o[6]=b("hr",null,null,-1)),b("div",{class:ue(`tag label tag ${ae(n).dark.isActive?"text-red-3":"text-red-9"}`)},[k(ve,{name:"key"}),o[2]||(o[2]=H(" Key Elements "))],2),(B(!0),R(ie,null,se(e.cardObject.description.key_elements,(t,l)=>(B(),R("p",{key:l,class:"q-pl-xs"},[b("strong",null,A(t.split(":")[0])+":",1),H(" "+A(t.split(":")[1]),1)]))),128)),b("div",{class:ue(`tag label tag ${ae(n).dark.isActive?"text-red-3":"text-red-9"}`)},[k(ve,{name:"supervisor_account"}),o[3]||(o[3]=H(" Roles "))],2),b("p",ft,[o[4]||(o[4]=b("span",null,[b("strong",null,"Leader: ")],-1)),H(A(e.cardObject.description.roles.Leader),1)]),b("p",gt,[o[5]||(o[5]=b("span",null,[b("strong",null,"Follower: ")],-1)),H(A(e.cardObject.description.roles.Follower),1)]),o[7]||(o[7]=b("hr",null,null,-1)),b("p",null,A(e.cardObject.description.importance),1)]),_:1})]),_:1},8,["style"])])]),_:1}))}});var bt=it(mt,[["__scopeId","data-v-39c29b20"]]);export{bt as default};
