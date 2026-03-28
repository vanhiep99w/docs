1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
d:I[7150,[],""]
4:T20ef,
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
      0:{"P":null,"b":"73YFgikVGMPnO_hbMU24S","p":"","c":["",""],"i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[null,["$","html",null,{"lang":"vi","children":["$","body",null,{"children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[[["$","style",null,{"children":"$4"}],"$L5","$L6","$L7","$L8","$L9","$La"],null,"$Lb"]}],{},null,false]},null,false],"$Lc",false]],"m":"$undefined","G":["$d",[]],"s":false,"S":true}
e:I[4431,[],"OutletBoundary"]
10:I[5278,[],"AsyncMetadataOutlet"]
12:I[4431,[],"ViewportBoundary"]
14:I[4431,[],"MetadataBoundary"]
15:"$Sreact.suspense"
5:["$","div",null,{"className":"canvas","children":[["$","div",null,{"className":"wave wave-1"}],["$","div",null,{"className":"wave wave-2"}],["$","div",null,{"className":"aurora aurora-1"}],["$","div",null,{"className":"aurora aurora-2"}],["$","div",null,{"className":"grid-bg"}]]}]
6:["$","div",null,{"className":"grain"}]
7:["$","nav",null,{"className":"nav","children":["$","a",null,{"href":"/","className":"brand","children":[["$","i",null,{}],"Learning Docs"]}]}]
8:["$","section",null,{"className":"hero","children":[["$","div",null,{"className":"overline","children":["$","span",null,{"children":"Tài liệu học tập tiếng Việt"}]}],["$","h1",null,{"children":["Chọn",["$","br",null,{}],["$","span",null,{"className":"color","children":"chủ đề học"}]]}],["$","p",null,{"children":"Tổng hợp tài liệu kỹ thuật tiếng Việt — từ AWS đến Microservices Architecture."}]]}]
9:["$","div",null,{"className":"portals","children":[["$","a",null,{"href":"https://aws-learn.pages.dev","className":"portal portal-aws","children":[["$","div",null,{"className":"portal-top","children":[["$","div",null,{"className":"portal-icon","children":["$","svg",null,{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","children":["$","path",null,{"d":"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"}]}]}],["$","span",null,{"className":"portal-badge","children":"116 tài liệu"}]]}],["$","div",null,{"className":"portal-body","children":[["$","div",null,{"className":"portal-title","children":"AWS Learning"}],["$","div",null,{"className":"portal-desc","children":"116 dịch vụ AWS, 21 chủ đề — từ EC2, S3, VPC đến IAM, Lambda, và Machine Learning."}]]}],["$","div",null,{"className":"portal-footer","children":[["$","div",null,{"className":"portal-stats","children":[["$","div",null,{"className":"portal-stat","children":[["$","strong",null,{"children":"21"}]," chủ đề"]}],["$","div",null,{"className":"portal-stat","children":[["$","strong",null,{"children":"116"}]," docs"]}]]}],["$","div",null,{"className":"portal-arrow","children":["$","svg",null,{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","children":["$","path",null,{"d":"M5 12h14M12 5l7 7-7 7"}]}]}]]}]]}],["$","a",null,{"href":"https://microservice-learn.pages.dev","className":"portal portal-ms","children":[["$","div",null,{"className":"portal-top","children":[["$","div",null,{"className":"portal-icon","children":["$","svg",null,{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","children":[["$","rect",null,{"x":"2","y":"3","width":"6","height":"6","rx":"1"}],["$","rect",null,{"x":"16","y":"3","width":"6","height":"6","rx":"1"}],["$","rect",null,{"x":"9","y":"15","width":"6","height":"6","rx":"1"}],["$","path",null,{"d":"M5 9v3a1 1 0 001 1h12a1 1 0 001-1V9"}],["$","path",null,{"d":"M12 13v2"}]]}]}],["$","span",null,{"className":"portal-badge","children":"27 tài liệu"}]]}],["$","div",null,{"className":"portal-body","children":[["$","div",null,{"className":"portal-title","children":"Microservices"}],["$","div",null,{"className":"portal-desc","children":"Kiến trúc Microservice từ cơ bản đến nâng cao — patterns, deployment, observability, và case studies."}]]}],["$","div",null,{"className":"portal-footer","children":[["$","div",null,{"className":"portal-stats","children":[["$","div",null,{"className":"portal-stat","children":[["$","strong",null,{"children":"12"}]," chủ đề"]}],["$","div",null,{"className":"portal-stat","children":[["$","strong",null,{"children":"27"}]," docs"]}]]}],["$","div",null,{"className":"portal-arrow","children":["$","svg",null,{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","children":["$","path",null,{"d":"M5 12h14M12 5l7 7-7 7"}]}]}]]}]]}]]}]
a:["$","footer",null,{"children":["$","a",null,{"href":"https://github.com/vanhiep99w","children":"github.com/vanhiep99w"}]}]
b:["$","$Le",null,{"children":["$Lf",["$","$L10",null,{"promise":"$@11"}]]}]
c:["$","$1","h",{"children":[null,[["$","$L12",null,{"children":"$L13"}],null],["$","$L14",null,{"children":["$","div",null,{"hidden":true,"children":["$","$15",null,{"fallback":null,"children":"$L16"}]}]}]]}]
13:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
f:null
11:{"metadata":[["$","title","0",{"children":"Learning Docs"}],["$","meta","1",{"name":"description","content":"Tài liệu học AWS và Microservices tiếng Việt"}]],"error":null,"digest":"$undefined"}
16:"$11:metadata"
