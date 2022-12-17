export default function() {
    let p = document.createElement('p')
    // p.innerText = 'on-dmand codes'
    p.innerText = join(['on-demand', 'codes'], ' ')
    document.body.append(p)
}
