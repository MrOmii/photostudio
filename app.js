const galleryImages = {
    wedding: [
        'images/wedding1.jpg',
        'images/wedding2.jpg',
        'images/wedding3.jpg',
        'images/wedding4.jpg'
    ],
    event: [
        'images/event1.jpg',
        'images/event2.jpg',
        'images/event3.jpg'
    ],
    studio: [
        'images/studio1.jpg',
        'images/studio2.jpg',
        'images/studio3.jpg'
    ],
    gifts: [
        'images/gift1.jpg',
        'images/gift2.jpg',
        'images/gift3.jpg'
    ]
};

function openGallery(service) {
    const modal = document.getElementById('galleryModal');
    const content = document.getElementById('galleryContent');
    content.innerHTML = ''; // clear previous images

    galleryImages[service].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        content.appendChild(img);
    });

    modal.style.display = 'block';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Close modal if user clicks outside the images
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    this.reset();
});
