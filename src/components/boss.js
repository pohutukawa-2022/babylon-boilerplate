export default class Boss{
  constructor(){
    this.boss = BABYLON.MeshBuilder.CreateBox('boss', {
      width: 5,
      height: 10,
      depth: 5,
    })
    this.boss.position.y = 5
    this.boss.position.z = 20
    this.boss.position.x = 30
    
  }
  rotate(){
    this.boss.rotation.y += 0.1
  }
}