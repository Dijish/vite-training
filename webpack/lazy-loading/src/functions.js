export default function() {
    let h1 = document.createElement('h1')
    h1.innerText = join(['default', 'export'], ' ')
    document.body.append(h1)
}

export function sayHi() {
    let h1 = document.createElement('h1')
    h1.innerText = join(['Hello', 'Hi'], ' ')
    document.body.append(h1)
}