const photo = document.getElementById('photo')
const button = document.getElementById('button')

button.innerText = "Masquer"
photo.style.transition = "transition: opacity 5s;  "

function afficherMasquer() {
    if (photo.style.opacity === "0") {
        photo.style.opacity = "1"
        button.innerText ="Masquer"
        photo.style.transition = "opacity 5s, left, top, height"
    } else {
        photo.style.opacity = "0"
        button.innerText = "afficher"
        photo.style.transition = "opacity 5s, left, top, height"
    }}



