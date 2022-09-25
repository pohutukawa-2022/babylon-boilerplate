import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import metalTexture from '../assets/textures/metal.jpeg'

import woodTexture from '../assets/textures/darkWood.jpeg'

import bathTexture from '../assets/textures/bath.jpeg'

import keyTexture from '../assets/textures/key.jpeg'

import bookTexture from '../assets/textures/bookshelf.png'

import wellTexture from '../assets/textures/well.png'

import bedTexture from '../assets/textures/bed.png'

import stairTexture from '../assets/textures/stair.jpg'

export default function Furniture(name, scene, player) {
  const schoolDesk = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'desk.obj'
  ).then((x) => {
    const deskMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    deskMesh.position.x = 75
    deskMesh.position.y = 0
    deskMesh.position.z = -40
    deskMesh.scaling.x = 0.15
    deskMesh.scaling.y = 0.15
    deskMesh.scaling.z = 0.15

    deskMesh.rotation.y = Math.PI / 2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    deskMesh.material = lockerWrap
  })

  const schoolDesk2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'desk.obj'
  ).then((x) => {
    const deskMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    deskMesh.position.x = 85
    deskMesh.position.y = 0
    deskMesh.position.z = -40
    deskMesh.scaling.x = 0.15
    deskMesh.scaling.y = 0.15
    deskMesh.scaling.z = 0.15

    deskMesh.rotation.y = Math.PI / 2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    deskMesh.material = lockerWrap
  })

  const schoolDesk3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'desk.obj'
  ).then((x) => {
    const deskMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    deskMesh.position.x = 95
    deskMesh.position.y = 0
    deskMesh.position.z = -40
    deskMesh.scaling.x = 0.15
    deskMesh.scaling.y = 0.15
    deskMesh.scaling.z = 0.15

    deskMesh.rotation.y = Math.PI / 2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    deskMesh.material = lockerWrap
  })

  const schoolDesk4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'desk.obj'
  ).then((x) => {
    const deskMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    deskMesh.position.x = 75
    deskMesh.position.y = 0
    deskMesh.position.z = -30
    deskMesh.scaling.x = 0.15
    deskMesh.scaling.y = 0.15
    deskMesh.scaling.z = 0.15

    deskMesh.rotation.y = Math.PI / 2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    deskMesh.material = lockerWrap
  })

  const schoolDesk5 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'desk.obj'
  ).then((x) => {
    const deskMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    deskMesh.position.x = 85
    deskMesh.position.y = 0
    deskMesh.position.z = -30
    deskMesh.scaling.x = 0.15
    deskMesh.scaling.y = 0.15
    deskMesh.scaling.z = 0.15

    deskMesh.rotation.y = Math.PI / 2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    deskMesh.material = lockerWrap
  })

  const schoolDesk6 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'desk.obj'
  ).then((x) => {
    const deskMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    deskMesh.position.x = 95
    deskMesh.position.y = 0
    deskMesh.position.z = -30
    deskMesh.scaling.x = 0.15
    deskMesh.scaling.y = 0.15
    deskMesh.scaling.z = 0.15

    deskMesh.rotation.y = Math.PI / 2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    deskMesh.material = lockerWrap
  })

  const schoolChair = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldSchoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = 75
    chairMesh.position.y = 0
    chairMesh.position.z = -33
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const schoolChair2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldSchoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = 85
    chairMesh.position.y = 0
    chairMesh.position.z = -33
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const schoolChair3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldSchoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = 95
    chairMesh.position.y = 0
    chairMesh.position.z = -33
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const schoolChair4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldSchoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = 75
    chairMesh.position.y = 0
    chairMesh.position.z = -43
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const schoolChair5 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldSchoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = 85
    chairMesh.position.y = 0
    chairMesh.position.z = -43
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const schoolChair6 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldSchoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = 95
    chairMesh.position.y = 0
    chairMesh.position.z = -43
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const locker = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Locker.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 101.5
    lockerMesh.position.y = 0.5
    lockerMesh.position.z = 10
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5
    lockerMesh.rotation.y = Math.PI / 1
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
    lockerMesh.position.x = 101.5
    lockerMesh.position.y = 0.5
    lockerMesh.position.z = 12
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5
    lockerMesh.rotation.y = Math.PI / 1
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
    lockerMesh.position.x = 100
    lockerMesh.position.y = 2.6
    lockerMesh.position.z = 18
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
    lockerMesh.position.x = 101
    lockerMesh.position.y = 5
    lockerMesh.position.z = 23.5
    lockerMesh.scaling.x = 5
    lockerMesh.scaling.y = 5
    lockerMesh.scaling.z = 5
    lockerMesh.rotation.y = Math.PI / -2

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    lockerMesh.material = lockerWrap
  })

  const podium = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Podium.obj'
  ).then((x) => {
    const podiumMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    podiumMesh.position.x = 85
    podiumMesh.position.y = 0
    podiumMesh.position.z = -15

    podiumMesh.scaling.x = 0.1
    podiumMesh.scaling.y = 0.1
    podiumMesh.scaling.z = 0.1

    podiumMesh.rotation.y = Math.PI / -1

    const woodWrap = new BABYLON.StandardMaterial('woodWrap', scene)
    woodWrap.diffuseTexture = new BABYLON.Texture(woodTexture, scene)
    podiumMesh.material = woodWrap
  })

  const bath = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bath_obj.obj'
  ).then((x) => {
    const bathMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    bathMesh.position.x = 115
    bathMesh.position.y = 2
    bathMesh.position.z = -2

    bathMesh.scaling.x = 0.3
    bathMesh.scaling.y = 0.3
    bathMesh.scaling.z = 0.3

    // podiumMesh.rotation.y = Math.PI / -1

    const bathWrap = new BABYLON.StandardMaterial('bathdWrap', scene)
    bathWrap.diffuseTexture = new BABYLON.Texture(bathTexture, scene)
    bathMesh.material = bathWrap
  })

  // const sink = BABYLON.SceneLoader.ImportMeshAsync(
  //   '',
  //   '../../public/models/',
  //   'cabinet.obj'
  // ).then((x) => {
  //   const bathMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
  //   bathMesh.position.x = 0
  //   bathMesh.position.y = 0
  //   bathMesh.position.z = 0

  //   bathMesh.scaling.x = 10
  //   bathMesh.scaling.y = 10
  //   bathMesh.scaling.z = 10

  //   bathMesh.rotation.x = Math.PI / -2
  // })

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

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
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

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
    player.keys.push({ key: keyMesh, xMax: 120, xMin: 110, zMax: 2, zMin: -6 })
  })

  const bookshelf = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 20
    keyMesh.position.y = 0
    keyMesh.position.z = 101

    keyMesh.scaling.x = 7
    keyMesh.scaling.y = 7
    keyMesh.scaling.z = 7

    // keyMesh.rotation.z = Math.PI / 2
    // keyMesh.rotation.y = Math.PI / 2
    // keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 26
    keyMesh.position.y = 0
    keyMesh.position.z = 101

    keyMesh.scaling.x = 7
    keyMesh.scaling.y = 7
    keyMesh.scaling.z = 7

    // keyMesh.rotation.z = Math.PI / 2
    // keyMesh.rotation.y = Math.PI / 2
    // keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const well = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Well.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -50
    keyMesh.position.y = 0
    keyMesh.position.z = 110

    keyMesh.scaling.x = 3
    keyMesh.scaling.y = 3
    keyMesh.scaling.z = 3

    // keyMesh.rotation.z = Math.PI / 2
    // keyMesh.rotation.y = Math.PI / 2
    // keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(wellTexture, scene)
    keyMesh.material = keyWrap
  })

  // const bed = BABYLON.SceneLoader.ImportMeshAsync(
  //   '',
  //   '../../public/models/',
  //   'Old_bed.obj'
  // ).then((x) => {
  //   const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
  //   keyMesh.position.x = -30
  //   keyMesh.position.y = 0
  //   keyMesh.position.z = 110

  //   keyMesh.scaling.x = 0.03
  //   keyMesh.scaling.y = 0.03
  //   keyMesh.scaling.z = 0.03

  //   // keyMesh.rotation.z = Math.PI / 2
  //   // keyMesh.rotation.y = Math.PI / 2
  //   // keyMesh.rotation.x = Math.PI / 2

  //   const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
  //   keyWrap.diffuseTexture = new BABYLON.Texture(bedTexture, scene)
  //   keyMesh.material = keyWrap
  // })

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

    // keyMesh.rotation.z = Math.PI / 2
    keyMesh.rotation.y = Math.PI / -2
    // keyMesh.rotation.x = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(stairTexture, scene)
    keyMesh.material = keyWrap

    keyMesh.checkCollisions = true
  })

  /* -------LIBRARY-------- */

  const bookshelf3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -94
    keyMesh.position.y = 0.5
    keyMesh.position.z = 11.6

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -94
    keyMesh.position.y = 0.5
    keyMesh.position.z = 19.3

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf5 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -94
    keyMesh.position.y = 0.5
    keyMesh.position.z = 20.4

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf6 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -94
    keyMesh.position.y = 0.5
    keyMesh.position.z = 28.3

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf7 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -94
    keyMesh.position.y = 0.5
    keyMesh.position.z = 29.4

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf8 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -94
    keyMesh.position.y = 0.5
    keyMesh.position.z = 36.3

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf9 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -94
    keyMesh.position.y = 0.5
    keyMesh.position.z = 37.4

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf10 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -82
    keyMesh.position.y = 0.5
    keyMesh.position.z = 23

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf11 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -81
    keyMesh.position.y = 0.5
    keyMesh.position.z = 23

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf12 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -82
    keyMesh.position.y = 0.5
    keyMesh.position.z = 28

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf13 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -82
    keyMesh.position.y = 0.5
    keyMesh.position.z = 28

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf14 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -81
    keyMesh.position.y = 0.5
    keyMesh.position.z = 28

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf15 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -81
    keyMesh.position.y = 0.5
    keyMesh.position.z = 33

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const bookshelf16 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'bookshelf.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -82
    keyMesh.position.y = 0.5
    keyMesh.position.z = 33

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 4
    keyMesh.scaling.z = 3

    keyMesh.rotation.y = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keydWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })
}
Furniture()
