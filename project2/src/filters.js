export function filterImages(images, category) {
    if (category === 'all') {
      return images; // Retourne toutes les images si "Tous" est sélectionné
    }
    return images.filter((image) => image.category === category);
  }
  