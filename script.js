// message to show when sending form:
const message = "thx for your message, we will contact you ASAP !";

// "ecoute" la partie formulaire et affiche le message en popup quand l'evenement "submit" est enclenché (l'utlisateur a cliqué sur le bouton submit)
document
  .getElementById("formContact")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
