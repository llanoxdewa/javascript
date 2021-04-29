
// const obj = (arg1,arg2,...) => { // boleh tidak usah pakai kurung
//     return arg;
// }
// alternatif bentuk
// implisit return
// const obj = arg => `ini adalah ${arg}`

// const call = nama => `hello ${nama}`;
// console.log(call('llano'));


// membuat object dengan arrow function
// const siswa = ['llano','ujang','dadang','mamang'];

// const hasil = siswa.map( nama => ({
//     nama,
//     panjangNama : nama.length
// }));
// console.table(hasil);


// this pada arrow function
// object literal
// this tidak memiliki konsep this
// const siswa1 = {
//     nama : 'llano',
//     nilai : 90,
//     show : () => {
//         console.log(`nama saya ${this.nama} saya mendapat nilai ${this.nilai}`)
//         // akan mereturn undifined
//     }
// }

const Siswa = function() {
    this.nama = 'llano';
    this.nilai = 10;
    this.kelas = 11;
    this.show = function(){
        console.log(`nama : ${this.nama}\nkelas : ${this.kelas}\nnilai ${this.nilai}`)
    }
    // akan menjalankan function dengan interval waktu tertentu
    // karena arrow function tidak memiliki konsep this dia akan mencari pada lexical scope
    setInterval(() => {
        console.log(this.nilai++);
    },500);
}
const siswa1 = new Siswa();

