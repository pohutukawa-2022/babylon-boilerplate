export default function health(player, boss) {
  document.getElementById('health').innerHTML = `HEALTH: ${player.health}`

  let diffX = Math.abs(boss.body.absolutePosition.x - player.position.x)
  let diffZ = Math.abs(boss.body.absolutePosition.z - player.position.z)

  if (diffX < 15 && diffZ < 15) {
    console.log('hit')
    player.health -= 25
    boss.teleportBoss()
  }
}
