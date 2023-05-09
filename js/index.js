/**
 * <!--
cho chuỗi A = ‘Học Javascript Front    End tại Nestech   ,Quận 10’
  Bài 1
	tìm vị trí chuỗi “Javascript”
	thay vị trí chuỗi “Javascript” thành “ReactJS”

*/
let hocJS = 'Học Javascript Front    End tại Nestech   ,Quận 10';
let viTri = hocJS.indexOf('Javascript');
console.log(viTri);

let repLace = hocJS.replace('Javascript', 'ReactJS');
console.log(repLace);
/*

  Bài 2
  	hiển thị chuỗi A với việc bỏ khoảng trắng
	cắt chuỗi A tại thành dấu phẩy và hiển thị cụm sau của chuỗi sau khi cắt
-->
 */
let boKT = hocJS.replace(/\s/g, '');
hocJS.trim().replace(' ', '');
console.log(boKT);
/* <!--
Bài 3
  cho 1 mảng A = [2,3,4,5,6,7,8,-10,30].
  tìm số lớn nhất , số nhỏ nhất
*/
let a = [2, 3, 4, 5, 6, 7, 8, -10, 30];
let maxNumber = Math.max(...a);
//làm cách khác - dùng for - if - else
let minNumber = Math.min(...a);
//làm cách khác - dùng for - if - else
console.log(maxNumber);
console.log(minNumber);

/*
Bài 4
	cho 1 chuỗi string = ‘Học Javascript Front End’.
  _ hiển thị độ dài chuổi

  _ nối chuỗi string với chuỗi B = ‘’ở Nesteh
-->
*/

let stringA = 'Học Javascript Front End';
// let doDai = stringA.length;
console.log(stringA.length);

let stringB = ' ở Nestech';
// let noiChuoi = stringA + stringB;
console.log(stringA + stringB);

const A = [2, 3, 4, 5, 6, 7, 8, -10, 30];
/* bài 5 - tìm số nguyên tố, kiểu tra xem mảng đó có là dãy fibonannci không ? */
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(isPrime(30));
//////
function isFibonacci(arr) {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) {
      return false;
    }
  }
  return true;
}

console.log('isFibonacci', isFibonacci(A));
