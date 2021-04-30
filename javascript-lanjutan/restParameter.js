
// rest parameter

// rest parameter harus berada di akhir parameter sebuah fungsi
// function Myfunc(a,b,...nama){
//     return nama;
// }
// console.log(Myfunc(1,2,3,4,5,6))

// sum function
// const sum = (...bil) => bil.reduce((f,l)=> f+l);
// console.log(sum(1,2,3,4,5))

// function sum(...bils){
//     let total = 0;
//     for(bil of bils){
//         total += bil;
//     }
//     return total;
// }
// console.log(sum(1,2,3))

// menggabungkan
// const klmpk1 = ['llano','ujang','mamang','dadang','roni','doni','bambang'];
// const [ketua,wakil,...angota] = klmpk1;
// console.log('ketua :'+ketua);
// console.log('wakil :'+wakil);
// console.log('angota :'+angota);


// object destructuring
// const team = {
//     ketua : 'llano',
//     wakil : 'jajang',
//     bandahara1 : 'nurs',
//     bandahara2 : 'makiq',
// }

// const {ketua:ketuaTeam,wakil:wakilTeam,...ygLain} = team;
// console.log(ketuaTeam);
// console.log(wakilTeam);
// console.log(ygLain);

// filtering
// function filterBy(type,...args){
//     return args.filter(value => typeof value ===type);
// }

// console.log(filterBy('number','llano',10,'ujang',true,false,1,5))

