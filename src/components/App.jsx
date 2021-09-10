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

    this.setState({ videos: response.data.items }, () =>
      this.setState({ selectedVideo: this.state.videos[0] })
    );
  };

  render() {
    return (
      <div className="ui  container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            {this.state.selectedVideo && (
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
            )}
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
