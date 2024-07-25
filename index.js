function openImage(image) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');

    popupImage.src = image.src;
    popup.style.display = 'flex';
}

function closeImage(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup || event.target.className === 'close') {
        popup.style.display = 'none';
    }
}
