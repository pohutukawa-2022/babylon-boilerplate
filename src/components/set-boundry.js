
import hedges from './../assets/textures/hedges.jpg'
import dryGrass from './../assets/textures/dryGrass.jpg'
export default function setBoundry(scene){
  let ground = BABYLON.MeshBuilder.CreateGround(
    'ground',
    { width: 300, height: 300, subdivisions: 2 },
    scene
    
    )
    
  let boundry1 = new BABYLON.MeshBuilder.CreateBox(
    'boundry1',
    {
      width: 300,
      height: 10,
      depth: 2,
    },
    scene
  )
  boundry1.position.x = 0
  boundry1.position.y = 5
  boundry1.position.z = 150

  const hedgeWrap1 = new BABYLON.StandardMaterial('hedge1', scene)
  hedgeWrap1.diffuseTexture = new BABYLON.Texture(hedges, scene)

  boundry1.material = hedgeWrap1
  boundry1.checkCollisions = true

  let boundry2 = new BABYLON.MeshBuilder.CreateBox(
    'boundry2',
    {
      width: 300,
      height: 10,
      depth: 2,
    },
    scene
  )
  boundry2.position.x = 0
  boundry2.position.y = 5
  boundry2.position.z = -150

  const hedgeWrap2 = new BABYLON.StandardMaterial('hedge2', scene)
  hedgeWrap2.diffuseTexture = new BABYLON.Texture(hedges, scene)

  boundry2.material = hedgeWrap2
  boundry2.checkCollisions = true

  let boundry3 = new BABYLON.MeshBuilder.CreateBox(
    'boundry3',
    {
      width: 300,
      height: 10,
      depth: 2,
    },
    scene
  )
  boundry3.position.x = 150
  boundry3.position.y = 5
  boundry3.position.z = 0
  boundry3.rotation.y = Math.PI / 2

  const hedgeWrap3 = new BABYLON.StandardMaterial('hedge3', scene)
  hedgeWrap3.diffuseTexture = new BABYLON.Texture(hedges, scene)

  boundry3.material = hedgeWrap3
  boundry3.checkCollisions = true

  let boundry4 = new BABYLON.MeshBuilder.CreateBox(
    'boundry4',
    {
      width: 300,
      height: 10,
      depth: 2,
    },
    scene
  )
  boundry4.position.x = -150
  boundry4.position.y = 5
  boundry4.position.z = 0
  boundry4.rotation.y = Math.PI / 2

  const hedgeWrap4 = new BABYLON.StandardMaterial('hedge4', scene)
  hedgeWrap4.diffuseTexture = new BABYLON.Texture(hedges, scene)

  boundry4.material = hedgeWrap4
  boundry4.checkCollisions = true

  const groundOutside = new BABYLON.StandardMaterial()
  groundOutside.diffuseTexture = new BABYLON.Texture(dryGrass, scene)

  ground.checkCollisions = true
  ground.material = groundOutside

}