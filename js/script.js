// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Кнопка "Войти"
document.querySelector('.btn-login').addEventListener('click', () => {
    alert('Функция авторизации будет добавлена позже!');
});

// Кнопки скачивания
document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Материал скачивается...');
    });
});