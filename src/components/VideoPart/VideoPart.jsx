import "./VideoPart.css";
import video1 from "../../assets/Video/video1.mp4";
import video2 from "../../assets/Video/video2.mp4";
import video3 from "../../assets/Video/video3.mp4";
import video4 from "../../assets/Video/video4.mp4";

const VideoPart = () => {
    
  return (
    
    <>
      <div className="video-part">
        <div className="videos">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            className="home-videos"
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="videos">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            className="home-videos"
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <div className="videos">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            className="home-videos"
          >
            <source src={video3} type="video/mp4" />
          </video>
        </div>
        <div className="videos">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            className="home-videos"
          >
            <source src={video4} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default VideoPart;
