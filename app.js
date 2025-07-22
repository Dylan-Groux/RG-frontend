document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // charge la vraie image
                    img.classList.remove("lazy");
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => observer.observe(img));
    } else {
        // Fallback pour vieux navigateurs
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
        });
    }
});