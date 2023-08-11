import React, {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import VideoPlayer from '@components/VideoPlayer/VideoPlayer';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-secondary">
          <VideoPlayer
            // height={400}
            source={{
              uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
