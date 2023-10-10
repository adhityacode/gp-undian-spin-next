import _ from 'lodash';

// const generateSampleSingleData = () => ({
//     voucher: _.random(99999999).toString().padStart(8, "0"),
//     name: `APT ${generateRandomName().toUpperCase()}`
// })

// const generateRandomName = () => {
//     let firstname = ["Kai", "Eliana", "Jaden", "Ezra", "Luca", "Rowan", "Nova", "Amara", "Aaliyah", "Finn"];
// 	let lastname= ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Wilson"];
// 	let rand_first = Math.floor(Math.random()*firstname.length); 
// 	let rand_last = Math.floor(Math.random()*lastname.length); 
//     return `${firstname[rand_first]} ${lastname[rand_last]}`
// }

// const pageCount = 8
// const countPerPage = 10

// const Data = () => _.range(pageCount).map(
//     e => _.range(countPerPage).map(
//         e => generateSampleSingleData()
//     )
// )

const realData = [
  {
    "no": 1,
    "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
    "Nomor Kupon": 17227517
  },
  {
    "no": 2,
    "Order": "49 EFFATA FAJAR ANUGERAH , PT",
    "Nomor Kupon": 37571809
  },
  {
    "no": 3,
    "Order": "49 SAKAJAJA MAKMUR ABADI, PT.",
    "Nomor Kupon": 49281656
  },
  {
    "no": 4,
    "Order": "49 NATIONAL HOSPITAL, RS",
    "Nomor Kupon": 14238748
  },
  {
    "no": 5,
    "Order": "49 PRADHANA, KLINIK",
    "Nomor Kupon": 74600197
  },
  {
    "no": 6,
    "Order": "49 DEPO KEDOKTERAN MULIA HUSADA, PT",
    "Nomor Kupon": 64967357
  },
  {
    "no": 7,
    "Order": "49 DIVA, APT",
    "Nomor Kupon": 93702271
  },
  {
    "no": 8,
    "Order": "49 DUTA FARMA II, APT.",
    "Nomor Kupon": 42041106
  },
  {
    "no": 9,
    "Order": "55 BAPTIS, RS/KDR",
    "Nomor Kupon": 39593829
  },
  {
    "no": 10,
    "Order": "56 JAYA SEHAT, APT./MLG",
    "Nomor Kupon": 36330008
  },
  {
    "no": 11,
    "Order": "58 ADAPOTEK BATUBULAN, APT",
    "Nomor Kupon": 18167035
  },
  {
    "no": 12,
    "Order": "58 DJUMANTO",
    "Nomor Kupon": 73519576
  },
  {
    "no": 13,
    "Order": "58 GATOT KACA, APT.",
    "Nomor Kupon": 17985630
  },
  {
    "no": 14,
    "Order": "58 ADHI GUNA 1, APT.",
    "Nomor Kupon": 79294602
  },
  {
    "no": 15,
    "Order": "65 SAHABAT SEHAT SMART, PT",
    "Nomor Kupon": 6155505
  },
  {
    "no": 16,
    "Order": "65 DIAN HARAPAN, RS., APT.",
    "Nomor Kupon": 908312
  },
  {
    "no": 17,
    "Order": "65 MEKAR MELATI FARMINDO, PT",
    "Nomor Kupon": 35726871
  },
  {
    "no": 18,
    "Order": "36 BERKAH, APT",
    "Nomor Kupon": 59938845
  },
  {
    "no": 19,
    "Order": "36 CIROYOM, APT.",
    "Nomor Kupon": 30936606
  },
  {
    "no": 20,
    "Order": "36 HERMINA, RS / PASTEUR",
    "Nomor Kupon": 32675543
  },
  {
    "no": 21,
    "Order": "36 JAYA SENTOSA, APT",
    "Nomor Kupon": 53405493
  },
  {
    "no": 22,
    "Order": "36 PERISA HUSADA, KLINIK.",
    "Nomor Kupon": 18579395
  },
  {
    "no": 23,
    "Order": "36 SAUYUNAN, APT",
    "Nomor Kupon": 48052299
  },
  {
    "no": 24,
    "Order": "36 SINGGASANA W. SURYAMAS, PT.",
    "Nomor Kupon": 59226802
  },
  {
    "no": 25,
    "Order": "36 TELEMEDIKA FARMA 3, APT",
    "Nomor Kupon": 52613724
  },
  {
    "no": 26,
    "Order": "39 FEMINA CENTER, CLINIC",
    "Nomor Kupon": 61022339
  },
  {
    "no": 27,
    "Order": "39 SUMBER HURIP, RS",
    "Nomor Kupon": 98663019
  },
  {
    "no": 28,
    "Order": "26 PRISMA PHARMA INTERNUSA,PT",
    "Nomor Kupon": 91296559
  },
  {
    "no": 29,
    "Order": "21 SAN PRIMA SEJATI, PT.",
    "Nomor Kupon": 78407257
  },
  {
    "no": 30,
    "Order": "21 YKI/REGULER",
    "Nomor Kupon": 82473622
  },
  {
    "no": 31,
    "Order": "21 INST. GIZI RSU. ANGGREK MAS",
    "Nomor Kupon": 90083314
  },
  {
    "no": 32,
    "Order": "21 NAYAKA HUSADA 02 GATOT SUBROTO, KLINIK",
    "Nomor Kupon": 5685256
  },
  {
    "no": 33,
    "Order": "26 DEWI FARMA APT",
    "Nomor Kupon": 43635470
  },
  {
    "no": 34,
    "Order": "26 KEJ, APT",
    "Nomor Kupon": 19653342
  },
  {
    "no": 35,
    "Order": "30 SUPER SAVER, APT.",
    "Nomor Kupon": 27592156
  },
  {
    "no": 36,
    "Order": "30 BERKAT MAHKOTA PUTRA, PT",
    "Nomor Kupon": 76592360
  },
  {
    "no": 37,
    "Order": "30 KLINIK UTAMA AJI WARAS",
    "Nomor Kupon": 63798208
  },
  {
    "no": 38,
    "Order": "30 ANUGERAH AJIWARAS PANTES JAYA, PT.",
    "Nomor Kupon": 71855977
  },
  {
    "no": 39,
    "Order": "30 KASUARI, APT.",
    "Nomor Kupon": 66958894
  },
  {
    "no": 40,
    "Order": "34 JATI FARMA, APT.",
    "Nomor Kupon": 77491563
  },
  {
    "no": 41,
    "Order": "34 GOLDEN SEHAT, APT",
    "Nomor Kupon": 51116511
  },
  {
    "no": 42,
    "Order": "34 GIVEN JAYA FARMA, APT",
    "Nomor Kupon": 70600188
  },
  {
    "no": 43,
    "Order": "42 KOSAMBI MATERNAL & CHILDREN CLINIC",
    "Nomor Kupon": 57973785
  },
  {
    "no": 44,
    "Order": "42 BINTANG MEDIKA BERSAMA, PT",
    "Nomor Kupon": 15032540
  },
  {
    "no": 45,
    "Order": "42 NAYS FARMA, APT",
    "Nomor Kupon": 40410260
  },
  {
    "no": 46,
    "Order": "42 BUANA INTIPRIMA USAHA, PT",
    "Nomor Kupon": 17891889
  },
  {
    "no": 47,
    "Order": "42 BINTANG KENCANA A., PT.",
    "Nomor Kupon": 21961307
  },
  {
    "no": 48,
    "Order": "42 GLOBAL LOGISTIK MEDIKA, PT",
    "Nomor Kupon": 577098
  },
  {
    "no": 49,
    "Order": "43 KRAKATAU MEDIKA, PT.",
    "Nomor Kupon": 2048175
  },
  {
    "no": 50,
    "Order": "40 PANTI WILASA CITARUM, RS.",
    "Nomor Kupon": 86525830
  },
  {
    "no": 51,
    "Order": "40 OMURA, APT.",
    "Nomor Kupon": 38727322
  },
  {
    "no": 52,
    "Order": "40 SEHAT ABADI, APT.",
    "Nomor Kupon": 26727441
  },
  {
    "no": 53,
    "Order": "40 VITRA, APT.",
    "Nomor Kupon": 87524020
  },
  {
    "no": 54,
    "Order": "40 YAY. KES. TELOGOREDJO, RS.",
    "Nomor Kupon": 95713514
  },
  {
    "no": 55,
    "Order": "40 MITRA UTAMA ALKESMED, PT",
    "Nomor Kupon": 99339208
  },
  {
    "no": 56,
    "Order": "40 GLOBAL SINAR MEDICA, PT",
    "Nomor Kupon": 3695843
  },
  {
    "no": 57,
    "Order": "44 PHARM 24 JL.R.E MARTADINATA, APT",
    "Nomor Kupon": 47870225
  },
  {
    "no": 58,
    "Order": "45 MUTIARA BUNDA, RSIA.",
    "Nomor Kupon": 39189711
  },
  {
    "no": 59,
    "Order": "45 SUGIH WARAS,PT.",
    "Nomor Kupon": 37170316
  },
  {
    "no": 60,
    "Order": "46 HERMINA PURWOKERTO, RS",
    "Nomor Kupon": 61196226
  },
  {
    "no": 61,
    "Order": "47 BUMI SARANA MAJU, PT",
    "Nomor Kupon": 6102062
  },
  {
    "no": 62,
    "Order": "47 ISLAM BOYOLALI, RS",
    "Nomor Kupon": 12307209
  },
  {
    "no": 63,
    "Order": "60 HARAPAN BERSAMA, RSU.",
    "Nomor Kupon": 19259186
  },
  {
    "no": 64,
    "Order": "60 KHARITAS, APT",
    "Nomor Kupon": 74956440
  },
  {
    "no": 65,
    "Order": "62 KAMPUNG ARAB, APT",
    "Nomor Kupon": 11422871
  },
  {
    "no": 66,
    "Order": "62 TELEMEDIKA FARMA 24, APT",
    "Nomor Kupon": 9403499
  },
  {
    "no": 67,
    "Order": "63 JULIA, APT",
    "Nomor Kupon": 3055191
  },
  {
    "no": 68,
    "Order": "63 SAMARINDA MEDIKA CITRA, RS",
    "Nomor Kupon": 72493235
  },
  {
    "no": 69,
    "Order": "64 BLACK JAGUAR, APT",
    "Nomor Kupon": 30186491
  },
  {
    "no": 70,
    "Order": "64 CIPUTRA MITRA HOSPITAL, RS",
    "Nomor Kupon": 22233840
  },
  {
    "no": 71,
    "Order": "64 RAFISA DAHLIA, APT",
    "Nomor Kupon": 96860017
  },
  {
    "no": 72,
    "Order": "12 BINTANG MEDIKA BERSAMA MEDAN, PT",
    "Nomor Kupon": 73770956
  },
  {
    "no": 73,
    "Order": "12 METRO ARTHA PRAKARSA, PT",
    "Nomor Kupon": 32817774
  },
  {
    "no": 74,
    "Order": "12 TELEMEDIKA FARMA 9. APT",
    "Nomor Kupon": 81483995
  },
  {
    "no": 75,
    "Order": "12 VITA BINTANG, APT.",
    "Nomor Kupon": 35308144
  },
  {
    "no": 76,
    "Order": "17 KLINIK UTAMA NUSA LIMA, APT",
    "Nomor Kupon": 97295447
  },
  {
    "no": 77,
    "Order": "17 SYAFIRA, RS.",
    "Nomor Kupon": 7738380
  },
  {
    "no": 78,
    "Order": "19 R24 BOTANIA,APT",
    "Nomor Kupon": 69253282
  },
  {
    "no": 79,
    "Order": "19 VITKA FARMA, APT.",
    "Nomor Kupon": 981141
  },
  {
    "no": 80,
    "Order": "20 JAYA FARMA I, APT./CURUP",
    "Nomor Kupon": 40482848
  },
  {
    "no": 81,
    "Order": "20 MITRA PRIMA, APT",
    "Nomor Kupon": 87470670
  },
  {
    "no": 82,
    "Order": "20 K-24 SUDIRMAN, APT",
    "Nomor Kupon": 65096969
  },
  {
    "no": 83,
    "Order": "20 AR BUNDA LUBUK LINGGAU, RS",
    "Nomor Kupon": 79586489
  },
  {
    "no": 84,
    "Order": "20 INST. GIZI RS. ERNALDI BAHAR",
    "Nomor Kupon": 39543648
  },
  {
    "no": 85,
    "Order": "20 REDOXINDO UTAMA, PT.",
    "Nomor Kupon": 25589714
  },
  {
    "no": 86,
    "Order": "24 FARDIKA, APT",
    "Nomor Kupon": 34174400
  },
  {
    "no": 87,
    "Order": "16 RIZKI BUNDA, RSIA",
    "Nomor Kupon": 501466
  },
  {
    "no": 88,
    "Order": "18 KHARISMA D. AGUNG",
    "Nomor Kupon": 60422232
  },
  {
    "no": 89,
    "Order": "18 BAITURRAHIM, RS",
    "Nomor Kupon": 2460518
  },
  {
    "no": 90,
    "Order": "18 MITRA SEHAT, APT",
    "Nomor Kupon": 15385748
  },
  {
    "no": 91,
    "Order": "18 TRIMITRA PRATAMA MULIA",
    "Nomor Kupon": 9836378
  },
  {
    "no": 92,
    "Order": "18 LANGIT GOLDEN MEDIKA,RS",
    "Nomor Kupon": 63735633
  },
  {
    "no": 93,
    "Order": "18 KGP FARMA,PT",
    "Nomor Kupon": 97125178
  },
  {
    "no": 94,
    "Order": "66 SETIA MEDIKA, APT",
    "Nomor Kupon": 6936463
  },
  {
    "no": 95,
    "Order": "66 MITRA SEHATI, APT",
    "Nomor Kupon": 34614156
  },
  {
    "no": 96,
    "Order": "68 SEJATI FARMA, APT.",
    "Nomor Kupon": 55590311
  },
  {
    "no": 97,
    "Order": "66 SETIA II, APT.",
    "Nomor Kupon": 43259168
  },
  {
    "no": 98,
    "Order": "17 ASEAN 123, APT",
    "Nomor Kupon": 15457051
  },
  {
    "no": 99,
    "Order": "20 K-24 MASJID JAMIK, APT",
    "Nomor Kupon": 15816624
  },
  {
    "no": 100,
    "Order": "57 RUBY STARINDO, PT.",
    "Nomor Kupon": 41697821
  }
]

const Data = realData.map(e => ({
    voucher: `${e['Nomor Kupon']}`.padStart(8, "0"),
    name: e['Order']
}))

export default Data;