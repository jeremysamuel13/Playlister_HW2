import jsTPS_Transaction from "../common/jsTPS.js"
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, song) {
        super();
        this.app = initApp;
        this.index = index
        this.song = song
    }

    doTransaction() {
        let oldSong = this.app.getSong(this.index)
        console.log(this.index)
        console.log(this.oldSong)
        this.oldSongState = { title: oldSong.title, artist: oldSong.artist, youTubeId: oldSong.youTubeId }
        this.app.setSong(this.index, this.song)
    }

    undoTransaction() {
        if (this.oldSongState) {
            this.app.setSong(this.index, this.oldSongState)
        }
    }
}