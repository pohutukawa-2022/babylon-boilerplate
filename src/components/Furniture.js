import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'


import stairTexture from '../assets/textures/stair.jpg'



export default function Furniture(name, scene, player) {
  const stairs = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'stair.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -90
    keyMesh.position.y = 0
    keyMesh.position.z = -76

    keyMesh.scaling.x = 12
    keyMesh.scaling.y = 13
    keyMesh.scaling.z = 12

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(stairTexture, scene)
    keyMesh.material = keyWrap

    keyMesh.checkCollisions = true
  })

 
}
Furniture()
