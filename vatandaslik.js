/* KPSS Ön Lisans — TARİH · 27 soru
   Çalışma formatı: ZAMAN ŞERİDİ + KARŞILAŞTIRMA TABLOSU.
   Tarihte olay ezberi değil, sıra ve sebep-sonuç sorulur. */

window.DERS_TARIH = {
  id:'tarih', ad:'Tarih', bolum:'Genel Kültür', soru:27, renk:'tar',
  tanim:'Genel Kültür\'ün en çok soru gelen dersi. Millî Mücadele ve İnkılap Tarihi tek başına ~10 soru.',
  yontem:[
    'Her konuyu **zaman şeridi** üzerinde çalış: neyin neden önce geldiğini bil.',
    '**Karşılaştırma tabloları** (ör. antlaşmalar, ıslahatlar) sınavda doğrudan soru olur.',
    'Millî Mücadele ve İnkılap Tarihi\'ne ders süresinin yarısını ayır — soru dağılımı öyle.'
  ],
  konular:[

{
  id:'islamiyet-oncesi', ad:'İslamiyet Öncesi Türk Tarihi', soru:'1 soru', durum:'hazir',
  ozet:'Devletlerin sırası ve "ilk"ler sorulur. Coğrafya Orta Asya, sebep genellikle kuraklık ve boy yapısı.',
  bloklar:[
    {t:'zaman', b:'Devletler zaman şeridi', z:[
      {y:'MÖ 4. yy – MS 216', o:'Asya (Büyük) Hun Devleti', d:'İlk teşkilatlı Türk devleti. **Mete Han** — onluk sistem, ordunun kurucusu. Çin\'e karşı üstünlük.'},
      {y:'375 – 469', o:'Avrupa Hun Devleti', d:'**Kavimler Göçü**\'nü başlatan Türk hareketi. **Attila** — Balkan ve Galya seferleri, Batı Roma\'yı sarstı.'},
      {y:'552 – 744', o:'Göktürk (Kök Türk) Devleti', d:'**Türk adını ilk kez devlet adı olarak kullanan** devlet. Bumin ve İstemi. II. Göktürk\'te **Orhun Yazıtları** (ilk Türkçe yazılı belge).'},
      {y:'744 – 840', o:'Uygur Devleti', d:'**Yerleşik hayata geçen ilk Türk devleti**. Mani ve Budizm. Matbaa ve kâğıt kullanımı. Kendi alfabeleri.'},
      {y:'X. yy', o:'Diğerleri', d:'Avarlar (İstanbul\'u kuşatan ilk Türk devleti), Bulgarlar, Hazarlar (Musevilik, "Hazar Barış Çağı"), Kırgızlar (**Manas Destanı**), Peçenek, Kuman, Oğuzlar.'}
    ]},
    {t:'kod', b:'Sıralama ezberi', x:'**"Asya – Avrupa – Gök – Uygur"** → **A-A-G-U**. Hun\'lar ikiye ayrılır, sonra Göktürk, en sonda yerleşen Uygur gelir.'},
    {t:'tuzak', i:[
      '**Türk adını ilk kullanan** Göktürkler\'dir; **ilk teşkilatlı devlet** Asya Hunları\'dır. İkisi farklı sorulur.',
      'Uygurlar yerleşik hayata geçti ama **tarımla uğraşan ilk Türkler** değildir; şehir kuran ilk Türk devletidir.',
      'Kavimler Göçü\'nü **Avrupa Hunları başlatmadı**, batıya göç eden Hun baskısı başlattı — Avrupa Hun Devleti göçün *sonucunda* kuruldu.'
    ]}
  ]
},

{ id:'islamiyet-oncesi-kultur', ad:'İslamiyet Öncesi Türklerde Kültür ve Medeniyet', soru:'1–3 soru', durum:'iskelet',
  ozet:'Devlet yönetimi, ordu, din, hukuk, ekonomi, yazı ve sanat başlıkları.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Devlet yönetimi: kağan, kut anlayışı, kurultay (toy), ikili teşkilat',
    'Ordu: onluk sistem, ücretsiz-daimî ordu, hilâl taktiği',
    'Din: Gök Tanrı inancı, Şamanizm, Mani, Budizm, Musevilik',
    'Hukuk: töre, yazısız hukuk',
    'Ekonomi: konargöçer hayat, hayvancılık, İpek Yolu',
    'Yazı ve sanat: Göktürk ve Uygur alfabesi, Orhun Yazıtları, halı, kurgan, hayvan üslubu'
  ]}]
},

{ id:'ilk-turk-islam', ad:'İlk Türk-İslam Devletleri', soru:'1–2 soru', durum:'iskelet',
  bloklar:[
    {t:'zaman', b:'Zaman şeridi (doldurulacak)', z:[
      {y:'751', o:'Talas Savaşı', d:'Araplar + Karluklar vs Çin. Türklerin İslamiyet\'e yönelmesinde dönüm noktası. Kâğıt Çin dışına çıktı.'},
      {y:'840 – 1212', o:'Karahanlılar', d:'**İlk Müslüman Türk devleti**. Türkçeyi resmî dil yaptılar. Kutadgu Bilig, Divânu Lügâti\'t-Türk.'},
      {y:'963 – 1187', o:'Gazneliler', d:'Gazneli Mahmut — Hindistan seferleri. **1040 Dandanakan** yenilgisiyle yıkılış süreci.'},
      {y:'1040 – 1157', o:'Büyük Selçuklu Devleti', d:'**1071 Malazgirt** — Anadolu\'nun kapıları açıldı. Nizamülmülk, Nizamiye Medreseleri.'},
      {y:'1077 – 1308', o:'Türkiye (Anadolu) Selçuklu Devleti', d:'**1176 Miryokefalon** — Anadolu kesin Türk yurdu. **1243 Kösedağ** — Moğol yenilgisi, dağılma.'}
    ]}
  ]
},

{ id:'ilk-turk-islam-kultur', ad:'İlk Türk-İslam Devletlerinde Kültür ve Medeniyet', soru:'1–3 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Devlet teşkilatı: sultan, divan, ikta sistemi',
    'Ordu: gulam, ikta askerleri, Türkmenler',
    'Toprak yönetimi ve ikta\'nın işlevi',
    'Eğitim: medrese, Nizamiye Medreseleri',
    'Bilim ve edebiyat: Kutadgu Bilig, Divânu Lügâti\'t-Türk, Atabetü\'l-Hakayık, Divân-ı Hikmet',
    'Mimari: kervansaray, külliye, kümbet, taçkapı'
  ]}]
},

{ id:'osmanli-kurulus', ad:'Osmanlı Kuruluş ve Yükselme Dönemi', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'zaman', b:'Kilometre taşları (doldurulacak)', z:[
    {y:'1299', o:'Kuruluş', d:'Osman Bey. Bizans\'ın zayıflığı, uç beyliği konumu, iskân siyaseti.'},
    {y:'1389 / 1396', o:'I. Kosova / Niğbolu', d:'Balkanlarda hâkimiyet.'},
    {y:'1402', o:'Ankara Savaşı', d:'Timur yenilgisi → **Fetret Devri (1402-1413)**.'},
    {y:'1453', o:'İstanbul\'un Fethi', d:'Fatih Sultan Mehmet. Orta Çağ kapandı. İmparatorluğa geçiş.'},
    {y:'1514 / 1516-17', o:'Çaldıran / Mercidabık-Ridaniye', d:'Yavuz. Doğu güvenliği + **halifelik Osmanlı\'ya geçti**.'},
    {y:'1520 – 1566', o:'Kanuni Dönemi', d:'En geniş sınırlar. Preveze (1538) ile Akdeniz hâkimiyeti.'}
  ]}]
},

{ id:'duraklama', ad:'17. Yüzyıl — Duraklama Dönemi', soru:'1–3 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Duraklamanın iç ve dış nedenleri',
    'Celali İsyanları, İstanbul isyanları, eyalet isyanları',
    'Islahat çabaları: II. Osman, IV. Murat, Köprülüler',
    'Antlaşmalar: Zitvatorok (1606), Vasvar (1664), **Karlofça (1699)** — ilk büyük toprak kaybı'
  ]}]
},

{ id:'gerileme', ad:'18. Yüzyıl — Gerileme Dönemi', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Lale Devri (1718-1730): matbaa, yenilik, Patrona Halil İsyanı',
    'Islahatlar: I. Mahmut, III. Mustafa, I. Abdülhamit',
    'Antlaşmalar: Pasarofça (1718), **Küçük Kaynarca (1774)**, Ziştovi ve Yaş (1791-92)',
    'Dönemin özelliği: Batı örnek alınmaya başlandı, askerî alanla sınırlı kaldı'
  ]}]
},

{ id:'dagilma', ad:'19. Yüzyıl — Dağılma Dönemi', soru:'1 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'III. Selim — Nizam-ı Cedit; II. Mahmut — Sened-i İttifak, Yeniçeri Ocağı\'nın kaldırılması (1826)',
    'Tanzimat (1839) ve Islahat (1856) fermanları',
    'I. Meşrutiyet (1876) ve Kanun-i Esasi',
    'Milliyetçilik akımı ve isyanlar: Sırp, Yunan, Mısır',
    'Fikir akımları: Osmanlıcılık, İslamcılık, Türkçülük, Batıcılık'
  ]}]
},

{ id:'yirminci-yy-osmanli', ad:'20. Yüzyıl Osmanlı Devleti', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'II. Meşrutiyet (1908), 31 Mart Olayı (1909)',
    'Trablusgarp (1911-12) ve Balkan Savaşları (1912-13)',
    'I. Dünya Savaşı: cepheler, Çanakkale, sonuçları',
    'Mondros Ateşkes Antlaşması (30 Ekim 1918) ve işgaller',
    'Gizli antlaşmalar, Wilson İlkeleri, Paris Barış Konferansı'
  ]}]
},

{ id:'osmanli-kultur', ad:'Osmanlı Kültür ve Medeniyeti', soru:'1–4 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Devlet yönetimi: padişah, divan, sadrazam, şeyhülislam',
    'Taşra teşkilatı: eyalet, sancak, kaza',
    'Toprak sistemi: miri, tımar, dirlik (has-zeamet-tımar), mukataa, iltizam',
    'Ordu: kapıkulu, eyalet askerleri, devşirme, donanma',
    'Hukuk: şeri ve örfi hukuk, kadı',
    'Eğitim: enderun, medrese, sıbyan mektebi',
    'Ekonomi: lonca, kapitülasyonlar, narh',
    'Sanat: mimari, hat, minyatür, çini, tezhip'
  ]}]
},

{ id:'milli-mucadele', ad:'Millî Mücadele Dönemi', soru:'3–4 soru', durum:'iskelet',
  ozet:'En çok soru gelen konulardan. Kongreler ve muharebeler kronolojik ezberlenmeli.',
  bloklar:[{t:'zaman', b:'Zaman şeridi (doldurulacak)', z:[
    {y:'19 Mayıs 1919', o:'Samsun\'a çıkış', d:'Millî Mücadele\'nin başlangıcı.'},
    {y:'Haziran–Eylül 1919', o:'Genelgeler ve kongreler', d:'Amasya Genelgesi, Erzurum Kongresi, Sivas Kongresi, Amasya Görüşmeleri.'},
    {y:'23 Nisan 1920', o:'TBMM\'nin açılışı', d:'Millî egemenlik. Ardından ayaklanmalar ve İstiklal Mahkemeleri.'},
    {y:'10 Ağustos 1920', o:'Sevr Antlaşması', d:'Osmanlı imzaladı, TBMM tanımadı.'},
    {y:'1921', o:'I. ve II. İnönü, Sakarya', d:'Sakarya\'dan sonra Kars ve Ankara antlaşmaları.'},
    {y:'26 Ağustos – 9 Eylül 1922', o:'Büyük Taarruz', d:'Başkomutanlık Meydan Muharebesi, İzmir\'in kurtuluşu.'},
    {y:'11 Ekim 1922 / 24 Temmuz 1923', o:'Mudanya / Lozan', d:'Ateşkes ve barış antlaşması.'}
  ]}]
},

{ id:'inkilap', ad:'İnkılap Tarihi', soru:'3–5 soru', durum:'iskelet',
  ozet:'Siyasi, hukuk, eğitim, toplumsal, ekonomik alanlardaki inkılaplar ve Atatürk ilkeleri.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Siyasi: saltanatın kaldırılması (1922), cumhuriyetin ilanı (1923), halifeliğin kaldırılması (1924)',
    'Anayasalar: 1921, 1924',
    'Çok partili hayat denemeleri, Şeyh Sait ve Menemen olayları',
    'Hukuk: Medeni Kanun (1926) ve diğer kanunlar',
    'Eğitim: Tevhid-i Tedrisat (1924), Harf İnkılabı (1928), TDK-TTK',
    'Toplumsal: kılık kıyafet, takvim-saat-ölçü, soyadı kanunu, kadın hakları',
    'Ekonomik: İzmir İktisat Kongresi, aşarın kaldırılması, teşvik-i sanayi, devletçilik',
    'Atatürk ilkeleri: cumhuriyetçilik, milliyetçilik, halkçılık, laiklik, devletçilik, inkılapçılık'
  ]}]
},

{ id:'ataturk-politika', ad:'Atatürk Dönemi İç ve Dış Politika', soru:'1–5 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Lozan\'dan kalan sorunlar: Musul, nüfus mübadelesi, Boğazlar, dış borçlar',
    'Milletler Cemiyeti\'ne üyelik (1932)',
    'Balkan Antantı (1934), Sadabat Paktı (1937)',
    'Montrö Boğazlar Sözleşmesi (1936)',
    'Hatay\'ın anavatana katılması (1939)',
    'Atatürk dönemi dış politika ilkeleri: "Yurtta sulh, cihanda sulh"'
  ]}]
},

{ id:'cagdas-tarih', ad:'Çağdaş Türk ve Dünya Tarihi', soru:'1–4 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'II. Dünya Savaşı ve Türkiye\'nin tutumu',
    'Soğuk Savaş: Truman Doktrini, Marshall Planı, NATO üyeliği (1952)',
    'Çok partili hayata geçiş (1946), Demokrat Parti dönemi',
    '1960, 1971, 1980 askerî müdahaleleri',
    'Kıbrıs sorunu ve 1974 Barış Harekâtı',
    'Türkiye-AB ilişkileri, 1980 sonrası ekonomi',
    'Dünyada: Sovyetler\'in dağılması, Körfez savaşları, Avrupa bütünleşmesi'
  ]}]
}

  ]
};
