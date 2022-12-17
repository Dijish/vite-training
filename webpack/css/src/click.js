import './css/click.scss'

export default function() {
    if (document.getElementById('lazyP')) return
    let p = document.createElement('p')
    p.setAttribute('id', 'lazyP')
    p.innerText = 'Hi I am lazy'
    document.body.append(p)
}