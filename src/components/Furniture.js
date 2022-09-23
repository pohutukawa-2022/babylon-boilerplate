export default function Furniture(name, scene) {
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
  })
}
Furniture()
