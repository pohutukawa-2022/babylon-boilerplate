import metalTexture from '../assets/textures/metal.jpeg'
import bookTexture from '../assets/textures/bookshelf.png'
import darkWood from '../assets/textures/dark_wood.jpg'
import redCarpet from '../assets/textures/red_carpet.jpg'
import pianoTexture from '../assets/textures/piano.jpeg'

export default function building3(name, scene) {
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

  /* -----DRAMA ROOM------ */
  const stageStairs = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'small_stairs.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = -108
    keyMesh.position.y = 2
    keyMesh.position.z = 2

    keyMesh.scaling.x = 1
    keyMesh.scaling.y = 0.7
    keyMesh.scaling.z = 1.3

    keyMesh.rotation.y = Math.PI / 1

    const stageBottom = new BABYLON.MeshBuilder.CreateBox('stageBottom', {
      width: 25.5,
      height: 6,
      depth: 12,
    })

    stageBottom.position.x = -116.5
    stageBottom.position.y = 1
    stageBottom.position.z = 11.5

    const stageMaterial = new BABYLON.StandardMaterial('stageMaterial', scene)
    stageMaterial.diffuseTexture = new BABYLON.Texture(darkWood, scene)
    keyMesh.material = stageMaterial
    stageBottom.material = stageMaterial

    const stageTop = new BABYLON.MeshBuilder.CreateBox('stageTop', {
      width: 25.5,
      height: 0.5,
      depth: 12.5,
    })
    stageTop.position.x = -116.5
    stageTop.position.y = 4
    stageTop.position.z = 11

    stageTop.rotation.y = Math.PI / 1

    const stageTopWrap = new BABYLON.StandardMaterial('stageTopWrap', scene)
    stageTopWrap.diffuseTexture = new BABYLON.Texture(redCarpet, scene)
    stageTop.material = stageTopWrap

    keyMesh.checkCollisions = true
    stageBottom.checkCollisions = true
    stageTop.checkCollisions = true
  })

  const piano = new BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'piano.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.scaling.x = 7
    keyMesh.scaling.y = 7
    keyMesh.scaling.z = 7

    keyMesh.position.x = -122
    keyMesh.position.y = 3
    keyMesh.position.z = 17.5

    keyMesh.rotation.y = Math.PI / 1

    const pianoWrap = new BABYLON.StandardMaterial('pianoWrap', scene)
    pianoWrap.diffuseTexture = new BABYLON.Texture(pianoTexture, scene)

    keyMesh.material = pianoWrap
    keyMesh.checkCollisions = true
  })

  /*-----CLASSROOM 2------*/
  const school2Chair = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldschoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = -75
    chairMesh.position.y = 0
    chairMesh.position.z = -53
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const school2Chair2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldschoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = -85
    chairMesh.position.y = 0
    chairMesh.position.z = -53
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const school2Chair3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldschoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = -95
    chairMesh.position.y = 0
    chairMesh.position.z = -53
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const school2Chair4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldschoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = -75
    chairMesh.position.y = 0
    chairMesh.position.z = -43
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const school2Chair5 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldschoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = -85
    chairMesh.position.y = 0
    chairMesh.position.z = -43
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })

  const school2Chair6 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'OldschoolChair.obj'
  ).then((x) => {
    const chairMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    chairMesh.position.x = -95
    chairMesh.position.y = 0
    chairMesh.position.z = -43
    chairMesh.scaling.x = 0.05
    chairMesh.scaling.y = 0.05
    chairMesh.scaling.z = 0.05

    const lockerWrap = new BABYLON.StandardMaterial('lockerWrap', scene)
    lockerWrap.diffuseTexture = new BABYLON.Texture(metalTexture, scene)
    chairMesh.material = lockerWrap
  })
}

building3()
