export default class Player {
  constructor(camera, light, game) {
    this.camera = camera
    this.light = light
    this.isLightOn = true
    this.position = camera.position
    this.keysFound = 0
    this.battery = 10
    this.health = 100
    this.maxStamina = 100
    this.sprintMeter = this.maxStamina
    this.sprinting = false
    this.maxSpeed = 1.5
    this.minSpeed = 0.35
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
      if (
        position.x < xMax &&
        position.x > xMin &&
        position.z < zMax &&
        position.z > zMin
      ) {
        this.keysFound += 1
        foundKey = true
        keyToDelete = i
        if (this.keysFound === 1) {
          this.game.boss.initialize()
        }
      }
    }
    if (!isNaN(keyToDelete)) {
      allKeys[keyToDelete].key.dispose()
      allKeys.splice(keyToDelete, 1)
      return foundKey
    }
  }

  checkWin(location) {
    let { xMax, xMin, zMax, zMin, yMin, yMax } = location
    let position = this.position
    if (
      position.x < xMax &&
      position.x > xMin &&
      position.z < zMax &&
      position.z > zMin &&
      position.y < yMax &&
      position.y > yMin
    ) {
      if (this.keysFound === 5) {
        this.game.gameWon()
      } else {
        document.getElementById('announcement').innerHTML = `${
          5 - this.keysFound
        } keys left`
        setTimeout(
          () => (document.getElementById('announcement').innerHTML = ''),
          5000
        )
      }
    }
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

  pickupMedkit() {
    let medkits = this.game.medkit
    for (let i = 0; i < medkits.length; i++) {
      let medkitObj = medkits[i]
      let { medkit, xMax, xMin, zMax, zMin } = medkitObj

      if (
        this.position.x < xMax &&
        this.position.x > xMin &&
        this.position.z < zMax &&
        this.position.z > zMin
      ) {
        medkitObj.medkit.dispose()
        this.game.medkit.splice(i, 1)
        return true
      }
    }
  }

  gameOver() {
    if (this.health === 0) {
      this.game.gameOver()
    }
  }
  updatePlayer(camera) {
    this.updateLocation(camera)
    this.sprint()
    this.stamina()
    this.gameOver()
    document.getElementById('health').innerHTML= `  ${this.health}HP`
    document.getElementById('health').style.width= `${this.health}%`
  }
}
