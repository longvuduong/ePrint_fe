document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('scroll-to-top-btn');
    if (button) {
        button.addEventListener('click', function () {
            scrollToTop();
        });
    } else {
        console.log('Button not found!');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
