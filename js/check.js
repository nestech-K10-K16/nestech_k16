alert ("Xin chào các bạn đến với khóa học JS cơ bản!");
alert("Xin chào!");
alert(1);
alert(true);

var result = confirm("Bạn có muốn xóa bản ghi này?");
if (result == true) {
    alert("Bạn đồng ý xóa");
} else {
    alert("Bạn không xóa");
}

var result = prompt("Nhập vào tuổi của bạn", 20);
if (result != null) {
    alert("Tuổi của bạn là: " + result);
} else {
    alert("Bạn không nhập vào tuổi");
}

let x = 5;
document.write(x);