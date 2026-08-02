/* KPSS Ön Lisans — MATEMATİK · 25–27 soru
   Çalışma formatı: FORMÜL KARTI → ÇÖZÜMLÜ ÖRNEK → HIZ TAKTİĞİ.
   Matematikte kural okumak işe yaramaz; formülü elde tutup örnek çözmek gerekir. */

window.DERS_MATEMATIK = {
  id:'matematik', ad:'Matematik', bolum:'Genel Yetenek', soru:30, renk:'mat',
  tanim:'Soru başına ~1,1 dakika var. Uzun çözüm bilmek değil, kısa yol bilmek kazandırır.',
  yontem:[
    'Her konuda önce **formül kartı**nı ezberle, sonra **çözümlü örnek**e bak.',
    '**Hız taktiği** kutuları klasik yöntemin kısa yolunu verir.',
    'Problemlerde şıkları denemek çoğu zaman denklem kurmaktan hızlıdır.'
  ],
  konular:[

{
  id:'sayilar', ad:'Sayılar · EBOB – EKOK', soru:'3 soru', durum:'hazir',
  ozet:'Her yıl 3 soru gelir. Bölünebilme kuralları ve EBOB-EKOK mantığı oturursa garanti puandır.',
  bloklar:[
    {t:'formul', b:'Bölünebilme kuralları', f:[
      '**2** → son rakam çift',
      '**3** → rakamlar toplamı 3\'ün katı',
      '**4** → son iki basamak 4\'ün katı',
      '**5** → son rakam 0 veya 5',
      '**6** → hem 2\'ye hem 3\'e bölünür',
      '**8** → son üç basamak 8\'in katı',
      '**9** → rakamlar toplamı 9\'un katı',
      '**11** → sağdan başlayarak (+ − + −) toplamı 11\'in katı veya 0'
    ]},
    {t:'formul', b:'EBOB – EKOK', f:[
      '**EBOB** = ortak asal çarpanların **en küçük** üsleri çarpımı',
      '**EKOK** = tüm asal çarpanların **en büyük** üsleri çarpımı',
      '**a · b = EBOB(a,b) · EKOK(a,b)**',
      'EBOB → *bölme, parçalara ayırma, en büyük eşit parça*',
      'EKOK → *birlikte olma, aynı anda, en az kaç, tekrar buluşma*'
    ]},
    {t:'cozum', b:'Örnek', q:'Bir tamsayı 12 ve 18\'e bölündüğünde 5 kalanını veriyor. Bu koşulu sağlayan en küçük üç basamaklı sayı kaçtır?',
     s:[
       'Sayı: **EKOK(12,18)·k + 5** biçimindedir.',
       '12 = 2²·3, 18 = 2·3² → EKOK = 2²·3² = **36**',
       'Sayı = 36k + 5. Üç basamaklı en küçük değer için 36k + 5 ≥ 100 → 36k ≥ 95 → k ≥ 2,6 → **k = 3**',
       'Sayı = 36·3 + 5 = **113**'
     ], c:'113'},
    {t:'taktik', b:'Hız taktiği', x:'"Hepsine bölündüğünde **aynı kalanı** veriyor" → **EKOK·k + kalan**. "Hepsini böldüğünde aynı kalanı veriyor" → **EBOB**. İki kalıbı karıştırma: *bölünen* mi *bölen* mi?'},
    {t:'tuzak', i:[
      'Ardışık sayılar toplamı: **n terimli ardışık tam sayıların toplamı = (ilk + son)·n / 2**.',
      '0 çift sayıdır, 1 asal değildir, 2 tek asaldır — şıklarda sık kullanılır.',
      'Negatif sayılarda "en büyük" ile "mutlak değerce en büyük" farklıdır.'
    ]}
  ]
},

{
  id:'problemler-hareket', ad:'Hareket – Hız Problemleri', soru:'1–2 soru', durum:'hazir',
  ozet:'Formülü tek: yol = hız × zaman. Zorluk kurulumda, formülde değil.',
  bloklar:[
    {t:'formul', b:'Temel bağıntılar', f:[
      '**Yol = Hız × Zaman**  →  x = v · t',
      '**Ters yönde yaklaşma**: bağıl hız = v₁ + v₂',
      '**Aynı yönde yetişme**: bağıl hız = v₁ − v₂',
      '**Ortalama hız** = toplam yol ÷ toplam zaman *(hızların ortalaması DEĞİL)*',
      'Gidiş-dönüş eşit yolda: **V_ort = 2·v₁·v₂ / (v₁ + v₂)** (harmonik ortalama)',
      'Trenin köprüyü geçmesi: alınan yol = **tren boyu + köprü boyu**'
    ]},
    {t:'cozum', b:'Örnek', q:'Aralarında 300 km olan iki şehirden aynı anda karşılıklı hareket eden araçların hızları 60 km/sa ve 90 km/sa\'tir. Kaç saat sonra karşılaşırlar?',
     s:[
       'Ters yönde hareket → hızlar toplanır: 60 + 90 = **150 km/sa**',
       't = yol ÷ bağıl hız = 300 ÷ 150',
       't = **2 saat**'
     ], c:'2 saat'},
    {t:'taktik', b:'Hız taktiği', x:'Ortalama hız sorusunda şıklarda **hızların aritmetik ortalaması** mutlaka vardır ve **çeldiricidir**. 60 ve 90 için 75 şıkkını gördüğünde dur — cevap büyük ihtimalle 72\'dir.'}
  ]
},

{ id:'temel-kavramlar', ad:'Temel Kavramlar', soru:'1 soru', durum:'iskelet',
  ozet:'Sayı kümeleri, tek-çift, asal, ardışık sayılar, faktöriyel giriş.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Doğal, tam, rasyonel, irrasyonel, reel sayılar',
    'Tek-çift sayıların dört işlem kuralları',
    'Asal sayılar, aralarında asal, çarpan sayısı bulma',
    'Ardışık sayılar ve toplam formülleri',
    'Basamak kavramı ve çözümleme'
  ]}]
},

{ id:'rasyonel', ad:'Rasyonel ve Ondalıklı Sayılar', soru:'2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Rasyonel sayılarda dört işlem, sadeleştirme',
    'Sıralama, devirli ondalık açılım',
    'Ondalık sayılarda işlemler ve yuvarlama',
    'Bileşik kesir, tam sayılı kesir dönüşümleri'
  ]}]
},

{ id:'esitsizlik-mutlak', ad:'Basit Eşitsizlikler · Mutlak Değer', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Eşitsizliğin özellikleri, negatifle çarpma kuralı',
    'Aralık gösterimi ve tam sayı sayısı bulma',
    'Mutlak değerin özellikleri',
    'Mutlak değerli denklem ve eşitsizlik çözümü'
  ]}]
},

{ id:'uslu-koklu', ad:'Üslü ve Köklü Sayılar', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Ezberlenecek kurallar', f:[
    'aᵐ · aⁿ = aᵐ⁺ⁿ   ·   aᵐ ÷ aⁿ = aᵐ⁻ⁿ   ·   (aᵐ)ⁿ = aᵐⁿ',
    'a⁰ = 1 (a ≠ 0)   ·   a⁻ⁿ = 1/aⁿ',
    'ⁿ√a = a^(1/n)   ·   √a·√b = √(ab)',
    '(−1)ᶜⁱᶠᵗ = 1   ·   (−1)ᵗᵉᵏ = −1'
  ]}]
},

{ id:'carpanlara-ayirma', ad:'Çarpanlara Ayırma · Özdeşlikler', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Özdeşlikler', f:[
    'a² − b² = (a−b)(a+b)',
    '(a±b)² = a² ± 2ab + b²',
    'a³ ± b³ = (a ± b)(a² ∓ ab + b²)',
    'a² + b² = (a+b)² − 2ab'
  ]}]
},

{ id:'oran-oranti', ad:'Oran – Orantı', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Doğru ve ters orantı',
    'Orantı özellikleri, içler-dışlar çarpımı',
    'Bileşik orantı ve orantı problemleri'
  ]}]
},

{ id:'denklem', ad:'Denklem Çözme', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Birinci dereceden bir bilinmeyenli denklem',
    'İki bilinmeyenli denklem sistemleri (yerine koyma, yok etme)',
    'İkinci dereceden denklem, diskriminant, kök-katsayı bağıntısı'
  ]}]
},

{ id:'sayi-kesir-yas', ad:'Sayı · Kesir · Yaş Problemleri', soru:'3–4 soru', durum:'iskelet',
  bloklar:[
    {t:'ozet', b:'İşlenecek başlıklar', i:[
      'Sayı problemlerinde kurulum ve çeviri kalıpları',
      'Kesir problemlerinde "geriye doğru çözüm"',
      'Yaş problemleri: yaş farkı sabittir'
    ]},
    {t:'taktik', b:'Hız taktiği', x:'Yaş problemlerinde **iki kişinin yaş farkı hiç değişmez**. Toplam yaş ise her yıl **kişi sayısı kadar** artar. Bu iki cümle yaş sorularının çoğunu tek satırda bitirir.'}
  ]
},

{ id:'isci-havuz', ad:'İşçi ve Havuz Problemleri', soru:'1 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Temel bağıntı', f:[
    'Bir işçinin **1 saatte yaptığı iş** = 1 / (bitirme süresi)',
    'Birlikte çalışırlarsa hızlar **toplanır**',
    'Havuzda dolduran (+), boşaltan (−) alınır',
    'Sonuç süre = 1 ÷ (toplam hız)'
  ]}]
},

{ id:'yuzde-kar-karisim', ad:'Yüzde · Kâr-Zarar · Karışım', soru:'2–3 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Yüzde hesabı, artış-azalış, ardışık yüzde değişimi',
    'Maliyet, satış fiyatı, kâr-zarar yüzdesi (hangisinin üzerinden?)',
    'Karışım: tuz-su, alkol-su, alaşım',
    'Karışıma su eklenince madde miktarı değişmez'
  ]},
  {t:'taktik', b:'Hız taktiği', x:'Ardışık %20 artış + %20 azalış **başa dönmez**; sonuç %4 azalıştır. Çünkü ikinci işlem yeni değere uygulanır. Çeldirici hep "değişmez" şıkkıdır.'}]
},

{ id:'grafik-tablo', ad:'Grafik ve Tablo Problemleri', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Sütun, çizgi, daire grafiği okuma',
    'Daire grafiğinde açı ↔ yüzde dönüşümü (360° = %100)',
    'Tablodan yüzde ve oran çıkarma'
  ]}]
},

{ id:'kumeler', ad:'Kümeler ve Küme Problemleri', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Formüller', f:[
    's(A∪B) = s(A) + s(B) − s(A∩B)',
    's(A∪B∪C) = s(A)+s(B)+s(C) − s(A∩B) − s(A∩C) − s(B∩C) + s(A∩B∩C)',
    'Yalnız A = s(A) − s(A∩B)',
    'Alt küme sayısı = 2ⁿ · Öz alt küme = 2ⁿ − 1'
  ]}]
},

{ id:'fonksiyon-islem', ad:'Fonksiyonlar ve İşlem', soru:'1–2 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Fonksiyon tanımı, tanım-görüntü kümesi',
    'Bileşke fonksiyon, ters fonksiyon',
    'Tanımlı işlem soruları (özel sembollü)',
    'İşlemin özellikleri: değişme, birleşme, birim, ters eleman'
  ]}]
},

{ id:'permutasyon-olasilik', ad:'Permütasyon · Kombinasyon · Olasılık', soru:'2–3 soru', durum:'iskelet',
  bloklar:[{t:'formul', b:'Formüller', f:[
    'P(n,r) = n! / (n−r)!  → **sıra önemli**',
    'C(n,r) = n! / [r!·(n−r)!]  → **sıra önemsiz**',
    'Olasılık = istenen durum sayısı / tüm durum sayısı',
    'P(A veya B) = P(A) + P(B) − P(A∩B)',
    'Ayrık olaylarda: P(A∪B) = P(A) + P(B)'
  ]},
  {t:'taktik', b:'Hız taktiği', x:'"Sıralanma, dizilme, yerleştirme" → **permütasyon**. "Seçme, komisyon, takım kurma" → **kombinasyon**. Soru kökündeki fiil hangisini istediğini söyler.'}]
},

{ id:'modular', ad:'Modüler Aritmetik', soru:'0–1 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Kalan bulma, mod işlemleri',
    'Devirli problemler (gün, saat, takvim)',
    'Üslü sayıların birler basamağı'
  ]}]
},

{ id:'sayisal-mantik', ad:'Sayısal Mantık', soru:'2–3 soru', durum:'iskelet',
  ozet:'Örüntü ve kural bulma. Formül yok, göz alışkanlığı var.',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Sayı dizilerinde kural bulma (fark, çarpan, kare, karışık)',
    'Şekil-sayı ilişkileri',
    'Tablo ve matris örüntüleri',
    'Analitik düşünme soruları'
  ]},
  {t:'taktik', b:'Hız taktiği', x:'Dizide önce **ardışık farkları** yaz. Fark sabitse doğrusal, farkların farkı sabitse kare/ikinci dereceden, oran sabitse geometriktir. Üç deneme yeter, dördüncüde geç.'}]
},

{ id:'sekil-yetenek', ad:'Şekil Yetenek', soru:'0–1 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'İşlenecek başlıklar', i:[
    'Şekil döndürme ve yansıma',
    'Katlama-açma (küp açınımı)',
    'Örüntüde eksik parçayı bulma',
    'Küp sayma ve görünüm soruları'
  ]}]
}

  ]
};
