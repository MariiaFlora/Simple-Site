let burger = document.getElementById("burger");
let navbarList = document.getElementById("navbarList");

burger.addEventListener('click', function () {
    burger.classList.toggle("active");
    navbarList.classList.toggle("navbar-list--active");
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        burger.classList.remove("active");
        navbarList.classList.remove("navbar-list--active");
    }
});
