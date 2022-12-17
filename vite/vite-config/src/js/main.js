let lazyButton = document.getElementById('btn')
lazyButton.onclick = () => {
  import('./click.js').then(({default:click}) => {
    click()
  })
}

import Image from '../assets/London.png'
import Text from '../assets/London.txt?raw'
import Test from '../assets/test.js?url'

let image = document.querySelector('.image')
let para = document.querySelector('.para')
image.src = Image
para.innerText = Text

let scriptTag = document.createElement('script')
scriptTag.src = Test
document.head.append(scriptTag)
