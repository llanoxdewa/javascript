// semua method yang ada di methodSiswa dapat di akses oleh object siswa
// dengan menggunakan method Object.create({object});
// tidak bisa merubah nilai pada parent object
// let this = Object.create(object.prototype)

// const methodSiswa = {
//     show : function(){
//         return `hello nama saya ${this.nama} saya kelas ${this.kelas}`
//     },
//     makan : function(porsi){
//         this.energi += porsi;
//         return `${this.nama} telah makan ${porsi} dan mendapat energi sebesar ${this.energi}`
//     },
//     main : function(durasi){
//         this.energi -= durasi;
//         return `${this.nama} telah bermain selama ${durasi} dengan sisa energi ${this.energi}`
//     }
// };
// function Siswa(nama,kelas){
//     let siswa = Object.create(methodSiswa);
//     siswa.nama = nama;
//     siswa.kelas = kelas.toUpperCase();
//     siswa.energi = 10;
//     return siswa;
// }
// siswa1 = new Siswa('llano','11e1');
// console.log(siswa1.show());


// dengan menggunakan prototype
// prototype inharitance
// function Siswa(nama,nilai){
//     this.nama = nama;
//     this.nilai = nilai;
// }

// Siswa.prototype.remed = function(nilai){
//     this.nilai += nilai / 2;
//     return `nilai setelah remed adalah ${this.nilai}`
// }

// Siswa.prototype.show = function(){
//     return `nama : ${this.nama}\nnilai : ${this.nilai}`
// }

// let siswa1 = new Siswa('llano',40);
// console.log(siswa1);
// console.log(siswa1.show());


// konsep kelas pada javascript masih baru
// class Siswa {
//     constructor (nama,nilai){
//         this.nama = nama;
//         this.nilai = nilai;
//     }
//     remed(nilai){
//         this.nilai += nilai / 2;
//         console.log(this.show());
//         console.log(`nilai setelah remed adalah ${this.nilai}`)
//     }

//     show(){
//         return `nama : ${this.nama}\nnilai : ${this.nilai}`
//     }
// }







