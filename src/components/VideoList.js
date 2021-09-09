import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const videoItems = videos.map((video) => (
    <VideoItem video={video} key={video.etag} />
  ));
  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
