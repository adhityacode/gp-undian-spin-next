import _ from 'lodash';


const realData = [
  {
    page: 0,
    items: [
      {
        title: 'Undian',
        data: [
          {
            "no": 1,
            "Order": "",
            "Nomor Kupon": '--------'
          },
          {
            "no": 1,
            "Order": "",
            "Nomor Kupon": '--------'
          },
          {
            "no": 1,
            "Order": "",
            "Nomor Kupon": '--------'
          },
        ]
      },
    ]
  },
  {
    page: 1,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"11 IKHWAN, APT","Nomor Kupon":36312493,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"36 PADJADJARAN MEDICAL CENTER","Nomor Kupon":36633173,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"36 HERMINA, RS / PASTEUR","Nomor Kupon":37243325,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"36 SERUMPUN BAMBU, APT.","Nomor Kupon":99961235,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"36 NURANI, APT/MAJALAYA","Nomor Kupon":21683462,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"24 RIMBUN FARMA, APT.","Nomor Kupon":66307905,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"32 PRIMA, APT./BGR","Nomor Kupon":12162819,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"34 NAGASARI, APT.","Nomor Kupon":85731260,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"34 KASIH, APT","Nomor Kupon":5140331,"Hadiah":"Voucher Alfamart"}]
      },
    ]
  },
  {
    page: 2,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"34 K-24 GREEN MARKET, APT","Nomor Kupon":67315152,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"64 PHC BANJARMASIN, KLINIK","Nomor Kupon":60617463,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"64 KHANZA FARMA, APT","Nomor Kupon":67132202,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"64 TASYA MUKARRAMAH, APT.","Nomor Kupon":52680466,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"64 TELKOMEDIKA, APT.","Nomor Kupon":20866801,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"19 PHARMACY CARE,APT","Nomor Kupon":71476673,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"19 AZZAM FARMA BOTANIA, APT","Nomor Kupon":84211157,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"39 ASIA TOSERBA, SM","Nomor Kupon":58021582,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"58 BUANA MEDIKA, APT./P. SAMBIAN","Nomor Kupon":91473050,"Hadiah":"Voucher Alfamart"}],
      },
    ]
  },
  {
    page: 3,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"18 KLINIK MATA KAMBANG, APT","Nomor Kupon":72225375,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"18 HEARING CARE,APT","Nomor Kupon":32053061,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"54 BUANA FARMA, APT.","Nomor Kupon":93345918,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"21 PANGESTU TRITUNGGAL MEDIKA, PT.","Nomor Kupon":99387577,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"21 SAN PRIMA SEJATI, PT.","Nomor Kupon":90874452,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"21 SURYA GLODOK, APT.","Nomor Kupon":51771707,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"21 GOLDEN STAR, APT. (TAN TJENG SIONG)","Nomor Kupon":13308251,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"21 MANDARAMEDIKA UTAMA, PT.","Nomor Kupon":98117991,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"21 ANEKA SEHAT, APT.","Nomor Kupon":50631088,"Hadiah":"Voucher Alfamart"}],
      },
    ]
  },
  {
    page: 4,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"30 SENO SAGITA FARMA, PT.","Nomor Kupon":62097937,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"26 DEWI FARMA APT","Nomor Kupon":24867063,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"26 MITRA GAMA, APT","Nomor Kupon":86252837,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"30 HARAPAN, TO","Nomor Kupon":64277275,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"30 MEDICASTORE, APT","Nomor Kupon":42210765,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"65 AUWYONG, KLINIK","Nomor Kupon":28916757,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"59 SUMBER SEHAT, APT.","Nomor Kupon":78479545,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"12 HUSADA, APT./SIDIKALANG","Nomor Kupon":8111159,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"12 BETESDA, APT.","Nomor Kupon":75275690,"Hadiah":"Voucher Alfamart"}],
      },
    ]
  },
  {
    page: 5,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"12 NORA, APT.","Nomor Kupon":54433200,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"12 THAMRIN, APT./THAMRIN","Nomor Kupon":17605689,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"66 VITA FARMA, APT","Nomor Kupon":62974112,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"56 PRISKA FARMA, APT","Nomor Kupon":9436448,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"56 PRATAMA TANDYA, KLINIK","Nomor Kupon":28162229,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"56 NUSAKAMBANGAN, APT.","Nomor Kupon":68891997,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"57 NIA, APT","Nomor Kupon":36521511,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"16 BUDIMAN GADUT AGAM","Nomor Kupon":53605825,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"16 BUDIMAN, SM/ BKT","Nomor Kupon":4431220,"Hadiah":"Voucher Alfamart"}],
      },
    ]
  },
  {
    page: 6,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"16 KIMIA FARMA TABING, APT","Nomor Kupon":13479739,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"16 BINTANG ILAHI, APT.","Nomor Kupon":74661022,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"17 MAMAMIA SWALAYAN/ SETIABUDHI","Nomor Kupon":73923896,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"17 KLINIK UTAMA NUSA LIMA, APT","Nomor Kupon":8157163,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"17 MAMAMIA SWALAYAN / GOBAH","Nomor Kupon":65254390,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"17 ASEAN, APT.","Nomor Kupon":96010655,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"20 BHAKTI HUSADA, APT","Nomor Kupon":78183622,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"20 K-24 SUDIRMAN, APT","Nomor Kupon":2946413,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"20 ZHA - ZHA, APT","Nomor Kupon":73952391,"Hadiah":"Voucher Alfamart"}],
      },
    ]
  },
  {
    page: 7,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"60 BORNEO TRITAMA, PT GRUP","Nomor Kupon":83427728,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"60 AMANDA, KLINIK","Nomor Kupon":49514404,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"46 JADI BARU, SUPERMARKET","Nomor Kupon":94880569,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"46 VINDI FARMA, APT.","Nomor Kupon":43942703,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"49 KASIH KARUNIA, KLINIK","Nomor Kupon":24353811,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"49 INTISUMBER HASIL SEMPURNA GLOBAL, PT","Nomor Kupon":66174952,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"49 SAPUTRA JAYA, APT.","Nomor Kupon":18447009,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"49 TRIJAYA ABADI SATELIT . APT","Nomor Kupon":28009519,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"49 INTI FARMA, APT.","Nomor Kupon":67484152,"Hadiah":"Voucher Alfamart"}],
      },
    ]
  },
  {
    page: 8,
    items: [
      {
        title: 'Voucher Alfamart',
        data: [{"Nama Relasi":"63 GRAHA RESPIRASI SEMESTA, KLINIK","Nomor Kupon":13368146,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"63 PLANET SWALAYAN, MM","Nomor Kupon":15423009,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"63 HERMINA, RS / SMD","Nomor Kupon":37374014,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"40 GAMBIRAN, APT./RBG","Nomor Kupon":55968696,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"40 DOA IBU, APT","Nomor Kupon":27738269,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"40 FARMARIN, APT.","Nomor Kupon":32184076,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"43 KRAKATAU MEDIKA, PT.","Nomor Kupon":47607785,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"45 SUGIH WARAS,PT.","Nomor Kupon":79577562,"Hadiah":"Voucher Alfamart"},{"Nama Relasi":"42 KEHAMILAN SEHAT PERIUK, KLINIK","Nomor Kupon":3070232,"Hadiah":"Voucher Alfamart"}]
      },
    ]
  },
  {
    page: 9,
    items: [
      {
        title: 'Blender',
        data: [{"Nama Relasi":"34 FAMILY FARMA, APT","Nomor Kupon":11001720,"Hadiah":"Blender"},{"Nama Relasi":"26 SAHARA, APT","Nomor Kupon":63410934,"Hadiah":"Blender"},{"Nama Relasi":"56 TOMBO URIP, APT","Nomor Kupon":14772239,"Hadiah":"Blender"},{"Nama Relasi":"16 PARIS SWALAYAN","Nomor Kupon":31791419,"Hadiah":"Blender"},{"Nama Relasi":"43 RATU FARMA MEDIKA, APT","Nomor Kupon":99992166,"Hadiah":"Blender"},{"Nama Relasi":"45 BREGAS SAPORETE MEDIKALINDO. PT","Nomor Kupon":26023374,"Hadiah":"Blender"},{"Nama Relasi":"42 BINTANG KENCANA A., PT.","Nomor Kupon":14662171,"Hadiah":"Blender"},{"Nama Relasi":"42 GADING BERSAMA,APT","Nomor Kupon":52670772,"Hadiah":"Blender"}],
      },
    ]
  },
  {
    page: 10,
    items: [
      {
        title: 'Juicer',
        data: [{"Nama Relasi":"39 PERMATA BUNDA SYARIAH, KLINIK","Nomor Kupon":85449293,"Hadiah":"Juicer"},{"Nama Relasi":"58 SIDIKARYA, APT.","Nomor Kupon":30549776,"Hadiah":"Juicer"},{"Nama Relasi":"21 MITANA ARY, TO","Nomor Kupon":46760414,"Hadiah":"Juicer"},{"Nama Relasi":"30 ZENTRUM, APT./ DEPOK","Nomor Kupon":24138914,"Hadiah":"Juicer"},{"Nama Relasi":"12 K - 24 YAMIN, APT","Nomor Kupon":50155271,"Hadiah":"Juicer"},{"Nama Relasi":"60 HUSADA, APT / PONTIANAK","Nomor Kupon":72288305,"Hadiah":"Juicer"},{"Nama Relasi":"49 PAVILIUN, APT","Nomor Kupon":87778488,"Hadiah":"Juicer"},{"Nama Relasi":"47 BOUTI USABDA F., PT.","Nomor Kupon":54204664,"Hadiah":"Juicer"}],
      },
    ]
  },
  {
    page: 11,
    items: [
      {
        title: 'Smartwatch',
        data: [{"Nama Relasi":"32 KLINIK TELKOMEDIKA HEALTH CENTER 19","Nomor Kupon":55994367,"Hadiah":"Smartwatch"},{"Nama Relasi":"12 BONA 1, APT","Nomor Kupon":18199772,"Hadiah":"Smartwatch"},{"Nama Relasi":"57 DEWI FARMA, APT / MATARAM","Nomor Kupon":3336835,"Hadiah":"Smartwatch"}],
      },
      {
        title: 'Air Fryer',
        data: [{"Nama Relasi":"16 MANISE, TKL","Nomor Kupon":82459710,"Hadiah":"Airfyer"}],
      },
      {
        title: 'Dispenser',
        data: [{"Nama Relasi":"42 MOM AND CHILD,APT","Nomor Kupon":68388607,"Hadiah":"Dispenser"}]
      },
    ]
  },
  {
    page: 12,
    items: [
      {
        title: 'Emas 1gr',
        data: [{"Nama Relasi":"32 GOLDEN, APT.","Nomor Kupon":32425437,"Hadiah":"Emas 1gr"},{"Nama Relasi":"62 KAMPUNG ARAB, APT","Nomor Kupon":39149634,"Hadiah":"Emas 1gr"},{"Nama Relasi":"62 YOVA SUPERMARKET","Nomor Kupon":8155764,"Hadiah":"Emas 1gr"},{"Nama Relasi":"68 TOKO SUSU SULTAN","Nomor Kupon":42998893,"Hadiah":"Emas 1gr"},{"Nama Relasi":"17 ARA FARMA, APT","Nomor Kupon":88119566,"Hadiah":"Emas 1gr"},{"Nama Relasi":"49 SAKAJAJA MAKMUR ABADI, PT.","Nomor Kupon":30202073,"Hadiah":"Emas 1gr"},{"Nama Relasi":"47 GRIYA MEDIKA,APT","Nomor Kupon":4214923,"Hadiah":"Emas 1gr"},{"Nama Relasi":"44 UAD, APT.","Nomor Kupon":39521374,"Hadiah":"Emas 1gr"}],
      },
    ]
  },
  {
    page: 13,
    items: [
      {
        title: 'Xiaomi Redmi 10 6/128',
        data: [{"Nama Relasi":"19 VITKA FARMA BENGKONG, APT","Nomor Kupon":59580709,"Hadiah":"Xiaomi Redmi 10 6/128"},{"Nama Relasi":"65 HEMAT,APT","Nomor Kupon":46707720,"Hadiah":"Xiaomi Redmi 10 6/128"},{"Nama Relasi":"55 SUPER TOP SWALAYAN, MM","Nomor Kupon":56783396,"Hadiah":"Xiaomi Redmi 10 6/128"},{"Nama Relasi":"66 ANDIKA ,APT","Nomor Kupon":6375585,"Hadiah":"Xiaomi Redmi 10 6/128"},{"Nama Relasi":"47 HASTUTI, CLINIC","Nomor Kupon":84811448,"Hadiah":"Xiaomi Redmi 10 6/128"}],
      },
      {
        title: 'Samsung A6',
        data: [{"Nama Relasi":"21 SEHAT REZEKI, APT.","Nomor Kupon":23887855,"Hadiah":"Samsung A6"},{"Nama Relasi":"17 ALDA THOYIB, KLINIK","Nomor Kupon":68950659,"Hadiah":"Samsung A6"},{"Nama Relasi":"49 DEPO KEDOKTERAN MULIA HUSADA, PT","Nomor Kupon":98118189,"Hadiah":"Samsung A6"}],
      },
    ]
  },
  {
    page: 14,
    items: [
      {
        title: 'Sepeda',
        data: [{"Nama Relasi":"32 RAYENDRA DERMATOLOGY CLINIC","Nomor Kupon":35418113,"Hadiah":"Sepeda"},{"Nama Relasi":"26 SUMBER REJEKI GADING APT","Nomor Kupon":75617862,"Hadiah":"Sepeda"},{"Nama Relasi":"42 CURUG SEHAT,APT","Nomor Kupon":51096588,"Hadiah":"Sepeda"}],
      },
    ]
  },
  {
    page: 15,
    items: [
      {
        title: 'Redmi Pad SE',
        data: [{"Nama Relasi":"24 ANUGRAH, APT.","Nomor Kupon":19837397,"Hadiah":"Redmi Pad SE"},{"Nama Relasi":"62 BEBE STORY","Nomor Kupon":7564,"Hadiah":"Redmi Pad SE"},{"Nama Relasi":"65 K-24 WAHNO, APT","Nomor Kupon":90976962,"Hadiah":"Redmi Pad SE"},{"Nama Relasi":"40 MENJANGAN ENAM, APT","Nomor Kupon":13635799,"Hadiah":"Redmi Pad SE"}],
      },
    ]
  },
]

const Data = realData.map(d => (
  {
    ...d, items: d.items.map(item => ({
      ...item, data: item.data.map(e => ({
        voucher: `${e['Nomor Kupon']}`.padStart(8, "0"),
        name: e['Nama Relasi']
      }))
    }))
  }
))

export default Data;