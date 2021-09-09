import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoItems = videos.map((video) => (
    <VideoItem video={video} key={video.etag} />
  ));
  return videoItems;
};

export default VideoList;
