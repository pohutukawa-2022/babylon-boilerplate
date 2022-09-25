import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import bricks from './../assets/textures/bricks.jpg'
import floorboards from './../assets/textures/floorboards.jpg'
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

    const building1Floor1 = BABYLON.MeshBuilder.CreateBox('building1Floor1', {
      width: 35,
      height: 1,
      depth: 61,
    })
    building1Floor1.position.x = -86
    building1Floor1.position.y = 0.7
    building1Floor1.position.z = 21

    const building1Floor2 = BABYLON.MeshBuilder.CreateBox('building1Floor2', {
      width: 46,
      height: 1,
      depth: 82,
    })
    building1Floor2.position.x = -108
    building1Floor2.position.y = 0.7
    building1Floor2.position.z = -20

    const building1Wrap = new BABYLON.StandardMaterial('building1', scene)
    building1Wrap.diffuseTexture = new BABYLON.Texture(bricks, scene)
    const building1Floor1Wrap = new BABYLON.StandardMaterial(
      'building1Floor1Wrap',
      scene
    )
    building1Floor1Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)
    const building1Floor2Wrap = new BABYLON.StandardMaterial(
      'building1Floor2Wrap',
      scene
    )
    building1Floor2Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)

    mergedBuilding1.material = building1Wrap
    building1Floor1.material = building1Floor1Wrap
    building1Floor2.material = building1Floor2Wrap
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

    const building2Floor1 = BABYLON.MeshBuilder.CreateBox('building2Floor1', {
      width: 35,
      height: 1,
      depth: 61,
    })
    building2Floor1.position.x = 86
    building2Floor1.position.y = 0.7
    building2Floor1.position.z = -21

    const building2Floor2 = BABYLON.MeshBuilder.CreateBox('building2Floor2', {
      width: 46,
      height: 1,
      depth: 82,
    })
    building2Floor2.position.x = 108
    building2Floor2.position.y = 0.7
    building2Floor2.position.z = 20

    const buildingWrap2 = new BABYLON.StandardMaterial('building2', scene)
    buildingWrap2.diffuseTexture = new BABYLON.Texture(bricks, scene)
    const building2Floor1Wrap = new BABYLON.StandardMaterial(
      'building2Floor1Wrap',
      scene
    )
    building2Floor1Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)
    const building2Floor2Wrap = new BABYLON.StandardMaterial(
      'building2Floor2Wrap',
      scene
    )
    building2Floor2Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)

    mergedBuilding2.material = buildingWrap2
    building2Floor1.material = building2Floor2Wrap
    building2Floor2.material = building2Floor2Wrap
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

    const building3Floor1 = BABYLON.MeshBuilder.CreateBox('building3Floor1', {
      width: 35,
      height: 1,
      depth: 61,
    })
    building3Floor1.position.x = -21
    building3Floor1.position.y = 0.7
    building3Floor1.position.z = -86
    building3Floor1.rotation.y = Math.PI / 2

    const building3Floor2 = BABYLON.MeshBuilder.CreateBox('building3Floor2', {
      width: 46,
      height: 1,
      depth: 82,
    })
    building3Floor2.position.x = 21.5
    building3Floor2.position.y = 0.7
    building3Floor2.position.z = -108.5
    building3Floor2.rotation.y = Math.PI / 2

    const buildingWrap3 = new BABYLON.StandardMaterial('building3', scene)
    buildingWrap3.diffuseTexture = new BABYLON.Texture(bricks, scene)
    const building3Floor1Wrap = new BABYLON.StandardMaterial(
      'building3Floor1Wrap',
      scene
    )
    building3Floor1Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)
    const building3Floor2Wrap = new BABYLON.StandardMaterial(
      'building3Floor2Wrap',
      scene
    )
    building3Floor2Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)

    mergedBuilding3.material = buildingWrap3
    building3Floor1.material = building3Floor1Wrap
    building3Floor2.material = building3Floor2Wrap
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

    const building4Floor1 = BABYLON.MeshBuilder.CreateBox('building4Floor1', {
      width: 35,
      height: 1,
      depth: 61,
    })
    building4Floor1.position.x = 21
    building4Floor1.position.y = 0.7
    building4Floor1.position.z = 86
    building4Floor1.rotation.y = Math.PI / -2

    const building4Floor2 = BABYLON.MeshBuilder.CreateBox('building4Floor2', {
      width: 46,
      height: 1,
      depth: 82,
    })
    building4Floor2.position.x = -21.5
    building4Floor2.position.y = 0.7
    building4Floor2.position.z = 108.5
    building4Floor2.rotation.y = Math.PI / -2

    const buildingWrap4 = new BABYLON.StandardMaterial('building4', scene)
    buildingWrap4.diffuseTexture = new BABYLON.Texture(bricks, scene)
    const building4Floor1Wrap = new BABYLON.StandardMaterial(
      'building4Floor1Wrap',
      scene
    )
    building4Floor1Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)
    const building4Floor2Wrap = new BABYLON.StandardMaterial(
      'building4Floor2Wrap',
      scene
    )
    building4Floor2Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)

    mergedBuilding4.material = buildingWrap4
    building4Floor1.material = building4Floor1Wrap
    building4Floor2.material = building4Floor2Wrap
    mergedBuilding4.checkCollisions = true

    const extWall1 = BABYLON.MeshBuilder.CreateBox('extWall1', {
      width: 111,
      height: 17,
      depth: 2,
    })
    extWall1.position.x = 75
    extWall1.position.y = 8
    extWall1.position.z = 129

    const wallWrap1 = new BABYLON.StandardMaterial('extWall1Wrap', scene)
    wallWrap1.diffuseTexture = new BABYLON.Texture(bricks, scene)

    extWall1.material = wallWrap1
    extWall1.checkCollisions = true

    const extWall2 = BABYLON.MeshBuilder.CreateBox('extWall2', {
      width: 66,
      height: 17,
      depth: 2,
    })
    extWall2.position.x = 129.5
    extWall2.position.y = 8
    extWall2.position.z = 95
    extWall2.rotation.y = Math.PI / 2

    const wallWrap2 = new BABYLON.StandardMaterial('extWall2Wrap', scene)
    wallWrap2.diffuseTexture = new BABYLON.Texture(bricks, scene)

    extWall2.material = wallWrap2
    extWall2.checkCollisions = true

    const threeTop = BABYLON.MeshBuilder.CreateBox('WallThreeTop', {
      width: 35,
      height: 4,
      depth: 7,
    })
    threeTop.position.x = 69
    threeTop.position.y = 15.2
    threeTop.position.z = 66
    threeTop.checkForCollisions

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

    const doorway = [threeTop, threeLeft, threeRight]
    const extWallThree = new BABYLON.Mesh.MergeMeshes(doorway, scene)
    const doorwayWrap = new BABYLON.StandardMaterial('building5', scene)
    doorwayWrap.diffuseTexture = new BABYLON.Texture(bricks, scene)

    extWallThree.material = doorwayWrap
    extWallThree.checkCollisions = true

    const roof1 = BABYLON.MeshBuilder.CreateBox('roof1', {
      width: 145,
      height: 0.5,
      depth: 70,
    })
    roof1.position.x = 60
    roof1.position.y = 17
    roof1.position.z = 96
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
  })

  const bench1 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh.position = new BABYLON.Vector3(0, 0, -25)
    benchMesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)

    const plaza1 = BABYLON.MeshBuilder.CreateBox('plaza1', {
      width: 80,
      height: 0.3,
      depth: 80,
    })
    plaza1.position.x = 0
    plaza1.position.y = 1
    plaza1.position.z = 0

    plaza1.checkCollisions = true

    const plaza2 = new BABYLON.MeshBuilder.CreateCylinder('plaza2', {
      height: 1,
      diameter: 70,
      tessellation: 300,
    })
    plaza2.position.y = 1

    plaza2.checkCollisions = true
  })

  const bench2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh.position = new BABYLON.Vector3(0, 0, 25)
    benchMesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
    benchMesh.rotation.y = Math.PI / 1
  })
}

environment()
