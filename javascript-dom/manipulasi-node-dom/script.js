
// method untuk memanipulasi node

// document.createElement(<nama tag>)
// document.createTextNode(<nama isi tag>)
// node.appendChild(<nama element>)
// node.insertBefore(<element aru>,<element sebelum>)
// parentNode.removeChild(<element>)
// parentNode.replaceChild(<element baru>,<element lama>)
// ...


// // document.createElement()
// const newParaf = document.createElement('p');
// // document.createTextNode()
// const tagForNp = document.createTextNode('paragraf baru');

// // node.appendChild()
// newParaf.appendChild(tagForNp);

// // node.appendChild()
// const sectionA = document.getElementById('a');
// sectionA.appendChild(newParaf)

// membuat list baru
// node.insertBefore(<element baru>,<element sebelum>)
// const newList = document.createElement('li');
// const isi = document.createTextNode('list item baru');
// newList.appendChild(isi)
// const tempat = document.querySelector('section#b ul');
// const li2 = tempat.querySelector('li:nth-child(2)')
// tempat.insertBefore(newList,li2)

// menghapus
// const tempat = document.getElementById('a')
// const link = tempat.querySelector('a');
// tempat.removeChild(link)

// replace
// const tempat = document.getElementById('a');
// const target = tempat.querySelector('.p1');

// const newH2 = document.createElement('h2');
// const isi = document.createTextNode('sub judul');
// newH2.appendChild(isi);

// tempat.replaceChild(newH2,target);






