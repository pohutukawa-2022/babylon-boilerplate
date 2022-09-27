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

  let diffX = Math.abs(boss.body.absolutePosition.x - player.position.x)
  let diffZ = Math.abs(boss.body.absolutePosition.z - player.position.z)

  if (diffX < 15 && diffZ < 15) {
    console.log('hit')
    player.health -= 25
    boss.teleportBoss()
  }
}
