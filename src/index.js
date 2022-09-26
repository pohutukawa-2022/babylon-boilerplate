import Game from './components/Game'
import Menu from './components/menu'

window.addEventListener('DOMContentLoaded', () => {
  let game = new Game('babylonCanvas')
  game.createScene()
  game.doRender()

})
