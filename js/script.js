// ======= Плавная прокрутка по якорям =======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
});

// ======= Поиск материалов =======
const searchInput = document.getElementById('searchInput');
if(searchInput){
    searchInput.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.cards .card').forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(term) ? 'block' : 'none';
        });
    });
}

// ======= Фильтры =======
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.cards .card').forEach(card => {
            if(category === 'all' || card.dataset.category === category){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ======= Темная тема =======
const themeToggle = document.getElementById('themeToggle');
if(themeToggle){
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

// ======= Модальные окна входа / регистрации =======
const loginBtn = document.querySelector('.btn-login');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close');
const showRegister = document.getElementById('showRegister');

if(loginBtn && loginModal) {
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
}

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(loginModal) loginModal.style.display = 'none';
        if(registerModal) registerModal.style.display = 'none';
    });
});

if(showRegister && registerModal && loginModal) {
    showRegister.addEventListener('click', e => {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'flex';
    });
}

window.addEventListener('click', e => {
    if(e.target === loginModal) loginModal.style.display = 'none';
    if(e.target === registerModal) registerModal.style.display = 'none';
});

// ======= Форма входа / регистрации =======
document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Вы успешно вошли!');
    if(loginModal) loginModal.style.display = 'none';
});

document.getElementById('registerForm')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Регистрация успешна!');
    if(registerModal) registerModal.style.display = 'none';
});

// ======= Кнопки скачивания материалов =======
document.querySelectorAll('.cards .card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Материал скачивается...');
    });
});
