import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import floorboards from './../assets/textures/floorboards.jpg'
import concrete from './../assets/textures/stair.jpg'
import tiles from './../assets/textures/tiles.jpg'
import benchWrap from './../assets/textures/bench.jpg'
import ceramicTexture from './../assets/textures/ceramics.png'
import outhouseTexture from './../assets/textures/Toilet.png'
import tintexture from './../assets/textures/tin.jpeg'
import keyTexture from '../assets/textures/key.jpeg'
import ghostTexture from '../assets/textures/Ghost_color.png'

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

    // const building1Floor1 = BABYLON.MeshBuilder.CreateBox('building1Floor1', {
    //   width: 35,
    //   height: 1,
    //   depth: 61,
    // })
    // building1Floor1.position.x = -86
    // building1Floor1.position.y = 0.5
    // building1Floor1.position.z = 21

    // const building1Floor2 = BABYLON.MeshBuilder.CreateBox('building1Floor2', {
    //   width: 46,
    //   height: 1,
    //   depth: 82,
    // })
    // building1Floor2.position.x = -108
    // building1Floor2.position.y = 0.5
    // building1Floor2.position.z = -20

    const building1Wrap = new BABYLON.StandardMaterial('building1', scene)
    building1Wrap.diffuseTexture = new BABYLON.Texture(concrete, scene)
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
    // building1Floor1.material = building1Floor1Wrap
    // building1Floor2.material = building1Floor2Wrap
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

    // const building2Floor1 = BABYLON.MeshBuilder.CreateBox('building2Floor1', {
    //   width: 35,
    //   height: 1,
    //   depth: 61,
    // })
    // building2Floor1.position.x = 86
    // building2Floor1.position.y = 0.5
    // building2Floor1.position.z = -21

    // const building2Floor2 = BABYLON.MeshBuilder.CreateBox('building2Floor2', {
    //   width: 46,
    //   height: 1,
    //   depth: 82,
    // })
    // building2Floor2.position.x = 108
    // building2Floor2.position.y = 0.5
    // building2Floor2.position.z = 20

    const buildingWrap2 = new BABYLON.StandardMaterial('building2', scene)
    buildingWrap2.diffuseTexture = new BABYLON.Texture(concrete, scene)
    const building2Floor1Wrap = new BABYLON.StandardMaterial(
      'building2Floor1Wrap',
      scene
    )
    // building2Floor1Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)
    // const building2Floor2Wrap = new BABYLON.StandardMaterial(
    //   'building2Floor2Wrap',
    //   scene
    // )
    // building2Floor2Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)

    mergedBuilding2.material = buildingWrap2
    // building2Floor1.material = building2Floor2Wrap
    // building2Floor2.material = building2Floor2Wrap
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

    // const building3Floor1 = BABYLON.MeshBuilder.CreateBox('building3Floor1', {
    //   width: 35,
    //   height: 1,
    //   depth: 61,
    // })
    // building3Floor1.position.x = -21
    // building3Floor1.position.y = 0.5
    // building3Floor1.position.z = -86
    // building3Floor1.rotation.y = Math.PI / 2

    // const building3Floor2 = BABYLON.MeshBuilder.CreateBox('building3Floor2', {
    //   width: 46,
    //   height: 1,
    //   depth: 82,
    // })
    // building3Floor2.position.x = 21.5
    // building3Floor2.position.y = 0.5
    // building3Floor2.position.z = -108.5
    // building3Floor2.rotation.y = Math.PI / 2

    const buildingWrap3 = new BABYLON.StandardMaterial('building3', scene)
    buildingWrap3.diffuseTexture = new BABYLON.Texture(concrete, scene)
    const building3Floor1Wrap = new BABYLON.StandardMaterial(
      'building3Floor1Wrap',
      scene
    )
    // building3Floor1Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)
    // const building3Floor2Wrap = new BABYLON.StandardMaterial(
    //   'building3Floor2Wrap',
    //   scene
    // )
    // building3Floor2Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)

    mergedBuilding3.material = buildingWrap3
    // building3Floor1.material = building3Floor1Wrap
    // building3Floor2.material = building3Floor2Wrap
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

    // const building4Floor1 = BABYLON.MeshBuilder.CreateBox('building4Floor1', {
    //   width: 35,
    //   height: 1,
    //   depth: 61,
    // })
    // building4Floor1.position.x = 21
    // building4Floor1.position.y = 0.5
    // building4Floor1.position.z = 86
    // building4Floor1.rotation.y = Math.PI / -2

    // const building4Floor2 = BABYLON.MeshBuilder.CreateBox('building4Floor2', {
    //   width: 46,
    //   height: 1,
    //   depth: 82,
    // })
    // building4Floor2.position.x = -21.5
    // building4Floor2.position.y = 0.5
    // building4Floor2.position.z = 108.5
    // building4Floor2.rotation.y = Math.PI / -2

    const buildingWrap4 = new BABYLON.StandardMaterial('building4', scene)
    buildingWrap4.diffuseTexture = new BABYLON.Texture(concrete, scene)
    // const building4Floor1Wrap = new BABYLON.StandardMaterial(
    //   'building4Floor1Wrap',
    //   scene
    // )
    // building4Floor1Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)
    // const building4Floor2Wrap = new BABYLON.StandardMaterial(
    //   'building4Floor2Wrap',
    //   scene
    // )
    // building4Floor2Wrap.diffuseTexture = new BABYLON.Texture(floorboards, scene)

    mergedBuilding4.material = buildingWrap4
    // building4Floor1.material = building4Floor1Wrap
    // building4Floor2.material = building4Floor2Wrap
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
    wallWrap1.diffuseTexture = new BABYLON.Texture(concrete, scene)

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
    wallWrap2.diffuseTexture = new BABYLON.Texture(concrete, scene)

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
    const extWall3 = new BABYLON.Mesh.MergeMeshes(doorway, scene)
    const doorwayWrap = new BABYLON.StandardMaterial('building5', scene)
    doorwayWrap.diffuseTexture = new BABYLON.Texture(concrete, scene)

    extWall3.material = doorwayWrap
    extWall3.checkCollisions = true

    const roof1 = BABYLON.MeshBuilder.CreateBox('roof1', {
      width: 145,
      height: 0.5,
      depth: 70,
    })
    roof1.position.x = 60
    roof1.position.y = 17
    roof1.position.z = 96
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

  /* ----------COURTYARD---------- */

  const fountain = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/fountain1_low.obj'
  ).then((x) => {
    const waterFountain = BABYLON.Mesh.MergeMeshes(x.meshes)
    waterFountain.position = new BABYLON.Vector3(0, 1, 0)
    waterFountain.scaling = new BABYLON.Vector3(3.5, 3.5, 3.5)
    const fWrap = new BABYLON.StandardMaterial('fWrap', scene)
    fWrap.diffuseTexture = new BABYLON.Texture(ceramicTexture, scene)
    waterFountain.material = fWrap
    waterFountain.checkCollisions = true
  })

  const bench1 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh1 = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh1.position = new BABYLON.Vector3(0, 0, -25)
    benchMesh1.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)

    const plaza1 = BABYLON.MeshBuilder.CreateBox('plaza1', {
      width: 80,
      height: 0.3,
      depth: 80,
    })
    plaza1.position.x = 0
    plaza1.position.y = 1
    plaza1.position.z = 0
    const bench1Wrap = new BABYLON.StandardMaterial('bench1Wrap', scene)
    bench1Wrap.diffuseTexture = new BABYLON.Texture(benchWrap, scene)
    const plaza1Wrap = new BABYLON.StandardMaterial('plaza1Wrap', scene)
    plaza1Wrap.diffuseTexture = new BABYLON.Texture(tiles, scene)

    plaza1.material = plaza1Wrap
    benchMesh1.material = bench1Wrap
    plaza1.checkCollisions = true
  })

  const bench2 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh2 = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh2.position = new BABYLON.Vector3(0, 0, 25)
    benchMesh2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
    benchMesh2.rotation.y = Math.PI / 1

    const plaza2 = new BABYLON.MeshBuilder.CreateCylinder('plaza2', {
      height: 1,
      diameter: 70,
      tessellation: 300,
    })
    plaza2.position.y = 1

    const plaza2Wrap = new BABYLON.StandardMaterial('plaza2Wrap', scene)
    plaza2Wrap.diffuseTexture = new BABYLON.Texture(tiles, scene)
    const bench2Wrap = new BABYLON.StandardMaterial('bench2Wrap', scene)
    bench2Wrap.diffuseTexture = new BABYLON.Texture(benchWrap, scene)

    plaza2.material = plaza2Wrap
    benchMesh2.material = bench2Wrap
    plaza2.checkCollisions = true
  })


  const bench3 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh3 = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh3.position = new BABYLON.Vector3(-25, 0, 0)
    benchMesh3.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
    benchMesh3.rotation.y = Math.PI / 2

    const bench3Wrap = new BABYLON.StandardMaterial('bench3Wrap', scene)
    bench3Wrap.diffuseTexture = new BABYLON.Texture(benchWrap, scene)

    benchMesh3.material = bench3Wrap
  })

  const bench4 = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh4 = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh4.position = new BABYLON.Vector3(25, 0, 0)
    benchMesh4.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
    benchMesh4.rotation.y = Math.PI / -2

    const bench4Wrap = new BABYLON.StandardMaterial('bench4Wrap', scene)
    bench4Wrap.diffuseTexture = new BABYLON.Texture(benchWrap, scene)

    benchMesh4.material = bench4Wrap
  })
  /* ------------ LIGHTS --------------- */

  // const lightbulb1 = new BABYLON.SpotLight(
  //   'light1',
  //   new BABYLON.Vector3(0, 5, -10),
  //   new BABYLON.Vector3(0, -1, 0),

  //   Math.PI / 3,
  //   60,

  //   scene
  // )

  // const lightBulb2 = new BABYLON.SpotLight(
  //   'light2',
  //   new BABYLON.Vector3(0, 5, 10),
  //   new BABYLON.Vector3(0, -1, 0),

  //   Math.PI / 3,
  //   60,

  //   scene
  // )

  // const lightbulb3 = new BABYLON.SpotLight(
  //   'light3',
  //   new BABYLON.Vector3(-10, 5, 0),
  //   new BABYLON.Vector3(0, -1, 0),

  //   Math.PI / 3,
  //   60,

  //   scene
  // )

  // const lightbulb4 = new BABYLON.SpotLight(
  //   'light4',
  //   new BABYLON.Vector3(10, 5, 0),
  //   new BABYLON.Vector3(0, -1, 0),

  //   Math.PI / 3,
  //   60,

  //   scene
  // )

  const torch = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'Flashlight_01.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.position.x = 0
    keyMesh.position.y = 20
    keyMesh.position.z = 0

    keyMesh.scaling.x = 10
    keyMesh.scaling.y = 10
    keyMesh.scaling.z = 10

    const keyWrap = new BABYLON.StandardMaterial('keyWrap', scene)
    keyWrap.diffuseTexture = new BABYLON.Texture(keyTexture, scene)
    keyMesh.material = keyWrap
  })

  

}

environment()
