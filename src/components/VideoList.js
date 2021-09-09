import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoItems = videos.map((video) => <VideoItem video={video} />);
  return videoItems;
};

export default VideoList;
