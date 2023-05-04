const btnDark = document.getElementById("dark-mode");
const body = document.querySelector("body");
const elWhite = document.querySelector(".w3-white");
const cards = document.querySelectorAll(".w3-card");
const h2 = document.querySelectorAll('h2');
const ps = document.querySelectorAll('p');

btnDark.addEventListener(('click'), () => {
    if (body.classList.contains("w3-light-grey")) {

        body.classList.remove("w3-light-grey");
        body.classList.add("w3-dark-grey");
        elWhite.classList.remove("w3-light-grey");
        elWhite.classList.add("w3-dark-grey");
        cards.forEach((card) => card.classList.add("w3-dark-grey"));
        h2.forEach((h2) => { h2.classList.add("w3-text-white"); h2.classList.remove("w3-text-grey") });
        ps.forEach((p) => p.classList.add("w3-text-white"));
        btnDark.classList.add("w3-dark-grey");
    } else {

        body.classList.add("w3-light-grey");
        body.classList.remove("w3-dark-grey");
        elWhite.classList.remove("w3-dark-grey");
        cards.forEach((card) => card.classList.remove("w3-dark-grey"));
        h2.forEach((h2) => { h2.classList.add("w3-text-grey"); h2.classList.remove("w3-text-white") });
        ps.forEach((p) => p.classList.remove("w3-text-white"));
        btnDark.classList.remove("w3-dark-grey");
    }
});