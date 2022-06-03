// Получаем классы
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);       //  Находится над плейсхолдером
  placeholder.addEventListener('dragenter', dragenter);     //  Когда заходим на территорию
  placeholder.addEventListener('dragleave', dragleave);     //  Когда перетащили, но вышли
  placeholder.addEventListener('drop', dragdrop);           //  Когда отпустили
}

// Добавление класса при перетаскивание
function dragstart(event) {
  event.target.classList.add('hold');
  // Делаем сет таймаут, что бы наш элемент не пропадал сразу при перетаскивании
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  // Удаление классы при завершении перетаскивания и добавляем класс item
  event.target.className = 'item'
}

function dragover(event) {
  // ВОзможность перетаскивания
  event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add('hovered')
}

function dragleave(event) {
  // Когда покидаем зону, бордер удаляется
  event.target.classList.remove('hovered')  
}

function dragdrop(event) {
  event.target.classList.remove('hovered')  
  event.target.append(item)
}

