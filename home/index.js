console.log('estou funcionando')


const btnMobile = document.querySelector('#btn-mobile');
const text = document.querySelector('.text')
const input = document.querySelector('.blocoIcones')



function toggleMenu(){
    const nav = document.querySelector('#nav');
    // nav.classList.toggle('active')
    if(nav.classList.toggle('active')){
        text.style.display ='none'
        input.style.display ='none'
    }else{
        text.style.display ='block'
        input.style.display ='block'
    }
} 

btnMobile.addEventListener('click', toggleMenu);


