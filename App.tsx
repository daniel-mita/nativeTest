import React, { useState } from 'react';
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function App() {
  const [ shouldPlay, setShouldPlay] = useState(true);
  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback style={{backgroundColor: 'red'}} onPress={() => setShouldPlay(false)}>
      <VideoPlayer
        videoProps={{
          shouldPlay: shouldPlay,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          },
        }}
        inFullscreen={true}
      />
      </TouchableWithoutFeedback>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
