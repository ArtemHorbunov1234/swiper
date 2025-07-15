const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
            centeredSlides: false,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 18,
            centeredSlides: false,
        },
    },
});
