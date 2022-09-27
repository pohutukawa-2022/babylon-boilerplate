export default function health(game) {
  // if (game.inMenu === true) {
  //   document.getElementById('health').innerHTML = ''
  // } else {
  //   document.getElementById(
  //     'health'
  //   ).innerHTML = `HEALTH: ${game.player.health}`
  // }
  document.getElementById('health').innerHTML = `HEALTH: ${game.player.health}`

  let player = game.player
  let boss = game.boss.body

  console.log('player', player.position)
  console.log('ghost', boss.absolutePosition)

  setTimeout(() => {
    if (
      Math.floor(boss.absolutePosition.x) === Math.floor(player.position.x) &&
      Math.floor(boss.absolutePosition.z) === Math.floor(player.position.z)
    ) {
      console.log('hit')
      game.player.health - 10
    }
  }, 500)
}
