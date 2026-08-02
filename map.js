/* KPSS Ön Lisans — TÜRKÇE · 30 soru
   Çalışma formatı: KURAL → YANLIŞ / DOĞRU cümle çifti.
   Türkçe'de kuralı okumak yetmiyor; yanlışı görünce tanımak gerekiyor. */

window.DERS_TURKCE = {
  id:'turkce', ad:'Türkçe', bolum:'Genel Yetenek', soru:30, renk:'tur',
  tanim:'Soruların yarısı paragraf. Kural konuları hızlı bitirilir, kalan zaman paragrafa ayrılır.',
  yontem:[
    'Her kuralın altında bir **yanlış** ve bir **doğru** cümle var. Önce yanlışı bul, sonra açıklamayı oku.',
    'Paragrafta bilgi değil teknik gerekir: soru kökünü önce oku, sonra parçayı.',
    'Yazım ve noktalama garanti sorudur — ezberle, kaybetme.'
  ],
  konular:[

{
  id:'sozcukte-anlam', ad:'Sözcükte Anlam', soru:'1–2 soru', durum:'hazir',
  ozet:'Bir kelimenin cümledeki görevini bulma işi. Sözlük anlamı değil, bağlam belirler.',
  bloklar:[
    {t:'ozet', b:'Anlam türleri', i:[
      '**Gerçek (temel) anlam**: kelimenin ilk akla gelen anlamı. → *Çocuk elini yıkadı.*',
      '**Yan anlam**: temel anlamla ilgisi süren, benzerliğe dayanan anlam. → *Masanın **ayağı** kırıldı.*',
      '**Mecaz anlam**: temel anlamdan tamamen uzaklaşmış. → *Bu işin altından **kalkamadım**.*',
      '**Terim anlam**: bir bilim, sanat, meslek dalına ait. → *Cümlenin **öznesi**ni bulun.*',
      '**Deyim**: kalıplaşmış, çoğunlukla mecazlı söz. → *ağzı kulaklarına varmak*',
      '**İkileme**: anlamı pekiştirmek için kelime tekrarı. → *yavaş yavaş, eğri büğrü*'
    ]},
    {t:'karsit', b:'Yan anlam mı mecaz mı?', c:[
      {y:'"Dağın **eteği**nde kamp kurduk." → mecaz', d:'**Yan anlam.** Eteğin "alt kısım" anlamı, elbisenin eteğiyle *benzerlik* taşır. Bağ koptuysa mecaz, sürüyorsa yan anlamdır.'},
      {y:'"Sözlerim onu çok **kırdı**." → yan anlam', d:'**Mecaz.** Burada fiziksel bir kırılma yok, temel anlamla bağ tamamen kopmuş.'}
    ]},
    {t:'tuzak', i:[
      'Yan anlam ile mecaz ayrımı: **benzerlik bağı sürüyorsa yan anlam**, kopmuşsa mecaz.',
      'Deyimler **cümleye göre** gerçek anlamlı da olabilir: *"Eli ayağı tutmuyor"* deyimdir; *"Elini yıkadı"* değildir.',
      'Terim anlam her zaman gerçek anlamdır; ikisi çelişmez.'
    ]}
  ]
},

{
  id:'cumlede-anlam', ad:'Cümlede Anlam', soru:'1–3 soru', durum:'hazir',
  ozet:'Cümlenin ne söylediğini değil, nasıl söylediğini soruyor: neden-sonuç, koşul, amaç, karşılaştırma.',
  bloklar:[
    {t:'tablo', b:'Anlam ilişkileri', h:['İlişki','İşaret kelimesi','Örnek'], r:[
      ['Neden-sonuç','için, -diğinden, dolayı, ile','Yağmur **yağdığı için** maç ertelendi.'],
      ['Amaç-sonuç','için, üzere, diye, amacıyla','Sınavı kazanmak **için** çalışıyor.'],
      ['Koşul (şart)','-se, -dikçe, ancak, yeter ki','Erken kalkarsan yetişirsin.'],
      ['Karşılaştırma','daha, en, kadar, göre','Bu kitap ötekinden **daha** iyi.'],
      ['Öznellik','bence, sanırım, güzel, kötü','Bu film **çok sıkıcıydı**.'],
      ['Nesnellik','sayı, ölçü, kanıtlanabilir bilgi','Film **120 dakika** sürüyor.'],
      ['Eşitlik / yaklaşıklık','gibi, sanki, yaklaşık','**Yaklaşık** 50 kişi vardı.']
    ]},
    {t:'karsit', b:'Neden-sonuç mu amaç-sonuç mu?', c:[
      {y:'"Sınavı kazanmak **için** çalıştı." → neden-sonuç', d:'**Amaç-sonuç.** "İçin"den önceki kısım henüz gerçekleşmemiş bir *hedef*tir. Neden-sonuçta önceki kısım gerçekleşmiş olmalıdır.'},
      {y:'"Hasta **olduğu için** gelmedi." → amaç-sonuç', d:'**Neden-sonuç.** Hastalık gerçekleşmiş bir durumdur, hedef değildir. Kısa test: "için"den öncesi *olmuş* mu, *olacak* mı?'}
    ]},
    {t:'kod', b:'İçin testi', x:'**"İçin"den öncesi OLMUŞSA neden, OLACAKSA amaç.** Tek soruyla ayrılır.'}
  ]
},

{ id:'sozcuk-turleri', ad:'Sözcük Türleri', soru:'1–2 soru', durum:'iskelet',
  ozet:'İsim, sıfat, zamir, zarf, edat, bağlaç, ünlem, fiil. En çok zamir-sıfat ve edat-bağlaç ayrımı sorulur.',
  bloklar:[
    {t:'ozet', b:'İşlenecek başlıklar', i:[
      'İsim: varlık, cins, özel, tekil-çoğul-topluluk, somut-soyut',
      'Sıfat: niteleme / belirtme (işaret, sayı, belgisiz, soru)',
      'Zamir: kişi, işaret, belgisiz, soru, ilgi (-ki), iyelik, ek hâlindeki zamirler',
      'Zarf: durum, zaman, yer-yön, miktar, soru',
      'Edat (ilgeç), bağlaç, ünlem — ayrımı ve "de / ki / ile" kullanımı',
      'Fiil: kip, kişi, çatı, ek-fiil, yapı'
    ]},
    {t:'karsit', b:'Sıfat mı zamir mi? (örnek şablon)', c:[
      {y:'"**Bu** kitabı okudum." → zamir', d:'**Sıfat.** İsmin önünde ve onu belirtiyor. "**Bu**nu okudum" deseydi zamir olurdu — zamir ismin yerini tutar, sıfat ismin önüne gelir.'}
    ]}
  ]
},

{ id:'sozcukte-yapi', ad:'Sözcükte Yapı', soru:'1 soru', durum:'iskelet',
  ozet:'Kök, gövde, yapım eki, çekim eki. Basit-türemiş-birleşik ayrımı.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Kök türleri: isim kökü, fiil kökü, ortak kök, sesteş kök',
    'Yapım ekleri: isimden isim, isimden fiil, fiilden isim, fiilden fiil',
    'Çekim ekleri: hâl, iyelik, çoğul, tamlayan, kip, kişi, ek-fiil',
    'Basit / türemiş / birleşik sözcük',
    'Birleşik sözcük kurulma yolları'
  ]}]
},

{ id:'cumlenin-ogeleri', ad:'Cümlenin Ögeleri', soru:'1 soru', durum:'iskelet',
  ozet:'Yüklem, özne, nesne, dolaylı tümleç, zarf tümleci, edat tümleci.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Önce yüklem bulunur, sonra sorular yükleme sorulur',
    'Gerçek özne / sözde özne ayrımı',
    'Belirtili ve belirtisiz nesne',
    'Dolaylı tümleç: -e / -de / -den hâl ekleri',
    'Ara söz, ara cümle ve öge dışı unsurlar'
  ]}]
},

{ id:'cumle-turleri', ad:'Cümle Türleri', soru:'1 soru', durum:'iskelet',
  ozet:'Yükleminin türüne, yerine, anlamına ve yapısına göre cümleler.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Yüklemin türüne göre: fiil / isim cümlesi',
    'Yüklemin yerine göre: kurallı / devrik',
    'Anlamına göre: olumlu, olumsuz, soru, ünlem',
    'Yapısına göre: basit, birleşik, sıralı, bağlı',
    'Birleşik cümle çeşitleri: girişik, şartlı, ki\'li, iç içe'
  ]}]
},

{ id:'ses-olaylari', ad:'Ses Bilgisi ve Ses Olayları', soru:'1–2 soru', durum:'iskelet',
  ozet:'Ünlü ve ünsüz uyumları + ses olayları. Ezberi az, mantığı çok bir konu.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Büyük ve küçük ünlü uyumu, uymayan sözcükler',
    'Ünsüz benzeşmesi (sertleşme), ünsüz yumuşaması',
    'Ünlü düşmesi, ünlü türemesi, ünlü daralması',
    'Ünsüz düşmesi, ünsüz türemesi, kaynaştırma',
    'Ulama ve vurgu'
  ]}]
},

{ id:'yazim', ad:'Yazım Kuralları', soru:'1 soru', durum:'iskelet',
  ozet:'Garanti soru. Kural sayısı sınırlı, tekrar edince kaybedilmez.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Büyük harflerin kullanıldığı yerler',
    '"de / da" ayrı mı bitişik mi',
    '"ki" ayrı mı bitişik mi',
    '"mi" soru ekinin yazımı',
    'Birleşik kelimelerin bitişik / ayrı yazımı',
    'Sayıların, kısaltmaların, tarihlerin yazımı',
    'Düzeltme işareti (^) kullanımı'
  ]}]
},

{ id:'noktalama', ad:'Noktalama İşaretleri', soru:'1 soru', durum:'iskelet',
  ozet:'Garanti soru. Virgül ve kesme işareti en çok sorulanlar.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Nokta, virgül, noktalı virgül, iki nokta',
    'Üç nokta, soru işareti, ünlem',
    'Kısa çizgi, uzun çizgi, tırnak, parantez',
    'Kesme işaretinin ayırdığı ve ayırmadığı ekler'
  ]}]
},

{ id:'anlatim-bozukluklari', ad:'Anlatım Bozuklukları', soru:'1–2 soru', durum:'iskelet',
  ozet:'Anlamsal ve yapısal bozukluklar. Cümleyi sesli okuyunca çoğu kendini belli eder.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Anlamsal: gereksiz sözcük, anlamca çelişme, yanlış anlamda kullanım, mantık hatası',
    'Yapısal: özne-yüklem uyumsuzluğu, öge eksikliği, tamlama yanlışı, ek yanlışı, çatı uyumsuzluğu',
    'Deyim ve atasözü yanlış kullanımı'
  ]}]
},

{ id:'paragraf', ad:'Paragrafta Anlam', soru:'14–15 soru — dersin belkemiği', durum:'iskelet',
  ozet:'Türkçenin yarısı bu konu. Bilgi değil teknik gerektirir; günde 20 paragraf çözmek en verimli çalışmadır.',
  bloklar:[
    {t:'ozet', b:'Soru tipleri', i:[
      'Ana düşünce / ana fikir',
      'Yardımcı düşünce ("değinilmemiştir" soruları)',
      'Paragrafın konusu ve başlığı',
      'Paragrafta yapı: giriş, gelişme, sonuç cümlesi',
      'Paragrafı ikiye bölme, akışı bozan cümle',
      'Boşluk doldurma, cümle tamamlama',
      'Paragraf oluşturma (cümle sıralama)',
      'Yazarın bakış açısı, üslubu, amacı'
    ]},
    {t:'kod', b:'Paragraf tekniği', x:'**Önce soru kökü, sonra parça.** Ne aradığını bilmeden okumak zaman kaybıdır. "Değinilmemiştir" sorularında şıkları parçada tek tek işaretle — eleme yöntemi burada en hızlısıdır.'}
  ]
},

{ id:'anlatim-bicimleri', ad:'Paragrafta Anlatım Biçimleri', soru:'1 soru', durum:'iskelet',
  ozet:'Anlatım biçimi (açıklama, tartışma, betimleme, öyküleme) ve düşünceyi geliştirme yolları.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Açıklayıcı, tartışmacı, betimleyici, öyküleyici anlatım',
    'Düşünceyi geliştirme yolları: tanımlama, örnekleme, karşılaştırma, tanık gösterme, sayısal veri, benzetme'
  ]}]
},

{ id:'sozel-mantik', ad:'Sözel Mantık', soru:'4 soru', durum:'iskelet',
  ozet:'Bilgi gerektirmez, tablo kurmayı gerektirir. Doğru çözülürse en garantili 4 sorudur.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Sıralama ve dizilim problemleri',
    'Eşleştirme (kim-hangi-nerede) tabloları',
    'Doğru-yanlış ifade çözümlemesi',
    'Akrabalık ve konum ilişkileri',
    'Kesin / kesin değil ayrımı'
  ]},
  {t:'kod', b:'Sözel mantık tekniği', x:'**Her zaman tablo kur.** Kesin bilgiyi önce yerleştir, olumsuz bilgileri (× işareti) tabloya işle. Zihinden çözmeye çalışmak en sık yapılan hatadır.'}]
}

  ]
};
