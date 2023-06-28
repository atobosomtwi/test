const body = document.querySelector('body')
const navbar = document.querySelector('.navbar')
const toggler = document.querySelector('.toggler')

toggler.addEventListener('click', ()=>{
    navbar.classList.toggle("nav");
})
