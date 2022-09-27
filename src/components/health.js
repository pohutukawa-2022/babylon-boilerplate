export default function health(player, boss) {
  // if (game.inMenu === true) {
  //   document.getElementById('health').innerHTML = ''
  // } else {
  //   document.getElementById(
  //     'health'
  //   ).innerHTML = `HEALTH: ${game.player.health}`
  // }
  document.getElementById('health').innerHTML = `HEALTH: ${player.health}`

  // let player = game.player
  // let boss = game.boss.body

  console.log('player', player.position)
  console.log('ghost', boss.body.absolutePosition)

  if (
    Math.floor(boss.body.absolutePosition.x) ===
      Math.floor(player.position.x) &&
    Math.floor(boss.body.absolutePosition.z) === Math.floor(player.position.z)
  ) {
    console.log('hit')
    player.health -= 10
  }
}
