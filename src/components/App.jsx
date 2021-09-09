import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

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
        <VideoList
          videos={this.state.videos}
          onSelectVideo={this.onSelectVideo}
        />
      </div>
    );
  }
}

export default App;
