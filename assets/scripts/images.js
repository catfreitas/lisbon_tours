/*------ SWIPER DISCOVER (Images) ------*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: -25,
    coverflowEffect: {
        rotate: 30,
    },
});