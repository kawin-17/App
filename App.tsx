import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import AgoraRTC from 'react-native-agora';
import RtcRemoteView from 'react-native-agora';
import RtcLocalView from "react-native-agora"
const agoraAppId = 'c9d2e4f0138e4075acf0c878c19a86f3';

const App: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const rtcEngine = AgoraRTC.createEngine();

  
  useEffect(() => {
    const initializeAgora = async () => {
      try {
        await rtcEngine.initialize(agoraAppId);
        await rtcEngine.enableVideo();
        // Other initialization steps...
      } catch (error) {
        console.error('Error initializing Agora:', error);
      }
    };

    initializeAgora();
  }, []);

  const handleJoinChannel = async () => {
    try {
      // Join Agora Channel
      await rtcEngine.joinChannel(null, 'Kawin Sharma Test', null, 0);
      setIsCallActive(true);
    } catch (error) {
      console.error('Error joining channel:', error);
    }
  };

  const handleLeaveChannel = async () => {
    try {
      // Leave Agora Channel
      await rtcEngine.leaveChannel();
      setIsCallActive(false);
    } catch (error) {
      console.error('Error leaving channel:', error);
    }
  };

  return (
    <View>
      {isCallActive ? (
        <View>
          <RtcLocalView.SurfaceView
            style={{ flex: 1 }}
            channelId="your-channel-name"
            renderMode={1} // Use the appropriate VideoRenderMode value
          />
          <RtcRemoteView.SurfaceView style={{ flex: 1 }} channelId="your-channel-name" />
        </View>
      ) : (
        <Button title="Join Voice Channel" onPress={handleJoinChannel} />
      )}
      {isCallActive && <Button title="Leave Voice Channel" onPress={handleLeaveChannel} />}
    </View>
  );
};

export default App;
