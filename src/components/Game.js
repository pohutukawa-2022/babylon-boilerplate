import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

import vertShader from './../shaders/shader.vert'
import fragShader from './../shaders/shader.frag'
import Furniture from './Furniture'
import environment from './Environment'
import dirtImg from './../assets/textures/dirt.jpeg'
import concreteImg from './../assets/textures/concrete.jpeg'
import Player from './player'
import { Vector3 } from 'babylonjs'


export default class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.engine = new BABYLON.Engine(this.canvas, true)
    this.time = 0
    
  }
  createCamera(){
    this.camera = new BABYLON.UniversalCamera(
      'camera1',
      new BABYLON.Vector3(0, 5, -10),
      this.scene
    )
    this.camera.setTarget(BABYLON.Vector3.Zero())
    this.camera.attachControl(this.canvas, false)

    this.camera.keysUp.push(87);
    this.camera.keysDown.push(83);
    this.camera.keysLeft.push(65);
    this.camera.keysRight.push(68);
    this.camera.angularSensibility = 8000;
    this.camera.speed = 1;

    this.camera.applyGravity = true
    this.camera.checkCollisions = true
    this.camera.ellipsoid = new BABYLON.Vector3(1, 4, 1)
    
    //   // clipping
    this.camera.minZ = 0.3

    this.light = new BABYLON.SpotLight(
      'light1',
      new BABYLON.Vector3(0, 5,  -10),
      new BABYLON.Vector3(
        0, 0, 1),
      Math.PI / 2,
      20,
      this.scene
    )

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
    const assumedFramesPerSecond = 60;
    const earthGravity = -9.81;
    this.scene.gravity = new BABYLON.Vector3(0, earthGravity / assumedFramesPerSecond, 0);

    let ground = BABYLON.MeshBuilder.CreateGround(
      'ground',
      { width: 300, height: 300, subdivisions: 2 },

      this.scene
    )
    ground.checkCollisions = true
    const dummyGroundTexture = new BABYLON.StandardMaterial()
    dummyGroundTexture.diffuseTexture = new BABYLON.Texture(
      new BABYLON.Color3(1, 2, 1),
      this.scene
    )
    ground.material = dummyGroundTexture
    // const dirtMaterial = new BABYLON.StandardMaterial()
    // dirtMaterial.diffuseTexture = new BABYLON.Texture(concreteImg, this.scene)
    // ground.material = dirtMaterial

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

    const keySize = new BABYLON.Vector3(2, 2, 2)
    const key1 = BABYLON.MeshBuilder.CreateSphere(
      'key1',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key1.position = new Vector3(10, 3, 20)
    const key2 = BABYLON.MeshBuilder.CreateSphere(
      'key2',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key2.position = new Vector3(20, 3, 10)
    const key3 = BABYLON.MeshBuilder.CreateSphere(
      'key3',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key3.position = new Vector3(5, 13, 10)
    const key4 = BABYLON.MeshBuilder.CreateSphere(
      'key4',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key4.position = new Vector3(10, 3, 5)
    const key5 = BABYLON.MeshBuilder.CreateSphere(
      'key5',
      { segments: 12, diameter: 3 },
      this.scene
    )
    key5.position = new Vector3(6, 3, 15)
    let keys = [key1, key2, key3, key4, key5]



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
