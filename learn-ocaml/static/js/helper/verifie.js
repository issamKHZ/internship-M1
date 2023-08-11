document.addEventListener("DOMContentLoaded", function() {
  // Sélectionnez tous les liens de la page
  var links = document.querySelectorAll("a");

  // Parcourez les liens et ajoutez un gestionnaire d'événement au clic
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      // Obtenez l'URL du lien cliqué
      var href = this.getAttribute("href");
      
      // Vérifiez si le lien pointe vers un site externe
      if (isExternalLink(href)) {
        // Empêchez l'action par défaut (ouverture du lien)
        event.preventDefault();
        // Effectuez d'autres actions ou affichez un message d'erreur si nécessaire
      }
    });
  }

  // Fonction pour vérifier si un lien est externe
  function isExternalLink(url) {
    // Vérifiez si l'URL ne commence pas par "http://" ou "https://" et ne fait pas référence à la même origine
    return url.startsWith("http://localhost:8080/");
  }
});