// Afficher les images dans la galerie
export function renderGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Efface l'ancien contenu
    images.forEach((image) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.title;
      gallery.appendChild(imgElement);
    });
  }
  