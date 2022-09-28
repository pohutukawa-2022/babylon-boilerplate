export default function configControls(game) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (game.inMenu) {
        game.exitMenu()
      }
    } else if(e.key === 'b'){
      game.gameOver()
    }else if(e.key === 'n'){
      game.gameWon()
    }else if (e.key === '1') {
      game.boss.initialize()
    } else if (e.key === 'Shift') {
      game.player.sprinting = true
    } else if (e.key === 'f') {
      game.player.toggleLight()
    } else if (e.key === 'e') {
      if (game.player.checkForKey(game.keys)) {
        document.getElementById(
          'announcement'
        ).innerHTML = `${game.player.keysFound} OUT OF 5 KEYS FOUND`
        game.churchBell.play()
        setTimeout(() => {
          document.getElementById('key-found').innerHTML = ''
          game.churchBell.pause()
          game.churchBell.currentTime = 0
        }, 4000)
      }else{
        game.player.checkWin(game.winningLocation)
      }
    }
  })
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
      game.player.sprinting = false
    }
  })
}
