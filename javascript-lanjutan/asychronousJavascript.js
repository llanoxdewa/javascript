// apa itu javascript
// javascript adalah bahasa tingkat tinggi yang dinamis
// dan dapat berjalan pada web browser
// mesin yang menjalankan js disebut v8 enggine


// sifat javascript
// > thread (menjalankan task / tugas perintah baris per baris)
// > multiThread (menjalankan task dengan thread yang lebih dari 1)
// > blocking (mengerjakan tugas secara urut dan menunggu task yang belum selesai baru lanjut ke task selanjutnya)
// > non-blocking (mengerjakan tugas dengan tidak memperdulikan tugas yang belum selesai)
// > Asynchronous ( single threaded ) = Concurrency
// > Asynchronous ( multi threaded ) = Parallelism

// kesimpulan
// single vs multi Thread
// Lingkungan eksekusi 'task'

// blocking vs Non-blocking
// teknik 'ngoding' (IO related)

// synchronous vs Asynchronous
// Teknik 'ngoding' (HTTP Request related)

// Definisi synchronous adalah sebuah operasi akan dijalankan
// setelah operasi sebelumnya selesai dijalankan alias berurutan.
// Sedangkan asynchronous sebaliknya, asynchronous tidak perlu
// menunggu operasi sebelumnya selesai untuk mengeksekusi operasi
// setelahnya

// concurrent vs parallel
// Lingkungan eksekusi 'task'
// didalam v8 enggine terdapat 2 bagian
// Heap -> bagian untuk menyimpan variabel / function
// stack -> bagian untuk memanggil function / variabel dan menjalankan script


// $.on('button', 'click', function onClick() {
//     setTimeout(function timer() {
//         console.l og('You clicked the button!');
//     }, 2000);
// });

// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loupe.");


