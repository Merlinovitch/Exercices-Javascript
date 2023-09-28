const choixCouleur  = document.getElementById('choix-couleur')
const bouton = document.getElementById('bouton')
const champsTexte = document.getElementById('champsTexte')

function ajouterTexte() {
    champsTexte.value = choixCouleur.value
}

bouton.addEventListener('click' , ajouterTexte)