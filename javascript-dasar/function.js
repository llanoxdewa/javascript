// built in function pada javascript
// string --> charAt(),slice(),split(),toString(),toLowerCase(),toUpperCase()
// Math --> sin(),cos(),tan(),random(),round(),floor(),ceil(),log()
// function custome
// function <your function name>(argumen<boleh ada dan tidak ada>){
//   aksi
//   return
//}

// function declaration
// function sumBil(bil1,bil2){
//     return bil1+bil2;
// }
// console.log(sumBil(2,3))

// function ekspresion
// var sumBil = (bil1,bil2) => {
//     return bil1 + bil2;
// }
// console.log(sumBil(1,2))
// var sumBil = function(bil1,bil2) {
//     return bil1 + bil2;
// }
// console.log(sumBil(2,3))


// parameter adalah variabel yang kita tetapkan didalam function
// argumen adalah nilai yang kita berikan kepada sebuah function

function tambah(nama,kelas){
    return nama +' '+kelas;
}

// jika argumen yang diberikan lebih banyak dari parameter yang telah
// ditentukan maka argumen yang lebih akan diabaikan
// dan jika parameter lebih banyak dari argumen yang diberikan
// maka nilai parameter akan bernilai undifined

// parameter arguments akan mereturn nilai array dengan index tertentu
//
// function hasil(){
//     var hasil = 0;
//     for(var i = 0;i<arguments.length;i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// console.log(hasil(12,13,4,6,10,12,5,4,6,7,8,9));








