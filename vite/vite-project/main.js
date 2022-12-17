import './style.scss'
let lazyButton = document.getElementById('btn')
lazyButton.onclick = () => {
  import('./click.js').then(({default:click}) => {
    click()
  })
}
