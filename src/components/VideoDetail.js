const VideoDetail = ({ video }) => {
  const { thumbnails, description, title } = video.snippet;
  return (
    <div>
      {title}
      {description},{thumbnails.medium.url}
    </div>
  );
};

export default VideoDetail;
