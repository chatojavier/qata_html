/* ---- Menu Burger Button ---- */  

    var menuBtn = document.querySelector('.menu-btn');
    var menuLinkContact = document.querySelector('.menu-nav__item .contact');
    var menuBtnBurger = document.querySelector('.menu-btn__burger');
    var nav = document.querySelector('.nav');
    var menuNav = document.querySelector('.menu-nav');
    var menuNavItem = document.querySelectorAll('.menu-nav__item');

    var showMenu = false; 

    menuBtn.addEventListener('click', function() {
        if (showMenu === false) {
            menuBtnBurger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
            for(var i = 0; i < menuNavItem.length; i++) {
                menuNavItem[i].classList.add('open');
            };
            document.body.setAttribute('style', 'overflow: hidden');
            showMenu = true;
        } else {
            menuBtnBurger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
            for(var i = 0; i < menuNavItem.length; i++) {
                menuNavItem[i].classList.remove('open');
            };
            document.body.removeAttribute('style');
            showMenu = false;
        }
    });

    menuLinkContact.addEventListener('click', function(){
        menuBtnBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        for(var i = 0; i < menuNavItem.length; i++) {
            menuNavItem[i].classList.remove('open');
        };
        document.body.removeAttribute('style');
        showMenu = false;
    });

/* ---- Shrink Navbar ---- */

// When the user scrolls down 100px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("img.logo").style.height = "2.5rem";
        document.querySelector(".fixed-bar").style.padding = "1rem 5vw";
        document.querySelector(".menu-btn").style.top = "1.75rem";
    } else {
        document.querySelector("img.logo").removeAttribute("style");
        document.querySelector(".fixed-bar").removeAttribute("style");
        document.querySelector(".menu-btn").removeAttribute("style");
    }
}


/* ---- Category Hover Image change ---- */

function hoverImg(linkList, imgContainer) {
    for(var i = 0; i < linkList.length; i++) {
        linkList[i].addEventListener("mouseover", function() {
            var linkSrc = this.getAttribute("hover-img");
            imgContainer.src=linkSrc;
            imgContainer.classList.add("opacity-100");
            imgContainer.classList.remove("opacity-0");
        });
        linkList[i].addEventListener("mouseout", function() {
            imgContainer.classList.add("opacity-0");
            imgContainer.classList.remove("opacity-100");
        });
    }
};

if (document.body.classList.contains('item') || document.body.classList.contains('category')) {
    var categoryLinkList = document.querySelectorAll(".block-categories__card__list a");
    var categoryImgContainer = document.querySelector(".block-categories__img__change");
    hoverImg(categoryLinkList, categoryImgContainer);
};
if (document.body.classList.contains('products')) {
    var headerLinkList = document.querySelectorAll(".header-card__list a");
    var headerImgContainer = document.querySelector('.header-hero__img__change');
    hoverImg(headerLinkList, headerImgContainer);
}



/* ---- Start Swipper Slider Config ---- */

if (document.querySelectorAll('.header-slider__carousel').length > 0) {

    
    // Header Pics Slider Config
    var headerSwiper = new Swiper ('.header-slider__carousel', {
        // Optional parameters
        slidesPerView: 'auto',
        spaceBetween: false,
        centeredSlides: false,
        loop: true,
        loopedSlides: 4,
        speed: 500,
        updateOnWindowResize: true,

    });


    //Header Label Slider Config
    var headerLabelSwiper = new Swiper ('.header-slider__label', {
        // Optional parameters
        slidesPerView: 'auto',
        spaceBetween: false,
        centeredSlides: false,
        loop: true,
        loopedSlides: 4,
        speed: 500,
        allowTouchMove: false,

    });
    
    //function next prev
    var headerSlide = document.querySelectorAll('.header-slider__carousel .swiper-slide');
    slideNextPrev(headerSlide, headerSwiper, headerLabelSwiper);

};
    
if (document.querySelectorAll('.product-slider__carousel').length > 0) {

    // Product Pics Slider Config
    var productSwiper = new Swiper ('.product-slider__carousel', {
        // Optional parameters
        slidesPerView: 'auto',
        spaceBetween: false,
        centeredSlides: true,
        loop: true,
        loopedSlides: 4,
        speed: 500,
        updateOnWindowResize: true,

    });

    // Product Label Slider Config
    var productLabelSwiper = new Swiper ('.product-slider__label', {
        // Optional parameters
        slidesPerView: 'auto',
        spaceBetween: false,
        centeredSlides: false,
        loop: true,
        loopedSlides: 4,
        speed: 500,
        allowTouchMove: false,

    });

    //function next prev
    var productSlide = document.querySelectorAll('.product-slider__carousel .swiper-slide');
    slideNextPrev(productSlide, productSwiper, productLabelSwiper);

};

if (document.querySelectorAll('.item-slider__carousel').length > 0) {
    
    // Item Pics Slider Config
    var itemSwiper = new Swiper ('.item-slider__carousel', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: false,
        centeredSlides: true,
        speed: 500,
        updateOnWindowResize: true,
        loop: true,
        loopedSlides: 4

    });


    var thumbSwiper = new Swiper ('.thumb-slider__carousel', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 16,
        centeredSlides: true,
        speed: 500,
        updateOnWindowResize: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.thumb-slider-next',
            prevEl: '.thumb-slider-prev',
          },
        loop: true,
        loopedSlides: 4,
        touchRatio: 0.2,

    });

    //function next prev
    itemSwiper.controller.control = thumbSwiper;
    thumbSwiper.controller.control = itemSwiper;

}

    // Next Slide Function Header Slider

        //function next prev
        function slideNextPrev(slides, picSwiper, labelSwiper) {
            for(var i = 0; i < slides.length; i++) {
                (function (index) {
                    slides[index].addEventListener('click', function() {
                        if(slides[index].classList.contains('swiper-slide-next')) {
                            console.log ('next')
                            picSwiper.slideNext(500);
                            event.preventDefault();
                        } else if (slides[index].classList.contains('swiper-slide-prev')) {
                            console.log ('prev')
                            picSwiper.slidePrev(500);
                            event.preventDefault();
                        } else {
                            console.log ('active')
                        }
                    });
                }) (i)
            };
            // link between img and label slides 
            if(typeof labelSwiper !== 'undefined') {
                picSwiper.controller.control = labelSwiper;
            };
        };

/* ---- End Swipper Slider Config ---- */

