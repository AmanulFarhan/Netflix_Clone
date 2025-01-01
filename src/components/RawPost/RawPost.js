import React, { useEffect, useRef, useState } from "react";
import "./RawPost.css";
import instance from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import Youtube from "react-youtube";

function RawPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState(null);
    const rowRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        instance
            .get(props.url)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((err) => {
                alert("Network Error");
            });
    }, []);

    const opts = {
        height: "300",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        instance
            .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0].key);
                } else {
                    console.log("Trailer not available");
                    setUrlId(null);
                }
            })
            .catch(() => {
                console.log("Trailer not available");
                setUrlId(null);
            });
    };

    const scrollRow = (direction) => {
        const scrollAmount = 600;
        console.log("Scrolling in direction: ", direction);
        if (direction === "left") {
            console.log("Current Scroll Left: ", rowRef.current.scrollLeft);
            rowRef.current.scrollLeft -= scrollAmount;
        } else if (direction === "right") {
            console.log("Current Scroll Right: ", rowRef.current.scrollLeft);
            rowRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="arrow-buttons">
                <button onClick={() => scrollRow("left")} className="scroll-button left">
                    &lt;
                </button>
                <button onClick={() => scrollRow("right")} className="scroll-button right">
                    &gt;
                </button>
            </div>
            {/* Debug: Apply a fixed width here to test if scrolling triggers */}
            <div className="posters" ref={rowRef} style={{ width: "100%", overflowX: "scroll" }}>
                {movies.map((obj) => (
                    <div key={obj.id} className="poster-container" onClick={() => handleMovie(obj.id)}>
                        <img
                            className={props.isSmall ? "smallPoster" : "poster"}
                            src={`${imageUrl + obj.backdrop_path}`}
                            alt="Poster"
                        />
                    </div>
                ))}
            </div>
            {urlId && <Youtube ref={videoRef} className="video" videoId={urlId} opts={opts} />}
        </div>
    );
}

export default RawPost;
