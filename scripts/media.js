function displayImage(imgTarget){
    var image = document.getElementById(imgTarget);
    var gallery = document.querySelectorAll('.gallery');
    image.style.display = "block";
    gallery.forEach(thumbnail => {
        thumbnail.style.display = "none";
    });
};

function hideImage(imgTarget){
    var image = document.getElementById(imgTarget);
    var gallery = document.querySelectorAll('.gallery');
    image.style.display = "none";
    gallery.forEach(thumbnail => {
        thumbnail.style.display = "inline";
    });
};