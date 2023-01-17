let form = document.getElementById("form")
let password = document.getElementById("password")
let password1 = document.getElementById("password1")
let password_val = document.getElementById("error")


form.addEventListener("submit", function(e){
    if(password.value.length <= 6 || password.value.length >= 20){
        password_val.textContent = "password must have 7 - 19 characters";
        password.style.border = "2px solid red";
        e.preventDefault()
    }
    if(password1.value != password.value){
        password_val.textContent = "the passwords must be the same.";
        password1.style.border = "2px solid red";
        e.preventDefault()
    }
})
