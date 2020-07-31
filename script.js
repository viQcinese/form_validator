// DOM Elements
const form = document.querySelector("#form")

// Add Event Listener
form.querySelectorAll("input").forEach( el => {
    el.addEventListener('blur', validate)
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    form.querySelectorAll("input").forEach( el => {
        el.dispatchEvent(new Event('blur'))
    })
})

// Validate
function validate(){

    // Username
    if (this.id === "username") {
        const reg = /^[a-zA-Z0-9._]{6,20}$/

        if(this.value.trim() === "") {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "You have to enter a username"
        }

        else if(this.value.length < 6 || username.value.length > 20) {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "Username must have 6-20 chars"
        }
        
        else if(!reg.test(this.value)) {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "Username allows letters, numbers . and _"
        }

        else {
            this.parentElement.className = "form-control"
        }
    }

    // Email
    if (this.id === "email") {
        const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (this.value.trim() === "") {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "You have to enter an email"

            console.log(this.parentElement)
        }
        
        else if (!reg.test(this.value)) {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "You have to enter a valid email"
        }

        else {
            this.parentElement.className = "form-control"
        }
    }

    // Password
    if (this.id === "password") {

        if(this.value.trim() === "") {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "You have to enter a password"
        }
        
        else if(this.value.length < 6) {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "Password must be at least 6 chars"
        }

        else {
            this.parentElement.className = "form-control"
        }
    }

    // Password 2
    if (this.id === "password2") {
        const reg = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;

        if(this.value.trim() === "") {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "You have to enter a password"
        }
        
        else if(this.value.length < 6) {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "Password must be at least 6 chars"
        }
        
        else if(this.value !== password.value) {
            this.parentElement.className = "form-control error"
            this.parentElement.querySelector("small").innerText = "Passwords don't match"
        }
        
        else {
            this.parentElement.className = "form-control"
        }
    }
}