ScrollReveal({
    reset: true, //đặt lại trạng thái ban đầu của phần tử sau khi hiển thị
    distance: "80px", //khoảng cách di chuyển từ trên xuống của phần tử để hiển thị
    duration: 2000, //thời gian để hoàn thành hiệu ứng chuyển động
    delay: 200, // thời gian chờ trước khi bắt đầu hiệu ứng chuyển động
});
ScrollReveal().reveal(".home_img", { origin: "left" });
ScrollReveal().reveal(".layer_img", { origin: "left" });
ScrollReveal().reveal(".name", { origin: "top" });
ScrollReveal().reveal(".introduce ", { origin: "left" });
ScrollReveal().reveal(".introduce-Im ", { origin: "left" });
ScrollReveal().reveal(".nav_hire", { origin: "right" });

ScrollReveal().reveal(".about_me", { origin: "right" });
ScrollReveal().reveal(".my_skill", { origin: "right" });
ScrollReveal().reveal(".my_skill-content", { origin: "left" });


ScrollReveal().reveal("#inf_01", { origin: "left" });
ScrollReveal().reveal("#inf_02", { origin: "right" });
ScrollReveal().reveal("#inf_03", { origin: "left" });
ScrollReveal().reveal("#inf_04", { origin: "right" });

ScrollReveal().reveal("#skill_11", { origin: "right" });
ScrollReveal().reveal("#skill_12", { origin: "right" });
ScrollReveal().reveal("#skill_13", { origin: "right" });
ScrollReveal().reveal("#skill_14", { origin: "right" });
ScrollReveal().reveal("#skill_15", { origin: "right" });




var typingEffect = new Typed(".introduce", {
    strings: ["Coder...", "Developer...", "Enginner..."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

