/**
 * <!--
cho chuỗi A = ‘Học Javascript Front    End tại Nestech   ,Quận 10’
  Bài 1
  tìm vị trí chuỗi “Javascript”
  thay vị trí chuỗi “Javascript” thành “ReactJS”

  Bài 2
    hiển thị chuỗi A với việc bỏ khoảng trắng
  cắt chuỗi A tại thành dấu phẩy và hiển thị cụm sau của chuỗi sau khi cắt
-->
 */
var A = "Học Javascript Front    End tại Nestech   ,Quận 10";
console.log("Vị trí chuỗi “Javascript là: ", A.search("Javascript"));
console.log("Chuỗi sau khi thay thế là: ", A.replace("Javascript", "ReactJS"));
console.log("chuỗi A với việc bỏ khoảng trắng cắt chuỗi A tại thành dấu phẩy và hiển thị cụm sau của chuỗi sau khi cắt là: ", A.split(",")[1]);
/**
 * <!--
  Bài 3
  cho 1 mảng A = [2,3,4,5,6,7,8,-10,30].
  tìm số lớn nhất , số nhỏ nhất

  Bài 4
    cho 1 chuỗi string = ‘Học Javascript Front End’.
  _ hiển thị độ dài chuổi

  _ nối chuỗi string với chuỗi B = ‘’ở Nesteh
-->
 */
var A = [2, 3, 4, 5, 6, 7, 8, -10, 30];
let max_val = A.reduce(function (accumulator, element) {
  return (accumulator > element) ? accumulator : element
});
console.log("số lớn nhất: ", max_val);
let min_val = A.reduce(function (accumulator, element) {
  return (accumulator < element) ? accumulator : element
});
console.log("số nhỏ nhất: ", min_val);

var string = "Học Javascript Front End";
console.log("độ dài chuổi là: ", string.length);
var B = "ở Nesteh";
console.log("nối chuỗi string với chuỗi B = ‘’ở Nesteh là : ", string + B);


