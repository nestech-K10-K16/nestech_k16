// // // var a = null;
// // // let b = 'a';

// // // console.log('bien a >>>', typeof a);

// // // //number
// // // //string
// // // //boolean
// // // //object
// // // //undefined

// // // // function cong2So(a, b) {
// // // //   return a + b;
// // // // }

// // // // console.log('Ket qua: ', cong2So(2, 3));

// // // function cong() {
// // //   let _b = '_a';
// // //   console.log('b >>>', b);
// // // }

// // // // console.log('_b >>>', _b);

// // // var a = 1;

// // // var a = [];

// // // let a = 2;

// // // // console.log('a', a);

// // // cong();

// // // console.log('a >>>>', a);

// // // // let openImg = false

// // // // onclick event

// // // /, %, +, -, *
// // // >, ==,===, <, &&, ||, ??, !, >=, <=

// // //== : không so sánh kiểu dữ liệu
// // // === : so sánh kiểu dữ liệu

// // // !: not, != , khác

// // //&& : true && false

// // // let a = 'abc';

// // // let b = 'abc';

// // // console.log('ket qua >>>', a);

// // //||: true || false

// // //let a = new Object()
// // // let a = {};

// // // a = { _a: 1, _b: '1', _c: [], _d: false };
// // // _f = a._b;
// // // console.log('a._b', a._b);

// // // //let b = new Array()
// // // let b = [];
// // // b = [{ a: 1 }, { n: 10 }, { c: 3 }];
// // // console.log(b[2]);

// // // for (let i = 0; i < b.length; i++) {}

// // // b.forEach((item, index) => {
// // //   console.log('item', item, index);
// // // });

// // // for (const key in object) {
// // //   if (Object.hasOwnProperty.call(object, key)) {
// // //     const element = object[key];

// // //   }
// // // }

// // // console.log(first)

// // let chuoi_a = 'nguyen van A';
// // let chuoi_b = 'chuoi def';
// // let chuoi_c = '1';

// // function ghepChuoiInHoa(string a){
// //   let a = 'nguyen van A';

// // }

// // //output : Nguyen Van A

// // console.log('thao tac chuoi', );

// // **
// //  * <!--
// //

// // let object01 = {
// //   // Tạo các thuộc tính
// //   hoTen: 'Ngô Minh Trung',
// //   gioiTinh: 'Nam',
// //   MSSV: 'B1704863',
// //   namSinh: '1999',

// //   // Tạo các phương thức
// //   hocBai: function () {
// //     console.log('Đang học bài...');
// //   },
// //   diNgu: function () {
// //     console.log('Đang ngủ...');
// //   },
// //   xemPhim: function () {
// //     console.log('Đang xem phim...');
// //   },
// // };
// // let object02 = new Object();

// // console.log('num >>>', typeof object01);
// // // object01.hocBai();
// // // object01['hoTen'];
// // console.log('num >>>', typeof object02);

// // let array01 = ['Trần Văn A', 'Nguyễn Văn B', 'Ngô Minh C', '1'];

// // let array02 = new Array('Trần Văn A', 'Nguyễn Văn B', 'Ngô Minh C');

// // // console.log('array01 >>>', typeof array01);
// // // console.log('array01 >>>', array01[array01.length - 1]);
// // // array01[array01.length - 1] = 'Nguyễn Hồ Văn D';
// // // console.log('array01 >>>', array01[array01.length - 1]);
// // // console.log('array01 >>>', array01.join());
// // // console.log('array01 >>>', array02.pop());
// // console.log('array01 >>>', array01.push('Nguyễn Hồ Văn E'));
// // //đầu tiên: array01.length - array.length
// // //cuối cùng: array01.length - 1
// // // console.log('array02 >>>', typeof array02);

// // cho chuỗi A =
// //   Bài 1
// // 	tìm vị trí chuỗi “Javascript”
// // 	thay vị trí chuỗi “Javascript” thành “ReactJS”

// let A = 'Học Javascript Front    End tại Nestech   ,Quận 10';
// console.log('vị trí chuỗi Javascrip >>>', A.indexOf('Javascript'));
// console.log(
//   'thay thế chuỗi Javascript >>>',
//   A.replace('Javascript', 'ReactJS')
// );

// //   Bài 2
// //   	hiển thị chuỗi A với việc bỏ khoảng trắng
// // 	cắt chuỗi A tại thành dấu phẩy và hiển thị cụm sau của chuỗi sau khi cắt
// // -->
// console.log('loại bỏ khoảng trắng >>>', A.trim());
// console.log('cắt chuối A >>>', A.split(','));

// //   Bài 3
// // 	cho 1 mảng A = [2,3,4,5,6,7,8,-10,30].
// // 	tìm số lớn nhất , số nhỏ nhất

// //cách 1
// //for, if
let B = [2, 3, 4, 5, 6, 7, 8, -10, 30];
// let Max = B[0];
// for (let item in B) {
//   console.log('item', B[item]);
// }

// for (let item of B) {
//   console.log('B', item);
// }

B.forEach((item) => {
  console.log('item', item);
});

console.log(B[0]);
// var i = 0;

// var i = 100;
// for (i; i < B.length; i++) {
//   if (Max > B[i]) Max = Max;
//   else Max = B[i];
// }

// console.log('tìm Max', Max);
// //cach 2
// console.log('tìm Max', Math.max(...B));

// //cách 1
// //for, if

// let Min = B[0];
// for (let i = 0; i < B.length; i++) {
//   if (Min > B[i]) {
//     Min = B[i];
//   } else {
//     Min = Min;
//   }
// }

// console.log('tìm Min', Min);
// //cach 2
// console.log('tìm Min', Math.min(...B));

// //   Bài 4
// //   	cho 1 chuỗi string = ‘Học Javascript Front End’.
// // 	_ hiển thị độ dài chuổi

// // 	_ nối chuỗi string với chuỗi B = ‘’ở Nestech
// let string = 'Học Javascript Front End';
// console.log('hien thij do dai chuoi >>', string.length);
// console.log('hien thij do dai chuoi >>', string + ' ' + 'ở Nestech');
// console.log('hien thij do dai chuoi >>', string.concat(' ', 'ở Nestech'));

// //   Bài 5
// // 	cho 1 mảng A = [2,3,4,5,6,7,8,-10,30].
// // 	tìm số nguyên tố, kiểu tra xem mảng đó có là dãy fibonannci không ?
