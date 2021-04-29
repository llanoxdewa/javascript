
// filter
// filter akan mengembalikan array baru
// filter(function(){syarat})
// const angka = [2,4,5,1,7,8,5,6,4,0,10,14]
// const angkaGenap = angka.filter(bil=>bil%2==0);
// console.log(angkaGenap)


// map
// map akan mengembalikan array baru
// const angka = [2,4,5,1,7,8,5,6,4,0,10,14]
// const hasil = angka.map(bil => bil*2);
// console.log(hasil);



// reduce
// akan mencampur semua element pada array
// accumulator =  hasil yang didapatkan
// nilai awal akan memiliki nilai default 0;
// currentValue = element array yang sedang dilooping
// reduce(accumulator,currentValue,[nilai awal])
// const angka = [2,4,5,1,7,8,5,6,4,0,10,14]
// const hasil = angka.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// });
// console.log(hasil);


// method chaining
// menggunakan semua method array secara bersaman
// const angka = [2,4,5,1,7,8,5,6,4,0,10,14];
// const hasil = angka.filter(bil=>bil>5)
// .map(bil=>bil*2)
// .reduce((accu,curent)=>accu+curent);

// console.log(hasil);









