import ghostTexture from '../assets/textures/Ghost_color.png'
import health from './health'
export default class Boss {
  constructor(scene, player, game) {
    this.player = player
    this.playerPosition = player.position
    this.startMove = false
    this.speed = 0.09
    this.game = game
    BABYLON.SceneLoader.ImportMeshAsync(
      '',
      '../../public/models/',
      'Ghost.obj'
    ).then((x) => {
      const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

      keyMesh.position.x = 45
      keyMesh.position.y = 1.5
      keyMesh.position.z = 112

      keyMesh.scaling.x = 0.07
      keyMesh.scaling.y = 0.07
      keyMesh.scaling.z = 0.07

      keyMesh.rotation.y = Math.PI / 2

      const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
      keyWrap.diffuseTexture = new BABYLON.Texture(ghostTexture, scene)
      keyMesh.material = keyWrap
      this.body = keyMesh
    })
  }
  rotate() {
    let diffX = Math.abs(this.body.absolutePosition.x - this.player.position.x)
    let diffZ = Math.abs(this.body.absolutePosition.z - this.player.position.z)
  
    if (diffX > 20 || diffZ > 20) {
      this.body.lookAt(this.player.position)
    }
  }
  move(playerLocation) {
    let playerX = playerLocation.x
    let playerZ = playerLocation.z
    let playerY = playerLocation.y

    let bossX = this.body.absolutePosition.x
    let bossY = this.body.absolutePosition.y
    let bossZ = this.body.absolutePosition.z

    let newBossX
    let newBossY

    if (Math.floor(bossX) === Math.floor(playerX)) {
      newBossX = bossX
    } else if (Math.floor(bossX) > Math.floor(playerX)) {
      newBossX = bossX - this.speed
    } else {
      newBossX = bossX + this.speed
    }

    if (Math.floor(bossY + this.differenceInY) === Math.floor(playerY)) {
      newBossY = bossY
    } else if (Math.floor(bossY) + this.differenceInY > Math.floor(playerY)) {
      newBossY = bossY - this.speed
    } else {
      newBossY = bossY + this.speed
    }

    if (Math.floor(bossZ) === Math.floor(playerZ)) {
      this.body.position = new BABYLON.Vector3(newBossX, newBossY, bossZ)
    } else if (Math.floor(bossZ) > Math.floor(playerZ)) {
      this.body.position = new BABYLON.Vector3(
        newBossX,
        newBossY,
        bossZ - this.speed
      )
    } else {
      this.body.position = new BABYLON.Vector3(
        newBossX,
        newBossY,
        bossZ + this.speed
      )
    }
    this.rotate()

  }
  initialize() {
    this.startMove = true
    console.log(this.body.absolutePosition.y, this.playerPosition.y)
    this.differenceInY = Math.abs(
      this.body.absolutePosition.y - this.playerPosition.y
    )
  }

  //----teleport boss-----//

  teleportBoss() {
    const maxRange = 160
    const minRange = -160
    const x = Math.random() * (maxRange - minRange) + minRange
    const z = Math.random() * (maxRange - minRange) + minRange
    const y = this.body.absolutePosition.y
    this.body.position = new BABYLON.Vector3(x, y, z)
  }

  updateBoss() {
    if (this.startMove && this.player.isLightOn) {
      this.move(this.player.position)
    }
    if (this.startMove) {
      health(this.player, this, this.game)
    }
  }
}
