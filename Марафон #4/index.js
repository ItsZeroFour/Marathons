// Mini Game
const board = document.querySelector('#board')
const colors = ['#ED002F', '#4965D6', '#DB37BC', '#9303A7', '#DE0052']  //   Добавляем цвета
const SQUARES_NUMBER = 700                                  // Пишем нужное значение (количество квадратов)

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const suqare = document.createElement('div')          // Создаем цикл, куда будем создавать и записывать элементы (в div)
    suqare.classList.add('square')                       // Создаем класс

    suqare.addEventListener('mouseover', () => setColor(suqare))            // Добавляем слушатель события (движение мыши)

    suqare.addEventListener('mouseleave', () => removeColor(suqare))        // Добавляем событие, которое будет убирать квадраты

    board.append(suqare)                                                    // Добавляем дивы в HTML
}

// Function
function setColor(element) {
    const color = getRandomColor()                                    // Добавляем рандомный цвет
    element.style.backgroundColor = color                            // Добавляем анимацию рисования
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` // Добавляем тень
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {                                       //  Создаем функцию, которая будет рандомно выбирать цвет
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}