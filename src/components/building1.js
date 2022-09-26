import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import metalTexture from '../assets/textures/metal.jpeg'
import woodTexture from '../assets/textures/darkWood.jpeg'
import bathTexture from '../assets/textures/bath.jpeg'
import keyTexture from '../assets/textures/key.jpeg'
import bookTexture from '../assets/textures/bookshelf.png'
import wellTexture from '../assets/textures/well.png'
import stairTexture from '../assets/textures/stair.jpg'
import sofaTexture from '../assets/textures/sofa.jpg'
import redwoodTexture from '../assets/textures/redwood.jpeg'
import tvTexture from '../assets/textures/tv.jpg'
import linoTexture from '../assets/textures/lino.jpeg'
import diningTexture from '../assets/textures/diningset.png'
import plateTexture from '../assets/textures/plate.png'
import medTexture from '../assets/textures/med.png'

export default function building1(name, scene, player) {
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

    const bathWrap = new BABYLON.StandardMaterial('bathWrap', scene)
    bathWrap.diffuseTexture = new BABYLON.Texture(bathTexture, scene)
    bathMesh.material = bathWrap
  })
}
