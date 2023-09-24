import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const listElement = document.querySelector(".gallery")

const renderList = galleryItems.map(({ preview, original, description }) =>
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("")

const handleListClick = (event) => {
    event.preventDefault()
    if (event.currentTarget === event.target) {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a',  {captionsData: 'alt',
    captionDelay: 250}
    );
}


listElement.insertAdjacentHTML("beforeend", renderList)
listElement.addEventListener("click", handleListClick)

// console.log(galleryItems);