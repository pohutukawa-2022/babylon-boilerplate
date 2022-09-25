export default class Player{
  constructor(camera){
    this.position = camera.position
    this.keysFound = 0
    this.battery = 10
  }
  updateLocation(camera){
    this.position = camera.position
  }
  checkForKey(allKeys){
    let foundKey = false
    let keyToDelete
    for(let i=0; i < allKeys.length; i++){
      let key = allKeys[i]
      let {xMax, xMin, zMax, zMin} = key
      let position = this.position
      if(position.x < xMax &&
        position.x > xMin &&
        position.z < zMax &&
        position.z > zMin){
          this.keysFound += 1
          foundKey = true
          keyToDelete = i

        }
    }
    if(!isNaN(keyToDelete)){
      allKeys[keyToDelete].key.dispose()
      allKeys.splice(keyToDelete, 1)
    }
    return foundKey
  }
  updatePlayer(camera){
    this.updateLocation(camera)
  }
}