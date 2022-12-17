import London from './assets/London.png'
let img = document.querySelector('#image')
img.src = London

import Txt from './assets/London.txt'
let p = document.querySelector('#para')
p.innerText = Txt

import './css/page.css'

let btn = document.getElementById('click')
btn.onclick = () => {
    import('./click.js')
    .then(({default: click}) => {
        click()
    })
}

import Challenge from './assets/challenge.html'
let anchor = document.createElement('a')
anchor.href = Challenge
anchor.innerText = 'Challenge Page'
document.body.append(anchor)
