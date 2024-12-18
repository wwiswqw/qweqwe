// Функция для показа модального окна
function showSurprise() {
    // Скрыть кнопку
    const button = document.querySelector('.show-button');
    button.style.display = 'none'; // Прячем кнопку

    // Убираем заголовок "Для тебя, моя любимая!" и делаем его невидимым
    const container = document.querySelector('.container');
    container.classList.add('hidden-heading'); // Добавляем класс для скрытия заголовка

    // Затемняем фон и делаем контент ярким
    document.body.classList.add('darkened');
    document.querySelector('.container').classList.add('highlighted');

    // Ожидаем окончания анимации затмения, чтобы показать модальное окно
    setTimeout(() => {
        const modal = document.getElementById('surprise-modal');
        modal.classList.add('show');
    }, 2000); // Задержка 2 секунды для показа модального окна
}

// Функция для закрытия модального окна
function closeSurprise() {
    const modal = document.getElementById('surprise-modal');
    modal.classList.remove('show');

    // Возвращаем нормальное состояние фона и контента
    document.body.classList.remove('darkened');
    document.querySelector('.container').classList.remove('highlighted');
}

