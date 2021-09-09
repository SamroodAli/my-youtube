import "./VideoItem.css";

const VideoItem = ({ video, onSelectVideo }) => {
  const { thumbnails, description, title } = video.snippet;
  return (
    <div className="item video-item" onClick={(e) => onSelectVideo(video)}>
      <img className="ui image" src={thumbnails.medium.url} alt={description} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
