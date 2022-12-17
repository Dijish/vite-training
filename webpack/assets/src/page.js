import London from './assets/London.png'
let img = document.querySelector('#image')
img.src = London

import Txt from './assets/London.txt'
let p = document.querySelector('#para')
p.innerText = Txt

import bg from './assets/bg.svg'
document.body.style.background = `url(${bg})`