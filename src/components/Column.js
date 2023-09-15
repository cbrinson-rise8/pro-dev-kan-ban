import { Text, View } from 'react-native';
import Item from './Item';

export default function Column() {
  return (
    <View className="flex flex-col justify-start items-center w-72 h-5/6 bg-blue-200 p-2 rounded">
      <Text className="text-slate-700">Column Title</Text>
      <Item />
    </View>
  );
}
