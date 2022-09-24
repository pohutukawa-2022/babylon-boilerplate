import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import img from './../assets/textures/spooky.png'

/* ---------- BUILDINGS ---------- */
export default function environment(name, scene) {
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

    const buildingWrap = new BABYLON.StandardMaterial('buildingWrap', scene)
    buildingWrap.diffuseTexture = new BABYLON.Texture(img, scene)
    mergedBuilding1.material = buildingWrap
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
    mergedBuilding4.checkCollisions = true
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

  const bench = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/Bench_LowRes.obj'
  ).then((x) => {
    const benchMesh = BABYLON.Mesh.MergeMeshes(x.meshes)
    benchMesh.position = new BABYLON.Vector3(0, 0, -25)
    benchMesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
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

  // const extWallOne = BABYLON.MeshBuilder.CreateBox('extWallOne', {
  //   width: 111,
  //   height: 17,
  //   depth: 2,
  // })
  // extWallOne.position.x = 75
  // extWallOne.position.y = 8
  // extWallOne.position.z = 129

  // const extWallTwo = BABYLON.MeshBuilder.CreateBox('extWallTwo', {
  //   width: 66,
  //   height: 17,
  //   depth: 2,
  // })
  // extWallTwo.position.x = 129.5
  // extWallTwo.position.y = 8
  // extWallTwo.position.z = 95
  // extWallTwo.rotation.y = Math.PI / 2

  // const extWallThree = BABYLON.MeshBuilder.CreateBox('extWallThree', {
  //   width: 35,
  //   height: 17,
  //   depth: 7,
  // })
  // extWallThree.position.x = 69
  // extWallThree.position.y = 8
  // extWallThree.position.z = 66

  // const plaza1 = BABYLON.MeshBuilder.CreateBox('plaza1', {
  //   width: 80,
  //   height: 0.3,
  //   depth: 80,
  // })
  // plaza1.position.x = 0
  // plaza1.position.y = 1
  // plaza1.position.z = 0
  // const plaza2 = new BABYLON.MeshBuilder.CreateCylinder('plaza2', {
  //   height: 1,
  //   diameter: 70,
  //   tessellation: 300,
  // })
  // plaza2.position.y = 1

  // const newBuildingRoof = BABYLON.MeshBuilder.CreateBox('plaza1', {
  //   width: 145,
  //   height: 0.5,
  //   depth: 70,
  // })
  // newBuildingRoof.position.x = 60
  // newBuildingRoof.position.y = 17
  // newBuildingRoof.position.z = 96
}

environment()

/* ------------WALLS------------ */
