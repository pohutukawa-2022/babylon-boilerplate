export default class Boss{
  constructor(){
    this.body = BABYLON.SceneLoader.ImportMeshAsync(
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
    })
    
  }
  rotate(){
    this.boss.rotation.y += 0.1
  }
}