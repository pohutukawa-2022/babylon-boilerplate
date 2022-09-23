import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'
import img from './../assets/textures/amiga.jpg'
import vertShader from './../shaders/shader.vert'
import fragShader from './../shaders/shader.frag'
import building from './Environment'

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

    BABYLON.MeshBuilder.CreateGround(
      'ground',
      { width: 6, height: 6, subdivisions: 2 },
      this.scene
    )

    BABYLON.Effect.ShadersStore['customVertexShader'] = vertShader
    BABYLON.Effect.ShadersStore['customFragmentShader'] = fragShader
    building('buildings', this.scene)
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
