export class State {
  _playingState = false

  libraryURI = null
  _tracklist = []
  timePosition = 0
  seeking = false

  volume = 0
  isMute = false

  _currentTrack = null
  nextTrack = null
  prevTrack = null

  title = ""
  playlists = []
  connected = false

  get tracklist() {
    return this.tracklist
  }

  set tracklist(value) {
    this.tracklist = value
    console.debug("track list changed to " + JSON.stringify(this._tracklist))
  }
  get currentTrack() {
    return this._currentTrack
  }

  set currentTrack(value) {
    this._currentTrack = value
    console.debug("current track changed to " + JSON.stringify(this._currentTrack))
  }

  get playingState() {
    return this._playingState
  }

  set playingState(value) {
    this._playingState = value
    console.debug("playing state changed to " + this._playingState)
  }
}
