var headerfix = document.querySelector("header")
window.onscroll = function () {
    //code tao hiệu ứng xuất hiện thanh màu đen khi scroll
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        headerfix.style.height = "64px";
        headerfix.style.backgroundColor = "#fff";
        headerfix.style.boxShadow = "0px 1px 3px #dfdfdf";
        document.querySelector("header .navbar").style.height = "60px";
        document.querySelector("header .navbar .navbar-brand").style.padding = "0";
        document.querySelector("header .navbar .navbar-brand").style.transition = "all 0,3s";
        document.querySelector("header .navbar .navbar-brand img").style.height = "64px";
        headerfix.style.transition = "all 0.3s";
        headerfix.style.zIndex = "10000";
        document.querySelector("header .navbar").style.transition = "all 0.3s"
        document.querySelector(".carouselMassive").style.height = "100%";
    }
    else {
        headerfix.style.height = "100px";
        headerfix.style.backgroundColor = "transparent";
        headerfix.style.boxShadow = "none";
        document.querySelector("header .navbar").style.height ="100px";
        document.querySelector("header .navbar .navbar-brand img").style.height = "100px";
    }
}