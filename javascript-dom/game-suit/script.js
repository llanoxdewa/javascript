const playerGunting = document.querySelector('.gunting img');
const playerKertas = document.querySelector('.kertas img');
const playerBatu = document.querySelector('.batu img');
const playerCom = document.querySelector('.com img')
let gunting=false,batu=false,kertas=false;
const hasilP = document.querySelector('.hasil p');
const hasil = document.querySelector('.hasil');
let scoreP=0,scoreC=0;
const playerS = document.getElementById('player');
const computerS = document.getElementById('computer');
// score
let scoreCom = 0,scorePlayer = 0;
// penentuan
playerGunting.addEventListener('click',function(){
    playerGunting.style.border = '2px solid green';
    playerBatu.style.border = '2px solid black';
    playerKertas.style.border = '2px solid black';
    hasil.style.border = '2px solid black';
    playerCom.removeAttribute('src');
    hasilP.innerHTML = 'pencet';
    hasil.style.backgroundColor = 'white';
    gunting = true;
    kertas = false;
    batu = false;
})
playerBatu.addEventListener('click',function(){
    playerGunting.style.border = '2px solid black';
    playerBatu.style.border = '2px solid green';
    playerKertas.style.border = '2px solid black';
    hasil.style.border = '2px solid black';
    playerCom.removeAttribute('src');
    hasilP.innerHTML = 'pencet';
    hasil.style.backgroundColor = 'white';
    gunting = false;
    kertas = false;
    batu = true;
})
playerKertas.addEventListener('click',function(){
    playerGunting.style.border = '2px solid black';
    playerBatu.style.border = '2px solid black';
    playerKertas.style.border = '2px solid green';
    hasil.style.border = '2px solid black';
    playerCom.removeAttribute('src');
    hasilP.innerHTML = 'pencet';
    hasil.style.backgroundColor = 'white';
    gunting = false;
    kertas = true;
    batu = false;
})

function pilihanCom(){
    let random = Math.random();
    if(random < 0.34) return 'gunting';
    if(random >= 0.34 && random<0.67) return 'batu';
    return 'kertas';
}



hasil.onclick = game;
function game(){
    const comPilih = pilihanCom();
    playerCom.setAttribute('src',`${comPilih}.jpg`)
    hasil.style.border = '2px solid green';
    if(batu){
        if(comPilih=='gunting'){
            hasilP.innerHTML = 'player menang';
            hasil.style.backgroundColor = 'lightgreen';
            scorePlayer += 1;

        } else if(comPilih=='kertas') {
            hasilP.innerHTML = 'com menang';
            hasil.style.backgroundColor = 'red';
            scoreCom += 1;
        } else {
            hasilP.innerHTML = 'seri';
            hasil.style.backgroundColor = 'lightgrey';
        }
    } else if (kertas) {
        if(comPilih=='gunting'){
            hasilP.innerHTML = 'com menang';
            hasil.style.backgroundColor = 'red';
            scoreCom += 1;
        } else if(comPilih=='batu') {
            hasilP.innerHTML = 'player menang';
            hasil.style.backgroundColor = 'lightgreen';
            scorePlayer += 1;
        } else {
            hasilP.innerHTML = 'seri';
            hasil.style.backgroundColor = 'lightgrey';
        }
    } else if (gunting) {
        if(comPilih=='batu'){
            hasilP.innerHTML = 'com menang';
            hasil.style.backgroundColor = 'red';
            scoreCom += 1;
        } else if(comPilih=='kertas') {
            hasilP.innerHTML = 'player menang';
            hasil.style.backgroundColor = 'lightgreen';
            scorePlayer += 1
        } else {
            hasilP.innerHTML = 'seri';
            hasil.style.backgroundColor = 'lightgrey';
        }
    }
    playerS.innerHTML = `${scorePlayer}`;
    computerS.innerHTML = `${scoreCom}`;
}
