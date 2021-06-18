const carousel = document.querySelector(".carousel");
const navBar = document.querySelector("nav")
const header = document.querySelector("header");
const dropdownEl = document.querySelector(".drop");
const dropdownContent = document.querySelector(".dropdown-content");

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        //   type:"progressbar",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function dynamicMargin() {
    let navBarHeight = navBar.offsetHeight;
    let headerHeight = header.offsetHeight;
    carousel.style.marginTop = `${navBarHeight }px`;
}

function stickyNavBAr() {
    let navoffsetTop = navBar.offsetTop;
    let navBarHeight = navBar.offsetHeight;
    if(window.pageYOffset > (navoffsetTop)){
        navBar.classList.add("sticky")
    }else {
        navBar.classList.remove("sticky")
    }
}

window.onload = ()=>{ 
    dynamicMargin()
}

window.onscroll = ()=>{
    stickyNavBAr()
}