import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Board from './src/components/Board'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Board />
      <StatusBar style="auto" />
    </View>
  );
}
