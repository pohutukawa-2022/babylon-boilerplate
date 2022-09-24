export default class Player {
  constructor(camera) {
    this.position = camera.position
    this.keys = []
    this.battery = 10
  }
  updateLocation(camera) {
    this.location = camera.position
  }
}
