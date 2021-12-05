let sidebar = document.querySelector(".sidebar")
let menuButton = document.querySelector(".button")
menuButton.onclick = function () {
    sidebar.classList.toggle("active")
}