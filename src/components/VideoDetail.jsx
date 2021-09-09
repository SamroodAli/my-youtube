const VideoDetail = ({ video }) => {
  const { title, description } = video.snippet;
  return (
    <div className="ui segment">
      <div className="content">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
