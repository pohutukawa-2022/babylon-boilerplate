import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import metalTexture from '../assets/textures/metal.jpeg'
import cashTexture from '../assets/textures/cash.png'
import safeTexture from '../assets/textures/safe.png'
import beanbagTexture from '../assets/textures/beanbag.png'
import linoTexture from '../assets/textures/lino.jpeg'
import oilTexture from '../assets/textures/oil.jpeg'
import frame1 from '../assets/textures/frame1.png'
export default function building4(name, scene) {
  const locker = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Locker.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -20
    lockerMesh.position.y = 1.5
    lockerMesh.position.z = -101
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5
    lockerMesh.rotation.y = Math.PI / -2
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const metalBox2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'metal_box.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -24.5
    lockerMesh.position.y = 2.6
    lockerMesh.position.z = -100
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const locker2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Locker.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -36
    lockerMesh.position.y = 1.5
    lockerMesh.position.z = -101
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5
    lockerMesh.rotation.y = Math.PI / -2
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const box2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'locker2.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -33
    lockerMesh.position.y = 6
    lockerMesh.position.z = -101
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const cash = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'cash.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -24.5
    lockerMesh.position.y = 5
    lockerMesh.position.z = -100.5
    lockerMesh.scaling.x = 3.8
    lockerMesh.scaling.y = 3.8
    lockerMesh.scaling.z = 3.8

    lockerMesh.rotation.y = Math.PI / 1

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(cashTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const safe = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'safe_open.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -15
    lockerMesh.position.y = 1
    lockerMesh.position.z = -100
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(safeTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const beanBag = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'beanbag.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -45
    lockerMesh.position.y = 1.2
    lockerMesh.position.z = -73
    lockerMesh.scaling.x = 4
    lockerMesh.scaling.y = 4
    lockerMesh.scaling.z = 4

    lockerMesh.rotation.y = Math.PI / 2
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(beanbagTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const beanBag2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'beanbag.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -45
    lockerMesh.position.y = 1.2
    lockerMesh.position.z = -93
    lockerMesh.scaling.x = 4
    lockerMesh.scaling.y = 4
    lockerMesh.scaling.z = 4

    // lockerMesh.rotation.y = Math.PI / 1
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(beanbagTexture, scene)
    lockerMesh.material = lockerWrap
  })
  const shoppingCart = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'shopping_cart.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = -30
    lockerMesh.position.y = 1.2
    lockerMesh.position.z = -73
    lockerMesh.scaling.x = 6
    lockerMesh.scaling.y = 6
    lockerMesh.scaling.z = 6

    lockerMesh.rotation.y = Math.PI / 1
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(linoTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const oilBarrel = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'oil.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 20
    lockerMesh.position.y = 1.2
    lockerMesh.position.z = -107
    lockerMesh.scaling.x = 6
    lockerMesh.scaling.y = 6
    lockerMesh.scaling.z = 6

    lockerMesh.rotation.y = Math.PI / 2
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(oilTexture, scene)
    lockerMesh.material = lockerWrap

    lockerMesh.checkCollisions = true
  })

  const oilBarrel2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'oil.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 20
    lockerMesh.position.y = 1.2
    lockerMesh.position.z = -115
    lockerMesh.scaling.x = 6
    lockerMesh.scaling.y = 6
    lockerMesh.scaling.z = 6

    lockerMesh.rotation.y = Math.PI / 2
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(oilTexture, scene)
    lockerMesh.material = lockerWrap

    lockerMesh.checkCollisions = true
  })

  const oilBarrel3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'oil.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 20
    lockerMesh.position.y = 1.2
    lockerMesh.position.z = -123
    lockerMesh.scaling.x = 6
    lockerMesh.scaling.y = 6
    lockerMesh.scaling.z = 6

    lockerMesh.rotation.y = Math.PI / 2
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(oilTexture, scene)
    lockerMesh.material = lockerWrap

    lockerMesh.checkCollisions = true
  })

  const frame = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'frame1.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 36
    lockerMesh.position.y = 8
    lockerMesh.position.z = -115
    lockerMesh.scaling.x = 0.27
    lockerMesh.scaling.y = 0.27
    lockerMesh.scaling.z = 0.5

    lockerMesh.rotation.y = Math.PI / -2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(frame1, scene)
    lockerMesh.material = lockerWrap

    lockerMesh.checkCollisions = true
  })
}
