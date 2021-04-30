// callback adalah function yang dijadikan argumen pada function lainnya

// Synchronous callback
// {
// function halo(nama){
//     console.log(`hello ${nama}`);
// }
// function tampilkanNama(func,inputNama){
//     func(inputNama);
// }
// tampilkanNama(nama=>console.log(`hello ${nama}`),'llano');
// }


// synchronous callback
// const dataSiswa = [
//     {
//         nama : 'llano',
//         umur : 17,
//         noTlp : '0812746412',
//         email : 'llano@gmail.com'
//     },
//     {
//         nama : 'ujang',
//         umur : 16,
//         noTlp : '0814746912',
//         email : 'ujang@gmail.com'
//     },
//     {
//         nama : 'dadang',
//         umur : 15,
//         noTlp : '0814749999',
//         email : 'dadang@gmail.com'
//     }
// ];

// // dengan synchronous
// console.log('mulai\n');
// dataSiswa.forEach(({nama,email}) => {
//     for(let i = 0;i<10000000;i++){
//         let date = new Date();
//     }
//     console.log(`nama : ${nama}\nemail : ${email}\n`)

// });
// console.log('selesai');


// callback asynchronous

function getDataSiswa(url,succes,eror){
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                succes(xhr.response);
            } else if(xhr.status === 400) {
                error();
            }
        }
    }
    xhr.open('get',url);
    xhr.send();
}

getDataSiswa('static/js/dataSiswa.json',result => result,()=> 'data tidak dapat dikirim')

