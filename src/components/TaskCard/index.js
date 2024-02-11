import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
/*

*/ 
export default function TaskCard({data}) {
  const [task, setTask] = useState(data)
  return (
    <Pressable style={styles.container} onPress={()=>{console.log('Ola')}}>
      <View>
        <Text style={styles.name}>
          {task.name}
        </Text>

        <Text style={styles.date}>
          {task.date}
        </Text>
      </View>
      <Text style={styles.date}>
        {task.date ? 'A fazer':'Realizada'}
      </Text>
   </Pressable>
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
  }

})