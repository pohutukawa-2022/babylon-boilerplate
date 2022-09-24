import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import vertShader from './../shaders/shader.vert'
import fragShader from './../shaders/shader.frag'

import Furniture from './Furniture'
import environment from './Environment'
import Player from './player'

import dryGrass from './../assets/textures/dryGrass.jpg'

export default class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.engine = new BABYLON.Engine(this.canvas, true)
    this.time = 0
  }
  createCamera() {
    this.camera = new BABYLON.UniversalCamera(
      'camera1',
      new BABYLON.Vector3(0, 5, -10),
      this.scene
    )
    this.camera.setTarget(BABYLON.Vector3.Zero())
    this.camera.attachControl(this.canvas, false)

    this.camera.keysUp.push(87)
    this.camera.keysDown.push(83)
    this.camera.keysLeft.push(65)
    this.camera.keysRight.push(68)
    this.camera.angularSensibility = 8000
    this.camera.speed = 1

    this.camera.applyGravity = true
    this.camera.checkCollisions = true

    this.camera.ellipsoid = new BABYLON.Vector3(1, 4, 1)

    //   // clipping
    this.camera.minZ = 0.3

    this.light = new BABYLON.SpotLight(
      'light1',
      new BABYLON.Vector3(0, 5, -10),
      new BABYLON.Vector3(0, 0, 1),
      Math.PI / 3,
      60,
      this.scene
    )

    // this.light = new BABYLON.HemisphericLight()

    this.light.parent = this.camera
    this.light.intensity = 1

    this.player = new Player(this.camera)
  }
  createScene() {
    this.scene = new BABYLON.Scene(this.engine)
    this.scene.onPointerDown = (evt) => {
      if (evt.button === 0) this.canvas.requestPointerLock()
    }
    //apply gravity
    const assumedFramesPerSecond = 60
    const earthGravity = -9.81
    this.scene.gravity = new BABYLON.Vector3(
      0,
      earthGravity / assumedFramesPerSecond,
      0
    )

    let ground = BABYLON.MeshBuilder.CreateGround(
      'ground',
      { width: 300, height: 300, subdivisions: 2 },

      this.scene
    )

    const groundOutside = new BABYLON.StandardMaterial()
    groundOutside.diffuseTexture = new BABYLON.Texture(dryGrass, this.scene)

    ground.checkCollisions = true
    ground.material = groundOutside

    BABYLON.Effect.ShadersStore['customVertexShader'] = vertShader
    BABYLON.Effect.ShadersStore['customFragmentShader'] = fragShader

    this.scene.fogMode = BABYLON.Scene.FOGMODE_EXP
    this.scene.fogDensity = 0.02
    this.scene.fogColor = new BABYLON.Color3(0, 0, 0)
    this.scene.clearColor = new BABYLON.Color3(0, 0, 0)

    environment('environment', this.scene)
    Furniture('furniture', this.scene)

    this.createCamera()
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
