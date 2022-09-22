import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'
import img from './../assets/textures/bricks.jpg'
import vertShader from './../shaders/shader.vert'
import fragShader from './../shaders/shader.frag'

export default class Game {
  constructor (canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.engine = new BABYLON.Engine(this.canvas, true)
  }

  createScene () {
    this.scene = new BABYLON.Scene(this.engine)

    this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this.scene)
    this.camera.setTarget(BABYLON.Vector3.Zero())
    this.camera.attachControl(this.canvas, false)
    this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene)

    let cube = BABYLON.MeshBuilder.CreateBox('cube', {width: 10, height: 5, depth: 0.5}, this.scene)

    BABYLON.MeshBuilder.CreateGround('ground',
      {width: 20, height: 20, subdivisions: 2}, this.scene)

    BABYLON.Effect.ShadersStore['customVertexShader'] = vertShader
    BABYLON.Effect.ShadersStore['customFragmentShader'] = fragShader
    const cubeMaterial = new BABYLON.StandardMaterial()
    cubeMaterial.diffuseTexture = new BABYLON.Texture(img, this.scene)

    cube.material = cubeMaterial
  }

  doRender () {
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })

    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  }
}
