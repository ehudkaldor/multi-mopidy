export class TracklistController {
  client = null

  constructor(client) {
    this.client = client
  }

  add() {

  }

  remove() {

  }

  clear() {

  }

  move() {

  }

  shuffle() {

  }

  getRandom() {

  }

  setRandom(changeTo){

  }

  getRepeat() {

  }

  setRepeat(changeTo) {

  }

  getNextTrack(nextTo) {
    try {
      console.debug("getNextTrack")
      return this.client.tracklist.nextTrack(JSON.parse(nextTo))
    } catch(e) {
      console.warn("exception when calling getNextTrack(): " + e)
    }
  }

  getPrevTrack(previousTo) {
    try {
      console.debug("getPrevTrack")
      return this.client.tracklist.previousTrack(JSON.parse(previousTo))
    } catch(e) {
      console.warn("exception when calling getPrevTrack(): " + e)
    }
  }

  getTracks() {
    try {
      console.debug("getTracks")
      return this.client.tracklist.getTlTracks()
    } catch(e) {
      console.warn("exception when calling getTracks(): " + e)
    }
  }

}
