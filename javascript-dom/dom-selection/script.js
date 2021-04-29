// getElementById()
// akan mengambil tag yang memiliki id tertentu
// akan menghasilkan element
// const judul = document.getElementById('judul');
// // merubah warna tulisan menjadi merah
// judul.style.color = 'red';
// // merubah background-color tulisan menjadi merah
// judul.style.backgroundColor = 'yellow';
// // merubah teks dari suatu tag
// judul.innerHTML = 'hello world';

// judul.style.textAlign = 'center';

// getElementsByTagName()
// akan mengambil tag element html yang sesuai
// akan mereturn HTMLCollection
// const paraf = document.getElementsByTagName('p');
// for(let i = 0;i<paraf.length;i++){
//     paraf[i].style.backgroundColor = 'red';
// }


// getElementsByClassName()
// akan mengambil tag yang memiliki class yang sesuai
// akan mereturn HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dengan javascript';

// querySelector()
// selector css
// akan mereturn element
// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'orange';
// p4.style.fontSize = '30px';
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'red';

// querySelectorAll()
// akan mereturn nodeList
// const pall = document.querySelectorAll('#a p');
// pall[1].style.backgroundColor = 'orange';


// merubah root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.getElementsByTagName('p');
// p4[3].style.color = 'red';

