const images = [
    "./img/Dog1.jpg",
    "./img/dog2.jpg",
    "./img/dog3.jpg",
    "./img/dog4.jpg",
    "./img/dog5.jpg",
    "./img/dog6.jpg",
    "./img/dog7.jpg",
    "./img/dog8.jpg",
    "./img/dog9.jpg",
    "./img/dog10.jpg"
];

const container = document.getElementById('gallery-container');

/*---Modal---*/

const modal = document.createElement('div');
modal.id = 'image-modal';
modal.classList.add('modal');
modal.innerHTML = `
<span class="close">&times;</span>
<span class="arrow left">&#10094;</span>
<img id="modal-image" class="modal-content" alt="Hundebild">
<span class="arrow right">&#10095;</span>`;

document.body.appendChild(modal);

const modalImg = document.getElementById('modal-image');



let currentIndex = 0;

/*---render Gallery---*/
images.forEach((src, index) => {

const img = document.createElement('img');
img.src =src;
img.alt = `Hund ${index +1}`;
img.classList.add('thumbnail');

img.addEventListener('click', () => openModal(index));
container.appendChild(img);
});


/*---Modal öffnen---*/
function openModal (index){
    currentIndex = index;
    modal.style.display = 'block';
    modalImg.src = images[currentIndex];
}

/*---Modal schliessen---*/
function closeModal (){
    modal.style.display = 'none';
}

/*---nächstes Bild---*/
function nextImage(){
    currentIndex = (currentIndex +1) % images.length;
    modalImg.src = images[currentIndex];
}

/*---vorheriges Bild---*/
function previousImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
}

/*---event listener---*/
const closeButton = modal.querySelector('.close');
const previousButton = modal.querySelector('.left');
const nextButton = modal.querySelector('.right');

closeButton.addEventListener('click', closeModal);
previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);

/*---ausserhalb des Bildschrim schliessen---*/
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();

});

/*---Tastatursteuerung---*/
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeModal();
});