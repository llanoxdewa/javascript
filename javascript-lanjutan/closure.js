// closure


// lexical scope
// sebuah fungsi akan mengambil variabel di atasnya jika variabel
// tersebut tidak ada pada local functionnyaj
// fungsi closure
// > untuk membuat function factories
// > untuk membuat private method
// function init(){
//     let nama = 'llano'; // local variabel
//     return function(nama){ // inner function (closure*)
//         console.log(nama); // akses ke parent variabel
//     }
// }
// const call = init();
// call('ujang');


// function ucapSalam(waktu){
//     return function(nama){
//         console.log(`selamat ${waktu} ${nama}`)
//     }
// }

// malam = ucapSalam('malam');
// malam('llano');
// siang = ucapSalam('siang');
// siang('dadang');

// let add = (function(){ // jadi function langsung dijalankan dengan tidak merubah nilai counter
//     let counter = 0;
//     return function(){
//         console.log(++counter);
//     }
// })();
// add();
// add();
// add();


function a(arg1){
    return function(arg2){
        return `ini adalah arg1 ${arg1} ini adalah arg2 ${arg2}`
    }
}
console.log(a('hello')('world'));





