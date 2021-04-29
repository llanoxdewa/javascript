// // cara sendiri
// const juduls = document.querySelectorAll('ul li');
// const jmlhVideo = document.querySelector('.jumlah-video');
// const totalDurasiTampil = document.querySelector('.total-durasi');
// const daftarPlayList = [];
// const ddr = [];
// juduls.forEach(judul => {
//     daftarPlayList.push(judul.innerHTML);
//     if(judul.innerHTML.split('|')[0]=='JAVASCRIPT LANJUTAN '){
//         ddr.push(judul.getAttribute('data-duration').split(':').map(rd => parseInt(rd)));
//     }
// });
// const daftarJavascriptLanjutan = daftarPlayList.filter(judul => {
//     return judul.split('|')[0]=='JAVASCRIPT LANJUTAN ';
// });
// // data jumlah judulnya
// jmlhVideo.innerHTML = `${daftarJavascriptLanjutan.length} video`;
// let totalDurasi = ddr.map(dr => {
//     return (dr[0]*60)+dr[1];
// }).reduce((f,l)=>f+l);
// let durasiJam = Math.round(totalDurasi/3600);
// totalDurasi -= durasiJam * 3600;
// let durasiMenit = Math.round(totalDurasi/60);
// let durasiDetik = totalDurasi - durasiMenit * 60;
// totalDurasiTampil.innerHTML = `${durasiJam} jam ${durasiMenit} menit ${durasiDetik} detik`


// cara wpu (lebih efective)
const juduls = Array.from(document.querySelectorAll('[data-duration]'));
const jmlhVideoTampil = document.querySelector('.jumlah-video');
const totalDurasiTampil = document.querySelector('.total-durasi');
// MEMFILTER HANYA YANG BERISI "JAVASCRIPT LANJUTAN"
let totalDurasi = juduls.filter(judul => judul.textContent.includes('JAVASCRIPT LANJUTAN')
)
// ubah durasi menajadi int, ubah menit menajdi detik
.map(jsJudul => jsJudul.dataset.duration.split(':').map(item => parseInt(item))
)
// jumlahkan semua detik
.map((waktu)=>{
    return (waktu[0]*60) + waktu[1];
}).reduce((f,l)=> f + l);
// ubah formatnya menjadi jam menit detik
let jam = Math.round(totalDurasi/3600);
let sisaM_D = (totalDurasi -= jam * 3600)
let menit = Math.round(sisaM_D/60);

let detik = sisaM_D - menit * 60;

// cetak pada dom
jmlhVideoTampil.textContent = `${juduls.filter(judul => judul.textContent.includes('JAVASCRIPT LANJUTAN')).length} video`
totalDurasiTampil.textContent = `${jam} jam ${menit} menit ${detik} detik`






