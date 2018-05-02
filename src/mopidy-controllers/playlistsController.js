export class PlaylistsController {
  client = null

  constructor(client) {
    this.client = client
  }

  getPlaylists() {
    try {
      console.debug("getPlayLists")
      this.client.playlists.asList()
    } catch(e) {
      console.warn("exception when calling getPlaylists(): " + e)
    }
  }  
}
