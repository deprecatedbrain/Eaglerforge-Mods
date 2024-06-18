let currentTitle = "Google Classroom";
let currentFavicon = "http://ssl.gstatic.com/classroom/favicon.png";

function updateTab(title, favicon) {
    document.title = title;

    let newFavicon = document.createElement('link');
    newFavicon.rel = "shortcut icon";
    newFavicon.href = favicon;
    
    let existingFavicon = document.querySelector('link[rel="shortcut icon"]');
    
    if (existingFavicon) {
        document.head.removeChild(existingFavicon);
    }
    document.head.appendChild(newFavicon);
}

updateTab(currentTitle, currentFavicon);
