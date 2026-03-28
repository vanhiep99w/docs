(()=>{var a={};a.id=974,a.ids=[974],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},967:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(5338);let e={aws:"https://aws-learn.pages.dev",microservices:"https://microservice-learn.pages.dev"};function f(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{
  font-family:'DM Sans',system-ui,sans-serif;
  background:#06060a;color:#f0eef6;
  min-height:100vh;overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

.canvas{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.wave{position:absolute;border-radius:40%;animation:morph 20s ease-in-out infinite alternate}
.wave-1{
  width:140vw;height:140vw;top:-60vw;left:-30vw;
  background:conic-gradient(from 180deg at 50% 50%,#7c3aed,#ec4899,#f97316,#eab308,#22d3ee,#7c3aed);
  opacity:.18;filter:blur(60px);animation-delay:0s;
}
.wave-2{
  width:100vw;height:100vw;bottom:-50vw;right:-30vw;
  background:conic-gradient(from 0deg,#3b82f6,#8b5cf6,#ec4899,#3b82f6);
  opacity:.12;filter:blur(80px);animation-delay:-10s;
}
@keyframes morph{
  0%{border-radius:40% 60% 70% 30% / 40% 50% 60% 50%;transform:rotate(0deg) scale(1)}
  100%{border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;transform:rotate(60deg) scale(1.05)}
}
.aurora{position:absolute;width:200%;height:60vh;filter:blur(80px);opacity:.7;mix-blend-mode:screen;animation:aurora-drift 12s ease-in-out infinite alternate}
.aurora-1{top:10%;left:-40%;background:linear-gradient(90deg,transparent 0%,rgba(124,58,237,.18) 20%,rgba(236,72,153,.14) 50%,rgba(34,211,238,.1) 80%,transparent 100%);transform:rotate(-8deg) scaleY(.6)}
.aurora-2{bottom:15%;right:-40%;background:linear-gradient(90deg,transparent 0%,rgba(34,211,238,.12) 30%,rgba(139,92,246,.16) 60%,transparent 100%);transform:rotate(5deg) scaleY(.5);animation-delay:-6s;animation-duration:15s}
@keyframes aurora-drift{
  0%{transform:translateX(-5%) rotate(-8deg) scaleY(.6);opacity:.6}
  100%{transform:translateX(5%) rotate(-4deg) scaleY(.7);opacity:.7}
}
.grid-bg{
  position:absolute;inset:0;
  background-image:linear-gradient(rgba(167,139,250,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,.1) 1px,transparent 1px);
  background-size:60px 60px;opacity:.5;
  -webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 35%,rgba(0,0,0,.6) 0%,transparent 70%);
  mask-image:radial-gradient(ellipse 80% 70% at 50% 35%,rgba(0,0,0,.6) 0%,transparent 70%);
}
.grain{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");background-size:128px 128px}

@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes hue{0%{background-position:0% 50%}100%{background-position:100% 50%}}

.nav{
  position:relative;z-index:10;
  display:flex;align-items:center;justify-content:space-between;
  padding:20px 48px;max-width:1400px;margin:0 auto;
  animation:fadeIn .5s ease both;
}
.brand{
  font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:1.1rem;
  color:#f0eef6;display:flex;align-items:center;gap:10px;text-decoration:none;
}
.brand i{width:10px;height:10px;border-radius:50%;display:block;background:linear-gradient(135deg,#a78bfa,#ec4899);box-shadow:0 0 14px rgba(167,139,250,.6)}

.hero{
  position:relative;z-index:2;
  max-width:700px;margin:0 auto;
  display:flex;flex-direction:column;align-items:center;text-align:center;
  padding:80px 48px 0;
}
.hero .overline{
  font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:500;
  color:#a78bfa;letter-spacing:.12em;text-transform:uppercase;
  margin-bottom:28px;display:flex;align-items:center;gap:8px;
  animation:fadeUp .5s .1s ease both;
}
.hero .overline::before{content:'';width:24px;height:2px;background:linear-gradient(90deg,#a78bfa,#ec4899);border-radius:2px}
.hero h1{
  font-family:'Bricolage Grotesque',sans-serif;
  font-size:clamp(3rem,7vw,5.5rem);font-weight:800;
  line-height:.92;margin-bottom:24px;letter-spacing:-.04em;
  animation:fadeUp .5s .2s ease both;
}
.hero h1 .color{
  display:block;
  background:linear-gradient(135deg,#c084fc 0%,#f472b6 25%,#fb923c 50%,#fbbf24 70%,#22d3ee 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;background-size:200% 100%;
  animation:hue 6s ease-in-out infinite alternate, fadeUp .5s .2s ease both;
}
.hero p{
  font-size:1.1rem;line-height:1.8;color:rgba(240,238,246,.5);
  max-width:480px;margin-bottom:60px;font-weight:300;
  animation:fadeUp .5s .3s ease both;
}

/* ══ PORTAL CARDS ══ */
.portals{
  position:relative;z-index:2;
  max-width:960px;margin:0 auto;padding:0 48px 100px;
  display:grid;grid-template-columns:1fr 1fr;gap:20px;
  animation:fadeUp .6s .4s ease both;
}
.portal{
  text-decoration:none;color:#f0eef6;
  padding:40px;border-radius:28px;
  background:rgba(255,255,255,.025);
  border:1px solid rgba(255,255,255,.06);
  display:flex;flex-direction:column;gap:24px;
  transition:all .4s cubic-bezier(.16,1,.3,1);
  position:relative;overflow:hidden;
}
.portal::before{
  content:'';position:absolute;inset:-1px;border-radius:29px;padding:1px;
  background:var(--p-grad);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  opacity:0;transition:opacity .4s;
}
.portal::after{
  content:'';position:absolute;inset:0;border-radius:28px;
  background:radial-gradient(ellipse at 20% 0%,var(--p-glow) 0%,transparent 60%);
  opacity:0;transition:opacity .4s;z-index:0;
}
.portal:hover{transform:translateY(-8px);border-color:transparent;box-shadow:0 32px 80px rgba(0,0,0,.5)}
.portal:hover::before{opacity:1}
.portal:hover::after{opacity:1}
.portal:active{transform:translateY(-3px) scale(.99)}

.portal-aws{--p-grad:linear-gradient(135deg,#f97316,#fbbf24);--p-glow:rgba(249,115,22,.12)}
.portal-ms{--p-grad:linear-gradient(135deg,#7c3aed,#22d3ee);--p-glow:rgba(124,58,237,.12)}

.portal-top{position:relative;z-index:1;display:flex;align-items:flex-start;justify-content:space-between}
.portal-icon{
  width:52px;height:52px;border-radius:16px;
  display:flex;align-items:center;justify-content:center;
  background:var(--p-grad);opacity:.9;
}
.portal-icon svg{width:24px;height:24px;color:#fff}
.portal-badge{
  font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;
  padding:5px 12px;border-radius:99px;background:rgba(255,255,255,.06);color:rgba(240,238,246,.4);
}
.portal-body{position:relative;z-index:1}
.portal-title{font-family:'Bricolage Grotesque',sans-serif;font-size:1.6rem;font-weight:800;margin-bottom:10px}
.portal-desc{font-size:.9rem;line-height:1.7;color:rgba(240,238,246,.45);font-weight:300}
.portal-footer{
  position:relative;z-index:1;
  display:flex;align-items:center;justify-content:space-between;padding-top:16px;
  border-top:1px solid rgba(255,255,255,.05);
}
.portal-stats{display:flex;gap:16px}
.portal-stat{font-family:'JetBrains Mono',monospace;font-size:.65rem;color:rgba(240,238,246,.3)}
.portal-stat strong{color:rgba(240,238,246,.7);font-weight:500}
.portal-arrow{
  width:36px;height:36px;border-radius:50%;
  background:rgba(255,255,255,.05);
  display:flex;align-items:center;justify-content:center;transition:all .3s;
}
.portal-arrow svg{width:16px;height:16px;color:rgba(240,238,246,.4);transition:all .3s}
.portal:hover .portal-arrow{background:rgba(255,255,255,.12)}
.portal:hover .portal-arrow svg{color:#f0eef6;transform:translateX(2px)}

footer{position:relative;z-index:2;text-align:center;padding:28px 48px;border-top:1px solid rgba(255,255,255,.04)}
footer a{font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(240,238,246,.2);text-decoration:none;transition:color .2s}
footer a:hover{color:#a78bfa}

@media(max-width:768px){
  .nav{padding:16px 24px}
  .hero{padding:60px 24px 0}
  .portals{grid-template-columns:1fr;padding:0 24px 60px}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
      `}),(0,d.jsxs)("div",{className:"canvas",children:[(0,d.jsx)("div",{className:"wave wave-1"}),(0,d.jsx)("div",{className:"wave wave-2"}),(0,d.jsx)("div",{className:"aurora aurora-1"}),(0,d.jsx)("div",{className:"aurora aurora-2"}),(0,d.jsx)("div",{className:"grid-bg"})]}),(0,d.jsx)("div",{className:"grain"}),(0,d.jsx)("nav",{className:"nav",children:(0,d.jsxs)("a",{href:"/",className:"brand",children:[(0,d.jsx)("i",{}),"Learning Docs"]})}),(0,d.jsxs)("section",{className:"hero",children:[(0,d.jsx)("div",{className:"overline",children:(0,d.jsx)("span",{children:"T\xe0i liệu học tập tiếng Việt"})}),(0,d.jsxs)("h1",{children:["Chọn",(0,d.jsx)("br",{}),(0,d.jsx)("span",{className:"color",children:"chủ đề học"})]}),(0,d.jsx)("p",{children:"Tổng hợp t\xe0i liệu kỹ thuật tiếng Việt — từ AWS đến Microservices Architecture."})]}),(0,d.jsxs)("div",{className:"portals",children:[(0,d.jsxs)("a",{href:e.aws,className:"portal portal-aws",children:[(0,d.jsxs)("div",{className:"portal-top",children:[(0,d.jsx)("div",{className:"portal-icon",children:(0,d.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,d.jsx)("path",{d:"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"})})}),(0,d.jsx)("span",{className:"portal-badge",children:"116 t\xe0i liệu"})]}),(0,d.jsxs)("div",{className:"portal-body",children:[(0,d.jsx)("div",{className:"portal-title",children:"AWS Learning"}),(0,d.jsx)("div",{className:"portal-desc",children:"116 dịch vụ AWS, 21 chủ đề — từ EC2, S3, VPC đến IAM, Lambda, v\xe0 Machine Learning."})]}),(0,d.jsxs)("div",{className:"portal-footer",children:[(0,d.jsxs)("div",{className:"portal-stats",children:[(0,d.jsxs)("div",{className:"portal-stat",children:[(0,d.jsx)("strong",{children:"21"})," chủ đề"]}),(0,d.jsxs)("div",{className:"portal-stat",children:[(0,d.jsx)("strong",{children:"116"})," docs"]})]}),(0,d.jsx)("div",{className:"portal-arrow",children:(0,d.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,d.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]}),(0,d.jsxs)("a",{href:e.microservices,className:"portal portal-ms",children:[(0,d.jsxs)("div",{className:"portal-top",children:[(0,d.jsx)("div",{className:"portal-icon",children:(0,d.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,d.jsx)("rect",{x:"2",y:"3",width:"6",height:"6",rx:"1"}),(0,d.jsx)("rect",{x:"16",y:"3",width:"6",height:"6",rx:"1"}),(0,d.jsx)("rect",{x:"9",y:"15",width:"6",height:"6",rx:"1"}),(0,d.jsx)("path",{d:"M5 9v3a1 1 0 001 1h12a1 1 0 001-1V9"}),(0,d.jsx)("path",{d:"M12 13v2"})]})}),(0,d.jsx)("span",{className:"portal-badge",children:"27 t\xe0i liệu"})]}),(0,d.jsxs)("div",{className:"portal-body",children:[(0,d.jsx)("div",{className:"portal-title",children:"Microservices"}),(0,d.jsx)("div",{className:"portal-desc",children:"Kiến tr\xfac Microservice từ cơ bản đến n\xe2ng cao — patterns, deployment, observability, v\xe0 case studies."})]}),(0,d.jsxs)("div",{className:"portal-footer",children:[(0,d.jsxs)("div",{className:"portal-stats",children:[(0,d.jsxs)("div",{className:"portal-stat",children:[(0,d.jsx)("strong",{children:"12"})," chủ đề"]}),(0,d.jsxs)("div",{className:"portal-stat",children:[(0,d.jsx)("strong",{children:"27"})," docs"]})]}),(0,d.jsx)("div",{className:"portal-arrow",children:(0,d.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,d.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]}),(0,d.jsx)("footer",{children:(0,d.jsx)("a",{href:"https://github.com/vanhiep99w",children:"github.com/vanhiep99w"})})]})}},1025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},1472:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(5338);let e={title:"Learning Docs",description:"T\xe0i liệu học AWS v\xe0 Microservices tiếng Việt"};function f({children:a}){return(0,d.jsx)("html",{lang:"vi",children:(0,d.jsx)("body",{children:a})})}},3033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4483:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,1170,23)),Promise.resolve().then(c.t.bind(c,3597,23)),Promise.resolve().then(c.t.bind(c,6893,23)),Promise.resolve().then(c.t.bind(c,9748,23)),Promise.resolve().then(c.t.bind(c,6060,23)),Promise.resolve().then(c.t.bind(c,7184,23)),Promise.resolve().then(c.t.bind(c,9576,23)),Promise.resolve().then(c.t.bind(c,3041,23)),Promise.resolve().then(c.t.bind(c,1384,23))},4731:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,4160,23)),Promise.resolve().then(c.t.bind(c,1603,23)),Promise.resolve().then(c.t.bind(c,8495,23)),Promise.resolve().then(c.t.bind(c,5170,23)),Promise.resolve().then(c.t.bind(c,7526,23)),Promise.resolve().then(c.t.bind(c,8922,23)),Promise.resolve().then(c.t.bind(c,9234,23)),Promise.resolve().then(c.t.bind(c,2263,23)),Promise.resolve().then(c.bind(c,2146))},5957:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(9754),e=c(9117),f=c(6595),g=c(2324),h=c(9326),i=c(8928),j=c(175),k=c(12),l=c(4290),m=c(2696),n=c(2802),o=c(7533),p=c(5229),q=c(2822),r=c(261),s=c(6453),t=c(2474),u=c(6713),v=c(1356),w=c(2685),x=c(6225),y=c(3446),z=c(2762),A=c(5742),B=c(6439),C=c(1170),D=c.n(C),E=c(2506),F=c(1203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,967)),"/home/hieptran/Desktop/docs/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,1472)),"/home/hieptran/Desktop/docs/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,1170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,7028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,2768,23)),"next/dist/client/components/builtin/unauthorized.js"]}],I=["/home/hieptran/Desktop/docs/src/app/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(9902).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},6439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},6487:()=>{},6713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},8335:()=>{},8354:a=>{"use strict";a.exports=require("util")},9121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9902:a=>{"use strict";a.exports=require("path")}};var b=require("../webpack-runtime.js");b.C(a);var c=b.X(0,[778],()=>b(b.s=5957));module.exports=c})();