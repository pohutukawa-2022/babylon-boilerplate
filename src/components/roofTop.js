import concrete from './../assets/textures/concrete.jpeg'

export default function roofTop(name, scene) {
  /* ---------ROOFTOP--------- */

  const angel1 = new BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'angel.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.scaling.x = 0.04
    keyMesh.scaling.y = 0.04
    keyMesh.scaling.z = 0.04

    keyMesh.position.x = -84
    keyMesh.position.y = 18
    keyMesh.position.z = 6

    keyMesh.rotation.y = Math.PI / 1

    const angel1Wrap = new BABYLON.StandardMaterial('angel1Wrap', scene)
    angel1Wrap.diffuseTexture = new BABYLON.Texture(concrete, scene)
    keyMesh.material = angel1Wrap
    keyMesh.checkCollisions = true
  })

  const angel2 = new BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'angel.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.scaling.x = 0.04
    keyMesh.scaling.y = 0.04
    keyMesh.scaling.z = 0.04

    keyMesh.position.x = -80
    keyMesh.position.y = 18
    keyMesh.position.z = 18

    keyMesh.rotation.y = Math.PI / 1

    const angel2Wrap = new BABYLON.StandardMaterial('angel2Wrap', scene)
    angel2Wrap.diffuseTexture = new BABYLON.Texture(concrete, scene)
    keyMesh.material = angel2Wrap
    keyMesh.checkCollisions = true
  })
}
roofTop()
