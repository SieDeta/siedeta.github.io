
//
var namaBarang = document.getElementById("namaBarang");
var hargaBarang = document.getElementById("hargaBarang");
// hargaBarang = parseInt.value (document.getElementById("hargaBarang").innerHTML)
var warnaBarang = document.getElementById("warnaBarang");
var ukuranBarang = document.getElementById("ukuranBarang");
var jumlahBarang = document.getElementById("jumlahBarang");
var jenisBarang = document.getElementById("jenisBarang");

// Harga barang
var a = hargaBarang.value;

var tombolBeli = document.getElementById("tombolBeli");

tombolBeli.addEventListener("click", function () {
  console.log(a * jumlahBarang.value);

  if (jumlahBarang.value < 5) {
    swal("Maaf minimal pembelian barang berjumlah 5");
  } else {
    swal(`
            Silahkan ScreenShoot Invoice Berikut

            Nama        : ${namaBarang.value}
            Jenis       : ${jenisBarang.value}
            Harga       : ${hargaBarang.value}
            Ukuran      : ${ukuranBarang.value}
            Warna       : ${warnaBarang.value}
            Jumlah      : ${jumlahBarang.value}
            Total Harga : ${a * jumlahBarang.value}

            Silahkan transfer ke rekening:
            BCA - 12345678

            Kirim bukti transfer dan screenshoot invoice ke WhatsApp sebagai bukti transaksi
        `);
  }
});

const exampleBtn = document.getElementById("example-btn");

exampleBtn.addEventListener("click", () => {
  window.open("https://wa.me/+628122509383", "_blank");
});