import React, {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <VideoPlayer
            autoplay
            // poster="https://fastly.picsum.photos/id/805/1920/1080.jpg?hmac=ojjmQ6qddjxToiegG5R2YbQMusmeXlivOqSfBXkbJUk"
            fullscreenAutorotate
            fullscreenOrientation="landscape"
            disableControlsWhen={{default: false, fullscreen: false}}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
