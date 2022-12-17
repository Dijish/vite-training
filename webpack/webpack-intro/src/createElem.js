export function createElem(tag, text) {
    let element = document.createElement(tag)
    element.innerText = text
    document.body.append(element)
}

// export function deadCode() {
//     return 'deadCodeTreeShaking'
// }
