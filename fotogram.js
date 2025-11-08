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



const modal = document.createElement('div');
modal.id = 'image-modal';
modal.classList.add('modal');
modal.setAttribute('role', 'dialog');
modal.setAttribute('aria-modal', 'true');
modal.setAttribute('aria-label', 'Galerie Modal');

modal.innerHTML = `
<span class="close">&times;</span>
<span class="arrow left">&#10094;</span>
<figure>
  <img id="modal-image" class="modal-content" alt="Hundebild">
  <figcaption id="modal-caption"></figcaption>
</figure>
<span class="arrow right">&#10095;</span>`;

document.body.appendChild(modal);

const modalImg = document.getElementById('modal-image');
const caption = document.getElementById('modal-caption');


let currentIndex = 0;


images.forEach((src, index) => {
const figure = document.createElement('figure');
const img = document.createElement('img');
img.src =src;
img.alt = `Hund ${index +1}`;
img.classList.add('thumbnail');
img.setAttribute('tabindex','0');

img.addEventListener('click', () => openModal(index));
container.appendChild(img);

});


// #region Modalfunktionen

function updateModalContent() {
  modalImg.src = images[currentIndex];
  modalImg.alt = `Hund ${currentIndex + 1}`;
  caption.textContent = `${currentIndex + 1 + '/10'}`;
}

function openModal (index){
    currentIndex = index;
    modal.style.display = 'block';
    updateModalContent();
};


function closeModal (){
    modal.style.display = 'none';
};


function nextImage(){
    currentIndex = (currentIndex +1) % images.length;
    updateModalContent();
};


function previousImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
};


const closeButton = modal.querySelector('.close');
const previousButton = modal.querySelector('.left');
const nextButton = modal.querySelector('.right');

closeButton.addEventListener('click', closeModal);
previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);


modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();

});


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeModal();
});
// #endregion