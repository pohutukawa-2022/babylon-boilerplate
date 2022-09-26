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

  //-------------key-----------------//
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
      // player.keys.push({
      //   key: keyMesh,
      //   xMax: -82,
      //   xMin: -92,
      //   zMax: -76,
      //   zMin: -68,
      // })
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

      //---------medkit----------//
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
    })
  })
}
Furniture()
