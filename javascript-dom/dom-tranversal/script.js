//
// gunakan parentElement untuk mengetahui element parent
// parentNode = untuk mengambil node parent

// nextSibling = sesudah
// previousSibling = sebelum
// => mereturn saudara kandung dari element yang akan mengembalikan node

// nextElementSibling =
// previousElementSibling =
// => mereturn saudara kandung dari element yang mengembalikan element
// const container = document.querySelector('.container')
const card = document.querySelectorAll('.card');
const close = document.querySelectorAll('.close');

// close.forEach(function(exit,i){
//     exit.addEventListener('click',function(){
//         card[i].style.display = 'none';
//     });
// });

// mengguankan cara dom tranversal
// for( let i = 0;i<close.length;i++){
//     close[i].addEventListener('click',function(even){
//         // close[i].parentElement.style.display = 'none';
//         even.target.parentElement.style.display = 'none';
//     });
// }

// object even akan mengandung informasi mengenai object eventnya;
// close.forEach(function(exit){
//     exit.addEventListener('click',function(even){
//         even.target.parentElement.style.display = 'none';
//     });
// });

// gunakan method preventDefault();
// object even akan mengandung informasi mengenai object eventnya;
// close.forEach(function(exit){
//     exit.addEventListener('click',function(even){
//         even.target.parentElement.style.display = 'none';
//         // menghilangkan aksi default suatu tag di html
//         even.preventDefault();
//         // menghilangkan event parent
//         even.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');


// cards.forEach(function(card){
//     card.addEventListener('click',function(){
//         alert('okay');
//     });
// });


const container = document.querySelector('.container');

container.addEventListener('click',function(even){
    switch ( even.target.className ){
        case 'close':
            even.target.parentElement.style.display = 'none';
            break;
        case 'card':
            alert('bahaya');
    }
});

