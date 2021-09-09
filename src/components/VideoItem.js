const VideoItem = ({ video }) => {
  const { snippet } = video;
  return <div>{snippet.title}</div>;
};
export default VideoItem;
