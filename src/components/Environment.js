import img from './../assets/textures/spooky.png'

export default function building(name, scene) {
  const buildings = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'building.obj'
  ).then((x) => {
    const mergedBuilding = BABYLON.Mesh.MergeMeshes(x.meshes)
    mergedBuilding.scaling.y = 0.1
    mergedBuilding.scaling.x = 0.1
    mergedBuilding.scaling.z = 0.1
    const buildingWrap = new BABYLON.StandardMaterial('buildingWrap', scene)
    buildingWrap.diffuseTexture = new BABYLON.Texture(img, scene)
    mergedBuilding.material = buildingWrap
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
    mergedBuilding2.rotation.y = Math.PI / 1
  })

  const chair = BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'chair.obj'
  ).then((chair) => {
    // const mergedChair = BABYLON.Mesh.MergeMeshes(chair.meshes)
    // mergedChair.position.x = 0
    // mergedChair.position.y = 0
    // mergedChair.position.z = 0
    // mergedChair.scaling.y = 0.1
    // mergedChair.scaling.x = 0.1
    // mergedChair.scaling.z = 0.1
    console.log(chair)
  })
  return buildings
}

building()
