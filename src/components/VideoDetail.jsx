const VideoDetail = ({ video }) => {
  const { title, description } = video.snippet;
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoUrl} frameborder="0" title={title}></iframe>
      </div>
      <div className="ui segment">
        <div className="content">
          <h4 className="ui header">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
