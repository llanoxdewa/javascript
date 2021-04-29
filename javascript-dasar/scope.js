// block scope
// variabel yang dibuat didalam sebuah block
// maka variabel tersebut hanya dapat digunakan didalam lingkup block tersebut

// yang dianut javascript
// function scope


// global scope / window scope
var bil = 1;

// function scope
function tes() {
    // var bil akan berubah karena bil disini mengacu pada variabel global bil
    bil = 2;
}

// variabel global bisa digunakan didalam function
// tetapi variabel function scope tidak bisa digunakan di global

// function global(){
//     // akan membuat variabel global bil2 dengan value 12
//     bil2 = 12;
// }

function tes(arg) {
    // bil disini akan menjadi variabel local dan bukan global
    // jika suatu variabel memiliki parameter maka variabel tersebut akan
    // menjadi variabel local
    // nama param harus sama
    console.log(bil)
}


