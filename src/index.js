const navButton = document.querySelector('.nav-button')
const navMenu = document.querySelector('.nav-menu')
console.log("🚀 ~ navButton:", navButton)
navButton.addEventListener('click',function(){
    navMenu.classList.toggle('hidden')
})
