const button = document.createElement('button');
const body = document.querySelector('body');
button.appendChild(document.createTextNode('pencet'));
button.setAttribute('type','button');
button.style.width = '200px';
button.style.height = '100px';
button.style.backgroundColor = 'black';
button.style.color = 'white';
button.style.fontSize = '30px';
body.appendChild(button)

button.onclick = sebelum;
function sebelum(){
    body.setAttribute('class','biru-muda');
    button.style.border = '4px solid green';
    button.onclick = sesudah;
}

function sesudah(){
    body.classList.toggle('biru-muda');
    button.onclick = sebelum;
    button.style.border = 'none';
}


// random
const buttonR = document.createElement('button');
buttonR.appendChild(document.createTextNode('random'));
buttonR.setAttribute('type','button');
buttonR.style.width = '200px';
buttonR.style.height = '100px';
buttonR.style.backgroundColor = 'black';
buttonR.style.color = 'white';
buttonR.style.fontSize = '30px';
button.after(buttonR)
buttonR.addEventListener('click',function(){
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    console.log(`rgb(${r},${g},${b})`);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
});


// slider
// gunakan 'input' untuk mengambil nilai dari suatu input tag secara realtime
const pm = document.getElementById('merah');
const ph = document.getElementById('hijau');
const pb = document.getElementById('biru');
const kotak = document.querySelector('.kotak');
const rMerah = document.querySelector('input[name=rMerah]');
const rHijau = document.querySelector('input[name=rHijau]');
const rBiru = document.querySelector('input[name=rBiru]');
rMerah.addEventListener('input',function(){
    body.style.backgroundColor = `rgb(${rMerah.value},${rHijau.value},${rBiru.value})`;
    pm.innerHTML = `${rMerah.value}`
});
rHijau.addEventListener('input',function(){
    body.style.backgroundColor = `rgb(${rMerah.value},${rHijau.value},${rBiru.value})`;
    ph.innerHTML = `${rHijau.value}`
});
rBiru.addEventListener('input',function(){
    body.style.backgroundColor = `rgb(${rMerah.value},${rHijau.value},${rBiru.value})`;
    pb.innerHTML = `${rBiru.value}`
});

// cursor
// clientX = posisi kursor berdasarkn sumbu x
// clientY = posisi kurson berdasarkn sumbu y
// window.innerWidth = untuk mengambil nilai lebar tag body
// window.innerHeight = untuk mengambil nilai tinggi tag body
// body.addEventListener('mousemove',function(even){
//     // console.log(even.clientX);
//     // console.log(window.innerWidth)
//     const xPos = Math.round(even.clientX / window.innerWidth * 255);
//     const yPos = Math.round(even.clientY / window.innerHeight * 255);
//     body.style.backgroundColor = `rgb(${xPos},${yPos},${Math.floor(xPos/yPos)})`
// });



