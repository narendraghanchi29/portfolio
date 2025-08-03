// script.js

// Image carousel functionality
const images = [
    "image/PIzza_dashboard.png.png",
    "image/pizza_dashboard2.png.png",
    "image/Hr_dashboard.png.jpg",
    "image/Blinkit_dashboard.png.png" ,
    "image/SQL (1).png",

    // Add more image paths as needed
];

let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateImage() {
    carouselImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Optional: Auto-slide functionality
setInterval(() => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
}, 5000); // Change image every 5 seconds

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (if you have a contact form)
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
