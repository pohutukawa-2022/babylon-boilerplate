import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import vertShader from './../shaders/shader.vert'
import fragShader from './../shaders/shader.frag'
import Furniture from './Furniture'
import environment from './Environment'
import dirtImg from './../assets/textures/dirt.jpeg'
import concreteImg from './../assets/textures/concrete.jpeg'

export default class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.engine = new BABYLON.Engine(this.canvas, true)
    this.time = 0
  }

  createScene() {
    this.scene = new BABYLON.Scene(this.engine)

    this.camera = new BABYLON.FreeCamera(
      'camera1',
      new BABYLON.Vector3(0, 5, -10),
      this.scene
    )
    this.camera.setTarget(BABYLON.Vector3.Zero())
    this.camera.attachControl(this.canvas, false)
    this.light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 1, 0),
      this.scene
    )

    let ground = BABYLON.MeshBuilder.CreateGround(
      'ground',
      { width: 300, height: 300, subdivisions: 2 },

      this.scene
    )
    const dummyGroundTexture = new BABYLON.StandardMaterial()
    dummyGroundTexture.diffuseTexture = new BABYLON.Texture(
      new BABYLON.Color3(1, 2, 1),
      this.scene
    )
    ground.material = dummyGroundTexture
    const dirtMaterial = new BABYLON.StandardMaterial()
    dirtMaterial.diffuseTexture = new BABYLON.Texture(concreteImg, this.scene)
    ground.material = dirtMaterial

    BABYLON.Effect.ShadersStore['customVertexShader'] = vertShader
    BABYLON.Effect.ShadersStore['customFragmentShader'] = fragShader

    const renoWallOne = BABYLON.MeshBuilder.CreateBox('renoWallOne', {
      width: 20,
      height: 20,
      depth: 20,
    })
    renoWallOne.position.x = 100
    renoWallOne.position.y = 5
    renoWallOne.position.z = 100

    const renoWallTwo = BABYLON.MeshBuilder.CreateBox('renoWallTwo', {
      width: 20,
      height: 20,
      depth: 20,
    })
    renoWallTwo.position.x = 85
    renoWallTwo.position.y = 5
    renoWallTwo.position.z = 85

    const renoWallFour = BABYLON.MeshBuilder.CreateBox('renoWallFour', {
      width: 20,
      height: 20,
      depth: 20,
    })
    renoWallFour.position.x = 70
    renoWallFour.position.y = 5
    renoWallFour.position.z = 70

    environment('environment', this.scene)
    Furniture('furniture', this.scene)
  }

  doRender() {
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })

    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  }
}
