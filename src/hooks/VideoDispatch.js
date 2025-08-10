import { useContext } from "react";
import VideoDispatchContext from "../context/videoDispatch";

// initially we were making this dispatch in every child component where we wanted to use dispatch context, that was repeating our code, to eliminate that we wrote it here and will just import it later on. in some cases we might be doing some calculations and write some logic before using the dispatch so that code could also be concisely written in one place by using this approach of making custom hooks

function useVideoDispatch(){

    return useContext(VideoDispatchContext);
}

export default useVideoDispatch;