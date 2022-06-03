// Берем все дивы с классом slide
const slides = document.querySelectorAll('.slide');

// На каждой итерации создаем переменную slide и берем данные из переменной slides
for (const slide of slides) {
  // Добавляем событие клика и присваиваем класс active при нажатии на картинку
  slide.addEventListener('click', () => {
    // Function
    clearClassesActive();

    slide.classList.add('active');
  })
}

// Удаляем все классы active у предыдущих картинок
function clearClassesActive() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}