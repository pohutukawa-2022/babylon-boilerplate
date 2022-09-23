import img from './../assets/textures/spooky.png'
import img1 from './../assets/textures/one.png'
import img2 from './../assets/textures/two.png'
import img3 from './../assets/textures/three.png'
import img4 from './../assets/textures/four.png'

/* ---------- BUILDINGS ---------- */
export default function building(name, scene) {
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
    // const buildingOneWrap = new BABYLON.StandardMaterial(
    //   'buildingOneWrapper',
    //   scene
    // )
    // buildingOneWrap.diffuseTexture = new BABYLON.Texture(img1, scene)
    // mergedBuilding1.material = buildingOneWrap
    //
    // const buildingWrap = new BABYLON.StandardMaterial('buildingWrap', scene)
    // buildingWrap.diffuseTexture = new BABYLON.Texture(img, scene)
    // mergedBuilding.material = buildingWrap
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
    // const buildingTwoWrap = new BABYLON.StandardMaterial(
    //   'buildingTwoWrapper',
    //   scene
    // )
    // buildingTwoWrap.diffuseTexture = new BABYLON.Texture(img2, scene)
    // mergedBuilding2.material = buildingTwoWrap
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
    // const buildingThreeWrap = new BABYLON.StandardMaterial(
    //   'buildingThreeWrapper',
    //   scene
    // )
    // buildingThreeWrap.diffuseTexture = new BABYLON.Texture(img3, scene)
    // mergedBuilding3.material = buildingThreeWrap
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
    const buildingFourWrap = new BABYLON.StandardMaterial(
      'buildingFourWrapper',
      scene
    )
    buildingFourWrap.diffuseTexture = new BABYLON.Texture(img4, scene)
    mergedBuilding4.material = buildingFourWrap
  })
}

building()

/* ----------COURTYARD---------- */

/* ------------WALLS------------ */
