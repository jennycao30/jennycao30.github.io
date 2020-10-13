//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['rgb(255, 77, 77)', 'rgb(230, 255, 255)', 'rgb(26, 136, 255)', 'rgb(255, 255, 204)', 'rgb(255, 230, 255)', 'rgb(204, 204, 255)']

body.style.backgroundColor = 'rgb(204, 229, 255)'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
