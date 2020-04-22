
const messageForm = document.querySelector("#message-form");
const linkForm = document.querySelector("#link-form");
const messageShow = document.querySelector("#message-show")

const {hash} = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
    messageForm.classList.add("hide");
    messageShow.classList.remove("hide");
    document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    messageForm.classList.add("hide");
    linkForm.classList.remove("hide");
const input = document.querySelector("#message-input");
const encrypted = btoa(input.value);
const linkInput = document.querySelector("#link-input")
linkInput.value = `${window.location}#${encrypted}`
linkInput.select();

});