//chuyển đổi thanh điều hướng biểu tượng
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// cuộn phần liên kết hoạt động
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//scroll reveal
ScrollReveal({
  reset: true, //đặt lại trạng thái ban đầu của phần tử sau khi hiển thị
  distance: "80px", //khoảng cách di chuyển từ trên xuống của phần tử để hiển thị
  duration: 2000, //thời gian để hoàn thành hiệu ứng chuyển động
  delay: 200, // thời gian chờ trước khi bắt đầu hiệu ứng chuyển động
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" }); // vị trí bắt đầu của phần tử khi hiển thị, ở đây là từ trên xuống dưới.
//các phần tử cần áp dụng hiệu ứng chuyển động, ở đây là các phần tử có class là "home-content" và "heading"
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, .about",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img ", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content ", { origin: "right" });
