import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
    ({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}">
        </a>
     </li>`
);
  
gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();

    if (event.target.nodeName !==  "IMG") {
        return;
    }

    const item = `<img width="1400" height="900"
    src="${event.target.dataset.source}" alt ="${event.target.alt}">`;
    
    const instance = basicLightbox.create(item, {
        onShow: (instance) => {
            window.addEventListener('keydown', closeLightbox);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', closeLightbox);
        }
    });
    instance.show();
    
    function closeLightbox(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}

