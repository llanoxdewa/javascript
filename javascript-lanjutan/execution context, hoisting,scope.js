// Execution Context, hoisting, Scope

// saat program dijalankan ada fase creation phase / fase pembentukan

// Creation Fase pada global context
// 1.mencari keyword var atau function
// 2.akan membuat nama variabel dan disi dengan undifined
// 3.jika ada function akan di isi function itu sendiri
// hoisting (nama variabel dan function akan ditarik ke atas)
// window = global object
// this = window
// 4. execution phase
// var nama = 'llano';
// var umur = 17;
// sayHello();
// function sayHello(){
//     console.log(`nama saya ${nama}, umur saya ${umur} tahun`);
// }

// function membuat local Executio Context
// yang didalamnya terdapat creation dan exection phase
// window
// arguments
// hoisting


var nama = 'llano';


function a(){
    console.log('ini function a');

    function b(){
        console.log('ini function b');

        function c(){
            console.log('ini function c');
        }
        c();
    }
    b();
}

a();






