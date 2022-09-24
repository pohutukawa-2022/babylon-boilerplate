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

    // this.light = new BABYLON.HemisphericLight()
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

    this.createOrb()
  }
  createOrb(){
    const key1Location = {x:30, y:3, z:20, radius: 1.5}
    const key2Location = {x:40, y:3, z:10, radius: 1.5}
    const key4Location = {x:50, y:3, z:5, radius: 1.5}
    const key5Location = {x:60, y:3, z:15, radius: 1.5}
    const key1 = BABYLON.MeshBuilder.CreateSphere(
      'key1',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key1.position = new Vector3(30, 3, 20)
    const key2 = BABYLON.MeshBuilder.CreateSphere(
      'key2',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key2.position = new Vector3(40, 3, 10)

    const key4 = BABYLON.MeshBuilder.CreateSphere(
      'key4',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key4.position = new Vector3(50, 3, 5)
    const key5 = BABYLON.MeshBuilder.CreateSphere(
      'key5',
      { segments: 12, diameter: 3 },
      this.scene
    )


    key5.position = new Vector3(60, 3, 15)
    this.keys = [key1Location, key2Location,  key4Location, key5Location]
    this.player.keyLocations = this.keys

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


    const extWallOne = BABYLON.MeshBuilder.CreateBox('extWallOne', {
      width: 111,
      height: 17,
      depth: 2,
    })
    extWallOne.position.x = 75
    extWallOne.position.y = 8
    extWallOne.position.z = 129

    const extWallTwo = BABYLON.MeshBuilder.CreateBox('extWallTwo', {
      width: 66,
      height: 17,
      depth: 2,
    })
    extWallTwo.position.x = 129.5
    extWallTwo.position.y = 8
    extWallTwo.position.z = 95
    extWallTwo.rotation.y = Math.PI / 2

    const extWallThree = BABYLON.MeshBuilder.CreateBox('extWallThree', {
      width: 35,
      height: 17,
      depth: 7,
    })
    extWallThree.position.x = 69
    extWallThree.position.y = 8
    extWallThree.position.z = 66

    const plaza1 = BABYLON.MeshBuilder.CreateBox('plaza1', {
      width: 80,
      height: 0.3,
      depth: 80,
    })
    plaza1.position.x = 0
    plaza1.position.y = 1
    plaza1.position.z = 0
    const plaza2 = new BABYLON.MeshBuilder.CreateCylinder('plaza2', {
      height: 1,
      diameter: 70,
      tessellation: 300,
    })
    plaza2.position.y = 1
    //test
    const newBuildingRoof = BABYLON.MeshBuilder.CreateBox('plaza1', {
      width: 145,
      height: 0.5,
      depth: 70,
    })
    newBuildingRoof.position.x = 60
    newBuildingRoof.position.y = 17
    newBuildingRoof.position.z = 96

    


    this.scene.fogMode = BABYLON.Scene.FOGMODE_EXP
    this.scene.fogDensity = 0.02
    this.scene.fogColor = new BABYLON.Color3(0, 0, 0)
    this.scene.clearColor = new BABYLON.Color3(0, 0, 0)


    environment('environment', this.scene)
    Furniture('furniture', this.scene)
    
    this.createCamera()
    document.addEventListener('keydown', (e)=> {
      if(e.key === 'e'){
        let foundKey = this.player.checkForKey()
        if(foundKey){
          console.log('got key');
        }
      }
    })
  }

  doRender() {
    this.engine.runRenderLoop(() => {
      this.player.updatePlayer(this.camera)
      this.scene.render()

    })

    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  }
}
