/* ═══════════════════════════════════════════════════════════
   KPSS Ön Lisans — Tekrar Atlası
   Tasarım fikri: fiziki harita lejantı. Renkler yükselti
   basamaklarından (ova → plato → dağ → zirve) alınmıştır.
   ═══════════════════════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root{
  /* lejant renkleri */
  --ova:#7d9f57; --plato:#d3a63f; --dag:#bd6f36; --zirve:#e6dcc7;
  --akarsu:#3f9ac4; --lav:#a1495c; --baraj:#37718f; --sinir:#bf4a41;

  /* kağıt teması */
  --bg:#eae5d7; --bg2:#f3efe4; --card:#fbf8f0; --ink:#1c2b30;
  --ink2:#4a5a5f; --ink3:#7b888c; --line:#cfc7b3; --line2:#e0d9c7;
  --acc:#c98a2e;
  --sel:rgba(201,138,46,.16);
  --shadow:0 1px 0 rgba(28,43,48,.05), 0 8px 22px -14px rgba(28,43,48,.4);

  /* ders renkleri */
  --c-cog:#c07f28; --c-tar:#b8453c; --c-tur:#37809f; --c-mat:#5e8f52; --c-vat:#7f66a8;

  --f-d:'Archivo',system-ui,sans-serif;
  --f-b:'Source Serif 4',Georgia,serif;
  --f-m:'IBM Plex Mono',ui-monospace,monospace;

  --r:10px; --w:1180px;
}
[data-tema="gece"]{
  --bg:#0d1f27; --bg2:#122932; --card:#16323d; --ink:#e6ecec;
  --ink2:#a9bcbf; --ink3:#748b90; --line:#27454f; --line2:#1e3a44;
  --zirve:#cfc2a6; --sel:rgba(224,177,90,.18); --acc:#e0b15a;
  --shadow:0 1px 0 rgba(0,0,0,.2), 0 10px 26px -16px #000;
  --c-cog:#e0b15a; --c-tar:#e0736a; --c-tur:#63b6d6; --c-mat:#8dbc7e; --c-vat:#a98fd0;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0; background:var(--bg); color:var(--ink);
  font-family:var(--f-b); font-size:16.5px; line-height:1.62;
  -webkit-font-smoothing:antialiased;
}
a{color:inherit}
button{font-family:inherit; cursor:pointer}
h1,h2,h3,h4{font-family:var(--f-d); font-weight:700; letter-spacing:-.02em; line-height:1.15; margin:0}

/* ─── yükselti şeridi: sitenin imzası ─── */
.ramp{height:4px; display:flex; width:100%}
.ramp i{flex:1; display:block}
.ramp i:nth-child(1){background:var(--ova)}
.ramp i:nth-child(2){background:var(--plato)}
.ramp i:nth-child(3){background:var(--dag)}
.ramp i:nth-child(4){background:var(--lav)}
.ramp i:nth-child(5){background:var(--zirve)}

/* ─── başlık ─── */
.head{position:sticky; top:0; z-index:60; background:var(--bg2); border-bottom:1px solid var(--line)}
.head-in{max-width:var(--w); margin:0 auto; padding:11px 20px; display:flex; align-items:center; gap:14px}
.brand{display:flex; align-items:center; gap:11px; text-decoration:none; margin-right:auto}
.brand svg{width:30px; height:30px; flex:none}
.brand b{font-family:var(--f-d); font-weight:800; font-size:16px; letter-spacing:-.03em; display:block; line-height:1.1}
.brand span{font-family:var(--f-m); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink3)}
.hbtn{background:none; border:1px solid var(--line); color:var(--ink2); border-radius:99px; padding:6px 13px;
  font-family:var(--f-d); font-size:12.5px; font-weight:600; transition:.15s}
.hbtn:hover{border-color:var(--acc); color:var(--acc)}
#menuBtn{display:none}

/* ─── iskelet ─── */
.shell{max-width:var(--w); margin:0 auto; display:grid; grid-template-columns:262px 1fr; gap:34px; padding:0 20px}
.side{position:sticky; top:57px; height:calc(100vh - 57px); overflow-y:auto; padding:22px 0 60px; scrollbar-width:thin}
.side::-webkit-scrollbar{width:5px} .side::-webkit-scrollbar-thumb{background:var(--line); border-radius:9px}
main{padding:30px 0 90px; min-width:0}

/* ─── arama ─── */
.srch{position:relative; margin-bottom:16px}
.srch input{width:100%; padding:8px 11px 8px 30px; border:1px solid var(--line); background:var(--card);
  color:var(--ink); border-radius:8px; font-family:var(--f-d); font-size:13px; outline:none}
.srch input:focus{border-color:var(--acc)}
.srch svg{position:absolute; left:9px; top:9px; width:14px; height:14px; stroke:var(--ink3); fill:none; stroke-width:2}

/* ─── yan menü ─── */
.nav-ders{margin-bottom:5px; border-radius:9px; overflow:hidden}
.nav-t{width:100%; display:flex; align-items:center; gap:9px; padding:9px 11px; background:none; border:0;
  text-align:left; color:var(--ink); font-family:var(--f-d); font-weight:600; font-size:14px; border-radius:8px}
.nav-t:hover{background:var(--bg2)}
.nav-t .dot{width:9px; height:9px; border-radius:3px; flex:none}
.nav-t .cnt{margin-left:auto; font-family:var(--f-m); font-size:10.5px; color:var(--ink3)}
.nav-t .arw{width:11px; height:11px; stroke:var(--ink3); fill:none; stroke-width:2.4; transition:.2s}
.nav-ders.acik .arw{transform:rotate(90deg)}
.nav-k{display:none; padding:2px 0 8px 11px; margin-left:9px; border-left:1px solid var(--line2)}
.nav-ders.acik .nav-k{display:block}
.nav-k a{display:block; padding:5px 9px; font-size:13.4px; color:var(--ink2); text-decoration:none;
  border-radius:6px; line-height:1.35; font-family:var(--f-d); font-weight:500}
.nav-k a:hover{background:var(--bg2); color:var(--ink)}
.nav-k a.on{background:var(--sel); color:var(--ink); font-weight:600}
.nav-k a .st{float:right; font-family:var(--f-m); font-size:9px; color:var(--ink3); letter-spacing:.06em; margin-top:2px}

/* ─── ana sayfa ─── */
.hero{padding:44px 0 34px; border-bottom:1px solid var(--line)}
.eyebrow{font-family:var(--f-m); font-size:10.5px; letter-spacing:.2em; text-transform:uppercase; color:var(--ink3); margin-bottom:14px}
.hero h1{font-size:clamp(34px,5.4vw,56px); font-weight:800; letter-spacing:-.038em; max-width:16ch}
.hero h1 em{font-style:normal; color:var(--acc)}
.hero p{max-width:56ch; color:var(--ink2); margin:16px 0 0; font-size:17px}
.hero-map{margin:26px 0 0; border:1px solid var(--line); border-radius:var(--r); background:var(--card); padding:10px; overflow:hidden}
.hero-map svg{width:100%; height:auto; display:block}

.gridDers{display:grid; grid-template-columns:repeat(auto-fill,minmax(232px,1fr)); gap:14px; margin:28px 0}
.dc{background:var(--card); border:1px solid var(--line); border-radius:var(--r); padding:17px 17px 15px;
  text-decoration:none; display:block; position:relative; overflow:hidden; transition:.18s; box-shadow:var(--shadow)}
.dc:hover{transform:translateY(-2px); border-color:var(--dc)}
.dc::before{content:''; position:absolute; inset:0 auto 0 0; width:3px; background:var(--dc)}
.dc .bl{font-family:var(--f-m); font-size:9.5px; letter-spacing:.15em; text-transform:uppercase; color:var(--ink3)}
.dc h3{font-size:20px; margin:7px 0 6px; letter-spacing:-.03em}
.dc .num{font-family:var(--f-m); font-size:12px; color:var(--dc); font-weight:600}
.dc p{margin:9px 0 0; font-size:13.6px; color:var(--ink2); line-height:1.5}
.dc .kt{margin-top:12px; padding-top:10px; border-top:1px solid var(--line2); font-family:var(--f-m); font-size:10.5px; color:var(--ink3)}

.plan{background:var(--bg2); border:1px solid var(--line); border-radius:var(--r); padding:20px 22px; margin:8px 0 40px}
.plan h3{font-size:16px; margin-bottom:12px}
.plan ol{margin:0; padding-left:19px; color:var(--ink2); font-size:14.6px}
.plan li{margin-bottom:7px}
.plan li b{color:var(--ink)}

/* ─── ders sayfası ─── */
.dhead{border-bottom:1px solid var(--line); padding-bottom:22px; margin-bottom:26px}
.dhead h1{font-size:clamp(28px,4.4vw,42px); letter-spacing:-.035em}
.dhead .lead{color:var(--ink2); max-width:60ch; margin:12px 0 0}
.pill{display:inline-flex; align-items:center; gap:6px; font-family:var(--f-m); font-size:11px; letter-spacing:.08em;
  text-transform:uppercase; padding:4px 10px; border-radius:99px; border:1px solid var(--line); color:var(--ink2)}
.metod{display:grid; gap:8px; margin:20px 0 0; padding:16px 18px; background:var(--bg2); border-radius:var(--r); border:1px solid var(--line)}
.metod div{font-size:14px; color:var(--ink2); padding-left:20px; position:relative}
.metod div::before{content:'→'; position:absolute; left:0; color:var(--acc); font-family:var(--f-m)}

.klist{display:grid; gap:9px}
.ki{display:flex; align-items:center; gap:13px; padding:13px 16px; background:var(--card); border:1px solid var(--line);
  border-radius:9px; text-decoration:none; transition:.15s}
.ki:hover{border-color:var(--acc); transform:translateX(3px)}
.ki .no{font-family:var(--f-m); font-size:11.5px; color:var(--ink3); width:22px; flex:none}
.ki .tx{flex:1; min-width:0}
.ki .tx b{display:block; font-family:var(--f-d); font-size:15px; font-weight:600; letter-spacing:-.01em}
.ki .tx span{font-size:13px; color:var(--ink2); display:block; margin-top:2px}
.ki .sq{font-family:var(--f-m); font-size:10.5px; padding:3px 8px; border-radius:5px; background:var(--bg2);
  color:var(--ink2); flex:none; white-space:nowrap}
.ki .tag{font-family:var(--f-m); font-size:9px; letter-spacing:.1em; text-transform:uppercase; padding:3px 7px;
  border-radius:4px; flex:none; border:1px solid var(--line)}
.tag.iskelet{color:var(--ink3)}
.tag.hazir{color:var(--ova); border-color:var(--ova)}

/* ─── konu sayfası ─── */
.crumb{font-family:var(--f-m); font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:var(--ink3); margin-bottom:12px}
.crumb a{color:var(--ink2); text-decoration:none}
.crumb a:hover{color:var(--acc)}
.khead h1{font-size:clamp(26px,4vw,38px); letter-spacing:-.035em}
.khead .ozet{font-size:18px; color:var(--ink2); margin:12px 0 0; max-width:62ch; font-style:italic}
.khead .bar{display:flex; gap:9px; align-items:center; margin-top:15px; flex-wrap:wrap}
.okundu{background:none; border:1px solid var(--line); color:var(--ink2); border-radius:99px; padding:5px 13px;
  font-family:var(--f-d); font-size:12.5px; font-weight:600}
.okundu.on{background:var(--ova); border-color:var(--ova); color:#fff}

.blk{margin:30px 0}
.blk-h{font-family:var(--f-d); font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase;
  color:var(--ink3); margin-bottom:13px; display:flex; align-items:center; gap:9px}
.blk-h::after{content:''; flex:1; height:1px; background:var(--line2)}

/* özet listesi */
.b-ozet ul{margin:0; padding:0; list-style:none}
.b-ozet li{position:relative; padding:0 0 0 21px; margin-bottom:10px; color:var(--ink2)}
.b-ozet li::before{content:''; position:absolute; left:3px; top:11px; width:7px; height:7px; border-radius:2px; background:var(--plato)}
.b-ozet li strong, .b-ozet li b{color:var(--ink); font-weight:600}

/* tablo */
.tw{overflow-x:auto; border:1px solid var(--line); border-radius:9px; background:var(--card)}
table{width:100%; border-collapse:collapse; font-size:14.4px; min-width:440px}
th{background:var(--bg2); font-family:var(--f-d); font-size:11px; letter-spacing:.1em; text-transform:uppercase;
  color:var(--ink3); text-align:left; padding:9px 13px; border-bottom:1px solid var(--line); font-weight:700; white-space:nowrap}
td{padding:10px 13px; border-bottom:1px solid var(--line2); vertical-align:top; color:var(--ink2)}
tr:last-child td{border-bottom:0}
td:first-child{color:var(--ink); font-weight:600; font-family:var(--f-d); font-size:13.8px}
td strong{color:var(--ink)}

/* tuzak */
.b-tuzak{background:var(--card); border:1px solid var(--sinir); border-left-width:3px; border-radius:9px; padding:16px 19px}
.b-tuzak .blk-h{color:var(--sinir); margin-bottom:11px}
.b-tuzak .blk-h::after{background:color-mix(in srgb,var(--sinir) 25%, transparent)}
.b-tuzak ul{margin:0; padding-left:19px}
.b-tuzak li{margin-bottom:8px; color:var(--ink2); font-size:15px}
.b-tuzak li:last-child{margin-bottom:0}
.b-tuzak strong{color:var(--ink)}

/* hafıza kodu */
.b-kod{background:linear-gradient(180deg,var(--bg2),var(--card)); border:1px dashed var(--plato); border-radius:9px; padding:16px 19px}
.b-kod .blk-h{color:var(--plato)}
.b-kod .blk-h::after{background:color-mix(in srgb,var(--plato) 30%, transparent)}
.b-kod p{margin:0; font-size:15.5px; color:var(--ink2)}
.b-kod strong{color:var(--ink); font-weight:600}

/* formül kartı */
.b-formul{background:var(--card); border:1px solid var(--line); border-radius:9px; padding:6px 0; overflow:hidden}
.b-formul .fr{padding:10px 19px; border-bottom:1px solid var(--line2); font-family:var(--f-m); font-size:14px; color:var(--ink2)}
.b-formul .fr:last-child{border-bottom:0}
.b-formul .fr strong{color:var(--acc); font-weight:600}

/* çözümlü örnek */
.b-cozum{border:1px solid var(--line); border-radius:9px; overflow:hidden}
.b-cozum .q{background:var(--bg2); padding:14px 19px; font-size:15.4px; border-bottom:1px solid var(--line)}
.b-cozum ol{margin:0; padding:14px 19px 14px 40px; background:var(--card)}
.b-cozum li{margin-bottom:8px; color:var(--ink2); font-size:15px}
.b-cozum .cev{padding:11px 19px; background:var(--bg2); border-top:1px solid var(--line);
  font-family:var(--f-m); font-size:13.5px; color:var(--ova); font-weight:600}

/* taktik */
.b-taktik{background:var(--card); border:1px solid var(--akarsu); border-left-width:3px; border-radius:9px; padding:16px 19px}
.b-taktik .blk-h{color:var(--akarsu)}
.b-taktik .blk-h::after{background:color-mix(in srgb,var(--akarsu) 25%, transparent)}
.b-taktik p{margin:0; font-size:15.2px; color:var(--ink2)}

/* karşıt (yanlış / doğru) */
.b-karsit .kp{display:grid; grid-template-columns:1fr 1fr; gap:0; border:1px solid var(--line);
  border-radius:9px; overflow:hidden; margin-bottom:11px}
.b-karsit .kp>div{padding:14px 17px; font-size:14.6px}
.b-karsit .yn{background:color-mix(in srgb,var(--sinir) 8%, var(--card)); color:var(--ink2); border-right:1px solid var(--line)}
.b-karsit .dg{background:color-mix(in srgb,var(--ova) 9%, var(--card)); color:var(--ink2)}
.b-karsit .lb{display:block; font-family:var(--f-m); font-size:9.5px; letter-spacing:.14em; text-transform:uppercase; margin-bottom:6px}
.b-karsit .yn .lb{color:var(--sinir)} .b-karsit .dg .lb{color:var(--ova)}
.b-karsit strong{color:var(--ink)}

/* zaman şeridi */
.b-zaman .tl{position:relative; padding-left:26px}
.b-zaman .tl::before{content:''; position:absolute; left:6px; top:6px; bottom:6px; width:2px;
  background:linear-gradient(180deg,var(--ova),var(--plato),var(--dag),var(--lav))}
.b-zaman .ev{position:relative; margin-bottom:19px}
.b-zaman .ev::before{content:''; position:absolute; left:-24px; top:6px; width:10px; height:10px;
  border-radius:50%; background:var(--card); border:2px solid var(--dag)}
.b-zaman .yr{font-family:var(--f-m); font-size:11.5px; color:var(--dag); font-weight:600; letter-spacing:.04em}
.b-zaman .ol{font-family:var(--f-d); font-size:16px; font-weight:700; margin:2px 0 4px; letter-spacing:-.02em}
.b-zaman .ds{font-size:14.6px; color:var(--ink2)}

/* şema */
.b-sema{display:grid; gap:13px; grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
.b-sema .box{background:var(--card); border:1px solid var(--line); border-radius:9px; overflow:hidden}
.b-sema .box>b{display:block; background:var(--bg2); padding:9px 15px; font-family:var(--f-d); font-size:13.5px;
  border-bottom:1px solid var(--line); letter-spacing:-.01em}
.b-sema .box ul{margin:0; padding:9px 15px 11px 30px}
.b-sema .box li{font-size:14px; color:var(--ink2); margin-bottom:5px}

/* sayı kartı */
.b-sayilar{display:grid; gap:9px; grid-template-columns:repeat(auto-fill,minmax(178px,1fr))}
.b-sayilar .sc{background:var(--card); border:1px solid var(--line); border-radius:9px; padding:13px 15px}
.b-sayilar .sc b{display:block; font-family:var(--f-m); font-size:23px; font-weight:600; color:var(--acc); letter-spacing:-.02em}
.b-sayilar .sc span{display:block; font-size:13.2px; color:var(--ink2); margin-top:4px; line-height:1.4}

/* test */
.b-test .sq{background:var(--card); border:1px solid var(--line); border-radius:9px; padding:17px 19px; margin-bottom:12px}
.b-test .qs{font-size:15.6px; margin-bottom:13px}
.b-test .op{display:block; width:100%; text-align:left; background:var(--bg2); border:1px solid var(--line);
  border-radius:7px; padding:9px 13px; margin-bottom:7px; font-family:var(--f-b); font-size:14.6px; color:var(--ink2); transition:.13s}
.b-test .op:hover:not(:disabled){border-color:var(--acc)}
.b-test .op:disabled{cursor:default}
.b-test .op .lt{font-family:var(--f-m); font-size:11.5px; color:var(--ink3); margin-right:9px}
.b-test .op.dogru{background:color-mix(in srgb,var(--ova) 15%, var(--card)); border-color:var(--ova); color:var(--ink)}
.b-test .op.yanlis{background:color-mix(in srgb,var(--sinir) 13%, var(--card)); border-color:var(--sinir)}
.b-test .exp{margin-top:11px; padding:12px 15px; background:var(--bg2); border-radius:7px; font-size:14.4px; color:var(--ink2); display:none}
.b-test .exp.gor{display:block}
.b-test .exp b{color:var(--ink)}

/* iskelet uyarısı */
.stub{background:var(--bg2); border:1px dashed var(--line); border-radius:9px; padding:18px 20px; margin:22px 0}
.stub b{font-family:var(--f-d); font-size:14px; display:block; margin-bottom:5px}
.stub p{margin:0; font-size:14.2px; color:var(--ink2)}

/* sayfa gezinme */
.pnav{display:flex; gap:11px; margin-top:44px; padding-top:22px; border-top:1px solid var(--line)}
.pnav a{flex:1; padding:13px 16px; background:var(--card); border:1px solid var(--line); border-radius:9px;
  text-decoration:none; transition:.15s}
.pnav a:hover{border-color:var(--acc)}
.pnav a span{display:block; font-family:var(--f-m); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--ink3)}
.pnav a b{font-family:var(--f-d); font-size:14.5px; font-weight:600; letter-spacing:-.01em}
.pnav a.nx{text-align:right}

/* ═══════ HARİTA ═══════ */
.mapw{border:1px solid var(--line); border-radius:var(--r); background:var(--card); overflow:hidden; margin:14px 0 0}
.mtop{display:flex; gap:7px; padding:10px 12px; border-bottom:1px solid var(--line); background:var(--bg2);
  flex-wrap:wrap; align-items:center}
.mchip{background:var(--card); border:1px solid var(--line); border-radius:99px; padding:5px 12px;
  font-family:var(--f-d); font-size:12.3px; font-weight:600; color:var(--ink2); transition:.13s; white-space:nowrap}
.mchip:hover{border-color:var(--acc)}
.mchip.on{background:var(--ink); color:var(--bg); border-color:var(--ink)}
.mchip .sw{display:inline-block; width:8px; height:8px; border-radius:2px; margin-right:6px; vertical-align:1px}
.mspacer{flex:1}
.mtool{background:none; border:1px solid var(--line); border-radius:7px; width:29px; height:29px; color:var(--ink2);
  font-family:var(--f-m); font-size:14px; line-height:1; display:grid; place-items:center}
.mtool:hover{border-color:var(--acc); color:var(--acc)}
.mtool.on{background:var(--acc); border-color:var(--acc); color:#fff}

.mbody{display:grid; grid-template-columns:1fr 232px}
.mstage{position:relative; background:
  linear-gradient(var(--bg2),var(--bg2)); overflow:hidden; touch-action:none; cursor:grab}
.mstage.drag{cursor:grabbing}
.mstage svg{width:100%; height:auto; display:block; user-select:none}
.il{fill:var(--bg); stroke:var(--line); stroke-width:.6; transition:fill .18s}
[data-tema="gece"] .il{fill:#17323d; stroke:#25454f}
.il:hover{fill:var(--sel)}
.il.hl{fill:var(--acc); opacity:.85}
.il.rg{opacity:.9}
.mk{cursor:pointer}
.mk circle{stroke:var(--card); stroke-width:1.4; transition:r .15s}
.mk:hover circle{stroke:var(--ink)}
.mk.sec circle{stroke:var(--ink); stroke-width:2.2}
.mk text{font-family:'Archivo',sans-serif; font-size:7px; font-weight:600; fill:var(--ink);
  paint-order:stroke; stroke:var(--card); stroke-width:2.6; stroke-linejoin:round; pointer-events:none}
.riv{fill:none; stroke:var(--akarsu); stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; opacity:.85}
.riv.sec{stroke-width:3; opacity:1}
.ilad{font-family:'IBM Plex Mono',monospace; font-size:5.6px; fill:var(--ink3); pointer-events:none; text-anchor:middle}

.mside{border-left:1px solid var(--line); max-height:520px; overflow-y:auto; background:var(--bg2)}
.mside::-webkit-scrollbar{width:5px} .mside::-webkit-scrollbar-thumb{background:var(--line); border-radius:9px}
.mgh{position:sticky; top:0; background:var(--bg2); padding:9px 13px 6px; font-family:var(--f-d); font-size:10.5px;
  letter-spacing:.13em; text-transform:uppercase; color:var(--ink3); border-bottom:1px solid var(--line2); z-index:2}
.mit{padding:8px 13px; border-bottom:1px solid var(--line2); cursor:pointer; transition:.12s}
.mit:hover{background:var(--card)}
.mit.sec{background:var(--sel)}
.mit b{display:block; font-family:var(--f-d); font-size:13px; font-weight:600; letter-spacing:-.01em}
.mit span{display:block; font-size:12.2px; color:var(--ink2); line-height:1.42; margin-top:2px}
.mit strong{color:var(--ink)}
.mnote{padding:10px 13px; font-size:12.4px; color:var(--ink2); background:var(--card); border-bottom:1px solid var(--line2)}

.mtip{position:absolute; z-index:20; background:var(--ink); color:var(--bg); padding:8px 11px; border-radius:7px;
  font-size:12.6px; max-width:250px; pointer-events:none; opacity:0; transition:opacity .12s; line-height:1.45}
.mtip.gor{opacity:1}
.mtip b{font-family:var(--f-d); display:block; font-size:13px; margin-bottom:2px}

.mfoot{padding:8px 13px; border-top:1px solid var(--line); background:var(--bg2); font-family:var(--f-m);
  font-size:11px; color:var(--ink3); display:flex; gap:14px; flex-wrap:wrap; align-items:center}
.mfoot b{color:var(--ink); font-weight:600}
.qbar{padding:11px 13px; background:var(--card); border-top:1px solid var(--line); display:flex;
  align-items:center; gap:12px; flex-wrap:wrap}
.qbar .qq{font-family:var(--f-d); font-size:15px; font-weight:600; flex:1; min-width:170px}
.qbar .qs{font-family:var(--f-m); font-size:12px; color:var(--ink2)}
.qbar .qr{font-family:var(--f-m); font-size:12.5px; padding:4px 10px; border-radius:6px}
.qr.iyi{background:color-mix(in srgb,var(--ova) 20%,transparent); color:var(--ova)}
.qr.orta{background:color-mix(in srgb,var(--plato) 22%,transparent); color:var(--dag)}
.qr.kotu{background:color-mix(in srgb,var(--sinir) 16%,transparent); color:var(--sinir)}

/* ─── arama sonuçları ─── */
.res{display:grid; gap:8px; margin-top:18px}
.res a{padding:12px 15px; background:var(--card); border:1px solid var(--line); border-radius:9px; text-decoration:none}
.res a:hover{border-color:var(--acc)}
.res b{font-family:var(--f-d); font-size:14.5px; display:block}
.res span{font-size:12.6px; color:var(--ink3); font-family:var(--f-m)}

/* ─── responsive ─── */
@media(max-width:900px){
  .shell{grid-template-columns:1fr; gap:0}
  .side{position:fixed; inset:57px auto 0 0; width:280px; background:var(--bg2); border-right:1px solid var(--line);
    padding:18px 16px 60px; transform:translateX(-102%); transition:transform .22s; z-index:55; height:calc(100vh - 57px)}
  .side.acik{transform:none}
  #menuBtn{display:grid; place-items:center; width:33px; height:31px; padding:0}
  .mbody{grid-template-columns:1fr}
  .mside{border-left:0; border-top:1px solid var(--line); max-height:290px}
  .b-karsit .kp{grid-template-columns:1fr}
  .b-karsit .yn{border-right:0; border-bottom:1px solid var(--line)}
  body{font-size:16px}
  .scrim{position:fixed; inset:0; background:rgba(0,0,0,.32); z-index:54; display:none}
  .scrim.acik{display:block}
}
@media(max-width:520px){
  .head-in{padding:9px 14px; gap:9px}
  .shell{padding:0 14px}
  .gridDers{grid-template-columns:1fr}
  .pnav{flex-direction:column}
  .mtop{padding:8px}
  .mchip{font-size:11.6px; padding:4px 10px}
}
@media(prefers-reduced-motion:reduce){*{transition:none!important; animation:none!important; scroll-behavior:auto}}
:focus-visible{outline:2px solid var(--acc); outline-offset:2px}
