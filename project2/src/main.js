import { images } from './data.js';
import { renderGallery } from './ui.js';
import { filterImages } from './filters.js';

document.addEventListener('DOMContentLoaded', () => {
  const filters = document.getElementById('filters');
  const buttons = filters.querySelectorAll('button');

  // Affiche toutes les images au chargement
  renderGallery(images);

  // Ajoute un événement pour chaque bouton de filtre
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const category = event.target.getAttribute('data-category');
      const filteredImages = filterImages(images, category);
      renderGallery(filteredImages);
    });
  });
});
