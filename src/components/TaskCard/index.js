import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import TaskOptionsModal from '../TaskOptionsModal';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';


export default function TaskCard({data,forceUpdate}) {

  const navigation = useNavigation()
  const task = data
  const {_id,name,date} = data
  const {api} = useAuth()

  const [modalVisible, setModalVisible] = useState(false)

  async function handleDeleteTask()
  {
      await api.delete(`/tasks/${_id}`)
      setModalVisible(!modalVisible)
      forceUpdate()
  }

  return (
    <View >
      <Pressable  style={styles.container} onPress={()=>{setModalVisible(!modalVisible)}}>
        <View>
          <Text style={styles.name}>
            {task.name}
          </Text>

          <Text style={styles.date}>
            {task.date}
          </Text>
          </View>
          <Text style={styles.date}>
            {task.done ? 'Realizada':'A fazer'}
          </Text>
      </Pressable>

      <Modal 
      style={{justifyContent:'center',alignItems:'center',flex:1}}
      visible={modalVisible}
      animationType='fade'
      transparent={true}>
        <TaskOptionsModal 
        closeModal ={()=>{setModalVisible(!modalVisible)}}
        editButtonPress={()=>{
          console.log(_id)
          setModalVisible(!modalVisible)
          navigation.navigate('Edit Task',{_id,name,date})
        }}
        deleteButtonPress={handleDeleteTask}/>
      </Modal>
      
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:150,
    backgroundColor:'#2e2e48',
    paddingHorizontal:30,
    borderRadius:10,
    marginBottom:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  name:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff'
  },
  date:{
    fontSize:16,
    fontWeight:'400',
    color:'#fff',
    marginTop:15
  },
  addTaskButton:{
    position:'absolute'
  }

})