
function getIimageWidth(){
    return document.querySelector('.image-item').offsetWidth + 16; // Including gap

}
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn')
let gallery = document.getElementById('gallery')

let currentPosition = 0;
function updateButtons() 
{
    
    prevBtn.disabled = currentPosition <= 0;
    nextBtn.disabled = currentPosition >= gallery.scrollWidth - gallery.clientWidth;
}
prevBtn.addEventListener('click', () => {
    currentPosition -= getIimageWidth();
    if (currentPosition < 0) currentPosition = 0;
    gallery.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
    });
    updateButtons();
});

nextBtn.addEventListener('click', () => {
    currentPosition += getIimageWidth();
    if (currentPosition > gallery.scrollWidth - gallery.clientWidth) {
        currentPosition = gallery.scrollWidth - gallery.clientWidth;
    }
    gallery.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
    });
    updateButtons();
});

// Initial button state
updateButtons();
// Update buttons on window resize
window.addEventListener('resize', () => {
    currentPosition = 0;
    updateButtons();
});
