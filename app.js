/* ═══════════════════════════════════════════════════════════
   KPSS Ön Lisans — Tekrar Atlası · uygulama kabuğu
   ═══════════════════════════════════════════════════════════ */
(function(){
'use strict';

var DERSLER = [window.DERS_TURKCE, window.DERS_MATEMATIK, window.DERS_TARIH,
               window.DERS_COGRAFYA, window.DERS_VATANDASLIK].filter(Boolean);
var byId = {}; DERSLER.forEach(function(d){ byId[d.id] = d; });

/* ── depolama (güvenli) ── */
var DP = {
  al: function(k, v){ try{ var s = localStorage.getItem('kpss_' + k); return s == null ? v : JSON.parse(s); }catch(e){ return v; } },
  yaz: function(k, v){ try{ localStorage.setItem('kpss_' + k, JSON.stringify(v)); }catch(e){} }
};
var bitti = DP.al('bitti', {});

/* ── yardımcılar ── */
function h(t, c, x){ var n = document.createElement(t); if(c) n.className = c; if(x != null) n.textContent = x; return n; }
function H(t, c, html){ var n = h(t, c); n.innerHTML = html; return n; }
function md(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*]+)\*/g,'$1<em>$2</em>')
    .replace(/`([^`]+)`/g,'<code>$1</code>');
}
function q(s){ return document.querySelector(s); }

/* ═══════════ BLOK ÇİZİCİ ═══════════ */
var CIZ = {

ozet: function(b){
  var w = h('div','blk b-ozet');
  if(b.b) w.appendChild(h('div','blk-h', b.b));
  var ul = h('ul');
  b.i.forEach(function(x){ ul.appendChild(H('li', null, md(x))); });
  w.appendChild(ul); return w;
},

tablo: function(b){
  var w = h('div','blk');
  if(b.b) w.appendChild(h('div','blk-h', b.b));
  var tw = h('div','tw'), t = h('table');
  if(b.h){
    var tr = h('tr'); b.h.forEach(function(x){ tr.appendChild(H('th', null, md(x))); });
    t.appendChild(h('thead')).appendChild(tr);
  }
  var tb = h('tbody');
  b.r.forEach(function(row){
    var tr = h('tr'); row.forEach(function(c){ tr.appendChild(H('td', null, md(c))); }); tb.appendChild(tr);
  });
  t.appendChild(tb); tw.appendChild(t); w.appendChild(tw); return w;
},

kod: function(b){
  var w = h('div','blk b-kod');
  w.appendChild(h('div','blk-h', b.b || 'Haf\u0131za kodu'));
  w.appendChild(H('p', null, md(b.x))); return w;
},

tuzak: function(b){
  var w = h('div','blk b-tuzak');
  w.appendChild(h('div','blk-h','Tuzak \u00b7 dikkat'));
  var ul = h('ul'); b.i.forEach(function(x){ ul.appendChild(H('li', null, md(x))); });
  w.appendChild(ul); return w;
},

formul: function(b){
  var w = h('div','blk');
  w.appendChild(h('div','blk-h', b.b || 'Form\u00fcl kart\u0131'));
  var c = h('div','b-formul');
  b.f.forEach(function(x){ c.appendChild(H('div','fr', md(x))); });
  w.appendChild(c); return w;
},

cozum: function(b){
  var w = h('div','blk');
  w.appendChild(h('div','blk-h', b.b || '\u00c7\u00f6z\u00fcml\u00fc \u00f6rnek'));
  var c = h('div','b-cozum');
  c.appendChild(H('div','q', md(b.q)));
  var ol = h('ol'); b.s.forEach(function(x){ ol.appendChild(H('li', null, md(x))); });
  c.appendChild(ol);
  if(b.c != null) c.appendChild(H('div','cev','Cevap: ' + md(String(b.c))));
  w.appendChild(c); return w;
},

taktik: function(b){
  var w = h('div','blk b-taktik');
  w.appendChild(h('div','blk-h', b.b || 'H\u0131z takti\u011fi'));
  w.appendChild(H('p', null, md(b.x))); return w;
},

karsit: function(b){
  var w = h('div','blk b-karsit');
  w.appendChild(h('div','blk-h', b.b || 'Yanl\u0131\u015f / do\u011fru'));
  b.c.forEach(function(p){
    var kp = h('div','kp');
    kp.appendChild(H('div','yn','<span class="lb">Yanl\u0131\u015f</span>' + md(p.y)));
    kp.appendChild(H('div','dg','<span class="lb">Do\u011fru</span>' + md(p.d)));
    w.appendChild(kp);
  });
  return w;
},

zaman: function(b){
  var w = h('div','blk b-zaman');
  w.appendChild(h('div','blk-h', b.b || 'Zaman \u015feridi'));
  var tl = h('div','tl');
  b.z.forEach(function(e){
    var ev = h('div','ev');
    ev.appendChild(h('div','yr', e.y));
    ev.appendChild(H('div','ol', md(e.o)));
    if(e.d) ev.appendChild(H('div','ds', md(e.d)));
    tl.appendChild(ev);
  });
  w.appendChild(tl); return w;
},

sema: function(b){
  var w = h('div','blk');
  w.appendChild(h('div','blk-h', b.b || '\u015eema'));
  var g = h('div','b-sema');
  b.d.forEach(function(x){
    var box = h('div','box');
    box.appendChild(H('b', null, md(x.b)));
    var ul = h('ul'); x.a.forEach(function(a){ ul.appendChild(H('li', null, md(a))); });
    box.appendChild(ul); g.appendChild(box);
  });
  w.appendChild(g); return w;
},

sayilar: function(b){
  var w = h('div','blk');
  w.appendChild(h('div','blk-h', b.b || 'Say\u0131 kartlar\u0131'));
  var g = h('div','b-sayilar');
  b.s.forEach(function(x){
    var c = h('div','sc');
    c.appendChild(h('b', null, x.n));
    c.appendChild(H('span', null, md(x.a)));
    g.appendChild(c);
  });
  w.appendChild(g); return w;
},

harita: function(b){
  var w = h('div','blk');
  w.appendChild(h('div','blk-h', b.b || 'Harita'));
  if(window.Harita && window.TRMAP) window.Harita.olustur(w, { katman: b.k });
  else w.appendChild(h('div','stub','Harita verisi y\u00fcklenemedi.'));
  return w;
},

test: function(b){
  var w = h('div','blk b-test');
  w.appendChild(h('div','blk-h','Kendini yokla'));
  b.s.forEach(function(s, si){
    var card = h('div','sq');
    card.appendChild(H('div','qs', (si + 1) + '. ' + md(s.q)));
    var exp = H('div','exp','<b>A\u00e7\u0131klama.</b> ' + md(s.a || ''));
    var btns = [];
    s.c.forEach(function(c, ci){
      var b2 = h('button','op');
      b2.innerHTML = '<span class="lt">' + 'ABCDE'[ci] + ')</span>' + md(c);
      b2.onclick = function(){
        btns.forEach(function(x){ x.disabled = true; });
        btns[s.d].classList.add('dogru');
        if(ci !== s.d) b2.classList.add('yanlis');
        exp.classList.add('gor');
      };
      btns.push(b2); card.appendChild(b2);
    });
    card.appendChild(exp); w.appendChild(card);
  });
  return w;
}
};

function blokCiz(b){
  var f = CIZ[b.t];
  return f ? f(b) : H('div','stub','<b>Bilinmeyen blok: ' + b.t + '</b>');
}

/* ═══════════ YAN MENÜ ═══════════ */
function menuKur(){
  var nav = q('#nav'); nav.textContent = '';
  DERSLER.forEach(function(d){
    var box = h('div','nav-ders'); box.dataset.d = d.id;
    var t = h('button','nav-t');
    var dot = h('span','dot'); dot.style.background = 'var(--c-' + d.renk + ')';
    t.appendChild(dot);
    t.appendChild(document.createTextNode(d.ad));
    t.appendChild(h('span','cnt', d.soru + ' soru'));
    t.insertAdjacentHTML('beforeend','<svg class="arw" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>');
    t.onclick = function(){ box.classList.toggle('acik'); };
    box.appendChild(t);
    var kl = h('div','nav-k');
    var ders = h('a', null, 'Ders \u00f6zeti'); ders.href = '#/' + d.id; kl.appendChild(ders);
    d.konular.forEach(function(k){
      var a = h('a'); a.href = '#/' + d.id + '/' + k.id;
      a.appendChild(document.createTextNode(k.ad));
      if(k.durum === 'iskelet') a.appendChild(h('span','st','iskelet'));
      else if(bitti[d.id + '/' + k.id]) a.appendChild(h('span','st','\u2713'));
      kl.appendChild(a);
    });
    box.appendChild(kl); nav.appendChild(box);
  });
}
function menuIsaretle(dersId, konuId){
  document.querySelectorAll('#nav a').forEach(function(a){ a.classList.remove('on'); });
  document.querySelectorAll('.nav-ders').forEach(function(b){
    b.classList.toggle('acik', b.dataset.d === dersId);
  });
  var hedef = '#/' + dersId + (konuId ? '/' + konuId : '');
  var a = document.querySelector('#nav a[href="' + hedef + '"]');
  if(a) a.classList.add('on');
}

/* ═══════════ SAYFALAR ═══════════ */
function anasayfa(){
  var m = q('#icerik'); m.textContent = '';

  var hero = h('div','hero');
  hero.appendChild(h('div','eyebrow','KPSS \u00d6n Lisans \u00b7 Genel Yetenek + Genel K\u00fclt\u00fcr \u00b7 120 soru'));
  hero.appendChild(H('h1', null, 'Konu anlat\u0131m\u0131 de\u011fil.<br><em>Tekrar atlas\u0131.</em>'));
  hero.appendChild(h('p','','Be\u015f dersin tamam\u0131 s\u0131navda sorulan bi\u00e7imde \u00f6zetlendi: tablo, tuzak kutusu, haf\u0131za kodu ve harita. Co\u011frafyay\u0131 ezberlemek yerine haritadan \u00e7al\u0131\u015f \u2014 her da\u011f, g\u00f6l, maden ve \u00fcr\u00fcn ger\u00e7ek koordinat\u0131nda i\u015faretli.'));
  m.appendChild(hero);

  /* ana sayfa haritası */
  var mw = h('div','hero-map');
  mw.appendChild(h('div','blk-h','T\u00fcrkiye \u2014 co\u011frafi b\u00f6lgeler'));
  window.Harita.olustur(mw, { katman:'bolge' });
  m.appendChild(mw);

  var g = h('div','gridDers');
  DERSLER.forEach(function(d){
    var a = h('a','dc'); a.href = '#/' + d.id;
    a.style.setProperty('--dc','var(--c-' + d.renk + ')');
    a.appendChild(h('div','bl', d.bolum));
    a.appendChild(h('h3', null, d.ad));
    a.appendChild(h('div','num', d.soru + ' soru \u00b7 ' + d.konular.length + ' konu'));
    a.appendChild(h('p', null, d.tanim));
    var hz = d.konular.filter(function(k){ return k.durum !== 'iskelet'; }).length;
    a.appendChild(h('div','kt', hz + ' / ' + d.konular.length + ' konu haz\u0131r'));
    g.appendChild(a);
  });
  m.appendChild(g);

  var p = h('div','plan');
  p.appendChild(h('h3','Nas\u0131l \u00e7al\u0131\u015f\u0131l\u0131r'));
  var ol = h('ol');
  [ '<b>Co\u011frafya tamamen haz\u0131r.</b> Konuyu a\u00e7, alt\u0131ndaki haritada katman\u0131 se\u00e7, i\u015faretlere t\u0131kla. Sonra \u201c?\u201d d\u00fc\u011fmesiyle s\u0131nav moduna ge\u00e7 \u2014 sorulan yeri haritada bulmaya \u00e7al\u0131\u015f.',
    '<b>Tuzak kutular\u0131</b> \u00e7\u0131km\u0131\u015f sorularda en \u00e7ok yan\u0131ltan noktalard\u0131r; test \u00f6ncesi sadece onlar\u0131 okumak bile i\u015fe yarar.',
    '<b>Her ders farkl\u0131 bi\u00e7imde</b> haz\u0131rland\u0131: T\u00fcrk\u00e7e yanl\u0131\u015f/do\u011fru c\u00fcmle \u00e7iftiyle, Matematik form\u00fcl + \u00e7\u00f6z\u00fcm + h\u0131z takti\u011fiyle, Tarih zaman \u015feridiyle, Vatanda\u015fl\u0131k \u015fema + say\u0131 kart\u0131yla.',
    '<b>\u201c\u0130skelet\u201d etiketli konular</b> hen\u00fcz doldurulmad\u0131 \u2014 ba\u015fl\u0131k, soru say\u0131s\u0131 ve \u00e7al\u0131\u015fma y\u00f6ntemi haz\u0131r, i\u00e7erik sonraki turda gelecek.'
  ].forEach(function(x){ ol.appendChild(H('li', null, x)); });
  p.appendChild(ol); m.appendChild(p);

  menuIsaretle('', '');
  document.title = 'KPSS \u00d6n Lisans \u2014 Tekrar Atlas\u0131';
}

function dersSayfa(d){
  var m = q('#icerik'); m.textContent = '';
  var hd = h('div','dhead');
  hd.appendChild(H('div','crumb','<a href="#/">Ana sayfa</a> \u00b7 ' + d.bolum));
  hd.appendChild(h('h1', null, d.ad));
  hd.appendChild(h('p','lead', d.tanim));
  var bar = h('div','khead'); var b2 = h('div','bar');
  b2.appendChild(h('span','pill', d.soru + ' soru'));
  b2.appendChild(h('span','pill', d.konular.length + ' konu'));
  hd.appendChild(b2);
  if(d.yontem){
    var mt = h('div','metod');
    d.yontem.forEach(function(x){ mt.appendChild(H('div', null, md(x))); });
    hd.appendChild(mt);
  }
  m.appendChild(hd);

  var kl = h('div','klist');
  d.konular.forEach(function(k, i){
    var a = h('a','ki'); a.href = '#/' + d.id + '/' + k.id;
    a.appendChild(h('div','no', String(i + 1).padStart(2,'0')));
    var tx = h('div','tx');
    tx.appendChild(h('b', null, k.ad));
    if(k.ozet) tx.appendChild(h('span', null, k.ozet));
    a.appendChild(tx);
    if(k.soru) a.appendChild(h('div','sq', k.soru));
    a.appendChild(h('div','tag ' + (k.durum === 'iskelet' ? 'iskelet' : 'hazir'),
                    k.durum === 'iskelet' ? 'iskelet' : (bitti[d.id + '/' + k.id] ? 'okundu' : 'haz\u0131r')));
    kl.appendChild(a);
  });
  m.appendChild(kl);
  menuIsaretle(d.id, null);
  document.title = d.ad + ' \u2014 Tekrar Atlas\u0131';
}

function konuSayfa(d, k){
  var m = q('#icerik'); m.textContent = '';
  var hd = h('div','khead');
  hd.appendChild(H('div','crumb','<a href="#/">Ana sayfa</a> \u00b7 <a href="#/' + d.id + '">' + d.ad + '</a>'));
  hd.appendChild(h('h1', null, k.ad));
  if(k.ozet) hd.appendChild(h('p','ozet', k.ozet));
  var bar = h('div','bar');
  if(k.soru) bar.appendChild(h('span','pill', k.soru));
  var anahtar = d.id + '/' + k.id;
  if(k.durum !== 'iskelet'){
    var ob = h('button','okundu' + (bitti[anahtar] ? ' on' : ''), bitti[anahtar] ? '\u2713 Okundu' : 'Okundu i\u015faretle');
    ob.onclick = function(){
      bitti[anahtar] = !bitti[anahtar]; DP.yaz('bitti', bitti);
      ob.classList.toggle('on', bitti[anahtar]);
      ob.textContent = bitti[anahtar] ? '\u2713 Okundu' : 'Okundu i\u015faretle';
      menuKur(); menuIsaretle(d.id, k.id);
    };
    bar.appendChild(ob);
  }
  hd.appendChild(bar); m.appendChild(hd);

  if(k.durum === 'iskelet'){
    m.appendChild(H('div','stub','<b>Bu konu hen\u00fcz doldurulmad\u0131.</b><p>Ba\u015fl\u0131k, soru say\u0131s\u0131 ve \u00e7al\u0131\u015fma y\u00f6ntemi yerinde. \u0130\u00e7erik sonraki turda eklenecek \u2014 site yap\u0131s\u0131 haz\u0131r oldu\u011fu i\u00e7in sadece veri dosyas\u0131na konu eklemek yeterli.</p>'));
  }
  (k.bloklar || []).forEach(function(b){ m.appendChild(blokCiz(b)); });

  /* önceki / sonraki */
  var ix = d.konular.indexOf(k), pn = h('div','pnav');
  if(ix > 0){
    var p = d.konular[ix - 1], a1 = h('a');
    a1.href = '#/' + d.id + '/' + p.id;
    a1.appendChild(h('span','','\u00d6nceki')); a1.appendChild(h('b', null, p.ad)); pn.appendChild(a1);
  }
  if(ix < d.konular.length - 1){
    var n = d.konular[ix + 1], a2 = h('a','nx');
    a2.href = '#/' + d.id + '/' + n.id;
    a2.appendChild(h('span','','Sonraki')); a2.appendChild(h('b', null, n.ad)); pn.appendChild(a2);
  }
  m.appendChild(pn);
  menuIsaretle(d.id, k.id);
  document.title = k.ad + ' \u00b7 ' + d.ad;
}

/* ═══════════ ARAMA ═══════════ */
function ara(s){
  s = s.trim().toLocaleLowerCase('tr');
  var nav = q('#nav'), res = q('#res');
  if(s.length < 2){ nav.style.display = ''; res.style.display = 'none'; return; }
  nav.style.display = 'none'; res.style.display = ''; res.textContent = '';
  var n = 0;
  DERSLER.forEach(function(d){
    d.konular.forEach(function(k){
      var metin = (k.ad + ' ' + (k.ozet || '') + ' ' + JSON.stringify(k.bloklar || '')).toLocaleLowerCase('tr');
      if(metin.indexOf(s) < 0 || n > 24) return;
      n++;
      var a = h('a'); a.href = '#/' + d.id + '/' + k.id;
      a.appendChild(h('b', null, k.ad));
      a.appendChild(h('span', null, d.ad + (k.durum === 'iskelet' ? ' \u00b7 iskelet' : '')));
      res.appendChild(a);
    });
  });
  if(!n) res.appendChild(H('div','mnote','Sonu\u00e7 yok.'));
}

/* ═══════════ YÖNLENDİRİCİ ═══════════ */
function yonlendir(){
  var p = location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);
  var d = byId[p[0]];
  if(!d) anasayfa();
  else {
    var k = p[1] && d.konular.find(function(x){ return x.id === p[1]; });
    if(k) konuSayfa(d, k); else dersSayfa(d);
  }
  window.scrollTo(0, 0);
  q('#side').classList.remove('acik'); q('#scrim').classList.remove('acik');
}

/* ═══════════ BAŞLAT ═══════════ */
function baslat(){
  /* tema */
  var tema = DP.al('tema','kagit');
  document.documentElement.dataset.tema = tema;
  var tb = q('#temaBtn');
  function temaYaz(){ tb.textContent = document.documentElement.dataset.tema === 'gece' ? '\u2600 Ka\u011f\u0131t' : '\u263e Gece'; }
  temaYaz();
  tb.onclick = function(){
    var y = document.documentElement.dataset.tema === 'gece' ? 'kagit' : 'gece';
    document.documentElement.dataset.tema = y; DP.yaz('tema', y); temaYaz();
  };

  /* mobil çekmece */
  q('#menuBtn').onclick = function(){
    q('#side').classList.toggle('acik'); q('#scrim').classList.toggle('acik');
  };
  q('#scrim').onclick = function(){
    q('#side').classList.remove('acik'); q('#scrim').classList.remove('acik');
  };

  q('#arama').oninput = function(){ ara(this.value); };

  menuKur();
  window.addEventListener('hashchange', yonlendir);
  yonlendir();
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
else baslat();

})();
