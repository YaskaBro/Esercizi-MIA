const $mail = document.querySelector("#mail");
const $psw = document.querySelector("#psw");
const $form = document.querySelector(".classForm");

$form.addEventListener("submit", (event) => {
    event.preventDefault()

    const mail = $mail.value;
    const psw = $psw.value;

    console.log("Email:", mail);
    console.log("Password:", psw);
})