/*
operator
{
1.aritmatika (*,-,+,/,%) ctt (KuKaBaTaKu)
2.penugasan (=,+=,-=,*=,/=,%=)
3.perbandingan (==,!=,===,!==,>,<,>=,<=) menghasilkan true or false
	untuk === dan !== akan memeriksa tipe data dan juga nilainya atau disebut
	juga operator identitas
4.logika (&&,||,!)
	&& operasi and (x % 2 == 0) && (x>10)
	|| operasi or (x % 2 == 0) || (x>10)
	! operasi not !(x < 10)
5.string (+)
	'llano' + ' kusuma' + ' dewa'
	10 + '10' = '1010'
} --> binary (membutuhkan 2 oprand)
6.kondisional --> ternary (membutuhakn 3 operand)
	<kondisi> ? benar : salah
	(x % 2 == 0)? 'genap':'ganjil'
7.typeof --> unary (hanya membutuhkan 1 operand)
	untuk mengetahui tipe data suatu variabel atau nilai
	typeof(10) = 'number'
*/

// operasi and
//var x;
//x = 10;
//
//if((x>10) && (x%2==0)){
//console.log('iya')
//} else {console.log('no')}

// operasi 
//var x;
//x = 9 
//if(!(x%2==0)){
//	console.log('iya')
//} else {console.log('no')}

// string
//var nama_depan = 'llano';
//var nama_belakang = 'dewa';
//var nama_lengkap = nama_depan +' '+ nama_belakang
//console.log(nama_lengkap)

// ternary
var x = 9;
var nama = 'llano';
console.log((x%2==0) ? 'genap' : 'ganjil')
console.log((nama=='llano')?'benar':'salah')



