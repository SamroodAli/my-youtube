import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onSearchSubmit] = useVideos("chill lofi beats");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui  container">
      <SearchBar onSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          {selectedVideo && (
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className="five wide column">
            <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
