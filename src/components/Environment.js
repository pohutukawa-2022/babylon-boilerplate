import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import img from './../assets/textures/spooky.png'
import darkWall from './../assets/textures/dark-wall.jpeg'

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
    buildingWrap.diffuseTexture = new BABYLON.Texture(darkWall, scene)
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

    const buildingWrap = new BABYLON.StandardMaterial('buildingWrap', scene)
    buildingWrap.diffuseTexture = new BABYLON.Texture(darkWall, scene)
    mergedBuilding2.material = buildingWrap
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
  })
  /* ----------COURTYARD---------- */
  const fountain = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/fountain1_low.obj'
  ).then((x) => {
    const waterFountain = BABYLON.Mesh.MergeMeshes(x.meshes)
    waterFountain.position = new BABYLON.Vector3(0, 0, 0)
    waterFountain.scaling = new BABYLON.Vector3(3.5, 3.5, 3.5)
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
}

environment()

/* ------------WALLS------------ */
