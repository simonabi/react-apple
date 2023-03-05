
import React, { useState, useEffect } from "react";
import './css/bootstrap.css';
const YoutubeVideos = () => {
    const [YoutubeVideos, setYoutubeVideos] = useState([]);
    useEffect(() => {
        fetch(
            'https://www.googleapis.com/youtube/v3/search?key=' + process.env.REACT_APP_API_KEY + '&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9'
        )
            .then((res) => res.json())
            .then((data) => {
                const youtube = data.items;
                console.log(youtube);
                setYoutubeVideos(youtube);
            });
    }, []);

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    {YoutubeVideos?.map((video, i) => {
                        let youtubeVideoId = video.id.videoId;
                        let link = `https:www.youtube.com/watch?v=${youtubeVideoId}`;
                        return (
                            <div className="col-sm-12 col-6 col-lg-4">
                                <div className="card centerVideo" style={{ width: "21rem" }}>
                                    <a
                                        className="text-decoration-none"
                                        href={link}
                                        target="_blank"
                                    >
                                        <img
                                            src={video.snippet.thumbnails.high.url}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title">{video.snippet.title}</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default YoutubeVideos;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10
