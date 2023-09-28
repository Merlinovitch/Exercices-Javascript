const bouton = document.getElementById('bouton')

function compterCaracteres () {
   const ChampsTexte = document.getElementById('champsTexte').value
   const nbCaracteres = ChampsTexte.length
   const nouvelleDiv = document.createElement('div')
   const body = document.body
   nouvelleDiv.textContent = 'le nombre de caractères est de ' + nbCaracteres
   body.appendChild(nouvelleDiv)
   
}

bouton.addEventListener('click', compterCaracteres)