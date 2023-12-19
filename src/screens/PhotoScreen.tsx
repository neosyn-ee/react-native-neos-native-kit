import { FC } from "react";
import { MediaScreen } from "@components/MediaScreen";
import { SAMPLE_PHOTOFILE } from "@components/MediaScreen/MediaScreen.stories";

const PhotoScreen: FC = () => {

  return (
    <MediaScreen
      media={SAMPLE_PHOTOFILE}
      type="photo"
    />
  )
};
export default PhotoScreen;