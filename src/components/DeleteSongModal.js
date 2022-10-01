import React, { useEffect, useState } from 'react'

const DeleteSongModal = ({ song, index, deleteSongCallback, cancelDeleteSongCallback, isVisible }) => {
    const [title, setTitle] = useState("")

    useEffect(() => {
        if (song) {
            setTitle(song.title)
        }
    }, [song])


    return (
        <div className={`modal${isVisible ? " is-visible" : ""}`} id="delete-song-modal" data-animation="slideInOutLeft">
            <div className="modal-root" id='verify-delete-song-root'>
                <div className="modal-north">
                    Delete song?
                </div>
                <div className="modal-center">
                    <div className="modal-center-content">
                        Are you sure you wish to permanently remove <b>{title}</b> from the
                        playlist?
                    </div>
                </div>
                <div className="modal-south">
                    <input type="button" id="delete-song-confirm-button" className="modal-button" value='Confirm' onClick={() => deleteSongCallback(index)} />
                    <input type="button" id="delete-song-cancel-button" className="modal-button" value='Cancel' onClick={cancelDeleteSongCallback} />
                </div>
            </div>
        </div>
    )
}

export default DeleteSongModal