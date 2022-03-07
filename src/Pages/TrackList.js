import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { useState, useMemo } from "react";
import { Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
// import ReactPaginate from "react-paginate";

function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

    const [page, setPage] = useState(0);
    const itemPerPage = 4;
    const itemsVistited = page * itemPerPage;
    var totalPages;
    totalPages = Math.ceil(trackList.length / itemPerPage);
    const changePage = ({ selected }) => {
      setPage(selected);
    };
  return (
    <>
    <div>
     {trackList.slice(
                      itemsVistited,
                      itemsVistited + itemPerPage
                    ).map((track, index) => (
        <div className="box">
        
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          {/* <div >{track.id}  &nbsp;</div> */}
          <div className="song-title"><b>{track.id}. </b> &nbsp;{track.name}</div>
       
        
                 </div>
      ))}
      <Card style={{backgroundColor:"black", width:"100%"}}>
      <CardBody >
      <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={totalPages}
                  onPageChange={changePage}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                />
                </CardBody></Card>
      <br />
      </div>
    </>
  );
}
export default TrackList;
