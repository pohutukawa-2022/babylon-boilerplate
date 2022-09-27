import concrete from './../assets/textures/concrete.jpeg'
import metal from './../assets/textures/metal.jpeg'

export default function roofTop(name, scene) {
  /* ---------ROOFTOP--------- */
  const endGate = new BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'gate_obj.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.scaling.x = 0.16
    keyMesh.scaling.y = 0.16
    keyMesh.scaling.z = 0.16

    keyMesh.position.x = -100
    keyMesh.position.y = 17
    keyMesh.position.z = -10

    const endGateWrap = new BABYLON.StandardMaterial('endGateWrap', scene)
    endGateWrap.diffuseTexture = new BABYLON.Texture(metal, scene)
    keyMesh.material = endGateWrap
    keyMesh.checkCollisions = true
  })

  const angel1 = new BABYLON.SceneLoader.ImportMeshAsync(
    '',
    '../../public/models/',
    'angel.obj'
  ).then((x) => {
    const keyMesh = new BABYLON.Mesh.MergeMeshes(x.meshes)

    keyMesh.scaling.x = 0.04
    keyMesh.scaling.y = 0.04
    keyMesh.scaling.z = 0.04

    keyMesh.position.x = -112
    keyMesh.position.y = 17
    keyMesh.position.z = -10

    keyMesh.rotation.y = Math.PI / 2

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

    keyMesh.position.x = -87
    keyMesh.position.y = 17
    keyMesh.position.z = -10

    keyMesh.rotation.y = Math.PI / 1

    const angel2Wrap = new BABYLON.StandardMaterial('angel2Wrap', scene)
    angel2Wrap.diffuseTexture = new BABYLON.Texture(concrete, scene)
    keyMesh.material = angel2Wrap
    keyMesh.checkCollisions = true
  })
}
roofTop()
