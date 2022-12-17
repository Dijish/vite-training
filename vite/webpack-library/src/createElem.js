import $ from 'jquery'

export function createElem(tag, text) {
    let element = '<' + tag + '/>'
    $(element).text(text).appendTo('body')
}

// export function deadCode() {
//     return 'deadCodeTreeShaking'
// }
