import { MediaScreen } from "../components/MediaScreen";
import { SAMPLE_VIDEOFILE } from "../components/MediaScreen/MediaScreen.stories";
import { FC } from "react";

const VideoScreen: FC = () => {
    return ( 
        <MediaScreen
         type="video"
         media={SAMPLE_VIDEOFILE}
        />
     );
}
 
export default VideoScreen;