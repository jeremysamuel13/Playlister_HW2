import jsTPS_Transaction from "../common/jsTPS.js"
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index) {
        super();
        this.app = initApp;
        this.index = index
    }

    doTransaction() {
        this.removedSong = this.app.deleteSong(this.index)
    }

    undoTransaction() {
        if (this.removedSong) {
            this.app.insertSong(this.index, this.removedSong)
        }
    }
}