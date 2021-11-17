function hitung() {
  let kelompok = document.getElementById("kelompok").value;
  let arrKelompok = kelompok.split("|")
  let namakelompok = arrKelompok[0];
  let nomorkelompok = parseInt(arrKelompok[1]);
  let blokkelompok = arrKelompok[2];

  let standbulanlalu = document.getElementById("standbulanlalu").value;
  let standbulansekarang = document.getElementById("standbulansekarang").value;

  let dataKelompok = document.getElementById("dataKelompok");
  let dataPemakaianair = document.getElementById("dataPemakaianair");
  let dataBebantetapadministrasi = document.getElementById("dataBebantetapadministrasi");
  let dataDendaketerlambatan = document.getElementById("dataDendaketerlambatan");
  let dataBlok1 = document.getElementById("dataBlok1");
  let dataBlok2 = document.getElementById("dataBlok2");
  let dataBlok3 = document.getElementById("dataBlok3");
  let dataBlok4 = document.getElementById("dataBlok4");
  let dataTotal = document.getElementById("dataTotal");

  let bebantetapadministrasi = 20000;

  let blok1 = '';
  let blok2 = '';
  let blok3 = '';
  let blok4 = '';

  
  // menentukan denda keterlambatan
  if (nomorkelompok == 1) {
    dendaketerlambatan = 5000;
  } else if (nomorkelompok == 2) {
    dendaketerlambatan = 15000;
  } else if (nomorkelompok == 3) {
    dendaketerlambatan = 20000
  } else if (nomorkelompok == 4) {
    dendaketerlambatan = 20000
  } else {
    dendaketerlambatan = 0;
  }

 // menentukan tarif blok pemakaian
  if (blokkelompok == 1) {
    blok1 = 2300;
    blok2 = 4600;
    blok3 = 5300;
    blok4 = 6100;
  } else if (blokkelompok == 2) {
    blok1 = 2300;
    blok2 = 2300;
    blok3 = 2300;
    blok4 = 2300;
  } else if (blokkelompok == 3) {
    blok1 = 4600;
    blok2 = 5300;
    blok3 = 6100;
    blok4 = 7000;
  } else if (blokkelompok == 4) {
    blok1 = 5100;
    blok2 = 5900;
    blok3 = 6700;
    blok4 = 7500;
  } else if (blokkelompok == 5) {
    blok1 = 5500;
    blok2 = 6300;
    blok3 = 7100;
    blok4 = 7900;
  } else if (blokkelompok == 6) {
    blok1 = 6400;
    blok2 = 7300;
    blok3 = 8400;
    blok4 = 9600;
  } else if (blokkelompok == 7) {
    blok1 = 7000;
    blok2 = 7900;
    blok3 = 8800;
    blok4 = 10000;
  } else if (blokkelompok == 8) {
    blok1 = 3500;
    blok2 = 3500;
    blok3 = 3500;
    blok4 = 3500;
  } else if (blokkelompok == 4) {
    blok1 = 4600;
    blok2 = 4600;
    blok3 = 4600;
    blok4 = 4600;
  }

  // perhitungan tarif
  // selisih stand meter
  let pemakaianair = parseInt(standbulansekarang) - parseInt(standbulanlalu);

  // perhitungan per blok
  if (pemakaianair <= 10) {
    tarifblok1 = pemakaianair * blok1;
    tarifblok2 = 0;
    tarifblok3 = 0;
    tarifblok4 = 0; 
  } else if (pemakaianair >= 11 && pemakaianair <= 20) {
    tarifblok1 = 10 * blok1;
    tarifblok2 = (pemakaianair - 10) * blok2;
    tarifblok3 = 0;
    tarifblok4 = 0;
  } else if (pemakaianair >= 21 && pemakaianair <= 30) {
    tarifblok1 = 10 * blok1;
    tarifblok2 = 10 * blok2;
    tarifblok3 = (pemakaianair - 20) * blok3;
    tarifblok4 = 0;
  } else if (pemakaianair > 30) {
    tarifblok1 = 10 * blok1;
    tarifblok2 = 10 * blok2;
    tarifblok3 = 10 * blok3;
    tarifblok4 = (pemakaianair - 30) * blok4;;
  }

  // total tarif
  let totaltarif = bebantetapadministrasi + tarifblok1 + tarifblok2 + tarifblok3 + tarifblok4;

  // show data tarif
  // show kelompok
  dataKelompok.innerHTML = namakelompok;
  // show pemakaian air
  dataPemakaianair.innerHTML = pemakaianair;
  // show beban tetap administrasi
  dataBebantetapadministrasi.innerHTML = bebantetapadministrasi;
  // show denda keterlambatan
  dataDendaketerlambatan.innerHTML = dendaketerlambatan;
  // show tarif per blok
  dataBlok1.innerHTML = tarifblok1;
  dataBlok2.innerHTML = tarifblok2;
  dataBlok3.innerHTML = tarifblok3;
  dataBlok4.innerHTML = tarifblok4;
  // show total tarif
  dataTotal.innerHTML = totaltarif;
}