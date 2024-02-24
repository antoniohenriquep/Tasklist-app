import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import TaskCard from '../../components/TaskCard';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

// const data = [
//     {id:0, name:"Tirar o lixo", date:'05/02/2024', done:false},
//     {id:1, name:"Estudar", date:'06/02/2024', done:false},
//     {id:2, name:"Fazer commit", date:'08/02/2024',  done:false},
//     {id:3, name:"Organizar coisas", date:'09/02/2024', done:false},
//     {id:4, name:"Maratona de programacao", date:'12/02/2024', done:false},
// ]

export default function Tasks({navigation})
{
  const {api} = useAuth()
  
  const [data, setData] = useState([])

  useEffect(()=>{
    
    async function getTasks()
    {
      const response = await api.get('/tasks')
      setData(response.data)
      console.log(response.data)
    }

    getTasks()

  },[])

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      keyExtractor={item=>String(item._id)}
      renderItem={({item})=> 
      <TaskCard 
      data={item}
      navigation={navigation}/>}
      />

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