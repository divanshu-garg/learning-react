import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ videos,deleteVideo, editVideo }) {
  return (
    <>
      <div className="video-wrapper">
        {videos.map((v, i) => (
          <Video id={v.id}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
            key={v.id}
            title={v.title}
            views={v.views}
            time={v.time}
            verified={v.verified}
            channel={v.channel}
            url={v.url}
          >
            <PlayButton
              onPlay={() => console.log("Playing..", v.title)}
              onPause={() => console.log("Paused..", v.title)}
            >
              {v.title}
            </PlayButton>
          </Video>
        ))}
      </div>
    </>
  );
}

export default VideoList;
