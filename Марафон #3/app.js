/*
  Получаем элементы DOM
*/
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

/*
  Получаем ВСЕ дивы со слайдами
*/

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;
/*
  ================================================
  Стави блоки с градиентом на место со слайдерами
  Вычитаем -1 т.к. у нас уже присутствует 1 слайдер
*/

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upButton.addEventListener('click', () => {
/*
  В зависимости от нажатой кнопки (up или button) -
  вызывается одна и та же функция, но с разным кодом
*/
  changeSlid('up');
});

downButton.addEventListener('click', () => {
/*
  В зависимости от нажатой кнопки (up или button) -
  вызывается одна и та же функция, но с разным кодом
*/
  changeSlid('down');
});

function changeSlid(direction) {
  // up
  if (direction === 'up') {
    activeSlideIndex++
/*
  Обнуляем индекс слайдеров, если он
  выходит за их рамки
*/
  if (activeSlideIndex === slidesCount) {
    activeSlideIndex = 0;
  }
  // down
} else if (direction === 'down') {
    activeSlideIndex--
/*
  Если число будет -1, то слайдер
  продолжит работать
*/
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
/*
  ANIMATION  
  Вычесляем высоту
*/
const haight = container.clientHeight

// Slide
mainSlide.style.transform = `translateY(-${activeSlideIndex * haight}px)`;
// Sidebar (блок слева)
sideBar.style.transform = `translateY(${activeSlideIndex * haight}px)`;
}