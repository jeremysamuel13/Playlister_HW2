import jsTPS_Transaction from "../common/jsTPS.js"
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, song) {
        super();
        this.app = initApp;
        this.song = song
    }

    doTransaction() {
        this.songIdx = this.app.appendSong(this.song)
    }

    undoTransaction() {
        if (this.songIdx >= 0) {
            this.app.deleteSong(this.songIdx)
        }
    }
}