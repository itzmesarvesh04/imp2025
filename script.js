document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const hiddenImages = document.querySelectorAll(".gallery-img.hidden");
  let index = 0;
  const imagesToShow = 4;

  loadMoreBtn.addEventListener("click", () => {
    for (let i = index; i < index + imagesToShow && i < hiddenImages.length; i++) {
      hiddenImages[i].classList.remove("hidden");
    }
    index += imagesToShow;

    if (index >= hiddenImages.length) {
      loadMoreBtn.style.display = "none";
    }
  });
});




// Lightbox functionality
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// 

function toggleEventInfo(id) {
  const infoBox = document.getElementById(id);
  const allBoxes = document.querySelectorAll('.event-info-box');

  allBoxes.forEach(box => {
    if (box.id !== id) {
      box.style.display = 'none';
    }
  });

  // Toggle current
  infoBox.style.display = infoBox.style.display === 'block' ? 'none' : 'block';
}

