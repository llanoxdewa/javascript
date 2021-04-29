// array adalah object didalam javascript yang dapat menampunya
// lebih dari satu jenis tipe data dan dengan jumlah yang banyak

// var arr = [
//     'llano',
//     'ujang',
//     100,
//     true,
//     [1,3,4,5,6,7]
// ];

var myarr = ['a','b','c','d','e','f'];
// method pada array
// 1. join (berfungsi untuk mengubah bentuk array menjadi string)
// join(sep=['','-','>',',' # dan lain lain])
// var mystr = myarr.join('');
// console.log(mystr);

// 2. push (menambahkan element array pada index terakhir)
// push(elemen)
// myarr.push('f');
// console.log(myarr);

// 3. pop (menghapus element index terakhir dari suatu array)
// pop(index)
// myarr.pop()
// console.log(myarr);

// 4. unshift (menambahkan element pada index pertama)
// unshift(elemen)
// myarr.unshift('llano');
// console.log(myarr);

// 5. shift (menghapus element index pertama)
// shift()
// myarr.shift();
// console.log(myarr);

// 6. splice (menambah element dengan index yang kita tentukan sendiri)
// splice(indexAwal, mauDiHapus? (element diDepan), element yang mau ditambahkan)
// myarr.splice(n,x); // dari index n sampai terakhir akan dihapus

// 8. slice (mengiris sebuah array dan menghasilkan sebuah array yang baru)
// slice(indexAwal,indexAkhir)
// var myarrs = myarr.slice(2,4);
// console.lowg(myarrs)

// 9. forEach (akan mengiputkan setiap element array kedalam argumen fungsi yang kita tentukan)
// array.forEach(function(element,[index]))
// var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e) {
//     if(e%2==0){
//         console.log(e);
//     }
// });

// 10. map (akan mengembalikan nilai dari fungsi yang diberikan)
// map(function)
// var test = [1,2,3,4,5];
// var testmul2 = test.map(function(bil){
//     return bil*2;
// });
// console.log(testmul2)

// 11. sort (akan mengurutkan list berdasarakan besar nilai)
// sort(function(){} # optionalk)
// var acak = [4,2,1,3];
// console.log(acak)
// acak.sort()
// console.log(acak)

// 12. filter
// array.filter(func(){condition})
// var test = [1,2,3,4,5,6,7,8,9,10]
// var hasil = test.find(function(x){
//     return x==5;
// });

// 13. find
// sama seperti filter tetapi hanya mengembalikan satu nilai
// var test = [1,2,3,4,5,6,7,8,10];
// var hasil = test.find(function(bil){
//     return bil % 2== 0;
// });

// console.log(hasil)





