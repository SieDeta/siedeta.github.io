// form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyK0hexyBc-2NMN81kG2lW_cedmg59aFWhDHiQsvBdZ01H8RDXgyzeTMom8OYqGO_wLlw/exec";
const form = document.forms["submit-to-google-sheet"];

const btn_kirim = document.querySelector(".btn-kirim");
const btn_selesai = document.querySelector(".btn-selesai");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btn_kirim.classList.toggle("hidden");
  btn_selesai.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btn_kirim.classList.toggle("hidden");
      btn_selesai.classList.toggle("hidden");
      form.reset();
      alert("Pesan berhasil terkirim");
      // 3. menampilkan kotak peringatan bertuliskan pesan berhasil terkirim
      console.log("Success!", response);
    })
    .catch((error) => {
      btn_kirim.classList.toggle("hidden");
      btn_selesai.classList.toggle("hidden");
      alert("Pesan gagal terkirim");
      console.error("Error!", error.message);
    });
});

// animate home
gsap.to("#home div.fisrt", {
  opacity: 0,
  y: -500,
  duration: 2,
  delay: 10,
});

gsap.from("#home div.fisrt .pertama", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 1,
  ease: "",
});
gsap.from("#home div.fisrt .kedua", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 2,
  ease: "",
});
gsap.from("#home div.fisrt .ketiga", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 3,
  ease: "",
});
gsap.from("#home div.fisrt .keempat", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 5,
  ease: "",
});

gsap.from("#home p.fisrt .titik1", {
  opacity: 0,
  delay: 6,
  duration: 1,
});
gsap.from("#home p.fisrt .titik2", {
  opacity: 0,
  delay: 7,
  duration: 1,
});
gsap.from("#home p.fisrt .titik3", {
  opacity: 0,
  delay: 8,
  duration: 1,
});

gsap.from("#home .we-are", {
  opacity: 0,
  x: -100,
  delay: 11,
  duration: 2,
  ease: "bounce.out",
});
gsap.from("#home .scroll", {
  opacity: 0,
  delay: 14,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

const myTimeout = setTimeout(scrollStart, 20000);
// 9. setTimeOut adalah function bawaan javascript yang digunakan untuk menjalankan suatu fungsi setelah waktu yang ditentukan dalam satuan milisecond

function scrollStart() {
  document.getElementById("body").classList.remove("overflow-hidden");
}
// 10. javascript akan menyeleksi elemen html yang memiliki id = body lalu menghapus class overflow-hidden pada element tersebut
