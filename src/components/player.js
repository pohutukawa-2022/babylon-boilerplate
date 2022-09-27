export default class Player {
  constructor(camera, light, game) {
    this.camera = camera
    this.light = light
    this.isLightOn = true
    this.position = camera.position
    this.keysFound = 0
    this.battery = 10
    this.maxStamina = 100
    this.sprintMeter = this.maxStamina
    this.sprinting = false
    this.maxSpeed = 2
    this.minSpeed = 0.7
    this.game = game
  }
  updateLocation(camera) {
    this.position = camera.position
  }
  checkForKey(allKeys) {
    let foundKey = false
    let keyToDelete
    for (let i = 0; i < allKeys.length; i++) {
      let key = allKeys[i]
      let { xMax, xMin, zMax, zMin } = key
      let position = this.position
      console.log(
        key.name,
        position.x < xMax,
        position.x > xMin,
        position.z < zMax,
        position.z > zMin
      )
      console.log(key)
      console.log(position)
      if (
        position.x < xMax &&
        position.x > xMin &&
        position.z < zMax &&
        position.z > zMin
      ) {
        this.keysFound += 1
        foundKey = true
        keyToDelete = i
      }
    }
    if (!isNaN(keyToDelete)) {
      allKeys[keyToDelete].key.dispose()
      allKeys.splice(keyToDelete, 1)
    }
    return foundKey
  }
  toggleLight() {
    if (this.isLightOn) {
      this.light.setEnabled(false)
      this.isLightOn = false
      this.game.boss.teleportBoss()
    } else {
      this.light.setEnabled(true)
      this.isLightOn = true
    }
  }
  flickerLight() {
    this.light.intensity = 2.7
    let randomNumber = Math.floor(Math.random() * 5000)
    setTimeout(() => (this.light.intensity = 3), 100)
    setTimeout(() => this.flickerLight(), randomNumber)
  }
  stamina() {
    if (this.sprinting && this.sprintMeter > 0) {
      this.sprintMeter -= 0.2
    } else if (this.sprintMeter < 100) {
      this.sprintMeter += 0.2
    }
  }
  sprint() {
    if (this.sprintMeter > 2 && this.sprinting) {
      this.camera.speed = this.maxSpeed
    } else {
      this.camera.speed = this.minSpeed
    }
  }
  walk() {
    this.camera.speed = this.minSpeed
  }
  updatePlayer(camera) {
    this.updateLocation(camera)
    this.sprint()
    this.stamina()
  }
}
