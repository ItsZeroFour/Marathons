// Подключения
const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const board2 = document.querySelector('.board2')
const again = document.querySelector('.again')
let time = 0
let score = 0

// Убираем "#" в URL странице. Переннос на следующую страницу
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

// Перенос на следующую страницу + выбор времени
timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

// Создаем слушатель события, который добавляет очки за нажатие круга и убирает его
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

// Отсчет таймера
function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

// Запуск времени и его остановка
function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
    let current = --time
        if (current < 10) {             //  Добовляем "0" спереди, если таймер меньше 10
        current = `0${current}`
        }
    setTime(current)
    }

}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

// При истечении времени, игра заканчивается
function finishGame() {
    timeEl.parentNode.classList.add('hide')         //  Удаление счета при завершении времени
    board.innerHTML = `<h1 class="score-text" >Cчет: <span class:"primary">${score}</span></h1>`
    board.classList.remove('board')
    board.classList.add('board2')
}

// Создание круга
function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}