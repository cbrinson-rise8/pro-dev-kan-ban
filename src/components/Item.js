import { Text, View, TouchableOpacity } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";

export default function Item({ item, drag, isActive }) {
  
  return (
    <ScaleDecorator>
      <TouchableOpacity 
        onLongPress={drag} 
        disabled={isActive} 
        onPress={() => console.log('pressed', item.id)}
        delayLongPress={200}
        className="w-full flex flex-col justify-start items-center"
      >
        <View className="bg-white w-11/12 h-20 mt-2 p-2 rounded">
            <Text className="text-slate-700">{item.title}</Text>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );
}
