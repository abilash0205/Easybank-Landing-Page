const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElements = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){ // CLOSE Hamburger Menu
        header.classList.remove('open')
        body.classList.remove('noscroll')
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    } else {
        body.classList.add('noscroll')
        header.classList.add('open') // OPEN Hamburger Menu
        fadeElements.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    } 
})