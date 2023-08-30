document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector("button");

    btn.addEventListener('click', () => {
        alert('Hola!')
    });

    const fondo = document.querySelector('#container')
    fondo.addEventListener('click', () => {
        alert('Hola, soy el div!')
    })
});