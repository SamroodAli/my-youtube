import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoItems = videos.map((video) => <VideoItem />);
  return videoItems;
};

export default VideoList;
