
//                      rules
// penumpang naik , penumpang turun ,
// jika angkot kosong penumpang pertama pasti di index pertama
// dan selanjutnya
// jika ada yang turun maka yang akan masuk akan duduk di posisi yang tadi
// jika ada nama yang sama maka dihitung 1 orang

var angkotA = ['kosong','dadang','kosong','tatang'],
    angkotB = [],
    angkotC = [];

var test = function(p,a){
    for(var i = 0;i<a.length;i++){
        if(a[i]==p){
            return true;
        }
    }
    return false;
};

function tambahPenumpang(penumpang,namaAngkot){
    if(test(penumpang,namaAngkot)){
        console.log(`penumpang sudah ${penumpang} ada di angkot`)
    } else {
        if(namaAngkot.find(function(x){
            return x=='kosong';
        })){
            for(var i = 0;i<namaAngkot.length;i++){
                if(namaAngkot[i]=='kosong'){
                    namaAngkot[i] = penumpang;
                    break;
                }
            }
        } else {
            namaAngkot.push(penumpang);
        }
    }
}

function kurangPenumpang(penumpang,namaAngkot){
    if(test(penumpang,namaAngkot)){
        for(var i = 0;i<namaAngkot.length;i++){
            if(namaAngkot[i]==penumpang){
                namaAngkot[i] = 'kosong';
            }
        }
    } else if(namaAngkot.length == 0){
        console.log('angkot kosong')
    } else {
        console.log(`penumpang ${penumpang} sudah tidak ada di angkot`)
    }

}

kurangPenumpang('jajang',angkotC)
// test case
console.log('angkot a -> '+ angkotA)
console.log('angkot b -> '+ angkotB)
console.log('angkot c -> '+ angkotC)
















