/* KPSS Ön Lisans — MATEMATİK · 25–27 soru
   Çalışma formatı: FORMÜL KARTI → ÇÖZÜMLÜ ÖRNEK → HIZ TAKTİĞİ.
   Matematikte kural okumak işe yaramaz; formülü elde tutup örnek çözmek gerekir. */

window.DERS_MATEMATIK = {
  id:'matematik', ad:'Matematik', bolum:'Genel Yetenek', soru:30, renk:'mat',
  tanim:'Soru ba\u015f\u0131na ~1,1 dakika var. Uzun \u00e7\u00f6z\u00fcm bilmek de\u011fil, k\u0131sa yol bilmek kazand\u0131r\u0131r.',
  yontem:[
    'Her konuda \u00f6nce **form\u00fcl kart\u0131**n\u0131 ezberle, sonra **\u00e7\u00f6z\u00fcml\u00fc \u00f6rnek**e bak.',
    '**H\u0131z takti\u011fi** kutular\u0131 klasik y\u00f6ntemin k\u0131sa yolunu verir.',
    'Problemlerde \u015f\u0131klar\u0131 denemek \u00e7o\u011fu zaman denklem kurmaktan h\u0131zl\u0131d\u0131r.'
  ],
  konular:[

{
  id:'sayilar', ad:'Say\u0131lar \u00b7 EBOB \u2013 EKOK', soru:'3 soru', durum:'hazir',
  ozet:'Her y\u0131l 3 soru gelir. B\u00f6l\u00fcnebilme kurallar\u0131 ve EBOB-EKOK mant\u0131\u011f\u0131 oturursa garanti puand\u0131r.',
  bloklar:[
    {t:'formul', b:'B\u00f6l\u00fcnebilme kurallar\u0131', f:[
      '**2** \u2192 son rakam \u00e7ift',
      '**3** \u2192 rakamlar toplam\u0131 3\'\u00fcn kat\u0131',
      '**4** \u2192 son iki basamak 4\'\u00fcn kat\u0131',
      '**5** \u2192 son rakam 0 veya 5',
      '**6** \u2192 hem 2\'ye hem 3\'e b\u00f6l\u00fcn\u00fcr',
      '**8** \u2192 son \u00fc\u00e7 basamak 8\'in kat\u0131',
      '**9** \u2192 rakamlar toplam\u0131 9\'un kat\u0131',
      '**11** \u2192 sa\u011fdan ba\u015flayarak (+ \u2212 + \u2212) toplam\u0131 11\'in kat\u0131 veya 0'
    ]},
    {t:'formul', b:'EBOB \u2013 EKOK', f:[
      '**EBOB** = ortak asal \u00e7arpanlar\u0131n **en k\u00fc\u00e7\u00fck** \u00fcsleri \u00e7arp\u0131m\u0131',
      '**EKOK** = t\u00fcm asal \u00e7arpanlar\u0131n **en b\u00fcy\u00fck** \u00fcsleri \u00e7arp\u0131m\u0131',
      '**a \u00b7 b = EBOB(a,b) \u00b7 EKOK(a,b)**',
      'EBOB \u2192 *b\u00f6lme, par\u00e7alara ay\u0131rma, en b\u00fcy\u00fck e\u015fit par\u00e7a*',
      'EKOK \u2192 *birlikte olma, ayn\u0131 anda, en az ka\u00e7, tekrar bulu\u015fma*'
    ]},
    {t:'cozum', b:'\u00d6rnek', q:'Bir tamsay\u0131 12 ve 18\'e b\u00f6l\u00fcnd\u00fc\u011f\u00fcnde 5 kalan\u0131n\u0131 veriyor. Bu ko\u015fulu sa\u011flayan en k\u00fc\u00e7\u00fck \u00fc\u00e7 basamakl\u0131 say\u0131 ka\u00e7t\u0131r?',
     s:[
       'Say\u0131: **EKOK(12,18)\u00b7k + 5** bi\u00e7imindedir.',
       '12 = 2\u00b2\u00b73, 18 = 2\u00b73\u00b2 \u2192 EKOK = 2\u00b2\u00b73\u00b2 = **36**',
       'Say\u0131 = 36k + 5. \u00dc\u00e7 basamakl\u0131 en k\u00fc\u00e7\u00fck de\u011fer i\u00e7in 36k + 5 \u2265 100 \u2192 36k \u2265 95 \u2192 k \u2265 2,6 \u2192 **k = 3**',
       'Say\u0131 = 36\u00b73 + 5 = **113**'
     ], c:'113'},
    {t:'taktik', b:'H\u0131z takti\u011fi', x:'"Hepsine b\u00f6l\u00fcnd\u00fc\u011f\u00fcnde **ayn\u0131 kalan\u0131** veriyor" \u2192 **EKOK\u00b7k + kalan**. "Hepsini b\u00f6ld\u00fc\u011f\u00fcnde ayn\u0131 kalan\u0131 veriyor" \u2192 **EBOB**. \u0130ki kal\u0131b\u0131 kar\u0131\u015ft\u0131rma: *b\u00f6l\u00fcnen* mi *b\u00f6len* mi?'},
    {t:'tuzak', i:[
      'Ard\u0131\u015f\u0131k say\u0131lar toplam\u0131: **n terimli ard\u0131\u015f\u0131k tam say\u0131lar\u0131n toplam\u0131 = (ilk + son)\u00b7n / 2**.',
      '0 \u00e7ift say\u0131d\u0131r, 1 asal de\u011fildir, 2 tek asald\u0131r \u2014 \u015f\u0131klarda s\u0131k kullan\u0131l\u0131r.',
      'Negatif say\u0131larda "en b\u00fcy\u00fck" ile "mutlak de\u011ferce en b\u00fcy\u00fck" farkl\u0131d\u0131r.'
    ]}
  ]
},

{
  id:'problemler-hareket', ad:'Hareket \u2013 H\u0131z Problemleri', soru:'1\u20132 soru', durum:'hazir',
  ozet:'Form\u00fcl\u00fc tek: yol = h\u0131z \u00d7 zaman. Zorluk kurulumda, form\u00fclde de\u011fil.',
  bloklar:[
    {t:'formul', b:'Temel ba\u011f\u0131nt\u0131lar', f:[
      '**Yol = H\u0131z \u00d7 Zaman**  \u2192  x = v \u00b7 t',
      '**Ters y\u00f6nde yakla\u015fma**: ba\u011f\u0131l h\u0131z = v\u2081 + v\u2082',
      '**Ayn\u0131 y\u00f6nde yeti\u015fme**: ba\u011f\u0131l h\u0131z = v\u2081 \u2212 v\u2082',
      '**Ortalama h\u0131z** = toplam yol \u00f7 toplam zaman *(h\u0131zlar\u0131n ortalamas\u0131 DE\u011e\u0130L)*',
      'Gidi\u015f-d\u00f6n\u00fc\u015f e\u015fit yolda: **V_ort = 2\u00b7v\u2081\u00b7v\u2082 / (v\u2081 + v\u2082)** (harmonik ortalama)',
      'Trenin k\u00f6pr\u00fcy\u00fc ge\u00e7mesi: al\u0131nan yol = **tren boyu + k\u00f6pr\u00fc boyu**'
    ]},
    {t:'cozum', b:'\u00d6rnek', q:'Aralar\u0131nda 300 km olan iki \u015fehirden ayn\u0131 anda kar\u015f\u0131l\u0131kl\u0131 hareket eden ara\u00e7lar\u0131n h\u0131zlar\u0131 60 km/sa ve 90 km/sa\'tir. Ka\u00e7 saat sonra kar\u015f\u0131la\u015f\u0131rlar?',
     s:[
       'Ters y\u00f6nde hareket \u2192 h\u0131zlar toplan\u0131r: 60 + 90 = **150 km/sa**',
       't = yol \u00f7 ba\u011f\u0131l h\u0131z = 300 \u00f7 150',
       't = **2 saat**'
     ], c:'2 saat'},
    {t:'taktik', b:'H\u0131z takti\u011fi', x:'Ortalama h\u0131z sorusunda \u015f\u0131klarda **h\u0131zlar\u0131n aritmetik ortalamas\u0131** mutlaka vard\u0131r ve **\u00e7eldiricidir**. 60 ve 90 i\u00e7in 75 \u015f\u0131kk\u0131n\u0131 g\u00f6rd\u00fc\u011f\u00fcnde dur \u2014 cevap b\u00fcy\u00fck ihtimalle 72\'dir.'}
  ]
},

{ id:'temel-kavramlar', ad:'Temel Kavramlar', soru:'1 soru', durum:'iskelet',
  ozet:'Say\u0131 k\u00fcmeleri, tek-\u00e7ift, asal, ard\u0131\u015f\u0131k say\u0131lar, fakt\u00f6riyel giri\u015f.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Do\u011fal, tam, rasyonel, irrasyonel, reel say\u0131lar',
    'Tek-\u00e7ift say\u0131lar\u0131n d\u00f6rt i\u015flem kurallar\u0131',
    'Asal say\u0131lar, aralar\u0131nda asal, \u00e7arpan say\u0131s\u0131 bulma',
    'Ard\u0131\u015f\u0131k say\u0131lar ve toplam form\u00fclleri',
    'Basamak kavram\u0131 ve \u00e7\u00f6z\u00fcmleme'
  ]}]
},

{ id:'rasyonel', ad:'Rasyonel ve Ondal\u0131kl\u0131 Say\u0131lar', soru:'2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Rasyonel say\u0131larda d\u00f6rt i\u015flem, sadele\u015ftirme',
    'S\u0131ralama, devirli ondal\u0131k a\u00e7\u0131l\u0131m',
    'Ondal\u0131k say\u0131larda i\u015flemler ve yuvarlama',
    'Bile\u015fik kesir, tam say\u0131l\u0131 kesir d\u00f6n\u00fc\u015f\u00fcmleri'
  ]}]
},

{ id:'esitsizlik-mutlak', ad:'Basit E\u015fitsizlikler \u00b7 Mutlak De\u011fer', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'E\u015fitsizli\u011fin \u00f6zellikleri, negatifle \u00e7arpma kural\u0131',
    'Aral\u0131k g\u00f6sterimi ve tam say\u0131 say\u0131s\u0131 bulma',
    'Mutlak de\u011ferin \u00f6zellikleri',
    'Mutlak de\u011ferli denklem ve e\u015fitsizlik \u00e7\u00f6z\u00fcm\u00fc'
  ]}]
},

{ id:'uslu-koklu', ad:'\u00dcsl\u00fc ve K\u00f6kl\u00fc Say\u0131lar', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Ezberlenecek kurallar', f:[
    'a\u1d50 \u00b7 a\u207f = a\u1d50\u207a\u207f   \u00b7   a\u1d50 \u00f7 a\u207f = a\u1d50\u207b\u207f   \u00b7   (a\u1d50)\u207f = a\u1d50\u207f',
    'a\u2070 = 1 (a \u2260 0)   \u00b7   a\u207b\u207f = 1/a\u207f',
    '\u207f\u221aa = a^(1/n)   \u00b7   \u221aa\u00b7\u221ab = \u221a(ab)',
    '(\u22121)\u1d9c\u2071\u1da0\u1d57 = 1   \u00b7   (\u22121)\u1d57\u1d49\u1d4f = \u22121'
  ]}]
},

{ id:'carpanlara-ayirma', ad:'\u00c7arpanlara Ay\u0131rma \u00b7 \u00d6zde\u015flikler', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'\u00d6zde\u015flikler', f:[
    'a\u00b2 \u2212 b\u00b2 = (a\u2212b)(a+b)',
    '(a\u00b1b)\u00b2 = a\u00b2 \u00b1 2ab + b\u00b2',
    'a\u00b3 \u00b1 b\u00b3 = (a \u00b1 b)(a\u00b2 \u2213 ab + b\u00b2)',
    'a\u00b2 + b\u00b2 = (a+b)\u00b2 \u2212 2ab'
  ]}]
},

{ id:'oran-oranti', ad:'Oran \u2013 Orant\u0131', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Do\u011fru ve ters orant\u0131',
    'Orant\u0131 \u00f6zellikleri, i\u00e7ler-d\u0131\u015flar \u00e7arp\u0131m\u0131',
    'Bile\u015fik orant\u0131 ve orant\u0131 problemleri'
  ]}]
},

{ id:'denklem', ad:'Denklem \u00c7\u00f6zme', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Birinci dereceden bir bilinmeyenli denklem',
    '\u0130ki bilinmeyenli denklem sistemleri (yerine koyma, yok etme)',
    '\u0130kinci dereceden denklem, diskriminant, k\u00f6k-katsay\u0131 ba\u011f\u0131nt\u0131s\u0131'
  ]}]
},

{ id:'sayi-kesir-yas', ad:'Say\u0131 \u00b7 Kesir \u00b7 Ya\u015f Problemleri', soru:'3\u20134 soru', durum:'iskelet',
  bloklar:[
    {t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
      'Say\u0131 problemlerinde kurulum ve \u00e7eviri kal\u0131plar\u0131',
      'Kesir problemlerinde "geriye do\u011fru \u00e7\u00f6z\u00fcm"',
      'Ya\u015f problemleri: ya\u015f fark\u0131 sabittir'
    ]},
    {t:'taktik', b:'H\u0131z takti\u011fi', x:'Ya\u015f problemlerinde **iki ki\u015finin ya\u015f fark\u0131 hi\u00e7 de\u011fi\u015fmez**. Toplam ya\u015f ise her y\u0131l **ki\u015fi say\u0131s\u0131 kadar** artar. Bu iki c\u00fcmle ya\u015f sorular\u0131n\u0131n \u00e7o\u011funu tek sat\u0131rda bitirir.'}
  ]
},

{ id:'isci-havuz', ad:'\u0130\u015f\u00e7i ve Havuz Problemleri', soru:'1 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Temel ba\u011f\u0131nt\u0131', f:[
    'Bir i\u015f\u00e7inin **1 saatte yapt\u0131\u011f\u0131 i\u015f** = 1 / (bitirme s\u00fcresi)',
    'Birlikte \u00e7al\u0131\u015f\u0131rlarsa h\u0131zlar **toplan\u0131r**',
    'Havuzda dolduran (+), bo\u015faltan (\u2212) al\u0131n\u0131r',
    'Sonu\u00e7 s\u00fcre = 1 \u00f7 (toplam h\u0131z)'
  ]}]
},

{ id:'yuzde-kar-karisim', ad:'Y\u00fczde \u00b7 K\u00e2r-Zarar \u00b7 Kar\u0131\u015f\u0131m', soru:'2\u20133 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Y\u00fczde hesab\u0131, art\u0131\u015f-azal\u0131\u015f, ard\u0131\u015f\u0131k y\u00fczde de\u011fi\u015fimi',
    'Maliyet, sat\u0131\u015f fiyat\u0131, k\u00e2r-zarar y\u00fczdesi (hangisinin \u00fczerinden?)',
    'Kar\u0131\u015f\u0131m: tuz-su, alkol-su, ala\u015f\u0131m',
    'Kar\u0131\u015f\u0131ma su eklenince madde miktar\u0131 de\u011fi\u015fmez'
  ]},
  {t:'taktik', b:'H\u0131z takti\u011fi', x:'Ard\u0131\u015f\u0131k %20 art\u0131\u015f + %20 azal\u0131\u015f **ba\u015fa d\u00f6nmez**; sonu\u00e7 %4 azal\u0131\u015ft\u0131r. \u00c7\u00fcnk\u00fc ikinci i\u015flem yeni de\u011fere uygulan\u0131r. \u00c7eldirici hep "de\u011fi\u015fmez" \u015f\u0131kk\u0131d\u0131r.'}]
},

{ id:'grafik-tablo', ad:'Grafik ve Tablo Problemleri', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'S\u00fctun, \u00e7izgi, daire grafi\u011fi okuma',
    'Daire grafi\u011finde a\u00e7\u0131 \u2194 y\u00fczde d\u00f6n\u00fc\u015f\u00fcm\u00fc (360\u00b0 = %100)',
    'Tablodan y\u00fczde ve oran \u00e7\u0131karma'
  ]}]
},

{ id:'kumeler', ad:'K\u00fcmeler ve K\u00fcme Problemleri', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Form\u00fcller', f:[
    's(A\u222aB) = s(A) + s(B) \u2212 s(A\u2229B)',
    's(A\u222aB\u222aC) = s(A)+s(B)+s(C) \u2212 s(A\u2229B) \u2212 s(A\u2229C) \u2212 s(B\u2229C) + s(A\u2229B\u2229C)',
    'Yaln\u0131z A = s(A) \u2212 s(A\u2229B)',
    'Alt k\u00fcme say\u0131s\u0131 = 2\u207f \u00b7 \u00d6z alt k\u00fcme = 2\u207f \u2212 1'
  ]}]
},

{ id:'fonksiyon-islem', ad:'Fonksiyonlar ve \u0130\u015flem', soru:'1\u20132 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Fonksiyon tan\u0131m\u0131, tan\u0131m-g\u00f6r\u00fcnt\u00fc k\u00fcmesi',
    'Bile\u015fke fonksiyon, ters fonksiyon',
    'Tan\u0131ml\u0131 i\u015flem sorular\u0131 (\u00f6zel semboll\u00fc)',
    '\u0130\u015flemin \u00f6zellikleri: de\u011fi\u015fme, birle\u015fme, birim, ters eleman'
  ]}]
},

{ id:'permutasyon-olasilik', ad:'Perm\u00fctasyon \u00b7 Kombinasyon \u00b7 Olas\u0131l\u0131k', soru:'2\u20133 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Form\u00fcller', f:[
    'P(n,r) = n! / (n\u2212r)!  \u2192 **s\u0131ra \u00f6nemli**',
    'C(n,r) = n! / [r!\u00b7(n\u2212r)!]  \u2192 **s\u0131ra \u00f6nemsiz**',
    'Olas\u0131l\u0131k = istenen durum say\u0131s\u0131 / t\u00fcm durum say\u0131s\u0131',
    'P(A veya B) = P(A) + P(B) \u2212 P(A\u2229B)',
    'Ayr\u0131k olaylarda: P(A\u222aB) = P(A) + P(B)'
  ]},
  {t:'taktik', b:'H\u0131z takti\u011fi', x:'"S\u0131ralanma, dizilme, yerle\u015ftirme" \u2192 **perm\u00fctasyon**. "Se\u00e7me, komisyon, tak\u0131m kurma" \u2192 **kombinasyon**. Soru k\u00f6k\u00fcndeki fiil hangisini istedi\u011fini s\u00f6yler.'}]
},

{ id:'modular', ad:'Mod\u00fcler Aritmetik', soru:'0\u20131 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Kalan bulma, mod i\u015flemleri',
    'Devirli problemler (g\u00fcn, saat, takvim)',
    '\u00dcsl\u00fc say\u0131lar\u0131n birler basama\u011f\u0131'
  ]}]
},

{ id:'sayisal-mantik', ad:'Say\u0131sal Mant\u0131k', soru:'2\u20133 soru', durum:'iskelet',
  ozet:'\u00d6r\u00fcnt\u00fc ve kural bulma. Form\u00fcl yok, g\u00f6z al\u0131\u015fkanl\u0131\u011f\u0131 var.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Say\u0131 dizilerinde kural bulma (fark, \u00e7arpan, kare, kar\u0131\u015f\u0131k)',
    '\u015eekil-say\u0131 ili\u015fkileri',
    'Tablo ve matris \u00f6r\u00fcnt\u00fcleri',
    'Analitik d\u00fc\u015f\u00fcnme sorular\u0131'
  ]},
  {t:'taktik', b:'H\u0131z takti\u011fi', x:'Dizide \u00f6nce **ard\u0131\u015f\u0131k farklar\u0131** yaz. Fark sabitse do\u011frusal, farklar\u0131n fark\u0131 sabitse kare/ikinci dereceden, oran sabitse geometriktir. \u00dc\u00e7 deneme yeter, d\u00f6rd\u00fcnc\u00fcde ge\u00e7.'}]
},

{ id:'sekil-yetenek', ad:'\u015eekil Yetenek', soru:'0\u20131 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    '\u015eekil d\u00f6nd\u00fcrme ve yans\u0131ma',
    'Katlama-a\u00e7ma (k\u00fcp a\u00e7\u0131n\u0131m\u0131)',
    '\u00d6r\u00fcnt\u00fcde eksik par\u00e7ay\u0131 bulma',
    'K\u00fcp sayma ve g\u00f6r\u00fcn\u00fcm sorular\u0131'
  ]}]
}

  ]
};
