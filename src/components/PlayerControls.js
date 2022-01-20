import React, { useState } from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import logo2 from "../assets/logo2.png";

function PlayerControls() {
  var True = true;
  var False = false;

  const [show, setShow] = useState(False);
  const handleClose = () => setShow(False);
  // const handleShow = () => setShow(True);
  function handleShow() {
    setShow(True);
  }
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  return (
    <>
      <div class="level-item has-text-centered">
        <img src={logo2} width="200" height="100" alt="logo" />
      </div>
      <div style={{ padding: "2px", textAlign: "center" }}>
        {" "}
        <button
          type="button"
          class="btn btn-outline-danger btn-lg"
          onClick={handleShow}
        >
          MUSIC PLAYER
        </button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ritify-Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="box controls has-background-grey-dark">
            <div className="current-track has-text-light">
              <marquee>{currentTrackName}</marquee>
            </div>
            {isPlaying ? (
              <h7 style={{ color: "whitesmoke" }}>Enjoy!!.</h7>
            ) : (
              <div class="alert alert-danger d-flex align-items-center fade show">
                <i class="bi-exclamation-octagon-fill"></i>
                <strong class="mx-2">Hello!</strong> First start any song from
                the list.
              </div>
            )}
            <div>
              <button
                className="button has-text-light has-background-grey-dark"
                onClick={playPreviousTrack}
                disabled={!currentTrackName}
              >
                <FontAwesomeIcon icon={faStepBackward} />
              </button>
              <button
                className="button has-text-light has-background-grey-dark"
                onClick={togglePlay}
                disabled={!currentTrackName}
              >
                {isPlaying ? (
                  <FontAwesomeIcon icon={faPause} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} />
                )}
              </button>
              <button
                className="button has-text-light has-background-grey-dark"
                onClick={playNextTrack}
                disabled={!currentTrackName}
              >
                <FontAwesomeIcon icon={faStepForward} />
              </button>
            </div>
          </div>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
    </>
  );
}

export default PlayerControls;
