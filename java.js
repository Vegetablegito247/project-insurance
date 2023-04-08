let burger = document.querySelector('.burger');
let side = document.querySelector('.sidebar');

let burgIcon = document.getElementById('icon');
let closeIcon = document.querySelector('.close')

burgIcon.addEventListener('click', () => {
    side.style.display = 'block';
    burgIcon.style.display = 'none';
    closeIcon.style.display = 'block';

    closeIcon.addEventListener('click', () => {
        side.style.display = 'none';
        burgIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    })
    console.log('clicked me')
})