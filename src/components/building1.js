import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import metalTexture from '../assets/textures/metal.jpeg'
import woodTexture from '../assets/textures/darkWood.jpeg'
import bathTexture from '../assets/textures/bath.jpeg'
import personTexture from '../assets/textures/metal.jpeg'

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
    deskMesh.checkCollisions = true
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
    deskMesh.checkCollisions = true
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
    deskMesh.checkCollisions = true
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
    deskMesh.checkCollisions = true
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
    deskMesh.checkCollisions = true
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
    deskMesh.checkCollisions = true
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
    chairMesh.checkCollisions = true
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
    chairMesh.checkCollisions = true
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
    chairMesh.checkCollisions = true
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
    chairMesh.checkCollisions = true
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
    chairMesh.checkCollisions = true
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
    chairMesh.checkCollisions = true
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

    lockerMesh.checkCollisions = true
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
    lockerMesh.checkCollisions = true
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
    lockerMesh.checkCollisions = true
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
    lockerMesh.checkCollisions = true
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
    podiumMesh.checkCollisions = true
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
    bathMesh.checkCollisions = true
  })

  const person = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'person.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 95
    lockerMesh.position.y = 1
    lockerMesh.position.z = 47
    lockerMesh.scaling.x = 0.05
    lockerMesh.scaling.y = 0.05
    lockerMesh.scaling.z = 0.05
    lockerMesh.rotation.y = Math.PI / 1
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(personTexture, scene)
    lockerMesh.material = lockerWrap
    lockerMesh.checkCollisions = true
  })

  const person2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'person.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 102
    lockerMesh.position.y = 1
    lockerMesh.position.z = 47
    lockerMesh.scaling.x = 0.05
    lockerMesh.scaling.y = 0.05
    lockerMesh.scaling.z = 0.05
    lockerMesh.rotation.y = Math.PI / 1
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(personTexture, scene)
    lockerMesh.material = lockerWrap
    lockerMesh.checkCollisions = true
  })

  const person3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'person.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 109
    lockerMesh.position.y = 1
    lockerMesh.position.z = 47
    lockerMesh.scaling.x = 0.05
    lockerMesh.scaling.y = 0.05
    lockerMesh.scaling.z = 0.05
    lockerMesh.rotation.y = Math.PI / 1
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(personTexture, scene)
    lockerMesh.material = lockerWrap
    lockerMesh.checkCollisions = true
  })

  const person4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'person.obj'
  ).then((x) => {
    const lockerMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    lockerMesh.position.x = 116
    lockerMesh.position.y = 1
    lockerMesh.position.z = 47
    lockerMesh.scaling.x = 0.05
    lockerMesh.scaling.y = 0.05
    lockerMesh.scaling.z = 0.05
    lockerMesh.rotation.y = Math.PI / 1
    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(personTexture, scene)
    lockerMesh.material = lockerWrap
    lockerMesh.checkCollisions = true
  })
}
