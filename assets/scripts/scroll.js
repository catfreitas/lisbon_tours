/*------ CHANGE BACKGROUND HEADER ------*/
function scrollHeader(){
    const header = document.querySelector('#header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 100? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*------ SHOW SCROLL UP ------*/ 
function scrollUp(){
    const scrollUp = document.querySelector('#scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 200? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*------ SCROLL SECTIONS ACTIVE LINK ------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*------ SCROLL REVEAL ANIMATION ------*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    //reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})