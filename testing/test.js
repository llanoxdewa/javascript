const lamps = document.querySelectorAll('.lamp');
const active = document.querySelector('.active');

function stop(){
    clearInterval(start);
}
let status = false;
let start;
let i = 0;
active.addEventListener('click',function(){
    if(status) status = false;
    else status = true;
    console.log((status)? 'lampu nyala':'lampu mati');
    if(status){
       start = setInterval(()=>{
            lamps.forEach(function(lamp){
                lamp.className = 'lamp';
            });
            if(i==lamps.length) i = 0;
            switch ( i ){
                case 0:
                    lamps[i].classList.toggle('red');
                    break;
                case 1:
                    lamps[i].classList.toggle('yellow');
                    break;
                case 2:
                    lamps[i].classList.toggle('green');
                    break;
            }
            i++;
        },600);

    } else {
        stop();
    }
});
