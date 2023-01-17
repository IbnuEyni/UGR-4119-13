
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