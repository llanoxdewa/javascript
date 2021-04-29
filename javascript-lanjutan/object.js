
// constructor
// function Data(nama,kelas,nilai){
//     this.nama = nama;
//     this.kelas = kelas.toUpperCase();
//     this.nilai = nilai;
//     this.show = function(){
//         return {
//             'nama':this.nama,
//             'kelas':this.kelas,
//             'nilai':this.nilai
//         }
//     }
// }


// OBJECT LITERAL
// PROBLEM : tidak relevan untuk object yang banyak
// siswa1 = new Data('llano','xie1',100);
// siswa2 = new Data('ujang','xilas1',100);
// console.log(siswa1.show())
// let mahasiswa = {
//     nama : 'llano',
//     kelas : 'xie1',
//     show : function(){
//         return `hello nama saya ${this.nama} saya kelas ${this.kelas}`;
//     }
// }
// console.log(mahasiswa.show())

// FUNCTION DECLARATION
// cara yang krang efective :(
// cara yang lebih efective
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
//     // semua method yang ada di methodSiswa dapat di akses oleh object siswa
//     // dengan menggunakan method Object.create({object});
//     let siswa = Object.create(methodSiswa);
//     siswa.nama = nama;
//     siswa.kelas = kelas.toUpperCase();
//     siswa.energi = 10;
//     return siswa;
// }
// siswa1 = Siswa('llano','xie1');
// // siswa2 = Siswa('dadang','evosroar')
// console.log(siswa1.makan(100));

// CONSTRACTOR
// function Siswa(nama,kelas){
//     this.nama = nama;
//     this.kelas = kelas.toUpperCase();
//     this.energi = 10;
//     this.show = function(){
//         return `hello nama saya ${this.nama} saya kelas ${this.kelas}`
//     }
//     this.makan = function(porsi){
//         this.energi += porsi;
//         return `${this.nama} telah makan ${porsi} dan mendapat energi sebesar ${this.energi}`
//     }
//     this.main = function(durasi){
//         this.energi -= durasi;
//         return `${this.nama} telah bermain selama ${durasi} dengan sisa energi ${this.energi}`
//     }
// }

// siswa1 = new Siswa('llano','xie1');


// testing





