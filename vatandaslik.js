/* KPSS Ön Lisans — VATANDAŞLIK · 9 soru
   Çalışma formatı: ŞEMA + SAYI KARTI.
   Vatandaşlıkta yorum yok, madde var. Sayılar ve organ şemaları ezberlenirse 9 soru garanti. */

window.DERS_VATANDASLIK = {
  id:'vatandaslik', ad:'Vatanda\u015fl\u0131k', bolum:'Genel K\u00fclt\u00fcr', soru:9, renk:'vat',
  tanim:'En az konu, en y\u00fcksek verim. 9 sorunun tamam\u0131 bilgiye dayal\u0131d\u0131r; yorum gerektirmez.',
  yontem:[
    '**\u015eema** kutular\u0131 organlar\u0131n yap\u0131s\u0131n\u0131 ve birbirine ba\u011flan\u0131\u015f\u0131n\u0131 g\u00f6sterir.',
    '**Say\u0131 kart\u0131** kutular\u0131 s\u0131navda do\u011frudan sorulan rakamlar\u0131 toplar \u2014 bunlar ezber.',
    'Temel Hukuk ve \u0130dare Hukuku birlikte 5-6 soru: \u00f6nce bunlar\u0131 bitir.'
  ],
  konular:[

{
  id:'temel-hukuk', ad:'Temel Hukuk Kavramlar\u0131', soru:'3 soru \u2014 en \u00e7ok soru gelen konu', durum:'hazir',
  ozet:'Her y\u0131l 3 soru. Hukuk dallar\u0131, yapt\u0131r\u0131m t\u00fcrleri ve kaynak s\u0131ralamas\u0131 sorulur.',
  bloklar:[
    {t:'sema', b:'Hukukun dallar\u0131', d:[
      {b:'Kamu Hukuku', a:['Anayasa Hukuku','\u0130dare Hukuku','Ceza Hukuku','Vergi (Mali) Hukuku','Yarg\u0131lama Hukuklar\u0131','Devletler Genel Hukuku','\u0130\u015f Hukuku (karma)']},
      {b:'\u00d6zel Hukuk', a:['Medeni Hukuk','Bor\u00e7lar Hukuku','Ticaret Hukuku','Devletler \u00d6zel Hukuku']}
    ]},
    {t:'sema', b:'Medeni Hukukun b\u00f6l\u00fcmleri', d:[
      {b:'Medeni Hukuk', a:['Ki\u015filer Hukuku','Aile Hukuku','Miras Hukuku','E\u015fya Hukuku','Bor\u00e7lar Hukuku']}
    ]},
    {t:'tablo', b:'Yapt\u0131r\u0131m t\u00fcrleri', h:['Yapt\u0131r\u0131m','Nerede','\u00d6rnek'], r:[
      ['Ceza','Ceza hukuku','Hapis, adli para cezas\u0131'],
      ['Cebri icra','Bor\u00e7lar/icra hukuku','Mal\u0131n haczedilip sat\u0131lmas\u0131'],
      ['Tazminat','Bor\u00e7lar hukuku','Maddi ve manevi tazminat'],
      ['H\u00fck\u00fcms\u00fczl\u00fck','Medeni/bor\u00e7lar hukuku','Yokluk, butlan, iptal edilebilirlik'],
      ['\u0130ptal','\u0130dare hukuku','\u0130dari i\u015flemin mahkemece iptali']
    ]},
    {t:'sayilar', b:'Ezberlenecek say\u0131lar', s:[
      {n:'18', a:'Erginlik (r\u00fc\u015ft) ya\u015f\u0131'},
      {n:'17', a:'Ola\u011fan evlenme ya\u015f\u0131 (h\u00e2kim izniyle 16)'},
      {n:'15', a:'Mahkeme karar\u0131yla ergin k\u0131l\u0131nma (kazai r\u00fc\u015ft) alt ya\u015f\u0131'},
      {n:'12\u201315', a:'Ceza sorumlulu\u011fu s\u0131n\u0131rl\u0131 ya\u015f aral\u0131\u011f\u0131'},
      {n:'15', a:'Ay\u0131rt etme g\u00fcc\u00fc olan k\u00fc\u00e7\u00fc\u011f\u00fcn kendi i\u015flemleri i\u00e7in s\u0131n\u0131r de\u011fil \u2014 dikkat: kural ay\u0131rt etme g\u00fcc\u00fcd\u00fcr, ya\u015f de\u011fil'}
    ]},
    {t:'ozet', b:'Hukukun kaynaklar\u0131', i:[
      '**Yaz\u0131l\u0131 kaynaklar (asli)**: Anayasa \u2192 Kanun \u2192 Cumhurba\u015fkanl\u0131\u011f\u0131 Kararnamesi \u2192 Y\u00f6netmelik.',
      'Milletleraras\u0131 antla\u015fmalar kanun h\u00fckm\u00fcndedir; **temel hak ve \u00f6zg\u00fcrl\u00fcklere ili\u015fkin** olanlar \u00e7at\u0131\u015fma h\u00e2linde **\u00fcst\u00fcn**d\u00fcr.',
      '**Yard\u0131mc\u0131 kaynaklar**: yarg\u0131 kararlar\u0131 (i\u00e7tihat), bilimsel g\u00f6r\u00fc\u015f (doktrin).',
      '**Yaz\u0131s\u0131z kaynak**: \u00f6rf ve \u00e2det hukuku \u2014 kanunda h\u00fck\u00fcm yoksa uygulan\u0131r.'
    ]},
    {t:'tuzak', i:[
      '**Kamu hukuku**nda taraflardan biri devlettir ve **e\u015fitlik yoktur**; \u00f6zel hukukta taraflar e\u015fittir.',
      '\u0130\u015f hukuku hem kamu hem \u00f6zel hukuk \u00f6zelli\u011fi ta\u015f\u0131yan **karma** bir dald\u0131r.',
      'Ceza yapt\u0131r\u0131m\u0131 sadece hapis de\u011fildir; **adli para cezas\u0131** da ceza yapt\u0131r\u0131m\u0131d\u0131r \u2014 idari para cezas\u0131yla kar\u0131\u015ft\u0131rma.',
      '\u00d6rf ve \u00e2det hukuku kanunun **yerine ge\u00e7mez**, kanunda bo\u015fluk varsa devreye girer.'
    ]}
  ]
},

{
  id:'anayasal-kavramlar', ad:'Anayasal Kavramlar ve Anayasa Tarihi', soru:'0\u20131 soru', durum:'hazir',
  ozet:'Devlet bi\u00e7imleri, h\u00fck\u00fcmet sistemleri ve T\u00fcrk anayasa tarihinin k\u0131sa kronolojisi.',
  bloklar:[
    {t:'zaman', b:'T\u00fcrk anayasa tarihi', z:[
      {y:'1876', o:'Kanun-i Esasi', d:'\u0130lk Osmanl\u0131 anayasas\u0131. I. Me\u015frutiyet. Padi\u015fah\u0131n yetkileri geni\u015f.'},
      {y:'1921', o:'Te\u015fkilat-\u0131 Esasiye Kanunu', d:'**Mill\u00ee egemenlik** ilkesi. Kuvvetler birli\u011fi. Yumu\u015fak (\u00e7er\u00e7eve) anayasa.'},
      {y:'1924', o:'1924 Anayasas\u0131', d:'Cumhuriyetin ilk kapsaml\u0131 anayasas\u0131. Kuvvetler birli\u011fi, meclis \u00fcst\u00fcnl\u00fc\u011f\u00fc.'},
      {y:'1961', o:'1961 Anayasas\u0131', d:'27 May\u0131s sonras\u0131. **Anayasa Mahkemesi** ve Senato kuruldu. Kuvvetler ayr\u0131l\u0131\u011f\u0131, geni\u015f hak ve \u00f6zg\u00fcrl\u00fckler.'},
      {y:'1982', o:'1982 Anayasas\u0131', d:'12 Eyl\u00fcl sonras\u0131. Y\u00fcr\u00fctme g\u00fc\u00e7lendirildi. H\u00e2len y\u00fcr\u00fcrl\u00fckte, \u00e7ok kez de\u011fi\u015ftirildi.'},
      {y:'2017', o:'Cumhurba\u015fkanl\u0131\u011f\u0131 H\u00fck\u00fcmet Sistemi', d:'16 Nisan 2017 halk oylamas\u0131, 2018\'de uygulamaya girdi. Ba\u015fbakanl\u0131k kald\u0131r\u0131ld\u0131.'}
    ]},
    {t:'sayilar', b:'Anayasa say\u0131lar\u0131', s:[
      {n:'1\u20133', a:'De\u011fi\u015ftirilemez, de\u011fi\u015ftirilmesi teklif edilemez maddeler'},
      {n:'4', a:'\u0130lk \u00fc\u00e7 maddenin de\u011fi\u015ftirilemeyece\u011fini s\u00f6yleyen madde'},
      {n:'177', a:'1982 Anayasas\u0131\'n\u0131n toplam madde say\u0131s\u0131'},
      {n:'3/5', a:'Anayasa de\u011fi\u015fikli\u011fi teklifinin kabul\u00fc i\u00e7in gereken asgari oy (360)'},
      {n:'2/3', a:'Halkoyuna sunulmadan do\u011frudan yay\u0131mlanabilmesi i\u00e7in gereken oy (400)'},
      {n:'1/3', a:'Anayasa de\u011fi\u015fikli\u011fi teklifi i\u00e7in gereken milletvekili say\u0131s\u0131 (200)'}
    ]},
    {t:'tuzak', i:[
      'Anayasa Mahkemesi **1961** Anayasas\u0131 ile kuruldu, 1982 ile de\u011fil.',
      '1921 Anayasas\u0131 **yumu\u015fak (\u00e7er\u00e7eve)** anayasad\u0131r; k\u0131sa ve de\u011fi\u015ftirilmesi kolayd\u0131r.',
      'De\u011fi\u015ftirilemez maddeler **1, 2, 3**\'t\u00fcr; madde 4 bunlar\u0131 koruyan maddedir, kendisi de\u011fi\u015ftirilemez maddelerden biri say\u0131lmaz ama teklif edilemez.'
    ]}
  ]
},

{ id:'temel-haklar', ad:'Temel Hak ve \u00d6devler', soru:'0\u20131 soru', durum:'iskelet',
  bloklar:[{t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
    'Haklar\u0131n s\u0131n\u0131fland\u0131r\u0131lmas\u0131: ki\u015fi haklar\u0131, sosyal-ekonomik haklar, siyasi haklar',
    'Temel hak ve h\u00fcrriyetlerin s\u0131n\u0131rland\u0131r\u0131lmas\u0131 (m.13) ve \u00f6l\u00e7\u00fctleri',
    'Ola\u011fan\u00fcst\u00fc h\u00e2llerde kullan\u0131m\u0131n durdurulmas\u0131 (m.15) ve \u00e7ekirdek alan',
    'K\u00f6t\u00fcye kullan\u0131lamama (m.14), yabanc\u0131lar\u0131n durumu (m.16)',
    'Vatanda\u015fl\u0131k, se\u00e7me-se\u00e7ilme, dilek\u00e7e ve bilgi edinme hakk\u0131',
    '\u00d6devler: vergi, askerlik, kanunlara uyma'
  ]}]
},

{
  id:'yasama', ad:'Yasama \u2014 TBMM', soru:'1 soru', durum:'hazir',
  ozet:'Say\u0131 ezberi yeter: milletvekili say\u0131s\u0131, ya\u015f, toplant\u0131 ve karar yeter say\u0131s\u0131.',
  bloklar:[
    {t:'sayilar', b:'TBMM say\u0131lar\u0131', s:[
      {n:'600', a:'Milletvekili say\u0131s\u0131'},
      {n:'18', a:'Milletvekili se\u00e7ilme ya\u015f\u0131'},
      {n:'5 y\u0131l', a:'Yasama d\u00f6nemi (Cumhurba\u015fkan\u0131 se\u00e7imiyle ayn\u0131 g\u00fcn)'},
      {n:'200', a:'Toplant\u0131 yeter say\u0131s\u0131 (TBMM \u00fcye tamsay\u0131s\u0131n\u0131n 1/3\'\u00fc)'},
      {n:'151', a:'Karar yeter say\u0131s\u0131 (toplant\u0131ya kat\u0131lanlar\u0131n salt \u00e7o\u011funlu\u011fu, en az \u00fcye tamsay\u0131s\u0131n\u0131n 1/4\'\u00fc + 1)'},
      {n:'360', a:'Anayasa de\u011fi\u015fikli\u011fi i\u00e7in 3/5 \u00e7o\u011funluk'},
      {n:'400', a:'Halkoyu olmadan yay\u0131m i\u00e7in 2/3 \u00e7o\u011funluk'}
    ]},
    {t:'sema', b:'TBMM\'nin g\u00f6rev ve yetkileri', d:[
      {b:'Yasama', a:['Kanun koymak, de\u011fi\u015ftirmek, kald\u0131rmak','B\u00fct\u00e7e ve kesin hesap kanununu g\u00f6r\u00fc\u015fmek','Para bas\u0131lmas\u0131na karar vermek']},
      {b:'Denetim', a:['Yaz\u0131l\u0131 soru','Genel g\u00f6r\u00fc\u015fme','Meclis ara\u015ft\u0131rmas\u0131','Meclis soru\u015fturmas\u0131 (Cumhurba\u015fkan\u0131 ve yard\u0131mc\u0131lar\u0131 i\u00e7in)']},
      {b:'Di\u011fer', a:['Sava\u015f ilan\u0131na karar vermek','Milletleraras\u0131 antla\u015fmalar\u0131 onaylamay\u0131 uygun bulmak','Genel ve \u00f6zel af ilan\u0131 (3/5)','Se\u00e7imlerin yenilenmesine karar vermek (3/5)']}
    ]},
    {t:'tuzak', i:[
      'Cumhurba\u015fkanl\u0131\u011f\u0131 sisteminde **gensoru ve s\u00f6zl\u00fc soru kald\u0131r\u0131ld\u0131**; denetim yollar\u0131 yaz\u0131l\u0131 soru, genel g\u00f6r\u00fc\u015fme, meclis ara\u015ft\u0131rmas\u0131 ve meclis soru\u015fturmas\u0131d\u0131r.',
      '**Meclis ara\u015ft\u0131rmas\u0131** ile **meclis soru\u015fturmas\u0131** farkl\u0131d\u0131r: ara\u015ft\u0131rma bilgi edinmedir, soru\u015fturma cezai sorumluluk i\u00e7indir.',
      'Milletvekili se\u00e7ilme ya\u015f\u0131 **18**\'dir (2017 \u00f6ncesi 25\'ti) \u2014 eski kaynaklar yan\u0131lt\u0131r.'
    ]}
  ]
},

{
  id:'yurutme', ad:'Y\u00fcr\u00fctme \u2014 Cumhurba\u015fkan\u0131 ve \u0130dare', soru:'1\u20133 soru', durum:'hazir',
  ozet:'2017 sonras\u0131 sistemin merkezi. Cumhurba\u015fkan\u0131n\u0131n yetkileri ve kararname s\u0131n\u0131rlar\u0131 sorulur.',
  bloklar:[
    {t:'sayilar', b:'Y\u00fcr\u00fctme say\u0131lar\u0131', s:[
      {n:'40', a:'Cumhurba\u015fkan\u0131 se\u00e7ilme ya\u015f\u0131'},
      {n:'5 y\u0131l', a:'G\u00f6rev s\u00fcresi'},
      {n:'2 d\u00f6nem', a:'En fazla se\u00e7ilebilme say\u0131s\u0131 (meclis 3/5 ile yenilerse \u00fc\u00e7\u00fcnc\u00fc kez aday olabilir)'},
      {n:'%50+1', a:'Se\u00e7ilmek i\u00e7in gereken oy; sa\u011flanamazsa iki hafta sonra ikinci tur'},
      {n:'100 bin', a:'Cumhurba\u015fkan\u0131 adayl\u0131\u011f\u0131 i\u00e7in gereken se\u00e7men imzas\u0131 (veya son se\u00e7imde %5 alan partiler)'}
    ]},
    {t:'sema', b:'Cumhurba\u015fkan\u0131n\u0131n yetkileri', d:[
      {b:'Yasama ile ilgili', a:['Kanunlar\u0131 yay\u0131mlamak / bir kez daha g\u00f6r\u00fc\u015f\u00fclmek \u00fczere geri g\u00f6ndermek','TBMM se\u00e7imlerinin yenilenmesine karar vermek','Anayasa Mahkemesi\'nde iptal davas\u0131 a\u00e7mak']},
      {b:'Y\u00fcr\u00fctme ile ilgili', a:['Cumhurba\u015fkanl\u0131\u011f\u0131 kararnamesi \u00e7\u0131karmak','Cumhurba\u015fkan\u0131 yard\u0131mc\u0131lar\u0131 ve bakanlar\u0131 atamak/g\u00f6revden almak','\u00dcst kademe y\u00f6neticilerini atamak','OHAL ilan etmek','Milletleraras\u0131 antla\u015fma onaylamak']},
      {b:'Yarg\u0131 ile ilgili', a:['AYM \u00fcyelerinin bir k\u0131sm\u0131n\u0131 se\u00e7mek','HSK \u00fcyelerinin 4\'\u00fcn\u00fc se\u00e7mek','S\u00fcrekli hastal\u0131k, sakatl\u0131k ve kocama sebebiyle cezay\u0131 hafifletmek veya kald\u0131rmak']}
    ]},
    {t:'ozet', b:'Cumhurba\u015fkanl\u0131\u011f\u0131 kararnamesinin s\u0131n\u0131rlar\u0131', i:[
      'Y\u00fcr\u00fctme yetkisine ili\u015fkin konularda \u00e7\u0131kar\u0131labilir.',
      '**Temel haklar, ki\u015fi haklar\u0131 ve \u00f6devleri** ile **siyasi haklar ve \u00f6devler** kararnameyle d\u00fczenlenemez.',
      'Anayasada **m\u00fcnhas\u0131ran kanunla** d\u00fczenlenmesi \u00f6ng\u00f6r\u00fclen konularda \u00e7\u0131kar\u0131lamaz.',
      'Kanunda **a\u00e7\u0131k\u00e7a d\u00fczenlenen** konularda \u00e7\u0131kar\u0131lamaz.',
      'Kararname ile kanun \u00e7at\u0131\u015f\u0131rsa **kanun** uygulan\u0131r.',
      'TBMM ayn\u0131 konuda kanun \u00e7\u0131kar\u0131rsa kararname **h\u00fck\u00fcms\u00fcz** h\u00e2le gelir.'
    ]},
    {t:'tuzak', i:[
      'Cumhurba\u015fkan\u0131 kararnameyle **temel haklar\u0131 d\u00fczenleyemez** \u2014 en s\u0131k sorulan s\u0131n\u0131rd\u0131r.',
      'Kararname ile kanun \u00e7at\u0131\u015f\u0131rsa **kanun \u00fcst\u00fcnd\u00fcr**; kararname \u00fcst\u00fcn de\u011fildir.',
      'OHAL s\u00fcresi **en fazla 6 ay**d\u0131r ve TBMM onay\u0131na sunulur.'
    ]}
  ]
},

{ id:'yargi', ad:'Yarg\u0131', soru:'0\u20131 soru', durum:'iskelet',
  bloklar:[
    {t:'sema', b:'Y\u00fcksek mahkemeler', d:[
      {b:'Y\u00fcksek Mahkemeler', a:['Anayasa Mahkemesi','Yarg\u0131tay','Dan\u0131\u015ftay','Uyu\u015fmazl\u0131k Mahkemesi','Say\u0131\u015ftay (denetim organ\u0131)']}
    ]},
    {t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
      'Yarg\u0131 ba\u011f\u0131ms\u0131zl\u0131\u011f\u0131 ve h\u00e2kimlik teminat\u0131',
      'Anayasa Mahkemesi: \u00fcye say\u0131s\u0131, g\u00f6revleri, iptal ve itiraz yolu, bireysel ba\u015fvuru, Y\u00fcce Divan',
      'Yarg\u0131tay ve Dan\u0131\u015ftay\'\u0131n g\u00f6revleri ve fark\u0131',
      'Uyu\u015fmazl\u0131k Mahkemesi\'nin i\u015flevi',
      'HSK (H\u00e2kimler ve Savc\u0131lar Kurulu): \u00fcye say\u0131s\u0131 ve se\u00e7imi',
      'Adli, idari ve anayasa yarg\u0131s\u0131 ayr\u0131m\u0131'
    ]}
  ]
},

{ id:'idare-hukuku', ad:'\u0130dare Hukuku', soru:'2\u20133 soru', durum:'iskelet',
  ozet:'Vatanda\u015fl\u0131\u011f\u0131n ikinci a\u011f\u0131r konusu. Merkezi-yerinden y\u00f6netim ayr\u0131m\u0131 ve idari i\u015flem unsurlar\u0131 sorulur.',
  bloklar:[
    {t:'sema', b:'\u0130darenin yap\u0131s\u0131', d:[
      {b:'Merkezden Y\u00f6netim', a:['Ba\u015fkent te\u015fkilat\u0131: Cumhurba\u015fkan\u0131, bakanl\u0131klar, Dan\u0131\u015ftay, Say\u0131\u015ftay, MGK','Ta\u015fra te\u015fkilat\u0131: il, il\u00e7e, bucak (vali, kaymakam)']},
      {b:'Yerinden Y\u00f6netim', a:['Yer y\u00f6n\u00fcnden: il \u00f6zel idaresi, belediye, k\u00f6y','Hizmet y\u00f6n\u00fcnden: \u00fcniversiteler, TRT, K\u0130T\'ler, meslek kurulu\u015flar\u0131']}
    ]},
    {t:'ozet', b:'\u0130\u015flenecek ba\u015fl\u0131klar', i:[
      '\u0130darenin b\u00fct\u00fcnl\u00fc\u011f\u00fc: **hiyerar\u015fi** ve **idari vesayet** fark\u0131',
      '\u0130dari i\u015flemin unsurlar\u0131: yetki, \u015fekil, sebep, konu, ama\u00e7',
      '\u0130dari i\u015flemin \u00f6zellikleri: tek yanl\u0131l\u0131k, icrailik, hukuka uygunluk karinesi',
      '\u0130dari s\u00f6zle\u015fmeler ve kamu ihalesi',
      'Kamu g\u00f6revlileri, memur hukuku, disiplin cezalar\u0131',
      '\u0130darenin sorumlulu\u011fu: hizmet kusuru, kusursuz sorumluluk',
      '\u0130dari yarg\u0131: iptal davas\u0131 ve tam yarg\u0131 davas\u0131'
    ]},
    {t:'tuzak', i:[
      '**Hiyerar\u015fi** ayn\u0131 t\u00fczel ki\u015filik i\u00e7indedir; **vesayet** farkl\u0131 t\u00fczel ki\u015filikler aras\u0131ndad\u0131r ve **kanunla** \u00f6ng\u00f6r\u00fclmelidir.',
      '\u0130ptal davas\u0131 **i\u015flemin hukuka ayk\u0131r\u0131l\u0131\u011f\u0131** i\u00e7in, tam yarg\u0131 davas\u0131 **zarar\u0131n giderilmesi** i\u00e7indir.',
      'Vali merkez\u00ee idarenin ta\u015fra temsilcisidir; belediye ba\u015fkan\u0131 **yerinden y\u00f6netim** organ\u0131d\u0131r. Kar\u0131\u015ft\u0131rma.'
    ]}
  ]
}

  ]
};
