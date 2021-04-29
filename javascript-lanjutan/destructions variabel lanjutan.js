
function calculasi(a,b){
    return {
        kali : a * b,
        tambah : a + b,
        bagi : a / b,
        kali : a * b
    };
}

const {tambah : hasilTambah,kali : hasilKali} = calculasi(4,5);
console.log(hasilTambah);
console.log(hasilKali)


// destruction value argumen
const dataSiswa = {
    nama : 'llano kusuma dewa',
    kelas : '11 elektro 1',
    nilai : {
        mtk : 100,
        bIndo : 89,
        mm : {
            asli : 50,
            remed : 90,
        }
    },
    umur : 17
}
function show({nama,kelas,nilai:{mtk,bIndo,mm:{asli,remed}},umur}){
    return `
nama :${nama}
kelas : ${kelas}
nilai-mtk: ${mtk}
berumur : ${umur}
nilai-mtk : ${mtk}
nilai-bIndo : ${bIndo}
nilai-mm : ${asli} (hasil remed : ${remed}) `
}
console.log(show(dataSiswa));






