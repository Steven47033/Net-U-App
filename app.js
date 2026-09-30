document.addEventListener('DOMContentLoaded', () => {

    // Cambiar Idioma
    const langToggleBtn = document.getElementById('lang-toggle');
    langToggleBtn.addEventListener('click', () => {
        alert('Cambiando a Inglés (Próximamente)');
    });

    // Botones Principales
    document.getElementById('btn-continue').addEventListener('click', () => {
        console.log('Cargando: Mi Rutina');
    });

    document.getElementById('btn-modules').addEventListener('click', () => {
        console.log('Abriendo: Catálogo de Módulos');
    });

    // Atajos
    document.getElementById('shortcut-timer').addEventListener('click', () => {
        console.log('Iniciando Temporizador...');
    });

    document.getElementById('shortcut-pomodoro').addEventListener('click', () => {
        console.log('Abriendo Reloj Pomodoro...');
    });

    // Navegación Inferior (Efecto Visual)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Quita la clase 'active' de todos los botones
            navItems.forEach(nav => nav.classList.remove('active'));
            // Añade la clase 'active' al botón clicado (lo pinta de azul)
            this.classList.add('active');
            console.log('Navegando a: ' + this.id);
        });
    });
});