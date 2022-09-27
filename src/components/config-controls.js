export default function configControls(game){
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      if(game.inMenu){
        game.exitMenu()
      }
    }
    if (e.key === 'Shift') {
      game.player.sprinting = true
    } else if (e.key === 'f') {
      game.player.toggleLight()
    } else if (e.key === 'e') {
      let foundKey = game.player.checkForKey(game.keys)
      if (foundKey) {
        document.getElementById(
          'key-found'
        ).innerHTML = `${game.player.keysFound} OUT OF 5 KEYS FOUND`
        game.churchBell.play()

        setTimeout(() => {
          document.getElementById('key-found').innerHTML = ''
          game.churchBell.pause()
          game.churchBell.currentTime = 0
        }, 4000)
      }
    }
  })
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
      game.player.sprinting = false
    }
  })
}