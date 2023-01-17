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

const navbar = document.querySelector('.header-right-menu_bar');
const mobile_menu = document.querySelector('.header-right-menu');

navbar.addEventListener('click', function () {
    mobile_menu.classList.toggle('header-menu-click');
})

const addcartmessage = document.getElementById("addcart")
const addcartbtn = document.querySelector('.addcart')
const addcart1 = document.querySelector('#addcart1')
const addcart2 = document.querySelector('#addcart2')
const addcart3 = document.querySelector('#addcart3')
const container = document.querySelector('.container')

addcartbtn.addEventListener('click', function() {
    addcartmessage.style.display = "block"
})
addcart1.addEventListener('click', function() {
    addcartmessage.style.display = "block"
})
addcart2.addEventListener('click', function() {
    addcartmessage.style.display = "block"
})
addcart3.addEventListener('click', function() {
    addcartmessage.style.display = "block"
})
addcartmessage.addEventListener('click', function(){
    addcartmessage.style.display = "none"
})

// let form = document.getElementById("sign-up-format")
// let password = document.getElementById("sign-up-password")
// let password1 = document.getElementById("sign-up-confirm_password")
// let password_val = document.getElementById(".password-val")
// form.addEventListener("submit", function(e){
//     if(password.value.length <= 6 || password.value.length >=20){
//         password_val.textContent = "password must have 7 - 19 characters";
//         password.style.border = "1px dotted red";
//         e.preventDefault()
//     }
//     if(password1.value != password.value){
//         password_val.textContent = "the passwords must be the same.";
//         password1.style.border = "1px dotted red";
//         e.preventDefault()
//     }

// })