import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";

const App = () => {
  // const [selectedVideo, setSelectedVideo] = useState(null);
  // setSelectedVideo(response.data.items[0]); // does one thing
  // chill lofi beats to code/relax to

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
