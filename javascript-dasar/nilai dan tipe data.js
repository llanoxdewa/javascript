/*
ada 6 tipe data pada javascript
1.number 
	a.int/bilangan bulat (akurat sampai 15 digit)
	b.angka dengan desimal (bisa menyimpan 17 digit dibelakang koma)
	c.eksponen
		contoh:
			123e5 = 12300000
			123e-5 = 0.00123

	d. angka spesial
		- infinity = 2/0
		- (-infinity) -2/0
		- NaN 100/'a'

2.string = 'llano'
	jika ada karakter ' di dalam string kita maka bungkus dengan " " atau sebaliknya
	contoh = 'dia berkata "hai" '
			 "hari ini hari jum'at"
	atau menggunakan escape karakter \
	daftar escape charakter 
			-\0   = karakter NuLL
			-\'' -\"" = '',""
			-\\ = \
			-\n = new line
			-\t = tab
			\b = backspace
			\uXXXX = unicode


3.boolean = true/false
	penemu 'george boole'
	perbandingan dengan angka
	var x = 10;
	x < 20 
	true
	perbandingan dengan string
	'llano' == 'llano' = true
	'Llano' == 'llano' = false
	dengan fungsi 
	Boolean(10 < 20) = true
	Boolean(10) = true
	Boolean('llano') = true
	Boolean('false') = false

4.object / variabel
	pengertian tempat atau wadah untuk menyimpan nilai
	-deklarasi = mendaftarkan variabel ke dalam lingkup yang sesuai (var,let,const)
	   -var // camel case
	-inisialisasi = menyediakan memory untuk variabel
	var x; deklarasi dan inisialisai
	-assigment = menetapakan nilai yang spesifik ke dalam variabel
	x = 20 assigment

	cara cepat
	var nama = 'llano';
		umur = 17;
		lulus = true;

	variable scope
		global;
		local;


5.function
	.length (untuk menghitung panjang sebuah string/kek len())
6.undenfined
*/
//contoh 

// 1.angka tanpa desimal 
// angka pada javascript hanya akurat sampai 15 digit saja
var bil = 999999999999;
// jika di print akan menghasilkan nilai 10000000000000

// 2. angka dengan bilangan desimal
// 3.14, 0.5, 100.00

// 3 menyimpan bilangan yang sangat besar dengan bilangan eksponen
// 123e5 = 123 * 10**5 = 12300000
// 123e-5 = 123 * 1/1000000 = 0,00123





























