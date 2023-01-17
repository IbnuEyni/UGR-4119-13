const navbar = document.querySelector('.header-right-menu_bar');
const mobile_menu = document.querySelector('.header-right-menu');

navbar.addEventListener('click', function () {
    mobile_menu.classList.toggle('header-menu-click');
})

const tourRows = [...document.querySelectorAll('.tour-row')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

tourRows.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

