chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "callGetCookie") {
      // Appel de la fonction dans le script de contenu
      var myCookie = getCookieValue("token");
  
      // Envoi de la réponse au script de la fenêtre contextuelle
      sendResponse(myCookie);
    }
  });


function getCookieValue(cookieName) {
    var cookieValue = "";
    console.log("allcokkies = " + document.cookie);
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + "=")) {
            cookieValue = cookie.substring(cookieName.length + 1);
            break;
        }
    }
  
    return cookieValue;
}