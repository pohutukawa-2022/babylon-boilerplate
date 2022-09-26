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
  })
}
Furniture()
