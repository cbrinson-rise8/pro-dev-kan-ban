import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Board from './src/components/Board';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 items-center justify-center bg-white">
        <Board />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}
