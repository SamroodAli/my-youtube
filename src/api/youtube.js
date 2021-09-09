import Axios from "axios";
const KEY = "AIzaSyAOXMXwxz7KK2PjCbTMjXu-sluWFaIyyA4";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
