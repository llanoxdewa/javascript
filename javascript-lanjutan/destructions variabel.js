// untuk array
// gunakan [<var1>,<var2>, , ]
// const banyak = ['1','2','3'];
// const [a,b,c] = banyak;
// console.log(a);
// console.log(b);
// console.log(c);

// untuk object
// gunakan {}
// const data = {
//     nama : 'llano',
//     kelas : 'XIE1',
//     nilai : 100,
//     show : function(){
//         return `nama : ${this.nama}\nkelas : ${this.kelas}\nnilai : ${this.nilai}`
//     }
// };
// const {kelas,nama,nilai,show} = data;

// console.log(show());

// swab items
// let a = 10;
// let b = 100;
// console.log(a);
// console.log(b);
// [a,b] = [b,a]
// console.log(a);
// console.log(b);


// gunakan rest parameter
// const [a,b,...c] = [1,2,3,4,5];
// console.log(a);
// console.log(b);
// console.log(c);

// assigment tanpa deklarasi object
// ({nama,umur} = {nama : 'llano',umur : 17});
// console.log(nama);
// console.log(umur);

// assign ke variabel baru
// {<property>:<nama baru>,...}
// const siswa = {
//     nama : 'llano van dewa',
//     noTlp : '089765243',
//     email : 'llanoxdewa@gmail.com'
// }
// const {nama:name,noTlp:noHp,email:gmail} = siswa;
// console.log(name);
// console.log(noHp);
// console.log(gmail);

// memberikan default value
// const siswa = {
//     nama : 'llano van dewa',
//     noTlp : '089765243',
//     // email : 'llanoxdewa@gmail.com'
// }
// const {nama,noTlp,email="default@gmail.com"} = siswa;
// console.log(nama);
// console.log(noTlp);
// console.log(email);


// jika ingin mengambil field pada object
const dataSiswa = {
    nama : 'llano van dewa',
    noTlp : '089765243',
    email : 'llanoxdewa@gmail.com'
}

function getNo({noTlp : noHp,email : gmail}){
    return noHp + ' ' + gmail
}
console.log(getNo(dataSiswa));



