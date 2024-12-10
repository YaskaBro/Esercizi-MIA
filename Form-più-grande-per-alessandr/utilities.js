const $fname = document.querySelector("#fname")
const $surname = document.querySelector("#surname")
const $email = document.querySelector("#email")
const $password = document.querySelector("#password")
const $form = document.querySelector("#form")

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    console.log("Il nome inserito è: ", $fname.value)
    console.log("Il cognome inserito è: ", $surname.value)
    console.log("L' email inserita è: ", $email.value)
    console.log("La password inserita è: ", $password.value)
}) 
