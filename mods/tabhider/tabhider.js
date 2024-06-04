let currentTitle = "Google Classroom";
let currentFavicon = "http://ssl.gstatic.com/classroom/favicon.png";

function updateTab(title, favicon) {
    document.title = NEW_TITLE;

    let newFavicon = document.createElement('link');
    newFavicon.rel = "shortcut icon";
    newFavicon.href = "http://ssl.gstatic.com/classroom/favicon.png";
    
    var existingFavicon = document.querySelector('link[rel="shortcut icon"]') || document.createElement('link');
    
    document.head.removeChild(existingFavicon);
    document.head.appendChild(newFavicon);
}

updateTab(currentTitle, currentFavicon);
