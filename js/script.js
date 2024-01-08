var showImagesBtn = document.getElementById('showImagesBtn');
var imageContainer = document.getElementById('imageContainer');
var images = document.querySelectorAll('#imageContainer img');

showImagesBtn.addEventListener('click', function() {
  if (showImagesBtn.innerHTML === 'Ссылки') {
    // Появление контейнера и картинок
    imageContainer.style.opacity = 1;
    images.forEach(function(image, index) {
      setTimeout(function() {
        image.style.opacity = 1;
      }, 100 * index); // Интервал для каждой картинки

      showImagesBtn.innerHTML = 'Закрыть';
    });
  } else {
    // Скрытие контейнера и картинок
    imageContainer.style.opacity = 0;
    images.forEach(function(image) {
      image.style.opacity = 0;
    });

    showImagesBtn.innerHTML = 'Ссылки';
  }
});



