const navButton = document.querySelector('.nav-button')
const navMenu = document.querySelector('.nav-menu')
console.log("🚀 ~ navButton:", navButton)
navButton.addEventListener('click',function(){
    navMenu.classList.toggle('h-screen-minus-header')
    navMenu.classList.toggle('h-0')
})
