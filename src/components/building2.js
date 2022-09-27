import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import metalTexture from '../assets/textures/metal.jpeg'
import woodTexture from '../assets/textures/darkWood.jpeg'
import bookTexture from '../assets/textures/bookshelf.png'
import wellTexture from '../assets/textures/well.png'
import sofaTexture from '../assets/textures/sofa.jpg'
import redwoodTexture from '../assets/textures/redwood.jpeg'
import tvTexture from '../assets/textures/tv.jpg'
import linoTexture from '../assets/textures/lino.jpeg'
import diningTexture from '../assets/textures/diningset.png'
import plateTexture from '../assets/textures/plate.png'
import keyTexture from '../assets/textures/key.jpeg'
import goldTexture from '../assets/textures/gold.jpeg'

export default function building2(name, scene, player) {
  //---------principle's office---------//

  const dog = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'dog.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 30
    keyMesh.position.y = 1
    keyMesh.position.z = 85

    keyMesh.scaling.x = 0.55
    keyMesh.scaling.y = 0.55
    keyMesh.scaling.z = 0.55

    keyMesh.rotation.y = Math.PI / 1
    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(goldTexture, scene)
    keyMesh.material = keyWrap
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

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
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

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(bookTexture, scene)
    keyMesh.material = keyWrap
  })

  const sofa = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Old_sofa.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = 40
    keyMesh.position.y = 0
    keyMesh.position.z = 85

    keyMesh.scaling.x = 0.08
    keyMesh.scaling.y = 0.08
    keyMesh.scaling.z = 0.08

    keyMesh.rotation.y = Math.PI / -1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(sofaTexture, scene)
    keyMesh.material = keyWrap

    keyMesh.checkCollisions = true
  })

  const filecabinet = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'filecabinet.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 40
    keyMesh.position.y = 0
    keyMesh.position.z = 102

    keyMesh.scaling.x = 0.2
    keyMesh.scaling.y = 0.2
    keyMesh.scaling.z = 0.2

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    keyMesh.material = keyWrap

    keyMesh.checkCollisions = true
  })

  const coffetable = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'WoodCoffeeTable.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 40
    keyMesh.position.y = 0.5
    keyMesh.position.z = 75

    keyMesh.scaling.x = 0.3
    keyMesh.scaling.y = 0.3
    keyMesh.scaling.z = 0.3

    keyMesh.rotation.y = Math.PI / 2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(redwoodTexture, scene)
    keyMesh.material = keyWrap

    keyMesh.checkCollisions = true
  })

  const tv = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'tv.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 39.5
    keyMesh.position.y = 5.5
    keyMesh.position.z = 75

    keyMesh.scaling.x = 5
    keyMesh.scaling.y = 5
    keyMesh.scaling.z = 5

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(tvTexture, scene)
    keyMesh.material = keyWrap
  })

  //----------kitchen------------//

  const gas = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'turbo.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -18
    keyMesh.position.y = 0
    keyMesh.position.z = 127

    keyMesh.scaling.x = 0.5
    keyMesh.scaling.y = 0.5
    keyMesh.scaling.z = 0.5

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    keyMesh.material = keyWrap
  })

  const sink = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Sink.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -11.8
    keyMesh.position.y = 0
    keyMesh.position.z = 127.3

    keyMesh.scaling.x = 0.8
    keyMesh.scaling.y = 0.8
    keyMesh.scaling.z = 0.8

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(linoTexture, scene)

    keyMesh.material = keyWrap
  })

  const cabinet1 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Cabinet_1.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 15
    keyMesh.position.y = 0
    keyMesh.position.z = 106

    keyMesh.scaling.x = 0.8
    keyMesh.scaling.y = 0.8
    keyMesh.scaling.z = 0.8

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(linoTexture, scene)

    keyMesh.material = keyWrap
  })

  const cabinet2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Cabinet_2.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 15
    keyMesh.position.y = 0
    keyMesh.position.z = 110.58

    keyMesh.scaling.x = 0.8
    keyMesh.scaling.y = 0.8
    keyMesh.scaling.z = 0.8

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(linoTexture, scene)

    keyMesh.material = keyWrap
  })

  const cabinet3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Cabinet_3.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -4.58
    keyMesh.position.y = 0
    keyMesh.position.z = 127.3

    keyMesh.scaling.x = 0.8
    keyMesh.scaling.y = 0.8
    keyMesh.scaling.z = 0.8

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(linoTexture, scene)

    keyMesh.material = keyWrap
  })

  const cabinet4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Cabinet_4.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 0
    keyMesh.position.y = 0
    keyMesh.position.z = 127.3

    keyMesh.scaling.x = 0.8
    keyMesh.scaling.y = 0.8
    keyMesh.scaling.z = 0.8

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(linoTexture, scene)

    keyMesh.material = keyWrap
  })

  const cabinet5 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Cabinet_5.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 7.2
    keyMesh.position.y = 0
    keyMesh.position.z = 127.3

    keyMesh.scaling.x = 0.8
    keyMesh.scaling.y = 0.8
    keyMesh.scaling.z = 0.8

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(linoTexture, scene)

    keyMesh.material = keyWrap
  })

  const fridge = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Refrigerator.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 15
    keyMesh.position.y = 0
    keyMesh.position.z = 116

    keyMesh.scaling.x = 0.8
    keyMesh.scaling.y = 0.8
    keyMesh.scaling.z = 0.8

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)

    keyMesh.material = keyWrap
  })

  const diningSet = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'diningset.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -5
    keyMesh.position.y = 2
    keyMesh.position.z = 113

    keyMesh.scaling.x = 0.07
    keyMesh.scaling.y = 0.07
    keyMesh.scaling.z = 0.07

    keyMesh.rotation.y = Math.PI / -2

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(diningTexture, scene)

    keyMesh.material = keyWrap
  })

  const coffeemachine = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'coffeemachine.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 0
    keyMesh.position.y = 6
    keyMesh.position.z = 127.2

    keyMesh.scaling.x = 1.6
    keyMesh.scaling.y = 1.6
    keyMesh.scaling.z = 1.6

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(diningTexture, scene)

    keyMesh.material = keyWrap
  })

  const plate = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'plate.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -4
    keyMesh.position.y = 5
    keyMesh.position.z = 113

    keyMesh.scaling.x = 0.06
    keyMesh.scaling.y = 0.06
    keyMesh.scaling.z = 0.06

    keyMesh.rotation.y = Math.PI / 1

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(plateTexture, scene)

    keyMesh.material = keyWrap
  })

  //--------well room----------//

  const tableSet = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Table_Chair.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -50
    keyMesh.position.y = 5.5
    keyMesh.position.z = 120

    keyMesh.scaling.x = 0.07
    keyMesh.scaling.y = 0.07
    keyMesh.scaling.z = 0.07

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(woodTexture, scene)
    keyMesh.material = keyWrap
  })

  const well = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Well.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)
    keyMesh.position.x = -57
    keyMesh.position.y = 0
    keyMesh.position.z = 92

    keyMesh.scaling.x = 2.7
    keyMesh.scaling.y = 2.7
    keyMesh.scaling.z = 2.7

    keyMesh.rotation.y = Math.PI / 1.5

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(wellTexture, scene)
    keyMesh.material = keyWrap
  })
}
