"use strict";
// ?script code to open and close the navigation menu
const tab_links = document.getElementsByClassName("tab-links");
const tab_contents = document.getElementsByClassName("tab-contents");
function opentab(tab_name) {
    for (const tab_link of tab_links) {
        tab_link.classList.remove("active-link");
    }
    for (const tab_content of tab_contents) {
        tab_content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab");
}
// script code to open and close the navigation menu
const side_menu = document.getElementById("side-menu");
function open_menu() {
    side_menu.style.right = "0";
}
function close_menu() {
    side_menu.style.right = "-200px";
}
//? Script for Google sheet form
// const scriptURL = "";
// const form = document.querySelector(
//   "form[name='submit-to-google-sheet']"
// ) as HTMLFormElement;
// const msg = document.getElementById("msg") as HTMLElement;
// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
// .then((response) => {
// msg.innerHTML = "Message sent successfully";
// setTimeout(() => {
// msg.innerHTML = "";
// }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
