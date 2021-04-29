
// tagged templates
// fungsi pada taged templates akan menerima dua parameter
// function(arg1,...arg2)
// arg1 akan mereturn array berisi tulisan yang ada pada string literals
// arg2 akan mereturn value / ekspresion yang ada pada string literals


// const nama = 'llano',
//       umur = 17;
//
// function coba(str,...args){
//     // let result = '';
//     // // str.forEach((s,i) => {
//     // //     result += `${s}${args[i] || ''}`;
//     // // })
//     // return result;
//     return str.reduce((res,s,i)=>`${res}${s}${args[i]||''}`,'')
// }
// const string = coba`nama saya ${nama} saya berumur ${umur} tahun`
// console.log(string)



// implementasi ke file html
const nama = 'llano',
      umur = 17,
      email = 'llanoxdewa@gmail.com';
function coba(str,...args){
    return str.reduce((res,s,i)=>`${res}${s}<span class="hl">${args[i]||''}</span>`,'')
}
const string = coba`nama saya ${nama} saya berumur ${umur} tahun dan email saya ${email}`

document.body.innerHTML = string;







