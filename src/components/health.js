export default function health(player, boss, game) {

  let diffX = Math.abs(boss.body.absolutePosition.x - player.position.x)
  let diffZ = Math.abs(boss.body.absolutePosition.z - player.position.z)

  if (diffX < 10 && diffZ < 10) {
    player.health -= 25
    boss.teleportBoss()
    game.audio.ghostHit.play()
  }
}
