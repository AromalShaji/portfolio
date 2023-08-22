const imageElement = document.getElementById("current-image");
const images = [
    "WhatsApp Image 2023-08-21 at 23.57.57-fotor-bg-remover-202308220156.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png"
];

let currentIndex = 0;

function displayNextImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Display the first image
displayNextImage();

// Change image every 5 seconds
setInterval(displayNextImage, 1000);
