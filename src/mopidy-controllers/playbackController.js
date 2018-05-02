export class PlaybackController {

  client = null

  constructor(client) {
    this.client = client
  }

  play(tlid=null) {
    try {
      console.debug("play")
      if (tlid == null)
        this.client.playback.play()
      else {
        this.client.playback.play(tlid)
      }
    } catch(e) {
      console.warn("exception when calling play(): " + e)
    }
  }

  pause() {
    try {
      console.debug("pause")
      this.client.playback.pause()
    } catch(e) {
      console.warn("exception when calling pause(): " + e)
    }
  }

  resume() {
    try {
      console.debug("resume")
      this.client.playback.resume()
    } catch(e) {
      console.warn("exception when calling resume(): " + e)
    }
  }

  stop() {
    try {
      console.debug("stop")
      this.client.playback.stop()
      this.client.playback.seek("0")
    } catch(e) {
      console.warn("exception when calling stop(): " + e)
    }
  }

  next() {
    try {
      console.debug("next")
      this.client.playback.next()
    } catch(e) {
      console.warn("exception when calling next(): " + e)
    }
  }

  previous() {
    try {
      console.debug("previous")
      this.client.playback.previous()
    } catch(e) {
      console.warn("exception when calling previous(): " + e)
    }
  }

  getCurrentTrack() {
    try {
      console.debug("getCurrentTrack")
      return this.client.playback.getCurrentTlTrack()
    } catch(e) {
      console.warn("exception when calling getCurrentTrack(): " + e)
    }
  }

  seek(timePosition) {
    try {
      console.debug("seek to time position " + timePosition)
      return this.client.playback.seek(timePosition)
    } catch(e) {
      console.warn("exception when calling seek(): " + e)
    }
  }

  getTimePosition() {
    try {
      console.debug("getTimePosition")
      return this.client.playback.getTimePosition()
    } catch(e) {
      console.warn("exception when calling getTimePosition(): " + e)
    }
  }

  getPlayingState() {
    try {
      console.debug("getState")
      return this.client.playback.getState()
    } catch(e) {
      console.warn("exception when calling getState(): " + e)
    }
  }
}
