document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector("button");
    const fondo = document.querySelector('#container');

    function divClick() {
            alert('Hola, soy el div!');
    }
    fondo.addEventListener('dblclick', divClick);

    btn.addEventListener('click', () => {
        alert('Hola!');

        })
});