/* KPSS Ön Lisans — TÜRKÇE · 30 soru
   Çalışma formatı: KURAL → YANLIŞ / DOĞRU cümle çifti.
   Türkçe'de kuralı okumak yetmiyor; yanlışı görünce tanımak gerekiyor. */

window.DERS_TURKCE = {
  id:'turkce', ad:'T\u00fcrk\u00e7e', bolum:'Genel Yetenek', soru:30, renk:'tur',
  tanim:'Sorular\u0131n yar\u0131s\u0131 paragraf. Kural konular\u0131 h\u0131zl\u0131 bitirilir, kalan zaman paragrafa ayr\u0131l\u0131r.',
  yontem:[
    'Her kural\u0131n alt\u0131nda bir **yanl\u0131\u015f** ve bir **do\u011fru** c\u00fcmle var. \u00d6nce yanl\u0131\u015f\u0131 bul, sonra a\u00e7\u0131klamay\u0131 oku.',
    'Paragrafta bilgi de\u011fil teknik gerekir: soru k\u00f6k\u00fcn\u00fc \u00f6nce oku, sonra par\u00e7ay\u0131.',
    'Yaz\u0131m ve noktalama garanti sorudur \u2014 ezberle, kaybetme.'
  ],
  konular:[

{
  id:'sozcukte-anlam', ad:'S\u00f6zc\u00fckte Anlam', soru:'1\u20132 soru', durum:'hazir',
  ozet:'Bir kelimenin c\u00fcmledeki g\u00f6revini bulma i\u015fi. S\u00f6zl\u00fck anlam\u0131 de\u011fil, ba\u011flam belirler.',
  bloklar:[
    {t:'ozet', b:'Anlam t\u00fcrleri', i:[
      '**Ger\u00e7ek (temel) anlam**: kelimenin ilk akla gelen anlam\u0131. \u2192 *\u00c7ocuk elini y\u0131kad\u0131.*',
      '**Yan anlam**: temel anlamla ilgisi s\u00fcren, benzerli\u011fe dayanan anlam. \u2192 *Masan\u0131n **aya\u011f\u0131** k\u0131r\u0131ld\u0131.*',
      '**Mecaz anlam**: temel anlamdan tamamen uzakla\u015fm\u0131\u015f. \u2192 *Bu i\u015fin alt\u0131ndan **kalkamad\u0131m**.*',
      '**Terim anlam**: bir bilim, sanat, meslek dal\u0131na ait. \u2192 *C\u00fcmlenin **\u00f6znesi**ni bulun.*',
      '**Deyim**: kal\u0131pla\u015fm\u0131\u015f, \u00e7o\u011funlukla mecazl\u0131 s\u00f6z. \u2192 *a\u011fz\u0131 kulaklar\u0131na varmak*',
      '**\u0130kileme**: anlam\u0131 peki\u015ftirmek i\u00e7in kelime tekrar\u0131. \u2192 *yava\u015f yava\u015f, e\u011fri b\u00fc\u011fr\u00fc*'
    ]},
    {t:'karsit', b:'Yan anlam m\u0131 mecaz m\u0131?', c:[
      {y:'"Da\u011f\u0131n **ete\u011fi**nde kamp kurduk." \u2192 mecaz', d:'**Yan anlam.** Ete\u011fin "alt k\u0131s\u0131m" anlam\u0131, elbisenin ete\u011fiyle *benzerlik* ta\u015f\u0131r. Ba\u011f koptuysa mecaz, s\u00fcr\u00fcyorsa yan anlamd\u0131r.'},
      {y:'"S\u00f6zlerim onu \u00e7ok **k\u0131rd\u0131**." \u2192 yan anlam', d:'**Mecaz.** Burada fiziksel bir k\u0131r\u0131lma yok, temel anlamla ba\u011f tamamen kopmu\u015f.'}
    ]},
    {t:'tuzak', i:[
      'Yan anlam ile mecaz ayr\u0131m\u0131: **benzerlik ba\u011f\u0131 s\u00fcr\u00fcyorsa yan anlam**, kopmu\u015fsa mecaz.',
      'Deyimler **c\u00fcmleye g\u00f6re** ger\u00e7ek anlaml\u0131 da olabilir: *"Eli aya\u011f\u0131 tutmuyor"* deyimdir; *"Elini y\u0131kad\u0131"* de\u011fildir.',
      'Terim anlam her zaman ger\u00e7ek anlamd\u0131r; ikisi \u00e7eli\u015fmez.'
    ]}
  ]
},

{
  id:'cumlede-anlam', ad:'C\u00fcmlede Anlam', soru:'1\u20133 soru', durum:'hazir',
  ozet:'C\u00fcmlenin ne s\u00f6yledi\u011fini de\u011fil, nas\u0131l s\u00f6yledi\u011fini soruyor: neden-sonu\u00e7, ko\u015ful, ama\u00e7, kar\u015f\u0131la\u015ft\u0131rma.',
  bloklar:[
    {t:'tablo', b:'Anlam ili\u015fkileri', h:['\u0130li\u015fki','\u0130\u015faret kelimesi','\u00d6rnek'], r:[
      ['Neden-sonu\u00e7','i\u00e7in, -di\u011finden, dolay\u0131, ile','Ya\u011fmur **ya\u011fd\u0131\u011f\u0131 i\u00e7in** ma\u00e7 ertelendi.'],
      ['Ama\u00e7-sonu\u00e7','i\u00e7in, \u00fczere, diye, amac\u0131yla','S\u0131nav\u0131 kazanmak **i\u00e7in** \u00e7al\u0131\u015f\u0131yor.'],
      ['Ko\u015ful (\u015fart)','-se, -dik\u00e7e, ancak, yeter ki','Erken kalkarsan yeti\u015firsin.'],
      ['Kar\u015f\u0131la\u015ft\u0131rma','daha, en, kadar, g\u00f6re','Bu kitap \u00f6tekinden **daha** iyi.'],
      ['\u00d6znellik','bence, san\u0131r\u0131m, g\u00fczel, k\u00f6t\u00fc','Bu film **\u00e7ok s\u0131k\u0131c\u0131yd\u0131**.'],
      ['Nesnellik','say\u0131, \u00f6l\u00e7\u00fc, kan\u0131tlanabilir bilgi','Film **120 dakika** s\u00fcr\u00fcyor.'],
      ['E\u015fitlik / yakla\u015f\u0131kl\u0131k','gibi, sanki, yakla\u015f\u0131k','**Yakla\u015f\u0131k** 50 ki\u015fi vard\u0131.']
    ]},
    {t:'karsit', b:'Neden-sonu\u00e7 mu ama\u00e7-sonu\u00e7 mu?', c:[
      {y:'"S\u0131nav\u0131 kazanmak **i\u00e7in** \u00e7al\u0131\u015ft\u0131." \u2192 neden-sonu\u00e7', d:'**Ama\u00e7-sonu\u00e7.** "\u0130\u00e7in"den \u00f6nceki k\u0131s\u0131m hen\u00fcz ger\u00e7ekle\u015fmemi\u015f bir *hedef*tir. Neden-sonu\u00e7ta \u00f6nceki k\u0131s\u0131m ger\u00e7ekle\u015fmi\u015f olmal\u0131d\u0131r.'},
      {y:'"Hasta **oldu\u011fu i\u00e7in** gelmedi." \u2192 ama\u00e7-sonu\u00e7', d:'**Neden-sonu\u00e7.** Hastal\u0131k ger\u00e7ekle\u015fmi\u015f bir durumdur, hedef de\u011fildir. K\u0131sa test: "i\u00e7in"den \u00f6ncesi *olmu\u015f* mu, *olacak* m\u0131?'}
    ]},
    {t:'kod', b:'\u0130\u00e7in testi', x:'**"\u0130\u00e7in"den \u00f6ncesi OLMU\u015eSA neden, OLACAKSA ama\u00e7.** Tek soruyla ayr\u0131l\u0131r.'}
  ]
},

{ id:'sozcuk-turleri', ad:'S\u00f6zc\u00fck T\u00fcrleri', soru:'1\u20132 soru', durum:'iskelet',
  ozet:'\u0130sim, s\u0131fat, zamir, zarf, edat, ba\u011fla\u00e7, \u00fcnlem, fiil. En \u00e7ok zamir-s\u0131fat ve edat-ba\u011fla\u00e7 ayr\u0131m\u0131 sorulur.',
  bloklar:[
    {t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
      '\u0130sim: varl\u0131k, cins, \u00f6zel, tekil-\u00e7o\u011ful-topluluk, somut-soyut',
      'S\u0131fat: niteleme / belirtme (i\u015faret, say\u0131, belgisiz, soru)',
      'Zamir: ki\u015fi, i\u015faret, belgisiz, soru, ilgi (-ki), iyelik, ek h\u00e2lindeki zamirler',
      'Zarf: durum, zaman, yer-y\u00f6n, miktar, soru',
      'Edat (ilge\u00e7), ba\u011fla\u00e7, \u00fcnlem \u2014 ayr\u0131m\u0131 ve "de / ki / ile" kullan\u0131m\u0131',
      'Fiil: kip, ki\u015fi, \u00e7at\u0131, ek-fiil, yap\u0131'
    ]},
    {t:'karsit', b:'S\u0131fat m\u0131 zamir mi? (\u00f6rnek \u015fablon)', c:[
      {y:'"**Bu** kitab\u0131 okudum." \u2192 zamir', d:'**S\u0131fat.** \u0130smin \u00f6n\u00fcnde ve onu belirtiyor. "**Bu**nu okudum" deseydi zamir olurdu \u2014 zamir ismin yerini tutar, s\u0131fat ismin \u00f6n\u00fcne gelir.'}
    ]}
  ]
},

{ id:'sozcukte-yapi', ad:'S\u00f6zc\u00fckte Yap\u0131', soru:'1 soru', durum:'iskelet',
  ozet:'K\u00f6k, g\u00f6vde, yap\u0131m eki, \u00e7ekim eki. Basit-t\u00fcremi\u015f-birle\u015fik ayr\u0131m\u0131.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'K\u00f6k t\u00fcrleri: isim k\u00f6k\u00fc, fiil k\u00f6k\u00fc, ortak k\u00f6k, seste\u015f k\u00f6k',
    'Yap\u0131m ekleri: isimden isim, isimden fiil, fiilden isim, fiilden fiil',
    '\u00c7ekim ekleri: h\u00e2l, iyelik, \u00e7o\u011ful, tamlayan, kip, ki\u015fi, ek-fiil',
    'Basit / t\u00fcremi\u015f / birle\u015fik s\u00f6zc\u00fck',
    'Birle\u015fik s\u00f6zc\u00fck kurulma yollar\u0131'
  ]}]
},

{ id:'cumlenin-ogeleri', ad:'C\u00fcmlenin \u00d6geleri', soru:'1 soru', durum:'iskelet',
  ozet:'Y\u00fcklem, \u00f6zne, nesne, dolayl\u0131 t\u00fcmle\u00e7, zarf t\u00fcmleci, edat t\u00fcmleci.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    '\u00d6nce y\u00fcklem bulunur, sonra sorular y\u00fckleme sorulur',
    'Ger\u00e7ek \u00f6zne / s\u00f6zde \u00f6zne ayr\u0131m\u0131',
    'Belirtili ve belirtisiz nesne',
    'Dolayl\u0131 t\u00fcmle\u00e7: -e / -de / -den h\u00e2l ekleri',
    'Ara s\u00f6z, ara c\u00fcmle ve \u00f6ge d\u0131\u015f\u0131 unsurlar'
  ]}]
},

{ id:'cumle-turleri', ad:'C\u00fcmle T\u00fcrleri', soru:'1 soru', durum:'iskelet',
  ozet:'Y\u00fckleminin t\u00fcr\u00fcne, yerine, anlam\u0131na ve yap\u0131s\u0131na g\u00f6re c\u00fcmleler.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Y\u00fcklemin t\u00fcr\u00fcne g\u00f6re: fiil / isim c\u00fcmlesi',
    'Y\u00fcklemin yerine g\u00f6re: kurall\u0131 / devrik',
    'Anlam\u0131na g\u00f6re: olumlu, olumsuz, soru, \u00fcnlem',
    'Yap\u0131s\u0131na g\u00f6re: basit, birle\u015fik, s\u0131ral\u0131, ba\u011fl\u0131',
    'Birle\u015fik c\u00fcmle \u00e7e\u015fitleri: giri\u015fik, \u015fartl\u0131, ki\'li, i\u00e7 i\u00e7e'
  ]}]
},

{ id:'ses-olaylari', ad:'Ses Bilgisi ve Ses Olaylar\u0131', soru:'1\u20132 soru', durum:'iskelet',
  ozet:'\u00dcnl\u00fc ve \u00fcns\u00fcz uyumlar\u0131 + ses olaylar\u0131. Ezberi az, mant\u0131\u011f\u0131 \u00e7ok bir konu.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'B\u00fcy\u00fck ve k\u00fc\u00e7\u00fck \u00fcnl\u00fc uyumu, uymayan s\u00f6zc\u00fckler',
    '\u00dcns\u00fcz benze\u015fmesi (sertle\u015fme), \u00fcns\u00fcz yumu\u015famas\u0131',
    '\u00dcnl\u00fc d\u00fc\u015fmesi, \u00fcnl\u00fc t\u00fcremesi, \u00fcnl\u00fc daralmas\u0131',
    '\u00dcns\u00fcz d\u00fc\u015fmesi, \u00fcns\u00fcz t\u00fcremesi, kayna\u015ft\u0131rma',
    'Ulama ve vurgu'
  ]}]
},

{ id:'yazim', ad:'Yaz\u0131m Kurallar\u0131', soru:'1 soru', durum:'iskelet',
  ozet:'Garanti soru. Kural say\u0131s\u0131 s\u0131n\u0131rl\u0131, tekrar edince kaybedilmez.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'B\u00fcy\u00fck harflerin kullan\u0131ld\u0131\u011f\u0131 yerler',
    '"de / da" ayr\u0131 m\u0131 biti\u015fik mi',
    '"ki" ayr\u0131 m\u0131 biti\u015fik mi',
    '"mi" soru ekinin yaz\u0131m\u0131',
    'Birle\u015fik kelimelerin biti\u015fik / ayr\u0131 yaz\u0131m\u0131',
    'Say\u0131lar\u0131n, k\u0131saltmalar\u0131n, tarihlerin yaz\u0131m\u0131',
    'D\u00fczeltme i\u015fareti (^) kullan\u0131m\u0131'
  ]}]
},

{ id:'noktalama', ad:'Noktalama \u0130\u015faretleri', soru:'1 soru', durum:'iskelet',
  ozet:'Garanti soru. Virg\u00fcl ve kesme i\u015fareti en \u00e7ok sorulanlar.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Nokta, virg\u00fcl, noktal\u0131 virg\u00fcl, iki nokta',
    '\u00dc\u00e7 nokta, soru i\u015fareti, \u00fcnlem',
    'K\u0131sa \u00e7izgi, uzun \u00e7izgi, t\u0131rnak, parantez',
    'Kesme i\u015faretinin ay\u0131rd\u0131\u011f\u0131 ve ay\u0131rmad\u0131\u011f\u0131 ekler'
  ]}]
},

{ id:'anlatim-bozukluklari', ad:'Anlat\u0131m Bozukluklar\u0131', soru:'1\u20132 soru', durum:'iskelet',
  ozet:'Anlamsal ve yap\u0131sal bozukluklar. C\u00fcmleyi sesli okuyunca \u00e7o\u011fu kendini belli eder.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Anlamsal: gereksiz s\u00f6zc\u00fck, anlamca \u00e7eli\u015fme, yanl\u0131\u015f anlamda kullan\u0131m, mant\u0131k hatas\u0131',
    'Yap\u0131sal: \u00f6zne-y\u00fcklem uyumsuzlu\u011fu, \u00f6ge eksikli\u011fi, tamlama yanl\u0131\u015f\u0131, ek yanl\u0131\u015f\u0131, \u00e7at\u0131 uyumsuzlu\u011fu',
    'Deyim ve atas\u00f6z\u00fc yanl\u0131\u015f kullan\u0131m\u0131'
  ]}]
},

{ id:'paragraf', ad:'Paragrafta Anlam', soru:'14\u201315 soru \u2014 dersin belkemi\u011fi', durum:'iskelet',
  ozet:'T\u00fcrk\u00e7enin yar\u0131s\u0131 bu konu. Bilgi de\u011fil teknik gerektirir; g\u00fcnde 20 paragraf \u00e7\u00f6zmek en verimli \u00e7al\u0131\u015fmad\u0131r.',
  bloklar:[
    {t:'ozet', b:'Soru tipleri', i:[
      'Ana d\u00fc\u015f\u00fcnce / ana fikir',
      'Yard\u0131mc\u0131 d\u00fc\u015f\u00fcnce ("de\u011finilmemi\u015ftir" sorular\u0131)',
      'Paragraf\u0131n konusu ve ba\u015fl\u0131\u011f\u0131',
      'Paragrafta yap\u0131: giri\u015f, geli\u015fme, sonu\u00e7 c\u00fcmlesi',
      'Paragraf\u0131 ikiye b\u00f6lme, ak\u0131\u015f\u0131 bozan c\u00fcmle',
      'Bo\u015fluk doldurma, c\u00fcmle tamamlama',
      'Paragraf olu\u015fturma (c\u00fcmle s\u0131ralama)',
      'Yazar\u0131n bak\u0131\u015f a\u00e7\u0131s\u0131, \u00fcslubu, amac\u0131'
    ]},
    {t:'kod', b:'Paragraf tekni\u011fi', x:'**\u00d6nce soru k\u00f6k\u00fc, sonra par\u00e7a.** Ne arad\u0131\u011f\u0131n\u0131 bilmeden okumak zaman kayb\u0131d\u0131r. "De\u011finilmemi\u015ftir" sorular\u0131nda \u015f\u0131klar\u0131 par\u00e7ada tek tek i\u015faretle \u2014 eleme y\u00f6ntemi burada en h\u0131zl\u0131s\u0131d\u0131r.'}
  ]
},

{ id:'anlatim-bicimleri', ad:'Paragrafta Anlat\u0131m Bi\u00e7imleri', soru:'1 soru', durum:'iskelet',
  ozet:'Anlat\u0131m bi\u00e7imi (a\u00e7\u0131klama, tart\u0131\u015fma, betimleme, \u00f6yk\u00fcleme) ve d\u00fc\u015f\u00fcnceyi geli\u015ftirme yollar\u0131.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'A\u00e7\u0131klay\u0131c\u0131, tart\u0131\u015fmac\u0131, betimleyici, \u00f6yk\u00fcleyici anlat\u0131m',
    'D\u00fc\u015f\u00fcnceyi geli\u015ftirme yollar\u0131: tan\u0131mlama, \u00f6rnekleme, kar\u015f\u0131la\u015ft\u0131rma, tan\u0131k g\u00f6sterme, say\u0131sal veri, benzetme'
  ]}]
},

{ id:'sozel-mantik', ad:'S\u00f6zel Mant\u0131k', soru:'4 soru', durum:'iskelet',
  ozet:'Bilgi gerektirmez, tablo kurmay\u0131 gerektirir. Do\u011fru \u00e7\u00f6z\u00fcl\u00fcrse en garantili 4 sorudur.',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'S\u0131ralama ve dizilim problemleri',
    'E\u015fle\u015ftirme (kim-hangi-nerede) tablolar\u0131',
    'Do\u011fru-yanl\u0131\u015f ifade \u00e7\u00f6z\u00fcmlemesi',
    'Akrabal\u0131k ve konum ili\u015fkileri',
    'Kesin / kesin de\u011fil ayr\u0131m\u0131'
  ]},
  {t:'kod', b:'S\u00f6zel mant\u0131k tekni\u011fi', x:'**Her zaman tablo kur.** Kesin bilgiyi \u00f6nce yerle\u015ftir, olumsuz bilgileri (\u00d7 i\u015fareti) tabloya i\u015fle. Zihinden \u00e7\u00f6zmeye \u00e7al\u0131\u015fmak en s\u0131k yap\u0131lan hatad\u0131r.'}]
}

  ]
};
