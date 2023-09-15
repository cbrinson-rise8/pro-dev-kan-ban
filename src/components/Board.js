import { Text, View } from 'react-native';
import Column from './Column';

export default function Board() {
  return (
    <View className="flex flex-col justify-center items-center w-11/12 h-5/6 bg-blue-500 border-2">
        <Column />
    </View>
  );
}
