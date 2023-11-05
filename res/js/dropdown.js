let btn = document.querySelector(".dropbtn");
let dropdown = btn.nextElementSibling;
btn.addEventListener("click", function () {
    dropdown.classList.toggle("show");
});
