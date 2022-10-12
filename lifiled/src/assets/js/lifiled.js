var cursor = document.getElementById('cursor');
const header = document.querySelector('#navigation');
const preloader = document.querySelector('#preloader');

document.onmousemove = (e) => {
    cursor.style.left = (e.pageX - 1) + 'px';
    cursor.style.top = (e.pageY - 1) + 'px';
    cursor.style.display = 'block';
}

window.addEventListener('load', () => {
    preloader.style.display = 'none';
});
