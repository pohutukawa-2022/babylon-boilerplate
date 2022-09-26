import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import keyTexture from '../assets/textures/key.jpeg'
import medTexture from '../assets/textures/med.png'

export default function keysAndMed(name, scene, player) {
  //-----------keys-----------//

  const key = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Worn_Key.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 101
    keyMesh.position.y = 5
    keyMesh.position.z = 18

    keyMesh.scaling.x = 3
    keyMesh.scaling.y = 3
    keyMesh.scaling.z = 3

    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / 2
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({ key: keyMesh, xMax: 101, xMin: 96, zMax: 21, zMin: 15 })
  })

  const key2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Worn_Key.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 115
    keyMesh.position.y = 5
    keyMesh.position.z = -2

    keyMesh.scaling.x = 3
    keyMesh.scaling.y = 3
    keyMesh.scaling.z = 3

    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / 2
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({ key: keyMesh, xMax: 120, xMin: 110, zMax: 2, zMin: -6 })
  })

  const key3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Worn_Key.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -87
    keyMesh.position.y = 9.2
    keyMesh.position.z = -72

    keyMesh.scaling.x = 3
    keyMesh.scaling.y = 3
    keyMesh.scaling.z = 3
    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / 1
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({
      key: keyMesh,
      xMax: -82,
      xMin: -92,
      zMax: -76,
      zMin: -68,
    })
  })

  const key4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Worn_Key.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 110
    keyMesh.position.y = 0
    keyMesh.position.z = 90

    keyMesh.scaling.x = 3
    keyMesh.scaling.y = 3
    keyMesh.scaling.z = 3
    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / 1
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({
      key: keyMesh,
      xMax: 100,
      xMin: 120,
      zMax: 80,
      zMin: 100,
    })
  })

  //----------medkit------------//

  const medkit = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'fap.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -14
    keyMesh.position.y = 10
    keyMesh.position.z = 104

    keyMesh.scaling.x = 0.1
    keyMesh.scaling.y = 0.1
    keyMesh.scaling.z = 0.1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(medTexture, scene)

    keyMesh.material = keyWrap
  })

  const medkit2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'fap.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 35
    keyMesh.position.y = 6
    keyMesh.position.z = 100

    keyMesh.scaling.x = 0.08
    keyMesh.scaling.y = 0.08
    keyMesh.scaling.z = 0.08

    keyMesh.rotation.y = Math.PI / 1
    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.x = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(medTexture, scene)

    keyMesh.material = keyWrap
  })

  const medkit3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'fap.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 85
    keyMesh.position.y = 0.5
    keyMesh.position.z = -43

    keyMesh.scaling.x = 0.08
    keyMesh.scaling.y = 0.08
    keyMesh.scaling.z = 0.08

    keyMesh.rotation.y = Math.PI / 1
    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.x = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(medTexture, scene)

    keyMesh.material = keyWrap
  })
}
