const imgApliada = document.querySelector('#imgAmpliada');
const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        miniaturas.forEach(miniatura => {
            miniatura.style.opacity = '0.4'
        })
        miniatura.style.opacity = '1';
        imgApliada.src = miniatura.src;
        imgApliada.style.display = 'block';
    })
});