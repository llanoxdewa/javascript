

// this adalah sebuah method special yang secara otomatis
// didefinisikan disetiap function
// this adalah scope globa dan sama dengan window
// property adalah variabel yang ada didalam object
// method adalah fungsi yang ada didalam object


// cara 1 - dengan object declaration
// this mengembalikan object global
// function test(){
//     console.log(this)
//     console.log('hello world');
// }
// this.test()


// cara2 - dengan object literal
// mengembalikan object yang bersangkutan
// var test = {a : 10,nama : 'shandika'};
// test.helo = function(){
//     console.log('helo')
//     console.log(this)
// }
// test.helo()

// cara 3 - constructor
// this mengembalikan object yang baru dibuat
// function halo(nama){
//     var nama = nama;
//     console.log(this);
//     console.log('hello world');
// }
// var obj1 = new halo('llqno')
// var obj2 = new halo()

// latihan objek dengan konsep this

function Angkot(namaS,trayek,namaP){
    this.namaSopir = namaS;
    this.trayek = trayek;
    this.penumpang = [];
    this.penumpangNaik = function(namaP){
        this.penumpang.push(namaP)
    };
    this.pendapatan = 0;
    this.penumpangTurun = function(nama,bayar){
        if(this.penumpang.length == 0){
            console.log('angkot masih kosong');
            return;
        }
        for(var i=0;i<this.penumpang.length;i++){
            if(this.penumpang[i] == nama){
                this.penumpang[i] = 'kosong';
                this.pendapatan += bayar;
            }
            if(this.penumpang[i] != nama && i == this.penumpang.length-1){
                console.log('penumpang '+nama+' tidak ada di angkot 1')
            }


        }
    }
}

var angkot1 = new Angkot(
    'hiya',
    {
        'asal':'cileungsi',
        'tujuan':'cibinong'
    },
    12
)

var angkot2  = new Angkot(
    'dedy',
    {
        'asal':'jakarta',
        'tujuan':'bogor'
    },
    10
)

angkot1.penumpangNaik('llano');
angkot1.penumpangNaik('ujang');
angkot1.penumpangNaik('nana');
angkot1.penumpangNaik('hiya');
angkot1.penumpangTurun('llano',1000);
console.log(angkot1)




















