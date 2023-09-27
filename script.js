const liste = document.getElementById('liste')
const searchBar = document.getElementById('searchBar')
const mot = liste.getElementsByTagName('li')
const button = document.getElementById('button')

function search() {

    const rechercheText = searchBar.value


    for (let i = 0; i < mot.length; i++) {
        const item = mot[i].textContent
        if (item === rechercheText) {
            
            mot[i].style.backgroundColor = "yellow"

        } else {
            mot[i].style.backgroundColor = ""
        }

        
    }
}

button.addEventListener('click', search)