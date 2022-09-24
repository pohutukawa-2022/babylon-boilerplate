import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import bricks from './../assets/textures/bricks.jpg'
import ceramicTexture from './../assets/textures/ceramics.png'
import outhouseTexture from './../assets/textures/outhouse.jpeg'
import tintexture from './../assets/textures/tin.jpeg'
// import darkWall from './../assets/textures/dark-wall.jpeg'

export default function environment(name, scene) {
  /* ---------- BUILDINGS ---------- */
  const building1 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'building.obj'
  ).then((x) => {
    const mergedBuilding1 = BABYLON.Mesh.MergeMeshes(x.meshes)
    mergedBuilding1.position.x = -80
    mergedBuilding1.scaling.y = 0.1
    mergedBuilding1.scaling.x = 0.1
    mergedBuilding1.scaling.z = 0.1
    mergedBuilding1.rotation.y = Math.PI / 2

    const buildingWrap1 = new BABYLON.StandardMaterial('building1', scene)
    buildingWrap1.diffuseTexture = new BABYLON.Texture(bricks, scene)

    mergedBuilding1.material = buildingWrap1
    mergedBuilding1.checkCollisions = true
  })

  const building2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'building.obj'
  ).then((x) => {
    const mergedBuilding2 = BABYLON.Mesh.MergeMeshes(x.meshes)
    mergedBuilding2.position.x = 80
    mergedBuilding2.position.y = 0
    mergedBuilding2.position.z = 0
    mergedBuilding2.scaling.y = 0.1
    mergedBuilding2.scaling.x = 0.1
    mergedBuilding2.scaling.z = 0.1
    mergedBuilding2.rotation.y = Math.PI / -2

    const buildingWrap2 = new BABYLON.StandardMaterial('building2', scene)
    buildingWrap2.diffuseTexture = new BABYLON.Texture(bricks, scene)

    mergedBuilding2.material = buildingWrap2
    mergedBuilding2.checkCollisions = true
  })

  const building3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'building.obj'
  ).then((x) => {
    const mergedBuilding3 = BABYLON.Mesh.MergeMeshes(x.meshes)
    mergedBuilding3.position.x = 0
    mergedBuilding3.position.y = 0
    mergedBuilding3.position.z = 80
    mergedBuilding3.scaling.y = 0.1
    mergedBuilding3.scaling.x = 0.1
    mergedBuilding3.scaling.z = 0.1
    mergedBuilding3.rotation.y = Math.PI / 1

    const buildingWrap3 = new BABYLON.StandardMaterial('building3', scene)
    buildingWrap3.diffuseTexture = new BABYLON.Texture(bricks, scene)

    mergedBuilding3.material = buildingWrap3
    mergedBuilding3.checkCollisions = true
  })

  const building4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'building.obj'
  ).then((x) => {
    const mergedBuilding4 = BABYLON.Mesh.MergeMeshes(x.meshes)
    mergedBuilding4.position.x = 0
    mergedBuilding4.position.y = 0
    mergedBuilding4.position.z = -80
    mergedBuilding4.scaling.y = 0.1
    mergedBuilding4.scaling.x = 0.1
    mergedBuilding4.scaling.z = 0.1

    const buildingWrap4 = new BABYLON.StandardMaterial('building4', scene)
    buildingWrap4.diffuseTexture = new BABYLON.Texture(bricks, scene)

    mergedBuilding4.material = buildingWrap4
    mergedBuilding4.checkCollisions = true

    const extWallOne = BABYLON.MeshBuilder.CreateBox('extWallOne', {
      width: 111,
      height: 17,
      depth: 2,
    })
    extWallOne.position.x = 75
    extWallOne.position.y = 8
    extWallOne.position.z = 129
    extWallOne.checkCollisions = true

    const extWallTwo = BABYLON.MeshBuilder.CreateBox('extWallTwo', {
      width: 66,
      height: 17,
      depth: 2,
    })
    extWallTwo.position.x = 129.5
    extWallTwo.position.y = 8
    extWallTwo.position.z = 95
    extWallTwo.rotation.y = Math.PI / 2
    extWallTwo.checkCollisions = true

    const threeTop = BABYLON.MeshBuilder.CreateBox('WallThreeTop', {
      width: 35,
      height: 4,
      depth: 7,
    })
    threeTop.position.x = 69
    threeTop.position.y = 15.2
    threeTop.position.z = 66

    const threeLeft = BABYLON.MeshBuilder.CreateBox('WallThreeLeft', {
      width: 13,
      height: 17.5,
      depth: 7,
    })
    threeLeft.position.x = 55
    threeLeft.position.y = 8
    threeLeft.position.z = 66

    const threeRight = BABYLON.MeshBuilder.CreateBox('WallThreeRight', {
      width: 13,
      height: 17,
      depth: 7,
    })
    threeRight.position.x = 79
    threeRight.position.y = 8
    threeRight.position.z = 66

    const newBuildingRoof = BABYLON.MeshBuilder.CreateBox('plaza1', {
      width: 145,
      height: 0.5,
      depth: 70,
    })
    newBuildingRoof.position.x = 60
    newBuildingRoof.position.y = 17
    newBuildingRoof.position.z = 96

    const doorway = [threeTop, threeLeft, threeRight]
    const extWallThree = new BABYLON.Mesh.MergeMeshes(doorway, scene)
    extWallThree.checkCollisions = true
  })

  /* ----------COURTYARD---------- */

  const fountain = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/fountain1_low.obj'
  ).then((x) => {
    const waterFountain = BABYLON.Mesh.MergeMeshes(x.meshes)
    waterFountain.position = new BABYLON.Vector3(0, 0, 0)
    waterFountain.scaling = new BABYLON.Vector3(3.5, 3.5, 3.5)
    waterFountain.checkCollisions = true

    const fWrap = new BABYLON.StandardMaterial('fWrap', scene)
    fWrap.diffuseTexture = new BABYLON.Texture(ceramicTexture, scene)
    waterFountain.material = fWrap
    waterFountain.checkCollisions = true
  })

  const bench1 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh.position = new BABYLON.Vector3(0, 0, -25)
    benchMesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)

    benchMesh.checkCollisions = true

    const plaza1 = BABYLON.MeshBuilder.CreateBox('plaza1', {
      width: 80,
      height: 0.3,
      depth: 80,
    })
    plaza1.position.x = 0
    plaza1.position.y = 1
    plaza1.position.z = 0

    // plaza1.checkCollisions = true

    const plaza2 = new BABYLON.MeshBuilder.CreateCylinder('plaza2', {
      height: 1,
      diameter: 70,
      tessellation: 300,
    })
    plaza2.position.y = 1

    // plaza2.checkCollisions = true
  })

  const bench2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh.position = new BABYLON.Vector3(0, 0, 25)
    benchMesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
    benchMesh.rotation.y = Math.PI / 1

    benchMesh.checkCollisions = true
  })

  const outhouse = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Toilet.obj'
  ).then((x) => {
    const houseMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    houseMesh.position.x = 110
    houseMesh.position.y = 0
    houseMesh.position.z = 90

    houseMesh.scaling.x = 0.15
    houseMesh.scaling.y = 0.15
    houseMesh.scaling.z = 0.15

    houseMesh.rotation.y = Math.PI / -2

    const houseWrap = new BABYLON.StandardMaterial('houseWrap', scene)
    houseWrap.diffuseTexture = new BABYLON.Texture(outhouseTexture, scene)
    houseMesh.material = houseWrap
  })

  const shed = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'GeneratorShed.obj'
  ).then((x) => {
    const houseMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    houseMesh.position.x = -90
    houseMesh.position.y = 0
    houseMesh.position.z = 90

    houseMesh.scaling.x = 2.2
    houseMesh.scaling.y = 2.2
    houseMesh.scaling.z = 2.2

    houseMesh.rotation.y = Math.PI / 1

    const houseWrap = new BABYLON.StandardMaterial('houseWrap', scene)
    houseWrap.diffuseTexture = new BABYLON.Texture(tintexture, scene)
    houseMesh.material = houseWrap
  })
}

environment()
