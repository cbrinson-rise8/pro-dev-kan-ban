import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getBoardData } from '../utils/utils';
import Item from './Item';
import DraggableFlatList from 'react-native-draggable-flatlist'

export default function Column() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await getBoardData();
      setItems(itemsFromServer);
    }

    getItems();
  }, []);


  return (
    <View className="flex flex-col justify-start items-center w-72 h-5/6 bg-blue-200 p-2 rounded">
      <Text className="text-slate-700">Column Title</Text>
      <DraggableFlatList 
        data={items}
        keyExtractor={item => item.id}
        renderItem={Item}
        containerStyle={{width: '100%', height: '100%'}}
        onDragEnd={({ data }) => setItems(data)}
      />
    </View>
  );
}
