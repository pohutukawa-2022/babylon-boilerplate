import ghostTexture from '../assets/textures/Ghost_color.png'
export default class Boss{
  constructor(scene, player){
    this.player = player
    this.playerPosition = player.position
    this.startMove = false
    this.speed = 0.1
    BABYLON.SceneLoader.ImportMeshAsync(
      '',
      '../../public/models/',
      'Ghost.obj'
    ).then((x) => {
      const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
  
      keyMesh.position.x = 20
      keyMesh.position.y = 1
      keyMesh.position.z = 0
  
      keyMesh.scaling.x = 0.07
      keyMesh.scaling.y = 0.07
      keyMesh.scaling.z = 0.07
  
      const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
      keyWrap.diffuseTexture = new BABYLON.Texture(ghostTexture, scene)
      keyMesh.material = keyWrap
      this.body = keyMesh
    })
  }
  rotate(){
    // this.body.rotation.y += 0.05
  }
  move(playerLocation){
    let playerX = playerLocation.x
    let playerZ = playerLocation.z
    let playerY = playerLocation.y
    
    let bossX = this.body.absolutePosition.x
    let bossY = this.body.absolutePosition.y
    let bossZ = this.body.absolutePosition.z

    let newBossX
    let newBossY

    if(Math.floor(bossX) === Math.floor(playerX)){
      newBossX = bossX
    }
    else if( Math.floor(bossX) > Math.floor(playerX)  ){
      newBossX = bossX - this.speed
    } else{
      newBossX = bossX + this.speed
    }

    if(Math.floor(bossY  + this.differenceInY) === Math.floor(playerY)){
      newBossY = bossY
    }
    else if( Math.floor(bossY) + this.differenceInY > Math.floor(playerY)){
      newBossY = bossY - this.speed
    } else{
      newBossY = bossY + this.speed
    }

    if(Math.floor(bossZ) === Math.floor(playerZ)){
      this.body.position = new BABYLON.Vector3(newBossX, newBossY, bossZ)
    }
    else if(Math.floor(bossZ) > Math.floor(playerZ) ){
      this.body.position = new BABYLON.Vector3(newBossX, newBossY, bossZ - this.speed)
    } else{
      
      this.body.position = new BABYLON.Vector3(newBossX, newBossY, bossZ  + this.speed)
    }
  }
  initialize(){
    this.startMove = true
    console.log(this.body.absolutePosition.y, this.playerPosition.y);
    this.differenceInY = Math.abs(this.body.absolutePosition.y - this.playerPosition.y)
    console.log(this.differenceInY);
  }
  updatePosition(){
    // let bossX = this.body.absolutePosition.x
    // let bossY = this.body.absolutePosition.y
    // let bossZ = this.body.absolutePosition.z
    // this.body.position = new BABYLON.Vector3(bossX, bossY, bossZ)
  }
}