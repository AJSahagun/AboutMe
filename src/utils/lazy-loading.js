const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');
    
    const onserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImgs.forEach(img => {
        onserver.observe(img);
    })
}

export default lazyLoading;