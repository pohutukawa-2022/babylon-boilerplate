export default class Player{
  constructor(camera){
    this.position = camera.position
    this.keys = 0
    this.battery = 10
    this.keyLocations = null
  }
  updateLocation(camera){
    this.position = camera.position
  }
  checkForKey(){
    let foundKey = false
    let keyToDelete
    for(let i=0; i < this.keyLocations.length; i++){
      let key = this.keyLocations[i]
      let {x, y, z, radius} = key
      let position = this.position
      if(position.x < x + radius &&
        position.x > x - radius &&
        position.z < z + radius &&
        position.z > z -radius){
          foundKey = true
          keyToDelete = i
        }
    }
    if(!isNaN(keyToDelete)){
      console.log(keyToDelete, '11');
      console.log(this.keyLocations);
      this.keyLocations.splice(keyToDelete, 1)
      console.log(this.keyLocations);
    }
    return foundKey
  }
  updatePlayer(camera){
    this.updateLocation(camera)
  }
}