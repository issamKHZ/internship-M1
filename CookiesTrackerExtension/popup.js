chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  document.addEventListener("DOMContentLoaded", function() {
      var downloadButton = document.getElementById("getToken");    
      downloadButton.addEventListener("click", function() {
        var fileContent = "";
        chrome.tabs.sendMessage(tabs[0].id, { action: "callGetCookie"}, function(reponse) {        
          fileContent = "Le token de la session est : " + reponse; 
        
          // Créer un objet Blob avec le contenu du fichier
          var blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
          // Générer une URL pour le fichier Blob
          var fileURL = URL.createObjectURL(blob);
          // Créer un élément <a> pour le téléchargement
          var downloadLink = document.createElement("a");
          downloadLink.href = fileURL;
          downloadLink.download = "token.txt";
          // Simuler un clic sur le lien de téléchargement
          downloadLink.click();
          // Libérer l'URL du fichier Blob
          URL.revokeObjectURL(fileURL);
        });  
      });
  });
});
