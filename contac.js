document.addEventListener('DOMContentLoaded', () => {
    const contactUsBtn = document.getElementById('contactUsBtn');
    const popupForm = document.getElementById('popupForm');

    contactUsBtn.addEventListener('click', () => {
        popupForm.style.display = 'block';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popupForm) {
            popupForm.style.display = 'none';
        }
    });
});
