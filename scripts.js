const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохраненную тему в localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Сохраняем выбор пользователя
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});