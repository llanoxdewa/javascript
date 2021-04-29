// templates literasl
// string literal adalah string yang memungkinkan untuk
// terdapat expresion didalamnya
// harus menggunakan back tick ``

// multiline string
// let contoh = `hello ini adalah suatu teks dengan muli
// ti line epadfajdkfkadfkajdlfjalkdfjalkd`


// html literal
// const siswa = {
//     nama : 'llano',
//     kelas : 'XIE1',
//     nilai : 100
// }
// const element = `
// <h1 class="siswa">
//    <h2>${siswa.nama}</h2>
//     <span class="nrp">${siswa.kelas}</span>
// </div>`

// embeded ekspresion
// let a = 10,b = 12;
// console.log(`hasil dari 2 x a + b = ${2 * a + b}`)
// let bil = 12;
// console.log(`${(bil%2==0)? 'genap':'ganjil'}`)

// 1. html fragment
// const siswa = {
//     nama : 'llano',
//     kelas : 'XIE1',
//     nilai : 100
// }
// const element = `
// <h1 class="siswa">
//    <h2>${siswa.nama}</h2>
//    <span class="nrp">${siswa.kelas}</span>
// </div>`


// looping
// const dataSiswa = [
//    {
//         nama :'llano',
//         nilai : 100
//    },
//    {
//         nama : 'ujang',
//         nilai : 90
//    },
//    {
//         nama :'dadang',
//         nilai : 80
//    },
//    {
//         nama :'marno',
//         nilai : 70
//    },
// ];
// const element = `
// <div class='siswa'>
//     ${dataSiswa.map(data => `
//     <ul>
//         <li>${data.nama}</li>
//         <li>${data.nilai}</li>
//     </ul>
// `).join('')}`

// const lagu = {
//    judul : 'apalah',
//    penyanyi : 'joji',
//    // feat : 'eminem'
// }

// const element = `
// <div class="lagu">
//     <ul>
//         <li>judul lagu : ${lagu.judul}</li>
//         <li>penyanyi : ${lagu.penyanyi}</li>
//         ${lagu.feat? `<li>feat. ${lagu.feat}</li>`:''}
// `


// nested / html fragment bersarang
const dataSiswa = {
    nama : 'llano',
    nilai : [
        100,
        90,
        80
    ],
    kelas : '11 elektro 1',

}
function cetakNilai(dNilai){
    return `
    <ol type="A">
        ${dNilai.map((nilai,i) => `
            <li>nilai ke-${i+1} : ${nilai}
            `).join('')}
    </ol>
    `
}
const element = `
<div class="siswa">
    <h2>${dataSiswa.nama}</h2>
    <p>kelas : ${dataSiswa.kelas}</p>
    <h2>daftar nilai</h2>
    ${cetakNilai(dataSiswa.nilai)}
`
// cara alternatif
// <ul>
//     ${dataSiswa.nilai.map((n,i) => `<li>nilai ke-${i+1} => ${n}</li>`)}
// </ul>
document.body.innerHTML = element;

























