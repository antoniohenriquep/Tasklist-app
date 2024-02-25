
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import TaskCard from '../../components/TaskCard';
import { useCallback, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

export default function Tasks({navigation})
{
  const {api} = useAuth()

  const [data, setData] = useState([])

  async function getTasks()
  {
    let response = await api.get('/tasks')
    setData(response.data)
    console.log('a')
  }

  useFocusEffect(
    useCallback(() => {
      getTasks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      keyExtractor={item=>String(item._id)}
      renderItem={({item})=> 
        <TaskCard 
        forceUpdate={getTasks}
        data={item}
        />
      }/>

      <Pressable style={styles.addTaskButtonContainer} onPress={()=>{navigation.navigate('New Task')}}>
        <Text style={styles.addTaskButtonFont}>+</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#101026',
    padding:10,
    flex:1
  },
  addTaskButtonContainer:{
    position:'absolute',
    backgroundColor:'#6200EE',
    width:80,
    height:80,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    right:20,
    bottom:15
  },
  addTaskButtonFont:{
    fontSize:30,
    fontWeight:'bold',
    color:'#ffffff',
  }
})