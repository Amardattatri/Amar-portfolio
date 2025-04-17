function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

window.onload = function() {
    document.querySelectorAll('.skill-fill').forEach(bar => {
        setTimeout(() => {
            bar.style.width = bar.getAttribute('data-width');
        }, 500);
    });
};
