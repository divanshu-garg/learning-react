import { useContext } from "react";
import VideosContext from "../context/videosContext";

function useVideos(){
    return useContext(VideosContext);
}

export default useVideos;
