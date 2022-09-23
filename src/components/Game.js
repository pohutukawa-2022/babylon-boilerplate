import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import vertShader from './../shaders/shader.vert'
import fragShader from './../shaders/shader.frag'
import Furniture from './Furniture'
import environment from './Environment'
// import grass from './../assets/textures/grass.png'

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
    // const grassMaterial = new BABYLON.StandardMaterial()
    // grassMaterial.diffuseTexture = new BABYLON.Texture(grass, this.scene)
    // ground.material = grassMaterial

    BABYLON.Effect.ShadersStore['customVertexShader'] = vertShader
    BABYLON.Effect.ShadersStore['customFragmentShader'] = fragShader

    // const extWall1 = BABYLON.MeshBuilder.CreateBox('extWall1', {
    //   width: 10,
    //   height: 8,
    //   depth: 2,
    // })
    // extWall1.position.x = 1
    // extWall1.position.y = 5
    // extWall1.position.z = 2

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
