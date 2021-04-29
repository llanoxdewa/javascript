
const container = document.querySelector('.container')
const gambarUtama = document.querySelector('.imgUtama');
const isiGalery = document.querySelectorAll('.galery .isiGalery');


// isiGalery.forEach(function(gmbr){
//     gmbr.addEventListener('click',function(){
//         gambarUtama.setAttribute('src',gmbr.getAttribute('src'))
//     });
// });


container.addEventListener('click',function(even){
    switch( even.target.className ){
        case 'isiGalery':
            gambarUtama.src = even.target.src;
            gambarUtama.classList.add('fade');
            setTimeout(function(){
                gambarUtama.classList.remove('fade');
            },500);
            isiGalery.forEach(function(gmbr){
                // if(gmbr.classList.contains('active')){
                //     gmbr.classList.remove('active');
                // }
                gmbr.className = 'isiGalery';
            });
            even.target.classList.add('active');
        break;
    }
});






