import React from 'react';

import VideoPlayer from 'react-native-media-console';

// import {PostProps} from './Post.types';

const Post = (): JSX.Element => {
  return (
    <>
      <VideoPlayer
        paused={true}
        resizeMode="cover"
        poster="https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg"
        posterResizeMode="cover"
        source={{uri: ''}} // video.source
        // {...video}
      />
      {/* custom content */
      /* custom Icon */}
    </>
  );
};

export default Post;
