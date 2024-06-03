document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const dotsContainer = document.getElementById('dotsContainer');
    const dots = dotsContainer.querySelectorAll('.dot');
    const numImages = gallery.querySelectorAll('img').length;
    const galleryWidth = gallery.scrollWidth;
    const scrollAmount = galleryWidth / numImages;

    gallery.addEventListener('scroll', () => {
        const scrollLeft = gallery.scrollLeft;
        const index = Math.round(scrollLeft / scrollAmount);
        updateDots(index);
    });

    function updateDots(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
});
