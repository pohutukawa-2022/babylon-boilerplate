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

    keyMesh.scaling.x = 2
    keyMesh.scaling.y = 2
    keyMesh.scaling.z = 2

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
    keyMesh.position.x = -93.2
    keyMesh.position.y = 5.3
    keyMesh.position.z = 29.3

    keyMesh.scaling.x = 2
    keyMesh.scaling.y = 2
    keyMesh.scaling.z = 2

    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / 2
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({
      key: keyMesh,
      xMax: -88.2,
      xMin: -98.2,
      zMax: 34.3,
      zMin: 24.3,
    })
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

    keyMesh.scaling.x = 2
    keyMesh.scaling.y = 2
    keyMesh.scaling.z = 2
    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / 1
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({
      key: keyMesh,
      xMax: -80,
      xMin: -94,
      zMax: -67,
      zMin: -77,
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

    keyMesh.scaling.x = 2
    keyMesh.scaling.y = 2
    keyMesh.scaling.z = 2
    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / 1
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({
      name: 'key4',
      key: keyMesh,
      xMax: 115,
      xMin: 105,
      zMax: 95,
      zMin: 85,
    })
  })

  const key5 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Worn_Key.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 116
    keyMesh.position.y = 9
    keyMesh.position.z = 46.26

    keyMesh.scaling.x = 1.7
    keyMesh.scaling.y = 1.7
    keyMesh.scaling.z = 1.7
    keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / -2
    keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({
      name: 'key4',
      key: keyMesh,
      xMax: 121,
      xMin: 111,
      zMax: 51.26,
      zMin: 41.26,
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
