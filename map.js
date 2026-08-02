/* ═══════════════════════════════════════════════════════════
   Harita motoru
   TRMAP il sınırlarını çizer, HARITA katmanlarını gerçek
   enlem/boylamla üstüne bindirir, sınav modu sunar.
   ═══════════════════════════════════════════════════════════ */
(function(){
'use strict';

var NS = 'http://www.w3.org/2000/svg';
var RENK = { dag:'--dag', zirve:'--zirve', lav:'--lav', ova:'--ova',
             plato:'--plato', akarsu:'--akarsu', baraj:'--baraj' };

/* bölge sözde-katmanı için renk sırası */
var BRENK = ['ova','plato','dag','lav','zirve','akarsu','baraj'];
var BNOT = {
  'Marmara':'Y\u00fcz\u00f6l\u00e7\u00fcm\u00fc en k\u00fc\u00e7\u00fck 3. \u00b7 **n\u00fcfus ve sanayide 1.** \u00b7 tar\u0131mda \u00e7e\u015fitlilik en fazla \u00b7 en fazla g\u00f6\u00e7 alan',
  'Ege':'K\u0131y\u0131lar\u0131 **enine (da\u011flar denize dik)** \u2192 deniz etkisi i\u00e7eri sokulur \u00b7 zeytin, incir, \u00fcz\u00fcm, t\u00fct\u00fcnde 1.',
  'Akdeniz':'**Turfanda sebze** ve serac\u0131l\u0131k \u00b7 muz, pamuk \u00b7 Toroslar k\u0131y\u0131ya paralel \u00b7 turizm geliri y\u00fcksek',
  '\u0130\u00e7 Anadolu':'**Y\u00fcz\u00f6l\u00e7\u00fcm\u00fc 2.** \u00b7 tah\u0131l ambar\u0131 \u00b7 en az ya\u011f\u0131\u015f \u00b7 karasal \u00b7 Tuz G\u00f6l\u00fc',
  'Karadeniz':'**En fazla ya\u011f\u0131\u015f**, en g\u00fcr orman \u00b7 \u00e7ay-f\u0131nd\u0131k-m\u0131s\u0131r \u00b7 **en fazla g\u00f6\u00e7 veren** \u00b7 n\u00fcfus k\u0131y\u0131da',
  'Do\u011fu Anadolu':'**Y\u00fcz\u00f6l\u00e7\u00fcm\u00fc en b\u00fcy\u00fck** \u00b7 **ortalama y\u00fckselti en fazla** \u00b7 n\u00fcfus yo\u011funlu\u011fu en az \u00b7 k\u00fc\u00e7\u00fckba\u015f, hidroelektrik',
  'G\u00fcneydo\u011fu Anadolu':'**Y\u00fcz\u00f6l\u00e7\u00fcm\u00fc en k\u00fc\u00e7\u00fck** \u00b7 en y\u00fcksek s\u0131cakl\u0131k \u00b7 GAP \u00b7 antep f\u0131st\u0131\u011f\u0131, k\u0131rm\u0131z\u0131 mercimek, petrol'
};

function el(tag, attrs){
  var n = document.createElementNS(NS, tag);
  if(attrs) for(var k in attrs) n.setAttribute(k, attrs[k]);
  return n;
}
function h(tag, cls, txt){
  var n = document.createElement(tag);
  if(cls) n.className = cls;
  if(txt != null) n.textContent = txt;
  return n;
}
/* **kalın** → <strong> */
function md(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
}
function haversine(a1,o1,a2,o2){
  var R=6371, r=Math.PI/180;
  var dA=(a2-a1)*r, dO=(o2-o1)*r;
  var s=Math.sin(dA/2)*Math.sin(dA/2)+Math.cos(a1*r)*Math.cos(a2*r)*Math.sin(dO/2)*Math.sin(dO/2);
  return 2*R*Math.asin(Math.sqrt(s));
}

/* ─── bölge sözde-katmanını üret ─── */
function bolgeKatmani(){
  var srt = ['Marmara','Ege','Akdeniz','\u0130\u00e7 Anadolu','Karadeniz','Do\u011fu Anadolu','G\u00fcneydo\u011fu Anadolu'];
  var map = {};
  TRMAP.iller.forEach(function(i){ (map[i.bolge] = map[i.bolge] || []).push(i); });
  var gruplar = srt.filter(function(b){ return map[b]; }).map(function(b, ix){
    var iller = map[b];
    return {
      ad: b + ' B\u00f6lgesi',
      renk: BRENK[ix % BRENK.length],
      not: BNOT[b] || '',
      bolgeAdi: b,
      n: iller.map(function(i){
        return { n:i.ad, lat:(2588.6 - i.ly)/61.03, lon:(i.lx + 1171.9)/47.44,
                 i:b + ' B\u00f6lgesi \u00b7 plaka ' + i.p, il:[i.p], _il:true };
      })
    };
  });
  return { ad:'Co\u011frafi b\u00f6lgeler', ipucu:'B\u00f6lgeye t\u0131kla, illeri renklensin. Alt b\u00f6lgeler ve s\u0131n\u0131r illeri s\u0131k sorulur.', gruplar:gruplar, _bolge:true };
}

/* ═══════════ ANA KURUCU ═══════════ */
function olustur(host, opt){
  opt = opt || {};
  var katmanAdi = opt.katman || 'daglar';
  var ham = (katmanAdi === 'bolge') ? bolgeKatmani() : (window.HARITA && HARITA[katmanAdi]);
  if(!ham){ host.appendChild(h('div','mnote','Harita katman\u0131 bulunamad\u0131.')); return; }

  /* katmanı normalleştir: bazı katmanlarda gruplar yok, düz n dizisi var */
  var kat = Object.create(ham);
  if(!ham.gruplar || !ham.gruplar.length){
    kat.gruplar = ham.n && ham.n.length
      ? [{ ad: ham.grupAdi || 'Havzalar', renk: ham.renk || 'plato', not: '', n: ham.n }]
      : [];
  }

  var acikGrup = kat.gruplar.map(function(){ return true; });
  var secili = null, etiket = false, sinav = null;
  var T = { k:1, x:0, y:0 };

  /* ── iskelet ── */
  var wrap = h('div','mapw');
  var top  = h('div','mtop');
  var body = h('div','mbody');
  var stage= h('div','mstage');
  var side = h('div','mside');
  var foot = h('div','mfoot');
  var tip  = h('div','mtip');
  body.appendChild(stage); body.appendChild(side);
  wrap.appendChild(top); wrap.appendChild(body); wrap.appendChild(foot);
  stage.appendChild(tip);
  host.appendChild(wrap);

  /* ── üst çubuk: grup çipleri ── */
  kat.gruplar.forEach(function(g, gi){
    var b = h('button','mchip on');
    var sw = h('span','sw'); sw.style.background = 'var(' + (RENK[g.renk]||'--acc') + ')';
    b.appendChild(sw); b.appendChild(document.createTextNode(g.ad));
    b.onclick = function(){
      acikGrup[gi] = !acikGrup[gi];
      b.classList.toggle('on', acikGrup[gi]);
      secili = null; ciz(); yan();
    };
    top.appendChild(b);
  });
  top.appendChild(h('div','mspacer'));

  function arac(txt, title, fn){
    var b = h('button','mtool', txt); b.title = title; b.onclick = fn; top.appendChild(b); return b;
  }
  var bEtiket = arac('Aa','Adlar\u0131 g\u00f6ster / gizle', function(){
    etiket = !etiket; bEtiket.classList.toggle('on', etiket); ciz();
  });
  var bSinav = arac('?','S\u0131nav modu: sorulan yeri haritada bul', function(){
    if(sinav) sinavBitir(); else sinavBasla();
  });
  arac('+','Yak\u0131nla\u015ft\u0131r', function(){ zoom(1.4, 500, 211); });
  arac('\u2212','Uzakla\u015ft\u0131r',  function(){ zoom(1/1.4, 500, 211); });
  arac('\u27f2','S\u0131f\u0131rla',     function(){ T={k:1,x:0,y:0}; uygula(); });

  /* ── SVG ── */
  var svg = el('svg', { viewBox: TRMAP.viewBox, xmlns: NS });
  svg.setAttribute('role','img');
  svg.setAttribute('aria-label', kat.ad + ' haritas\u0131');
  var gZoom = el('g');
  var gIl   = el('g'), gCizgi = el('g'), gIsaret = el('g'), gAd = el('g'), gCevap = el('g');
  gZoom.appendChild(gIl); gZoom.appendChild(gCizgi); gZoom.appendChild(gAd);
  gZoom.appendChild(gIsaret); gZoom.appendChild(gCevap);
  svg.appendChild(gZoom);
  stage.insertBefore(svg, tip);

  /* iller */
  var ilYol = {};
  TRMAP.iller.forEach(function(i){
    var p = el('path', { d:i.d, 'class':'il' });
    p.dataset.p = i.p;
    p.addEventListener('mousemove', function(e){ tipGoster(e, '<b>' + i.ad + '</b>' + i.bolge + ' B\u00f6lgesi'); });
    p.addEventListener('mouseleave', tipGizle);
    if(kat._bolge){
      p.style.cursor = 'pointer';
      p.onclick = function(){
        var gi = kat.gruplar.findIndex(function(g){ return g.bolgeAdi === i.bolge; });
        if(gi >= 0){ sec(gi, null); }
      };
    }
    ilYol[i.p] = p; gIl.appendChild(p);
  });

  /* ── çizim ── */
  function ciz(){
    gCizgi.textContent = ''; gIsaret.textContent = ''; gAd.textContent = '';

    /* il vurguları */
    for(var p in ilYol){ ilYol[p].classList.remove('hl'); ilYol[p].style.fill = ''; }
    if(secili){
      var s = secili.nokta || null, g = kat.gruplar[secili.gi];
      var plakalar = s && s.il ? s.il : null;
      if(!s && kat._bolge){ plakalar = g.n.map(function(x){ return x.il[0]; }); }
      if(plakalar) plakalar.forEach(function(pl){
        if(ilYol[pl]){ ilYol[pl].style.fill = 'var(' + (RENK[g.renk]||'--acc') + ')'; ilYol[pl].classList.add('rg'); }
      });
    }

    /* akarsu polyline'ları */
    if(kat.cizgiler) kat.cizgiler.forEach(function(c, ci){
      var d = c.yol.map(function(pt, ix){
        return (ix ? 'L' : 'M') + TRMAP.x(pt[1]).toFixed(1) + ' ' + TRMAP.y(pt[0]).toFixed(1);
      }).join(' ');
      var path = el('path', { d:d, 'class':'riv' });
      path.style.stroke = 'var(' + (RENK[c.renk]||'--akarsu') + ')';
      if(secili && secili.cizgi === ci) path.classList.add('sec');
      path.style.cursor = 'pointer';
      path.addEventListener('mousemove', function(e){ tipGoster(e, '<b>' + c.n + '</b>' + c.bilgi); });
      path.addEventListener('mouseleave', tipGizle);
      path.onclick = function(){ secili = { cizgi:ci }; ciz(); yan(true); };
      gCizgi.appendChild(path);
      if(etiket || (secili && secili.cizgi === ci)){
        var mid = c.yol[Math.floor(c.yol.length/2)];
        var t = el('text', { x:TRMAP.x(mid[1]), y:TRMAP.y(mid[0]) - 3, 'class':'mk' });
        t.setAttribute('text-anchor','middle'); t.textContent = c.n;
        t.style.font = '600 7px Archivo, sans-serif'; t.style.fill = 'var(--akarsu)';
        t.style.paintOrder = 'stroke'; t.style.stroke = 'var(--card)'; t.style.strokeWidth = '2.6px';
        gAd.appendChild(t);
      }
    });

    /* nokta işaretleri */
    kat.gruplar.forEach(function(g, gi){
      if(!acikGrup[gi]) return;
      g.n.forEach(function(n, ni){
        var cx = TRMAP.x(n.lon), cy = TRMAP.y(n.lat);
        var isSec = secili && secili.gi === gi && secili.ni === ni;
        var gr = el('g', { 'class':'mk' + (isSec ? ' sec' : '') });
        var c = el('circle', { cx:cx.toFixed(1), cy:cy.toFixed(1), r: isSec ? 5.4 : 3.6 });
        c.style.fill = 'var(' + (RENK[g.renk]||'--acc') + ')';
        gr.appendChild(c);
        if(etiket || isSec){
          var t = el('text', { x:cx.toFixed(1), y:(cy - 6.5).toFixed(1) });
          t.setAttribute('text-anchor','middle'); t.textContent = n.n;
          gr.appendChild(t);
        }
        gr.addEventListener('mousemove', function(e){ tipGoster(e, '<b>' + n.n + '</b>' + (n.i||'')); });
        gr.addEventListener('mouseleave', tipGizle);
        gr.onclick = function(ev){ ev.stopPropagation(); sec(gi, ni); };
        gIsaret.appendChild(gr);
      });
    });
  }

  /* ── yan panel ── */
  function yan(kaydir){
    side.textContent = '';
    if(kat.ipucu) side.appendChild(Object.assign(h('div','mnote'), { innerHTML: md(kat.ipucu) }));

    if(kat.cizgiler){
      side.appendChild(h('div','mgh','Akarsular'));
      kat.cizgiler.forEach(function(c, ci){
        var it = h('div','mit' + (secili && secili.cizgi === ci ? ' sec' : ''));
        it.appendChild(h('b', null, c.n));
        it.appendChild(Object.assign(h('span'), { innerHTML: md(c.bilgi) }));
        it.onclick = function(){ secili = { cizgi:ci }; ciz(); yan(); };
        side.appendChild(it);
        if(secili && secili.cizgi === ci && kaydir) setTimeout(function(){ it.scrollIntoView({block:'nearest'}); }, 0);
      });
    }

    kat.gruplar.forEach(function(g, gi){
      if(!acikGrup[gi]) return;
      side.appendChild(h('div','mgh', g.ad));
      if(g.not) side.appendChild(Object.assign(h('div','mnote'), { innerHTML: md(g.not) }));
      g.n.forEach(function(n, ni){
        var sel = secili && secili.gi === gi && secili.ni === ni;
        var it = h('div','mit' + (sel ? ' sec' : ''));
        it.appendChild(h('b', null, n.n));
        if(n.i) it.appendChild(Object.assign(h('span'), { innerHTML: md(n.i) }));
        it.onclick = function(){ sec(gi, ni); };
        side.appendChild(it);
        if(sel && kaydir) setTimeout(function(){ it.scrollIntoView({block:'nearest'}); }, 0);
      });
    });
  }

  function sec(gi, ni){
    var n = ni == null ? null : kat.gruplar[gi].n[ni];
    secili = { gi:gi, ni:ni, nokta:n };
    ciz(); yan(true);
    if(n) altBilgi(kat.gruplar[gi], n);
    else altBilgi(kat.gruplar[gi], null);
  }

  function altBilgi(g, n){
    foot.textContent = '';
    if(sinav) return sinavCubuk();
    if(!n && !g){ foot.appendChild(Object.assign(h('span'), { innerHTML:'<b>' + kat.ad + '</b> \u2014 i\u015farete veya listeye t\u0131kla' })); return; }
    var s = h('span');
    s.innerHTML = n ? ('<b>' + n.n + '</b> ' + md(n.i || '')) : ('<b>' + g.ad + '</b> ' + md(g.not || ''));
    foot.appendChild(s);
    if(n && n.il && n.il.length && !g.bolgeAdi){
      var adlar = n.il.map(function(p){
        var i = TRMAP.iller.find(function(x){ return x.p === p; }); return i ? i.ad : p;
      }).join(', ');
      foot.appendChild(Object.assign(h('span'), { innerHTML:'\u0130ller: <b>' + adlar + '</b>' }));
    }
  }

  /* ── ipucu balonu ── */
  function tipGoster(e, html){
    var r = stage.getBoundingClientRect();
    tip.innerHTML = html; tip.classList.add('gor');
    var x = e.clientX - r.left + 13, y = e.clientY - r.top + 13;
    if(x + 260 > r.width) x = e.clientX - r.left - tip.offsetWidth - 10;
    if(y + tip.offsetHeight > r.height) y = r.height - tip.offsetHeight - 6;
    tip.style.left = Math.max(4, x) + 'px'; tip.style.top = Math.max(4, y) + 'px';
  }
  function tipGizle(){ tip.classList.remove('gor'); }

  /* ── yakınlaştır / kaydır ── */
  function uygula(){ gZoom.setAttribute('transform','translate(' + T.x + ',' + T.y + ') scale(' + T.k + ')'); }
  function zoom(f, px, py){
    var k2 = Math.min(9, Math.max(1, T.k * f));
    f = k2 / T.k;
    T.x = px - (px - T.x) * f; T.y = py - (py - T.y) * f; T.k = k2;
    if(T.k === 1){ T.x = 0; T.y = 0; }
    uygula();
  }
  function svgNokta(e){
    var r = svg.getBoundingClientRect(), vb = TRMAP.viewBox.split(' ');
    return { x:(e.clientX - r.left) / r.width * (+vb[2]), y:(e.clientY - r.top) / r.height * (+vb[3]) };
  }
  stage.addEventListener('wheel', function(e){
    e.preventDefault(); var p = svgNokta(e); zoom(e.deltaY < 0 ? 1.22 : 1/1.22, p.x, p.y);
  }, { passive:false });

  var sur = null;
  stage.addEventListener('pointerdown', function(e){
    if(e.button) return;
    sur = { x:e.clientX, y:e.clientY, tx:T.x, ty:T.y, tasi:false };
    stage.setPointerCapture(e.pointerId); stage.classList.add('drag');
  });
  stage.addEventListener('pointermove', function(e){
    if(!sur) return;
    var r = svg.getBoundingClientRect(), vb = TRMAP.viewBox.split(' ');
    var sc = (+vb[2]) / r.width;
    var dx = (e.clientX - sur.x) * sc, dy = (e.clientY - sur.y) * sc;
    if(Math.abs(dx) + Math.abs(dy) > 2) sur.tasi = true;
    T.x = sur.tx + dx; T.y = sur.ty + dy; uygula();
  });
  stage.addEventListener('pointerup', function(e){
    var tasindi = sur && sur.tasi; sur = null; stage.classList.remove('drag');
    if(sinav && !tasindi) sinavTahmin(e);
  });
  stage.addEventListener('pointercancel', function(){ sur = null; stage.classList.remove('drag'); });

  /* ── SINAV MODU ── */
  function havuz(){
    var a = [];
    kat.gruplar.forEach(function(g, gi){
      if(!acikGrup[gi]) return;
      g.n.forEach(function(n, ni){ if(!n._il || kat._bolge) a.push({ gi:gi, ni:ni, n:n, g:g }); });
    });
    return a;
  }
  function sinavBasla(){
    var hv = havuz();
    if(hv.length < 3){ alert('S\u0131nav modu i\u00e7in en az 3 i\u015faret gerekli. Bir katman grubu a\u00e7.'); return; }
    sinav = { kalan:hv.slice(), puan:0, tur:0, toplam:Math.min(10, hv.length), gecmis:[] };
    bSinav.classList.add('on'); secili = null; gCevap.textContent = '';
    sinavSonraki();
  }
  function sinavBitir(){
    sinav = null; bSinav.classList.remove('on'); gCevap.textContent = '';
    var f = h('div','mfoot'); wrap.replaceChild(f, foot); foot = f;
    secili = null; altBilgi(null, null); ciz(); yan();
  }
  function sinavSonraki(){
    gCevap.textContent = '';
    sinav.cevaplandi = false;
    if(sinav.tur >= sinav.toplam){
      var ort = Math.round(sinav.puan / sinav.toplam);
      foot.textContent = '';
      var q = h('div','qbar');
      q.appendChild(Object.assign(h('div','qq'), { innerHTML:'Bitti \u2014 <b>' + sinav.toplam + '</b> soruda ortalama sapma <b>' + ort + ' km</b>' }));
      var b1 = h('button','mchip on','Tekrar'); b1.onclick = sinavBasla;
      var b2 = h('button','mchip','\u00c7\u0131k'); b2.onclick = sinavBitir;
      q.appendChild(b1); q.appendChild(b2);
      wrap.replaceChild(q, foot); foot = q;
      return;
    }
    var ix = Math.floor(Math.random() * sinav.kalan.length);
    sinav.soru = sinav.kalan.splice(ix, 1)[0];
    sinav.tur++;
    sinavCubuk();
  }
  function sinavCubuk(sonuc){
    var q = h('div','qbar');
    q.appendChild(Object.assign(h('div','qq'), { innerHTML: 'Haritada bul: <b>' + sinav.soru.n.n + '</b>' }));
    q.appendChild(h('div','qs', sinav.tur + ' / ' + sinav.toplam));
    if(sonuc){
      var sn = h('div','qr ' + sonuc.sinif, sonuc.metin);
      q.appendChild(sn);
      var nx = h('button','mchip on', sinav.tur >= sinav.toplam ? 'Sonucu g\u00f6r' : 'S\u0131radaki');
      nx.onclick = sinavSonraki; q.appendChild(nx);
    }
    var cik = h('button','mchip','\u00c7\u0131k'); cik.onclick = sinavBitir; q.appendChild(cik);
    wrap.replaceChild(q, foot); foot = q;
  }
  function sinavTahmin(e){
    if(!sinav || !sinav.soru || sinav.cevaplandi) return;
    var p = svgNokta(e);
    var mx = (p.x - T.x) / T.k, my = (p.y - T.y) / T.k;
    var lon = (mx + 1171.9) / 47.44, lat = (2588.6 - my) / 61.03;
    var d = Math.round(haversine(lat, lon, sinav.soru.n.lat, sinav.soru.n.lon));
    sinav.puan += d; sinav.cevaplandi = true;

    var sinif = d < 60 ? 'iyi' : d < 160 ? 'orta' : 'kotu';
    var metin = d < 60 ? d + ' km \u00b7 tam isabet' : d < 160 ? d + ' km \u00b7 yak\u0131n' : d + ' km \u00b7 uzak';

    /* doğru yeri göster */
    gCevap.textContent = '';
    var tx = TRMAP.x(sinav.soru.n.lon), ty = TRMAP.y(sinav.soru.n.lat);
    var ln = el('line', { x1:mx, y1:my, x2:tx, y2:ty });
    ln.style.stroke = 'var(--ink3)'; ln.style.strokeWidth = 1; ln.style.strokeDasharray = '3 3';
    gCevap.appendChild(ln);
    var c1 = el('circle', { cx:mx, cy:my, r:3 }); c1.style.fill = 'var(--sinir)';
    var c2 = el('circle', { cx:tx, cy:ty, r:5.4 });
    c2.style.fill = 'var(--ova)'; c2.style.stroke = 'var(--card)'; c2.style.strokeWidth = 1.5;
    var t = el('text', { x:tx, y:ty - 8, 'class':'mk' });
    t.setAttribute('text-anchor','middle'); t.textContent = sinav.soru.n.n;
    t.style.font = '600 7.5px Archivo, sans-serif'; t.style.fill = 'var(--ink)';
    t.style.paintOrder = 'stroke'; t.style.stroke = 'var(--card)'; t.style.strokeWidth = '2.8px';
    gCevap.appendChild(c1); gCevap.appendChild(c2); gCevap.appendChild(t);

    sinavCubuk({ sinif:sinif, metin:metin });
  }

  ciz(); yan(); uygula(); altBilgi(null, null);
  return { ciz:ciz };
}

window.Harita = { olustur: olustur, bolgeKatmani: bolgeKatmani };

})();
