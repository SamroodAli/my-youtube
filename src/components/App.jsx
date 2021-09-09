import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar.jsx";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui  container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.selectedVideo && (
          <VideoDetail video={this.state.selectedVideo} />
        )}
        <VideoList
          videos={this.state.videos}
          onSelectVideo={this.onSelectVideo}
        />
      </div>
    );
  }
}

export default App;
