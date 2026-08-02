/* KPSS Ön Lisans — COĞRAFYA · 18 soru
   Konu başlıkları ve soru sayıları: basarisiralamalari.com 5 yıllık ÖSYM dağılımı  */

window.DERS_COGRAFYA = {
  id: 'cografya',
  ad: 'Coğrafya',
  bolum: 'Genel Kültür',
  soru: 18,
  renk: 'cog',
  tanim: 'Haritadan çalış. Bir yerin adını değil, nerede olduğunu ve neden orada olduğunu ezberle.',
  yontem: [
    'Her konunun altındaki haritayı aç, katmanı seç, işaretlere tıkla.',
    'Sınav modunda kendini yokla: sorulan yeri haritada bul.',
    '"Tuzak" kutuları çıkmış soruların en çok yanıltan noktalarıdır.'
  ],
  konular: [

/* ═══════════════ 1 ═══════════════ */
{
  id:'konum', ad:'Türkiye\'nin Coğrafi Konumu', soru:'1–2 soru',
  ozet:'Matematik konum sıcaklığı ve saati, özel konum ise ekonomiyi ve stratejiyi belirler.',
  bloklar:[
    {t:'ozet', b:'Matematik konum', i:[
      '**36° – 42° Kuzey** enlemleri ve **26° – 45° Doğu** boylamları arasında.',
      'Kuzey Yarım Küre · Doğu Yarım Küre · **Orta (ılıman) kuşak**.',
      '6 enlem farkı → kuzey-güney **≈ 666 km**. 19 boylam farkı → doğu-batı **≈ 1565 km**.',
      'Yüzölçümü **814.578 km²** (gerçek), izdüşüm alanı **780.043 km²** — aradaki fark **engebeden** kaynaklanır.'
    ]},
    {t:'ozet', b:'Matematik konumun sonuçları', i:[
      'Dört mevsim belirgin yaşanır.',
      'Güneş ışınları **hiçbir zaman dik gelmez** → cisimlerin gölgesi hiç sıfırlanmaz, gölgeler daima **kuzeye** düşer.',
      'Kuzeyden güneye gidildikçe sıcaklık **artar**; dağların **güney** yamaçları daha sıcaktır.',
      '19 boylam farkı → doğu ile batı arasında **76 dakika** yerel saat farkı vardır.',
      'Tek saat dilimi kullanılır: **30° Doğu** boylamının yerel saati (GMT+3).',
      'Yıl içinde gece-gündüz süreleri değişir; 21 Aralık\'ta en kısa gündüz **kuzeyde**yaşanır.'
    ]},
    {t:'ozet', b:'Özel konum', i:[
      'Üç tarafı denizlerle çevrili; **Asya ile Avrupa** arasında köprü.',
      '**İstanbul ve Çanakkale boğazları** Türkiye\'nin denetiminde (Montrö).',
      'Dünya petrol rezervlerinin büyük kısmına yakın → **enerji koridoru** (BTC, TANAP, TürkAkım).',
      'Ortalama yükseltisi **1132 m** — Asya (1050 m) ve Avrupa\'dan (330 m) yüksek.',
      '**Alp-Himalaya** deprem kuşağında; genç ve engebeli arazi.',
      'Ilıman kuşakta ama **üç farklı iklim** görülür — özel konumun eseri.'
    ]},
    {t:'tablo', b:'Uç noktalar ve sınırlar', h:['','Yer','Notu'], r:[
      ['En kuzey','Sinop – İnceburun','42° 06′ K'],
      ['En güney','Hatay – Yayladağı (Topraktutan)','35° 49′ K'],
      ['En batı','Çanakkale – Gökçeada (Avlaka Burnu)','25° 40′ D'],
      ['En doğu','Iğdır – Aralık, Dilucu','44° 49′ D'],
      ['En uzun kara sınırı','Suriye','≈ 911 km'],
      ['En kısa kara sınırı','Azerbaycan (Nahçıvan)','≈ 18 km'],
      ['Komşular','Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan(Nahçıvan), İran, Irak, Suriye','8 ülke']
    ]},
    {t:'kod', b:'Komşuları saymak için', x:'**"YB – GEA – İİS"** → Yunanistan-Bulgaristan · Gürcistan-Ermenistan-Azerbaycan · İran-Irak-Suriye. Batıdan başlayıp saat yönünde döner.'},
    {t:'tuzak', i:[
      'Türkiye\'nin **en doğusu Iğdır**\'dır, Hakkâri değil. Hakkâri en doğudaki *iller*den biridir ama uç nokta Dilucu\'dur.',
      '**Gerçek alan > izdüşüm alan** farkının nedeni yükselti değil, **eğim/engebe**dir.',
      'Yerel saat farkı **76 dakika**; "1 saat 16 dakika" diye sorulursa aynı şeydir.',
      'Türkiye ılıman kuşaktadır ama **kuzeyi ile güneyi arasında iklim farkı** vardır — bunun sebebi sadece enlem değil, **yer şekilleri**dir.'
    ]},
    {t:'harita', k:'daglar', b:'Konumu görselleştir: uç noktalar ve komşular haritada'},
    {t:'test', s:[
      {q:'Türkiye\'de cisimlerin gölgesinin hiçbir zaman sıfırlanmamasının nedeni aşağıdakilerden hangisidir?',
       c:['Ortalama yükseltinin fazla olması','Dönenceler dışında yer alması','Üç tarafının denizlerle çevrili olması','Tek saat dilimi kullanılması'], d:1,
       a:'Türkiye 36°–42° kuzey enlemlerindedir, yani Yengeç Dönencesi\'nin (23°27′) kuzeyindedir. Güneş ışınları hiçbir zaman dik açıyla gelmez, bu yüzden gölge boyu sıfırlanmaz.'},
      {q:'Türkiye\'nin gerçek alanı ile izdüşüm alanı arasındaki farkın temel nedeni nedir?',
       c:['Adaların çokluğu','Kıyı uzunluğu','Yer şekillerinin engebeli olması','Enlem farkı'], d:2,
       a:'Eğimli araziler haritaya dik izdüşümle aktarılınca küçülür. Engebe arttıkça gerçek alan ile izdüşüm alan farkı büyür.'},
      {q:'Aşağıdakilerden hangisi Türkiye\'nin özel konumunun sonuçlarından biri **değildir**?',
       c:['Boğazlara sahip olması','Dört mevsimin belirgin yaşanması','Ortalama yükseltisinin fazla olması','Deprem kuşağında bulunması'], d:1,
       a:'Dört mevsimin belirgin yaşanması matematik konumun (orta kuşakta olmanın) sonucudur.'}
    ]}
  ]
},

/* ═══════════════ 2 ═══════════════ */
{
  id:'iklim', ad:'İklim ve Bitki Örtüsü', soru:'2–3 soru',
  ozet:'Üç ana iklim tipi + geçiş alanları. Bitki örtüsü iklimin doğrudan aynasıdır.',
  bloklar:[
    {t:'tablo', b:'İklim tipleri karşılaştırma', h:['İklim','Yağış rejimi','Yaz','Kış','Bitki örtüsü'], r:[
      ['Karadeniz','Her mevsim yağışlı, **en çok sonbahar**','Serin','Ilık','Orman (gür)'],
      ['Akdeniz','**Kışın** yağışlı, yaz kurak','Sıcak-kurak','Ilık-yağışlı','Maki'],
      ['Karasal (İç Anadolu)','**İlkbaharda** yağışlı','Sıcak-kurak','Soğuk','Bozkır (step)'],
      ['Sert karasal (D. Anadolu)','İlkbahar + yaz başı','Kısa-serin','Çok soğuk, uzun karlı','Çayır / dağ çayırı'],
      ['Karasal (G.Doğu)','İlkbahar-kış','**Çok sıcak**, en sıcak yer','Ilık-soğuk','Bozkır'],
      ['Marmara (geçiş)','Her mevsim, kışın fazla','Sıcak','Serin','Yalancı maki + orman']
    ]},
    {t:'ozet', b:'Sıcaklığı etkileyen faktörler', i:[
      '**Enlem** → güneyden kuzeye gidildikçe sıcaklık düşer (asıl faktör).',
      '**Yükselti** → her **200 m**\'de sıcaklık **1 °C** azalır. Erzurum ile Rize aynı enlemde ama farklı sıcaklıkta.',
      '**Denizellik-karasallık** → kıyılarda yıllık sıcaklık farkı az, iç kesimde çok.',
      '**Bakı** → güney yamaçlar sıcak; bu yüzden yerleşme ve tarım güney yamaçta yukarı çıkar.',
      '**Rüzgârlar** → kuzeyden gelen serin, güneyden gelen sıcak (lodos, sam, samyeli).'
    ]},
    {t:'ozet', b:'Yağışı etkileyen faktörler', i:[
      '**Denize yakınlık ve dağların uzanışı** — Karadeniz ve Toroslar\'ın denize bakan yamacı çok yağışlı, arkası kurak (**yağış gölgesi**).',
      '**Yükselti** → yükseldikçe yağış artar (orografik yağış).',
      'Türkiye ortalama yağışı **≈ 600 mm**. En yağışlı **Rize (~2200 mm)**, en kurak **Iğdır ve Tuz Gölü çevresi (~250 mm)**.',
      'Kar yağışı ve don olayı en fazla **Doğu Anadolu**\'da; kar örtüsü en uzun süre orada kalır.'
    ]},
    {t:'ozet', b:'Bitki örtüsü', i:[
      '**Maki** — Akdeniz ikliminin bodur, kışın yaprağını dökmeyen çalıları. Zeytin, defne, mersin, kocayemiş, keçiboynuzu. Yaklaşık **800 m**\'ye kadar çıkar.',
      '**Garig** — makinin tahrip edildiği yerde çıkan daha cılız çalı.',
      '**Psödomaki (yalancı maki)** — Karadeniz ve Marmara kıyısında maki görünümlü ama **yaprağını döken** türler.',
      '**Bozkır (step)** — İç Anadolu, G.Doğu. İlkbaharda yeşerir, yazın kurur. Geven, üzerlik, çoban yastığı.',
      '**Antropojen bozkır** — ormanın insan eliyle yok edilmesiyle oluşmuş bozkır. İç Anadolu\'da yaygın.',
      '**Çayır** — Doğu Anadolu\'nun yüksek platolarında, yaz yağışıyla yeşil kalan ot örtüsü → büyükbaş hayvancılığın temeli.',
      '**Orman** — Karadeniz\'de her yükseltide gür. Kızılçam (kıyı, sıcak), karaçam-sarıçam (iç, yüksek), kayın-ladin-göknar (Karadeniz üst kuşak).'
    ]},
    {t:'kod', b:'Yağış rejimi ezberi', x:'**"K-S · A-K · İ-İ"** → **K**aradeniz **S**onbahar · **A**kdeniz **K**ış · **İ**ç Anadolu **İ**lkbahar. Üç harf, üç iklim, üç mevsim.'},
    {t:'tuzak', i:[
      'Karadeniz\'de yağış **her mevsim** vardır; "sonbaharda yağar, yazın yağmaz" **yanlıştır** — sonbaharda *en çok* yağar.',
      'Doğu Anadolu\'da kışlar soğuktur ama **yağış az**dır; soğuk olması yağışlı olması anlamına gelmez.',
      'Maki **iklim** göstergesidir, **yükselti** değil. Deniz seviyesinde de 700 m\'de de görülebilir.',
      'Türkiye\'nin en sıcak yeri **Güneydoğu Anadolu**\'dur (Şırnak-Cizre, Şanlıurfa) — Akdeniz kıyısı değil. Çünkü karasallık + enlem birlikte etki eder.',
      '**Antropojen bozkır** doğal değildir; "İç Anadolu\'nun doğal bitki örtüsü tamamen bozkırdır" ifadesi tartışmalıdır.'
    ]},
    {t:'harita', k:'iklim', b:'İklim bölgeleri ve uç noktalar'},
    {t:'test', s:[
      {q:'Rize ile Erzurum aynı enlemde olmasına rağmen sıcaklık ortalamaları çok farklıdır. Bu farkın temel nedeni nedir?',
       c:['Boylam farkı','Yükselti ve karasallık farkı','Bakı farkı','Yağış rejimi farkı'], d:1,
       a:'Rize deniz seviyesinde ve denizeldir; Erzurum ~1900 m yükseklikte ve karasaldır. Her 200 m\'de 1 °C düşüş + denizin ılıtıcı etkisinin yokluğu farkı yaratır.'},
      {q:'Aşağıdaki bitki örtülerinden hangisi Doğu Anadolu\'da büyükbaş hayvancılığın gelişmesini doğrudan sağlamıştır?',
       c:['Maki','Bozkır','Çayır','Garig'], d:2,
       a:'Çayır, yaz yağışlarıyla yeşil kalan gür ot örtüsüdür. Bozkır yazın kuruduğu için ancak küçükbaşı besler.'},
      {q:'Türkiye\'de en az yağış alan yerlerden biri olan Iğdır Ovası\'nın kurak olmasının nedeni nedir?',
       c:['Enlemi','Yağış gölgesinde kalması','Deniz seviyesinde olması','Bitki örtüsünün olmaması'], d:1,
       a:'Çevresindeki yüksek dağlar nemli hava kütlelerini keser. Iğdır dağların arkasında, yağış gölgesinde kalır.'}
    ]}
  ]
},

/* ═══════════════ 3 ═══════════════ */
{
  id:'fiziki', ad:'Türkiye\'nin Fiziki Özellikleri', soru:'4 soru — en çok soru gelen konu',
  ozet:'Jeolojik geçmiş → yer şekilleri → akarsu, göl, kıyı ve toprak. Bu konu haritayla çalışılır.',
  bloklar:[
    {t:'tablo', b:'Jeolojik zamanlar ve Türkiye', h:['Zaman','Türkiye\'de olan','Ortaya çıkan'], r:[
      ['I. Zaman (Paleozoik)','Kıvrılma, eski masiflerin oluşumu','Yıldız, Menteşe, Kırşehir, Bitlis masifleri · **Zonguldak taş kömürü**'],
      ['II. Zaman (Mesozoik)','Anadolu **Tetis Denizi** altında, kalın kireçtaşı birikimi','Toroslar\'ın malzemesi · karstik alanların temeli'],
      ['III. Zaman (Tersiyer)','**Alp orojenezi** — Anadolu yükseldi, kıvrım dağları oluştu, volkanizma','KAD ve Toroslar · **linyit, petrol, tuz, bor** · bugünkü görünümün ana hatları'],
      ['IV. Zaman (Kuaterner)','Boğazlar açıldı, Ege çöktü, buzul çağları, deltalar','İstanbul-Çanakkale boğazları · Van Gölü · **alüvyal ovalar** · insan']
    ]},
    {t:'ozet', b:'Yer şekillerinin genel özellikleri', i:[
      'Ortalama yükselti **1132 m**; yükselti **doğuya doğru artar**.',
      'Dağlar genelde **doğu-batı** doğrultusunda uzanır (Kuzey Anadolu D., Toroslar) → kıyıya **paralel**.',
      'Ege\'de dağlar denize **dik** uzanır → **horst (dağ) – graben (ova)** sistemi.',
      'Sonuçları: kuzey-güney ulaşımı zor · kıyı ile iç kesim arasında **iklim farkı** · Karadeniz ve Akdeniz\'de **kıyı ovaları dar** · Ege\'de deniz etkisi içeriye sokulur.'
    ]},
    {t:'ozet', b:'Ovalar — oluşumuna göre', i:[
      '**Delta ovası**: akarsuyun denize taşıdığı alüvyonla. Çukurova, Bafra, Çarşamba, Silifke. → *En verimliler.*',
      '**Tektonik ova**: çöküntü alanında. Muş, Erzurum, Ergene, Büyük Menderes (graben), Amik.',
      '**Karstik ova**: kireçtaşının erimesiyle. Konya, Ereğli, Antalya (traverten üzerinde).',
      '**Volkanik ova**: lav örtüsü üzerinde. Erzurum-Kars ve Diyarbakır (bazalt) çevresi.'
    ]},
    {t:'ozet', b:'Platolar', i:[
      '**İç Anadolu**: Cihanbeyli, Haymana, Obruk, Bozok (Yozgat), Uzunyayla.',
      '**Akdeniz**: Taşeli Platosu (karstik, susuz, seyrek nüfuslu).',
      '**Doğu Anadolu**: Erzurum-Kars, Ardahan, Kars (volkanik).',
      '**Güneydoğu**: Gaziantep, Şanlıurfa, Adıyaman platoları.',
      '**Marmara**: Çatalca-Kocaeli Platosu.'
    ]},
    {t:'harita', k:'daglar', b:'Dağları ve zirveleri haritada gör'},
    {t:'ozet', b:'Akarsuların ortak özellikleri', i:[
      'Boyları **kısa**, yatak eğimi **fazla**, akış hızı **yüksek** → **hidroelektrik potansiyeli büyük**, ulaşıma elverişsiz.',
      'Rejimleri **düzensiz** (yağış rejimine bağlı). Düzenli olanlar: **Manavgat, Köprüçay** gibi karstik kaynaklı akarsular.',
      'Çok alüvyon taşırlar → **erozyon** şiddetli, baraj gölleri hızla dolar, deltalar büyür.',
      'Denge profiline ulaşmamışlardır (çağlayan, kanyon, dar boğaz).',
      '**En uzun: Kızılırmak (1355 km)** — tamamı yurt içinde. **Fırat** yurt içi uzunlukta (1263 km) en uzun ama sınırı aşar.',
      '**En hızlı akan: Çoruh** — rafting sporunun merkezi.'
    ]},
    {t:'harita', k:'akarsular', b:'Akarsuları ve havzaları çiz'},
    {t:'harita', k:'goller', b:'Göller ve barajlar — oluşum tipiyle birlikte'},
    {t:'ozet', b:'Kıyı tipleri', i:[
      '**Boyuna (enine olmayan) kıyı**: dağlar kıyıya paralel → Karadeniz ve Akdeniz. Girinti-çıkıntı **az**, doğal liman **az**, kıyı ovası **dar**.',
      '**Enine kıyı**: dağlar denize dik → **Ege**. Girinti-çıkıntı **çok**, körfez ve yarımada bol, **ria tipi** kıyı (boğulmuş vadiler), doğal liman çok.',
      '**Dalmaçya tipi**: Antalya-Kaş arası kısa bir kesim.',
      '**Haliç ve lagün (kıyı seti gölü)**: Büyükçekmece, Küçükçekmece, Terkos.'
    ]},
    {t:'tablo', b:'Dış kuvvetlerin oluşturduğu şekiller', h:['Kuvvet','Şekil','Nerede'], r:[
      ['Karstik (eriyen kireçtaşı)','Lapya, dolin, uvala, polye, **obruk**, mağara, düden, traverten','Toroslar, Konya (obruk), Pamukkale (traverten), Antalya'],
      ['Buzul','**Sirk**, buzul (U) vadisi, moren, buzul gölü','Cilo-Sat, Kaçkar, Ağrı, Süphan, Erciyes, Uludağ, Aladağlar'],
      ['Rüzgâr','Mantarkaya, barkan, kumul','Konya **Karapınar**, İç Anadolu, İğneada kıyı kumulları'],
      ['Akarsu','Menderes, delta, birikinti konisi, dev kazanı, peribacası (tüfte)','Menderes ovaları, Kapadokya, Çukurova'],
      ['Dalga','Falez (yalıyar), kıyı oku, tombolo','Karadeniz ve Akdeniz kıyıları, Sinop tombolosu']
    ]},
    {t:'ozet', b:'Toprak tipleri', i:[
      '**Terra rossa (kırmızı Akdeniz)** — kireçtaşı üzerinde, Akdeniz kıyıları.',
      '**Kahverengi bozkır** — İç Anadolu, kireççe zengin, tahıl.',
      '**Çernozyem (kara toprak)** — Erzurum-Kars platoları, çayır altında, çok verimli.',
      '**Podzol** — Karadeniz, bol yağışla yıkanmış, asitli → **çay** için ideal.',
      '**Alüvyal** — akarsu taşımış, ova tabanı, **en verimli**.',
      '**Kolüvyal** — yamaç eteğinde birikmiş, iri taneli.',
      '**Litosol (taşlı)** — eğimli yamaçlarda, taşınmış, verimsiz.',
      '**Halomorfik (tuzlu-alkali)** — Tuz Gölü ve Konya çevresi, aşırı sulama sonucu Harran\'da da oluştu.'
    ]},
    {t:'ozet', b:'Depremler', i:[
      '**Kuzey Anadolu Fay Hattı (KAF)** — Saros\'tan Van\'a; Marmara, Bolu, Erzincan hattı.',
      '**Doğu Anadolu Fay Hattı (DAF)** — Karlıova\'dan Hatay\'a; 2023 Kahramanmaraş depremleri bu hat üzerinde.',
      '**Batı Anadolu (Ege) çöküntü sistemi** — graben kenarlarında sık ama daha küçük depremler.',
      'Deprem riski **en düşük** yerler: Konya güneyi, Taşeli Platosu, Mardin-Şanlıurfa çevresi (eski masif ve platolar).'
    ]},
    {t:'kod', b:'Göl oluşumu ezberi', x:'**"Van = Volkan · Tuz = Tektonik · Tortum = Toprak kayması"** — üç göl, üç tip, hepsi baş harfiyle eşleşir.'},
    {t:'tuzak', i:[
      'Van Gölü **tektonik değil**, **volkanik set** gölüdür (Nemrut\'un lavları vadiyi kapattı).',
      'Beyşehir **en büyük göl değil**, **en büyük tatlı su gölü**dür. En büyük göl **Van**\'dır.',
      'Kızılırmak en uzun akarsudur; **Fırat** daha uzun olsa da tamamı yurt içinde değildir. Soru "tamamı ülke sınırları içinde" derse cevap **Kızılırmak**.',
      'Ege\'de kıyının girintili olmasının sebebi akarsular değil, **dağların denize dik uzanması ve grabenlerin batması**dır.',
      'Aladağlar (3756 m) en yüksek **kıvrım** dağ değildir; **Cilo (Reşko, 4135 m)** en yüksek kıvrım dağdır. Ağrı ise **volkanik**tir.',
      'Peribacaları rüzgârın değil, **akarsu aşındırması + tüfün farklı direnci** sonucu oluşur.'
    ]},
    {t:'test', s:[
      {q:'Aşağıdaki göllerden hangisi oluşum bakımından diğerlerinden farklıdır?',
       c:['Tortum','Abant','Sera','Burdur'], d:3,
       a:'Tortum, Abant ve Sera heyelan (toprak kayması) set gölleridir. Burdur ise tektonik kökenlidir.'},
      {q:'Türkiye akarsularının hidroelektrik potansiyelinin yüksek olmasının temel nedeni nedir?',
       c:['Rejimlerinin düzenli olması','Boylarının uzun olması','Yatak eğimlerinin fazla olması','Debilerinin çok yüksek olması'], d:2,
       a:'Ortalama yükseltinin fazla ve arazinin engebeli olması akarsuların eğimini artırır; eğim de düşü ve enerji potansiyeli demektir.'},
      {q:'Konya Ovası\'nda obrukların yaygın olması hangi kayaç türüyle ilgilidir?',
       c:['Bazalt','Kireçtaşı','Granit','Kumtaşı'], d:1,
       a:'Obruk karstik bir şekildir; suda çözünen kireçtaşının yer altında erimesi ve tavanın çökmesiyle oluşur.'},
      {q:'Ege kıyılarının girintili çıkıntılı olmasının nedeni aşağıdakilerden hangisidir?',
       c:['Akarsuların çok alüvyon taşıması','Dağların kıyıya dik uzanması','Kıyıda falezlerin bulunması','Deniz seviyesinin alçalması'], d:1,
       a:'Horst-graben sisteminde dağlar denize dik uzanır; batan grabenler körfezleri, yükselen horstlar yarımadaları oluşturur (ria tipi kıyı).'}
    ]}
  ]
},

/* ═══════════════ 4 ═══════════════ */
{
  id:'nufus', ad:'Nüfus ve Yerleşme', soru:'2–3 soru',
  ozet:'Nüfusun nerede yoğunlaştığını bilirsen sorunun yarısı çözülür: sanayi, verimli toprak, ulaşım.',
  bloklar:[
    {t:'ozet', b:'Temel veriler', i:[
      'İlk nüfus sayımı **1927**. 1927–1990 arası her **5 yılda bir**, 1990–2000 arası 10 yılda bir.',
      '**2007**\'den itibaren **ADNKS** (Adrese Dayalı Nüfus Kayıt Sistemi) — sayım sokağa çıkma yasağıyla yapılmıyor.',
      'Nüfus **85 milyon** civarında; artış hızı sürekli **düşüyor**.',
      'Kent nüfusu oranı çok yüksek (**%90 üzeri**) — 2012 Büyükşehir Yasası\'yla köyler mahalle olunca oran birden yükseldi.',
      'En kalabalık iller: **İstanbul, Ankara, İzmir**. En az nüfuslu: **Bayburt, Tunceli, Ardahan**.'
    ]},
    {t:'tablo', b:'Nüfus yoğunluğu türleri', h:['Tür','Hesabı','Ne gösterir'], r:[
      ['Aritmetik','Toplam nüfus ÷ toplam alan','Kabaca kalabalıklık'],
      ['Tarımsal','Kırsal nüfus ÷ tarım alanı','Toprak üzerindeki baskı'],
      ['Fizyolojik','Toplam nüfus ÷ tarım alanı','Beslenme kapasitesi']
    ]},
    {t:'ozet', b:'Nüfusun yoğun olduğu yerler ve nedeni', i:[
      '**Marmara (İstanbul-Kocaeli-Bursa)** → sanayi, ticaret, liman, ulaşım.',
      '**Ege kıyıları (İzmir)** → sanayi + verimli graben ovaları + turizm.',
      '**Çukurova (Adana-Mersin)** → delta verimliliği + sanayi + liman.',
      '**Karadeniz kıyı şeridi** → fındık ve çay tarımı; dar alanda çok nüfus (yoğunluk yüksek ama toplam nüfus az).',
      '**Ankara** → başkentlik, idari fonksiyon.',
      '**Gaziantep-Şanlıurfa** → sanayi, GAP tarımı, yüksek doğurganlık.'
    ]},
    {t:'ozet', b:'Nüfusun seyrek olduğu yerler ve nedeni', i:[
      '**Doğu Anadolu\'nun yüksek kesimleri** (Hakkâri, Tunceli, Bayburt) → yükselti, sert kış, engebe, ulaşım güçlüğü.',
      '**Taşeli Platosu** → karstik, susuz.',
      '**Tuz Gölü çevresi** → kuraklık ve tuzlu toprak.',
      '**Menteşe Dağları, Yıldız Dağları** → engebe ve orman örtüsü.'
    ]},
    {t:'ozet', b:'Göç', i:[
      '**İç göç**: kırdan kente. İtici sebep (işsizlik, miras yoluyla toprak bölünmesi, makineleşme, terör), çekici sebep (iş, eğitim, sağlık).',
      'En çok göç **alan**: İstanbul, Ankara, İzmir, Bursa, Antalya, Kocaeli, Tekirdağ.',
      'En çok göç **veren**: Doğu ve Güneydoğu illeri (Ağrı, Muş, Bitlis, Kars, Ardahan).',
      '**Mevsimlik göç**: Çukurova\'ya pamuk toplama, Karadeniz\'e fındık, turizm bölgelerine yaz işçiliği, yaylacılık.',
      '**Beyin göçü**: nitelikli iş gücünün yurt dışına gitmesi.',
      'Göçün sonuçları: gecekondulaşma, altyapı yetersizliği, işsizlik, kırda nüfusun yaşlanması, tarım alanlarının boş kalması.'
    ]},
    {t:'ozet', b:'Yerleşme', i:[
      '**Toplu yerleşme** → su kaynağı az, arazi düz. İç Anadolu, Güneydoğu.',
      '**Dağınık yerleşme** → su bol, arazi engebeli, tarım alanı parçalı. **Karadeniz**.',
      '**Geçici yerleşmeler**: yayla, oba, kom, ağıl, dam, mezra, divan.',
      'Yerleşmenin üst sınırı: Karadeniz\'de ~2000 m, Doğu Anadolu\'da ~2500 m — **güney yamaçlarda daha yukarı** çıkar (bakı).'
    ]},
    {t:'kod', b:'Toplu-dağınık ayrımı', x:'**"Su bolsa dağıl, su azsa topla."** Karadeniz\'de her yerde su var → evler dağınık. İç Anadolu\'da su kuyunun başında → evler toplu.'},
    {t:'tuzak', i:[
      'Karadeniz kıyısı **nüfus yoğunluğu** yüksektir ama **toplam nüfusu** Marmara\'dan azdır. Soru hangisini soruyor, dikkat.',
      'Kent nüfusu oranının birden artması gerçek göçten değil, **2012 idari düzenlemesinden** kaynaklandı.',
      'Doğu Anadolu **en az nüfuslu bölge değildir** — en az nüfuslu bölge **Güneydoğu Anadolu**\'dur; Doğu Anadolu **en seyrek (yoğunluğu en düşük)** bölgedir.',
      'Nüfus artış hızının düşmesi nüfusun azaldığı anlamına gelmez; nüfus hâlâ artıyor, **daha yavaş** artıyor.'
    ]},
    {t:'harita', k:'nufus', b:'Nüfusun yoğun ve seyrek olduğu alanlar'},
    {t:'test', s:[
      {q:'Karadeniz Bölgesi\'nde yerleşmenin dağınık olmasının temel nedeni nedir?',
       c:['Nüfusun az olması','Su kaynaklarının bol ve arazinin engebeli olması','Sanayinin gelişmemiş olması','İklimin ılıman olması'], d:1,
       a:'Her yerde su bulunduğu için evlerin bir su kaynağı çevresinde toplanmasına gerek yoktur; engebe ve parçalı tarım alanları da dağınıklığı artırır.'},
      {q:'Aşağıdakilerden hangisi Türkiye\'de iç göçün itici nedenlerinden biridir?',
       c:['Kentlerde iş imkânının fazla olması','Eğitim olanaklarının kentte gelişmiş olması','Tarım topraklarının miras yoluyla bölünmesi','Kentlerde sağlık hizmetinin iyi olması'], d:2,
       a:'İtici neden kırsalda göçe zorlayan etkendir. Diğer üç şık kentin çekici nedenleridir.'}
    ]}
  ]
},

/* ═══════════════ 5 ═══════════════ */
{
  id:'tarim', ad:'Tarım', soru:'1–2 soru',
  ozet:'"Hangi ürün nerede yetişir" sorusu aslında "orada hangi iklim var" sorusudur.',
  bloklar:[
    {t:'ozet', b:'Tarımı etkileyen faktörler', i:[
      '**Doğal**: iklim (en belirleyici), yer şekilleri, toprak, su.',
      '**Beşerî**: sulama, gübre, kaliteli tohum, makineleşme, ilaçlama, pazar, destekleme, eğitim.',
      '**Nadas**: kuru tarım alanında toprağın bir yıl dinlendirilmesi. **Sulama arttıkça nadas azalır.** En yaygın olduğu yer İç Anadolu ve Doğu Anadolu.',
      '**Münavebe (nöbetleşe ekim)**: toprağı dinlendirmeden farklı ürünlerin sırayla ekilmesi.',
      '**Turfanda**: kışın ılık geçtiği Akdeniz kıyısında erken yetiştirilip pazara erken çıkarılan ürün.',
      '**İkinci ürün**: bir yılda aynı tarladan ikinci hasat. **Çukurova** (buğdaydan sonra mısır/soya) — uzun yetişme dönemi ve sulama gerektirir.'
    ]},
    {t:'tablo', b:'Ürün ve isterleri', h:['Ürün','İstediği koşul','Ana alan'], r:[
      ['Çay','Bol yağış (her mevsim), asitli toprak, ılık kış','Rize, Trabzon, Artvin, Giresun, Ordu doğusu'],
      ['Fındık','Yağışlı yaz, nemli, eğimli yamaç','Giresun, Ordu, Trabzon, Samsun, Düzce, Sakarya'],
      ['Zeytin','Akdeniz iklimi, kış ılıklığı (don olmamalı)','Ege (Ayvalık-Edremit), Gemlik, Kilis-Nizip'],
      ['Turunçgil','Kış ılıklığı, don olmaması','Akdeniz kıyı şeridi, Ege kıyısı'],
      ['Muz','En sıcak kıyı şeridi + sera','Anamur, Gazipaşa, Alanya'],
      ['Pamuk','Yaz sıcaklığı + sulama','Çukurova, GAP, Söke, Iğdır'],
      ['Çeltik','Bol su, sıcak yaz','Edirne-Meriç, Bafra, Osmancık, Boyabat, Gönen'],
      ['Şeker pancarı','Serin, fabrikaya yakınlık','İç Anadolu, Doğu Anadolu'],
      ['Buğday','Yarı kurak, ilkbahar yağışı','İç Anadolu (en geniş alan)'],
      ['Antep fıstığı','Kurağa dayanıklı, sıcak','Gaziantep, Şanlıurfa, Siirt'],
      ['Kayısı','Kuru sıcak yaz, don olmaması','Malatya (dünya lideri)'],
      ['Çay dışı: Haşhaş','İzinli üretim (TMO)','Afyon, Konya, Denizli, Burdur, Isparta, Uşak, Kütahya, Eskişehir']
    ]},
    {t:'ozet', b:'Türkiye\'nin dünyada öne çıktığı ürünler', i:[
      '**Fındık** — dünya üretiminin çok büyük kısmı.',
      '**Kuru kayısı** — Malatya merkezli, dünya lideri.',
      '**Kuru incir ve kuru üzüm** — Aydın ve Manisa.',
      '**Kiraz, ayva** — üretimde ilk sıralarda.',
      '**Antep fıstığı, mercimek, nar, zeytin** — ilk sıralardan.'
    ]},
    {t:'kod', b:'Çay sınırı', x:'**"Çay Ordu\'nun doğusunda başlar, Gürcistan\'da biter."** Ordu\'nun batısında çay yoktur — orada fındık vardır. Fındık batıya (Düzce-Sakarya) uzanır, çay uzanmaz.'},
    {t:'tuzak', i:[
      'Şeker pancarı **fabrikaya yakın** ekilir çünkü söküldükten sonra çabuk şeker kaybeder. "İklim yüzünden İç Anadolu\'da ekilir" eksik bir cevaptır.',
      'Iğdır Ovası\'nda **pamuk yetişir** — Doğu Anadolu\'da beklenmez, çünkü orası **mikroklima** alanıdır. Çıkmış soru favorisi.',
      'Zeytin **Karadeniz\'de de** yetişir (Trabzon-Rize kıyısında sınırlı) ama esas alanı Ege\'dir; "sadece Akdeniz ikliminde" ifadesi tuzaktır.',
      'Turfanda **sera demek değildir**. Turfanda açıkta erken yetiştirmedir; sera örtü altıdır.',
      'İkinci ürün için **sulama şart**tır; sadece sıcaklık yeterli değildir.'
    ]},
    {t:'harita', k:'tarim', b:'Ürün haritası — işarete tıkla, yetiştiği iller renklensin'},
    {t:'test', s:[
      {q:'Şeker pancarının fabrikaya yakın alanlarda yetiştirilmesinin nedeni nedir?',
       c:['Nakliye ücretinin yüksek olması','Söküldükten sonra şeker oranının hızla düşmesi','Sadece o bölgelerde iklimin uygun olması','Sulama suyunun fabrikadan sağlanması'], d:1,
       a:'Pancar sökümden sonra hızla şeker kaybettiği için en kısa sürede işlenmelidir. Bu yüzden ekim alanları fabrika çevresinde toplanmıştır.'},
      {q:'Çukurova\'da ikinci ürün alınabilmesinin temel nedeni aşağıdakilerden hangisidir?',
       c:['Toprağın alüvyal olması','Yetişme döneminin uzun olması ve sulama imkânı','Nüfusun yoğun olması','Ulaşımın gelişmiş olması'], d:1,
       a:'İkinci ürün için ilk hasattan sonra ikinci bir bitkinin olgunlaşacağı kadar sıcak gün ve su gerekir. Çukurova her ikisini de sağlar.'},
      {q:'Doğu Anadolu Bölgesi\'nde Iğdır Ovası\'nda pamuk yetiştirilebilmesi neyle açıklanır?',
       c:['Sulama imkânının fazlalığı','Toprağın verimli olması','Ovanın mikroklima özelliği göstermesi','Nadasın uygulanmaması'], d:2,
       a:'Iğdır çevresine göre çukurda kalır, dağlarla korunur ve daha sıcak-kurak bir mikroklima oluşur. Bu yüzden bölge geneline aykırı ürünler yetişir.'}
    ]}
  ]
},

/* ═══════════════ 6 ═══════════════ */
{
  id:'hayvancilik', ad:'Hayvancılık', soru:'1 soru',
  ozet:'Bitki örtüsü hangi hayvanı besleyeceğini söyler: bozkır → koyun, çayır → sığır, maki → kıl keçisi.',
  bloklar:[
    {t:'tablo', b:'Hayvancılık türleri', h:['Tür','Şartı','Bölge / il'], r:[
      ['Koyun (küçükbaş)','Bozkır, kuru ot yeter','İç Anadolu, D. Anadolu, G.Doğu — Konya, Van, Şanlıurfa'],
      ['Kıl keçisi','Maki ve çalılık, engebeli arazi','Akdeniz, Toroslar — ormana zarar verir'],
      ['Tiftik (Ankara) keçisi','Karasal, kuru iklim','Ankara, Konya, Eskişehir, Siirt — sayısı azaldı'],
      ['Sığır (büyükbaş)','Çayır-mera + yem bitkisi + ahır','Erzurum-Kars, Karadeniz, Marmara'],
      ['Manda','Sulak, bataklık alan','Samsun, Sivas, Afyon, Muş, Diyarbakır, İstanbul'],
      ['Arıcılık','Çiçek çeşitliliği, orman','Ordu (1.), Muğla (çam balı), Bingöl, Hakkâri'],
      ['İpek böcekçiliği','Dut ağacı','Bursa (merkez), Diyarbakır, Bilecik, Amasya'],
      ['Tavukçuluk','Pazara yakınlık, yem','Bolu, Sakarya, Bursa, İzmir, Manisa'],
      ['Deniz balıkçılığı','Kıta sahanlığı, plankton','Karadeniz (~%70, hamsi), Marmara, Ege'],
      ['Kültür balıkçılığı','Temiz su, uygun sıcaklık','Muğla (çipura-levrek), Elazığ ve K.Maraş (alabalık)']
    ]},
    {t:'ozet', b:'Hayvancılığın sorunları', i:[
      'Meraların aşırı ve bilinçsiz otlatılmayla bozulması.',
      'Yerli ırkların verimi düşük; **et ve süt verimi** gelişmiş ülkelerin altında.',
      'Yem bitkisi ekim alanı yetersiz → yem pahalı.',
      'Besicilik yerine **otlatmaya dayalı** geleneksel yöntem.',
      'Veterinerlik ve soğuk zincir eksikliği.',
      'Karadeniz\'de otlak dar, Doğu Anadolu\'da kış uzun → ahır dönemi maliyeti yüksek.'
    ]},
    {t:'kod', b:'Üç hayvan, üç bitki', x:'**"Bozkır-Boynuz, Çayır-Sığır, Maki-Keçi"** — bozkırda koyun, çayırda sığır, makide kıl keçisi.'},
    {t:'tuzak', i:[
      '**Kıl keçisi** ormana zarar verdiği için sayısı sınırlanır; tiftik keçisiyle karıştırma. Tiftik **Ankara keçisi**dir ve yünü için beslenir.',
      'Karadeniz\'de büyükbaş vardır ama **mera dar** olduğu için hayvan başına verim düşüktür; "Karadeniz hayvancılıkta 1." demek yanlıştır.',
      'Balıkçılıkta Karadeniz ilk sıradadır ama bu **tür çeşitliliği** değil, **miktar** (hamsi) üstünlüğüdür.',
      'Arıcılıkta **Ordu** üretim lideridir; **Muğla** çam balında öne çıkar. İkisi farklı sorulur.'
    ]},
    {t:'harita', k:'hayvancilik', b:'Hayvancılık haritası'},
    {t:'test', s:[
      {q:'Doğu Anadolu\'da büyükbaş hayvancılığın gelişmiş olmasının temel nedeni nedir?',
       c:['Sanayinin gelişmiş olması','Yaz yağışlarıyla oluşan gür çayırların bulunması','Nüfusun az olması','İklimin ılıman olması'], d:1,
       a:'Yüksek platolarda yaz yağışları çayırları yeşil tutar. Bu gür ot örtüsü büyükbaş hayvancılığın doğal yem kaynağıdır.'},
      {q:'Kıl keçisi yetiştiriciliğinin sınırlandırılmak istenmesinin nedeni aşağıdakilerden hangisidir?',
       c:['Etinin verimsiz olması','Orman ve fidanlara zarar vermesi','Sadece Akdeniz\'de yaşaması','Sütünün az olması'], d:1,
       a:'Kıl keçisi genç sürgünleri ve fidanları yediği için ormanın kendini yenilemesini engeller.'}
    ]}
  ]
},

/* ═══════════════ 7 ═══════════════ */
{
  id:'madenler', ad:'Madenler ve Enerji Kaynakları', soru:'2 soru',
  ozet:'Maden sorusu neredeyse her zaman "hangi maden hangi ilde" diye gelir. Haritayla ezberle.',
  bloklar:[
    {t:'tablo', b:'Maden – yer eşleşmesi', h:['Maden','Yer','Not'], r:[
      ['**Bor**','Eskişehir Kırka, Kütahya Emet, Balıkesir Bigadiç, Bursa Kestelek','Dünya rezervinin **~%73**\'ü Türkiye\'de'],
      ['**Taş kömürü**','**Sadece Zonguldak havzası** (+ Amasra)','I. Zaman\'da oluştu; kaliteli, demir-çelikte kullanılır'],
      ['**Linyit**','Afşin-Elbistan (en büyük rezerv), Soma, Tunçbilek, Seyitömer, Yatağan, Çayırhan, Kangal','III. Zaman\'da oluştu; kalorisi düşük, termik santrallerde'],
      ['**Demir**','Sivas **Divriği** (en zengin), Malatya Hekimhan, Adana Attepe','Demir-çelik tesislerini besler'],
      ['**Krom**','Elazığ **Guleman**, Muğla Fethiye-Köyceğiz, Bursa','Paslanmaz çelik'],
      ['**Bakır**','Artvin Murgul, Kastamonu Küre, Rize Çayeli, Elazığ Ergani, Siirt Madenköy','Elektrik teli'],
      ['**Boksit**','Konya **Seydişehir**, Antalya Akseki, Muğla Milas','Alüminyum hammaddesi'],
      ['**Kükürt**','Isparta **Keçiborlu**','Kimya sanayi'],
      ['**Fosfat**','Mardin **Mazıdağı**','Gübre'],
      ['**Cıva**','Konya Sarayönü, İzmir Ödemiş',''],
      ['**Volfram**','Bursa **Uludağ**','Tungsten'],
      ['**Altın**','Uşak Eşme (Kışladağ), İzmir Bergama, Erzincan İliç','En büyük işletmeler'],
      ['**Tuz**','Tuz Gölü (göl), Çankırı-Iğdır (kaya), İzmir Çamaltı (deniz)','Üç farklı tuz kaynağı'],
      ['**Lületaşı**','Eskişehir','Dünyada neredeyse tek'],
      ['**Petrol**','Batman, Adıyaman, Şırnak (Gabar), Siirt, Diyarbakır','Güneydoğu\'da yoğun'],
      ['**Doğal gaz**','Trakya (Hamitabat), Karadeniz **Sakarya Gaz Sahası**','2020 keşfi, Filyos tesisi']
    ]},
    {t:'tablo', b:'Enerji kaynakları', h:['Tür','Nerede','Not'], r:[
      ['Termik','Afşin-Elbistan, Soma, Yatağan, Seyitömer, Kangal, Çatalağzı','Linyit/kömür yanında kurulur'],
      ['Hidrolik (HES)','Fırat (Keban, Karakaya, Atatürk), Dicle (Ilısu), Çoruh (Deriner, Yusufeli)','Yenilenebilir, en büyük payı olan yerli kaynak'],
      ['Jeotermal','Denizli **Kızıldere (ilk)**, Aydın Germencik, Manisa Alaşehir, Çanakkale Tuzla','Batı Anadolu graben sistemi'],
      ['Rüzgâr','Çanakkale, Balıkesir, İzmir, Manisa, Hatay-Osmaniye','Ege-Marmara kıyıları en verimli'],
      ['Güneş','Konya **Karapınar**, Şanlıurfa, Karaman, Niğde','Güneşlenme süresi güneyde uzun'],
      ['Nükleer','Mersin **Akkuyu** (ilk), Sinop (planlanan)','']
    ]},
    {t:'kod', b:'Krom-Demir-Bakır', x:'**"Krom Elazığ\'da, Demir Divriği\'de, Bakır Murgul\'da."** Üçü de baş harfi + yer eşleşmesiyle akılda kalır: **K-E, D-D, B-M**.'},
    {t:'tuzak', i:[
      '**Taş kömürü** ile **linyit** karıştırılmaz: taş kömürü **I. Zaman**\'da oluştu ve **sadece Zonguldak**\'ta var; linyit **III. Zaman**\'da oluştu ve **her yerde** var.',
      'Afşin-Elbistan **en büyük linyit rezervi**dir; "en büyük kömür rezervi" denirse yine odur ama taş kömürü değildir.',
      'Seydişehir\'de **boksit çıkarılır ve alüminyum üretilir** — hammadde ile tesisin aynı yerde olması istisna bir örnektir.',
      'Bor rezervi Türkiye\'de büyüktür ama **işlenmiş ürün** olarak ihracat payı rezerv payı kadar yüksek değildir; soru "rezerv" mi "üretim" mi diye sorar.',
      'Jeotermalin en yoğun olduğu yer **Batı Anadolu**\'dur; nedeni graben (fay) sistemidir, volkanizma değil.'
    ]},
    {t:'harita', k:'madenler', b:'Maden ve enerji haritası'},
    {t:'test', s:[
      {q:'Türkiye\'de taş kömürünün yalnızca Zonguldak çevresinde bulunmasının nedeni nedir?',
       c:['Bölgenin kıyıda olması','I. Jeolojik Zaman\'a ait tabakaların burada yüzeye çıkması','Nüfusun yoğun olması','Yağışın fazla olması'], d:1,
       a:'Taş kömürü I. Zaman\'daki bataklık ormanlarından oluşmuştur. Türkiye\'de bu yaştaki kömürlü tabakalar yalnızca Zonguldak havzasında işletilebilir durumdadır.'},
      {q:'Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
       c:['Bor – Kırka','Krom – Guleman','Kükürt – Keçiborlu','Boksit – Divriği'], d:3,
       a:'Divriği demir yatağıyla ünlüdür. Boksit ise Seydişehir, Akseki ve Milas çevresinde bulunur.'},
      {q:'Batı Anadolu\'da jeotermal enerji potansiyelinin yüksek olmasının nedeni aşağıdakilerden hangisidir?',
       c:['Aktif volkanların bulunması','Graben sistemine bağlı kırıklı yapının yaygın olması','Yağışın fazla olması','Deniz seviyesinin düşük olması'], d:1,
       a:'Horst-graben sisteminde derin faylar yer altı sularının magmatik ısıyla temasını kolaylaştırır. Bölgede aktif volkan yoktur.'}
    ]}
  ]
},

/* ═══════════════ 8 ═══════════════ */
{
  id:'sanayi', ad:'Sanayi ve Endüstri', soru:'1 soru',
  ozet:'Ağır sanayi hammaddeye ve limana, tüketim sanayi pazara yakın kurulur. Kural bu kadar basit.',
  bloklar:[
    {t:'ozet', b:'Tarihsel çerçeve', i:[
      '**1923 İzmir İktisat Kongresi** — millî ekonominin ilk çerçevesi.',
      '**1933 I. Beş Yıllık Sanayi Planı** — devletçilik dönemi; dokuma, kâğıt, cam, kimya, demir-çelik.',
      '**Sümerbank (1933)** dokuma ve tüketim, **Etibank (1935)** madencilik ve enerji.',
      '**1937 Karabük Demir-Çelik** — Türkiye\'nin ilk entegre demir-çelik tesisi.',
      '1950 sonrası özel sektör ve **OSB**\'ler; 1980 sonrası ihracata dayalı sanayileşme.'
    ]},
    {t:'tablo', b:'Sanayi kolları ve merkezleri', h:['Kol','Merkez','Kuruluş sebebi'], r:[
      ['Demir-çelik','Karabük, Ereğli, İskenderun','Kömür / demir / liman'],
      ['Petrokimya-rafineri','İzmit (Yarımca), Aliağa, Kırıkkale, Batman','Liman + boru hattı + ham petrol'],
      ['Alüminyum','Konya Seydişehir','Boksit yatağı yanında'],
      ['Otomotiv','Bursa, Kocaeli (Gölcük), Sakarya, Aksaray','Pazar + ulaşım + yan sanayi'],
      ['Havacılık','Ankara (TUSAŞ), Eskişehir (TEI)','Nitelikli iş gücü + Ar-Ge'],
      ['Gemi inşa','Tuzla, Yalova, Kocaeli','Kıyı + liman'],
      ['Kâğıt','Çaycuma, Dalaman, Aksu (Giresun), Taşucu','Orman ve su yanında'],
      ['Şeker','Alpullu ve Uşak (ilk, 1926), Eskişehir, Turhal','Pancar tarlasının içinde'],
      ['Çay','Rize ve çevresi (ÇAYKUR)','Hammadde bozulmadan işlenmeli'],
      ['Dokuma-tekstil','Denizli, Gaziantep, Bursa, K.Maraş, Kayseri, Uşak','Pamuk/yün + gelenek + iş gücü'],
      ['Beyaz eşya-elektronik','Manisa, Eskişehir, İstanbul, Bolu','Pazar + iş gücü'],
      ['Cam','İstanbul Paşabahçe, Kırklareli, Bursa Yenişehir','Kum/soda + enerji + pazar']
    ]},
    {t:'kod', b:'Demir-çeliğin üç şehri', x:'**"Karabük – Ereğli – İskenderun" = K-E-İ**, kuruluş sırası da alfabetik gibi: 1937 → 1965 → 1975. Kömüre yakın başladı, limana doğru gitti.'},
    {t:'tuzak', i:[
      'Karabük **denizde değildir**; kömüre (Zonguldak) yakınlık için orada kurulmuştur. Ereğli ve İskenderun ise liman şehridir.',
      'Çay ve şeker fabrikaları **hammaddenin yanında** kurulur çünkü ürün taşınırken bozulur. Bu "hammaddeye yakınlık" örneğidir, pazar değil.',
      'Sanayinin gelişmesi tek başına hammaddeye bağlı değildir; **enerji, ulaşım, sermaye, pazar, iş gücü** birlikte gerekir.',
      'Türkiye\'nin en çok sanayi tesisi bulunan ili **İstanbul**\'dur, ama en büyük **entegre** tesisler kıyı-liman şehirlerindedir.'
    ]},
    {t:'harita', k:'sanayi', b:'Sanayi haritası'},
    {t:'test', s:[
      {q:'Çay fabrikalarının Rize ve çevresinde toplanmasının nedeni nedir?',
       c:['İş gücünün ucuz olması','Yaş çay yaprağının kısa sürede işlenmesi gerekmesi','Enerji maliyetinin düşük olması','Limanların yakın olması'], d:1,
       a:'Yaş çay yaprağı toplandıktan sonra hızla bozulur. Bu nedenle fabrika hammaddenin yetiştiği yerde kurulur.'},
      {q:'Karabük Demir-Çelik Fabrikası\'nın kuruluş yeri seçilirken en çok hangi etken belirleyici olmuştur?',
       c:['Limana yakınlık','Taş kömürüne yakınlık','Pazara yakınlık','Nüfus yoğunluğu'], d:1,
       a:'Karabük iç kesimdedir ve limanı yoktur. Belirleyici etken Zonguldak taş kömürü havzasına yakınlıktır.'}
    ]}
  ]
},

/* ═══════════════ 9 ═══════════════ */
{
  id:'ulasim', ad:'Ulaşım', soru:'1 soru',
  ozet:'Yer şekilleri ulaşımı belirler; geçitler ve boğazlar sorunun anahtarıdır.',
  bloklar:[
    {t:'ozet', b:'Ulaşım türleri', i:[
      '**Karayolu** — yolcu ve yük taşımacılığının **en büyük payı** (%90 üzeri). Esnek ama maliyeti yüksek.',
      '**Demiryolu** — ilk hat **1856 İzmir-Aydın** (İngilizler). Cumhuriyet döneminde devletleştirildi. Yük taşımada payı düşük; YHT ile yolcu payı artıyor.',
      '**Denizyolu** — en ucuz. Türkiye\'nin kıyısı uzun ama iç bölgelerle bağlantısı zayıf.',
      '**Havayolu** — en hızlı, en pahalı. İç hat ağı 2000\'lerden sonra hızla genişledi.',
      '**Boru hattı** — BTC (Bakü-Tiflis-Ceyhan), Irak-Türkiye, TANAP, Mavi Akım, TürkAkım.'
    ]},
    {t:'tablo', b:'Önemli geçitler', h:['Geçit','Bağladığı yerler'], r:[
      ['**Gülek Boğazı**','Çukurova ↔ İç Anadolu (Toroslar)'],
      ['Sertavul Geçidi','Mersin ↔ Konya'],
      ['**Belen Geçidi**','Hatay ↔ İskenderun (Amanoslar)'],
      ['**Zigana Geçidi**','Trabzon ↔ Gümüşhane'],
      ['Kop Geçidi','Bayburt ↔ Erzurum'],
      ['**Ecevit (Ilgaz) Geçidi**','Kastamonu ↔ Çankırı'],
      ['Çubuk Boğazı','Ankara kuzeyi']
    ]},
    {t:'ozet', b:'Büyük yapılar', i:[
      'Boğaz köprüleri: **15 Temmuz Şehitler, Fatih Sultan Mehmet, Yavuz Sultan Selim**.',
      '**Osmangazi Köprüsü** (İzmit Körfezi), **1915 Çanakkale Köprüsü** (dünyanın en uzun orta açıklıklı asma köprüsü).',
      '**Marmaray** ve **Avrasya Tüneli** — boğazın altından geçiş.',
      'Tüneller: **Ovit** (Rize-Erzurum), **Yeni Zigana**, **Bolu Dağı**.'
    ]},
    {t:'tuzak', i:[
      'Türkiye\'de demiryolunun gelişmemesinin sebebi **engebeli arazi ve yüksek maliyet**tir; "ihtiyaç olmaması" değil.',
      'Denizyolu en ucuzdur ama Türkiye\'de payı düşüktür — çünkü **iç bölgelerle bağlantı** zayıftır ve yükün çoğu iç pazara gider.',
      'Geçitler dağların **alçak** kesimlerindedir; "en yüksek noktadan geçer" ifadesi yanlıştır.'
    ]},
    {t:'harita', k:'ulasim', b:'Limanlar, boğazlar, geçitler ve turizm merkezleri'},
    {t:'test', s:[
      {q:'Türkiye\'de karayolu taşımacılığının payının yüksek olmasının nedenlerinden biri **değildir**?',
       c:['Kapıdan kapıya taşıma imkânı','Yatırım maliyetinin demiryoluna göre düşük olması','Arazinin engebeli olması','Akaryakıtın ucuz olması'], d:3,
       a:'Türkiye\'de akaryakıt pahalıdır; karayolunun payı esneklik, düşük ilk yatırım ve engebeli arazide daha kolay hat kurulmasından gelir.'},
      {q:'Gülek Boğazı hangi iki alan arasında geçiş sağlar?',
       c:['Ege ↔ İç Batı Anadolu','Çukurova ↔ İç Anadolu','Trabzon ↔ Gümüşhane','Hatay ↔ İskenderun'], d:1,
       a:'Gülek Boğazı Orta Toroslar\'da yer alır ve Çukurova ile İç Anadolu arasındaki tarihî geçittir.'}
    ]}
  ]
},

/* ═══════════════ 10 ═══════════════ */
{
  id:'ticaret', ad:'Ticaret', soru:'1–2 soru',
  ozet:'İhracatta sanayi ürünü, ithalatta enerji ve ara malı. Açık buradan doğuyor.',
  bloklar:[
    {t:'ozet', b:'Dış ticaretin yapısı', i:[
      '**İhracat** (sattığımız): otomotiv, tekstil-hazır giyim, demir-çelik, kimya, beyaz eşya, makine, fındık, kuru meyve.',
      '**İthalat** (aldığımız): **ham petrol ve doğal gaz**, ara malları, makine-teçhizat, elektronik, demir-çelik hurdası.',
      'Türkiye sürekli **dış ticaret açığı** verir — çünkü ihraç ürünlerinin üretimi için ithal ara malı ve enerji gerekir.',
      'En çok ticaret yapılan ülkeler: **Almanya, Rusya, Çin, ABD, İtalya, İngiltere, Irak**.',
      'İhracatın büyük kısmı **sanayi ürünü**; tarımın payı azalmıştır.',
      '**Turizm gelirleri** dış ticaret açığını kapatmada önemli bir kalemdir (görünmeyen gelir).'
    ]},
    {t:'ozet', b:'İç ticaret', i:[
      'Bölgeler arasında **üretim farkı** olduğu için iç ticaret canlıdır: Karadeniz fındık-çay, İç Anadolu tahıl, Akdeniz turfanda gönderir.',
      'Ulaşımın gelişmesi iç ticareti artırır.',
      '**Organize sanayi bölgeleri, hal ve borsalar, fuarlar** ticareti düzenler.',
      'Türkiye\'nin en büyük ticaret merkezi **İstanbul**\'dur.'
    ]},
    {t:'tuzak', i:[
      'Türkiye **tarım ürünü ihraç eden** bir ülke olmaktan çıkmıştır; ihracatın büyük kısmı **sanayi ürünüdür**.',
      'Dış ticaret açığının ana kalemi **enerji ithalatı**dır; lüks tüketim değil.',
      'Turizm geliri **ihracat kalemi değildir**, "görünmeyen kalemler" içinde yer alır ama açığı azaltır.'
    ]},
    {t:'test', s:[
      {q:'Türkiye\'nin dış ticaret açığı vermesinin en önemli nedeni nedir?',
       c:['Tarım ürünü ihracatının azlığı','Enerji ve ara malı ithalatına bağımlılık','Turizm gelirlerinin düşük olması','İhracat yapılan ülke sayısının azlığı'], d:1,
       a:'Türkiye ihraç ettiği sanayi ürünlerini üretmek için ham petrol, doğal gaz ve ara malı ithal eder. Bu da ithalatı sürekli ihracatın üzerinde tutar.'}
    ]}
  ]
},

/* ═══════════════ 11 ═══════════════ */
{
  id:'turizm', ad:'Turizm', soru:'1 soru',
  ozet:'UNESCO listesi ve turizm çeşitleri: soru genelde buradan gelir.',
  bloklar:[
    {t:'ozet', b:'Turizm çeşitleri', i:[
      '**Deniz-kum-güneş**: Antalya, Muğla, İzmir, Aydın, Mersin.',
      '**Kültür-tarih**: İstanbul, Kapadokya, Efes, Truva, Göbeklitepe, Nemrut.',
      '**Kış (kayak)**: Uludağ, Palandöken, Kartalkaya, Erciyes, Sarıkamış, Ilgaz, Davraz.',
      '**Termal (kaplıca)**: Afyon, Yalova, Bursa, Balıkesir Gönen, Denizli, Kütahya.',
      '**Yayla ve doğa**: Uzungöl, Ayder, Abant, Yedigöller, Ihlara, Saklıkent.',
      '**İnanç turizmi**: Meryem Ana (Efes), Sümela, Mevlana (Konya), Hacıbektaş, Ayasofya, Antakya.',
      '**Kongre, sağlık, kruvaziyer, gastronomi** turizmi son yıllarda gelişti.'
    ]},
    {t:'ozet', b:'Sayılarla turizm', i:[
      'En çok turist gelen ülkeler: **Rusya, Almanya, İngiltere** (yıllara göre sıra değişir).',
      'En çok ziyaret edilen iller: **Antalya, İstanbul, Muğla, İzmir, Nevşehir**.',
      'Turizmin sorunu **mevsimlik yoğunlaşma** — yaz aylarında toplanır; kış ve kültür turizmiyle yayılmaya çalışılır.',
      'Turizm gelirleri **döviz girdisi** sağlar, istihdam yaratır, altyapıyı geliştirir; ama çevre baskısı ve fiyat artışı doğurur.'
    ]},
    {t:'ozet', b:'UNESCO Dünya Mirası — Türkiye', i:[
      'İstanbul Tarihi Alanları · Göreme ve Kapadokya · Divriği Ulu Cami (Sivas) · Hattuşa (Çorum) · Nemrut Dağı (Adıyaman) · Xanthos-Letoon (Antalya-Muğla) · Safranbolu (Karabük) · Truva (Çanakkale)',
      'Selimiye Camii (Edirne) · Çatalhöyük (Konya) · Bergama (İzmir) · Bursa ve Cumalıkızık · Diyarbakır Surları ve Hevsel Bahçeleri · Efes (İzmir) · Ani (Kars) · Aphrodisias (Aydın)',
      'Göbeklitepe (Şanlıurfa) · Arslantepe Höyüğü (Malatya) · Gordion (Ankara) · Pamukkale-Hierapolis (Denizli, karma) · Kapadokya (karma)'
    ]},
    {t:'tuzak', i:[
      '**Pamukkale ve Kapadokya "karma" mirastır** — hem doğal hem kültürel. Sadece doğal ya da sadece kültürel diyen şık yanlıştır.',
      'Traverten Pamukkale\'de **kireçli suyun çökelmesiyle** oluşur; peribacası ise **tüfün aşınmasıyla**. İkisi farklı süreçtir.',
      'Turizm gelirlerinin yüksek olması turist **sayısının** en yüksek olduğu anlamına gelmez; kişi başı harcama farklıdır.'
    ]},
    {t:'harita', k:'ulasim', b:'Turizm ve UNESCO haritası (katmandan "Turizm" gruplarını seç)'},
    {t:'test', s:[
      {q:'Türkiye\'de turizmin belirli aylarda yoğunlaşmasının en önemli sonucu nedir?',
       c:['Turist sayısının azalması','Tesislerin yılın büyük bölümünde atıl kalması','Döviz gelirlerinin artması','Ulaşımın gelişmesi'], d:1,
       a:'Mevsimlik yoğunlaşma tesislerin ve iş gücünün yılın büyük kısmında boş kalmasına yol açar. Kış, termal ve kültür turizmi bu sorunu azaltmak içindir.'}
    ]}
  ]
},

/* ═══════════════ 12 ═══════════════ */
{
  id:'bolgeler', ad:'Bölgeler Coğrafyası', soru:'1–2 soru',
  ozet:'7 bölge, 21 bölüm. Sınırlar iklim ve yer şekline göre çizildi — idari sınır değildir.',
  bloklar:[
    {t:'ozet', b:'Temel bilgi', i:[
      'Bölgeler **1941 I. Coğrafya Kongresi**\'nde belirlendi: **7 bölge, 21 bölüm**.',
      'Sınırlar **iklim ve yer şekilleri** esas alınarak çizildi; **il sınırlarıyla çakışmaz** (bir il iki bölgeye girebilir).',
      'Adlandırma: kimi bölge **denize göre** (Karadeniz, Akdeniz, Ege, Marmara), kimi **konuma göre** (İç Anadolu, Doğu Anadolu, Güneydoğu Anadolu).'
    ]},
    {t:'tablo', b:'Bölgeler tablosu', h:['Bölge','İl sayısı','Bölümleri','Öne çıkan'], r:[
      ['İç Anadolu','13','Konya, Yukarı Sakarya, Orta Kızılırmak, Yukarı Kızılırmak','**Yüzölçümü en büyük** · tahıl · bozkır'],
      ['Doğu Anadolu','14','Yukarı Fırat, Erzurum-Kars, Yukarı Murat-Van, Hakkâri','**En yüksek** · en seyrek nüfuslu · büyükbaş'],
      ['Karadeniz','18','Batı, Orta, Doğu Karadeniz','**En çok il** · en yağışlı · orman · fındık-çay'],
      ['Akdeniz','8','Adana, Antalya','Turizm · turfanda · karstik şekiller'],
      ['Ege','8','Asıl Ege (Kıyı Ege), İç Batı Anadolu','Horst-graben · jeotermal · zeytin-incir-üzüm'],
      ['Marmara','11','Yıldız Dağları, Ergene, Çatalca-Kocaeli, Güney Marmara','**En kalabalık** · sanayi · en çok göç alan'],
      ['Güneydoğu Anadolu','9','Orta Fırat, Dicle','**Yüzölçümü en küçük** · en sıcak · GAP · petrol']
    ]},
    {t:'kod', b:'Bölüm sayısı ezberi', x:'**4-4-4-3-2-2-2 = 21.** İç Anadolu 4, Doğu Anadolu 4, Marmara 4, Karadeniz 3, Ege 2, Akdeniz 2, Güneydoğu 2.'},
    {t:'ozet', b:'Bölgelerin "en"leri', i:[
      'Yüzölçümü **en büyük**: İç Anadolu · **en küçük**: Güneydoğu Anadolu.',
      'Nüfusu **en fazla**: Marmara · **en az**: Güneydoğu Anadolu.',
      'Nüfus yoğunluğu **en yüksek**: Marmara · **en düşük (seyrek)**: Doğu Anadolu.',
      'İl sayısı **en fazla**: Karadeniz (18) · **en az**: Ege ve Akdeniz (8\'er).',
      'Ortalama yükseltisi **en fazla**: Doğu Anadolu · **en az**: Marmara.',
      'Kıyısı **en uzun**: Karadeniz · Denize kıyısı **olmayan**: İç Anadolu, Doğu Anadolu, Güneydoğu Anadolu.',
      'Orman varlığı **en fazla**: Karadeniz · Tarım alanı oranı **en fazla**: Marmara.',
      '**Tüm iklim tiplerinin görüldüğü** bölge: Marmara (geçiş özelliği).'
    ]},
    {t:'tuzak', i:[
      '**En seyrek nüfuslu bölge Doğu Anadolu**\'dur, ama **en az nüfuslu bölge Güneydoğu Anadolu**\'dur. Kelime farkı cevabı değiştirir.',
      'Bölge sınırları **idari değildir**; bir ilin bir kısmı başka bölgede kalabilir (örn. Bilecik, Bolu, Kastamonu çevresi).',
      'Karadeniz\'in **il sayısı** en fazladır ama **nüfusu** Marmara ve Ege\'den azdır.',
      'Marmara **en küçük ikinci** bölgedir; en küçük Güneydoğu Anadolu\'dur.'
    ]},
    {t:'harita', k:'bolge', b:'Bölge haritası — bölgeye tıkla, illerini gör'},
    {t:'test', s:[
      {q:'Aşağıdakilerden hangisi Türkiye\'nin coğrafi bölgelerinin belirlenmesinde kullanılan ölçütlerden biri **değildir**?',
       c:['İklim özellikleri','Yer şekilleri','İl sınırları','Bitki örtüsü'], d:2,
       a:'1941 Coğrafya Kongresi\'nde bölgeler doğal özelliklere göre belirlendi. İl sınırları ölçüt değildir, bu yüzden bölge sınırları illeri bölebilir.'},
      {q:'Nüfus yoğunluğu en düşük bölge ile toplam nüfusu en az olan bölge sırasıyla hangileridir?',
       c:['Doğu Anadolu – Güneydoğu Anadolu','Güneydoğu Anadolu – Doğu Anadolu','Doğu Anadolu – Doğu Anadolu','Karadeniz – Güneydoğu Anadolu'], d:0,
       a:'Doğu Anadolu geniş alana yayılmış az nüfusa sahiptir, yoğunluğu en düşüktür. Güneydoğu Anadolu ise alanı küçük olduğu için toplam nüfusu en azdır.'}
    ]}
  ]
}

  ]
};
