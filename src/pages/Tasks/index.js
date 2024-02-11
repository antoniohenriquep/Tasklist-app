import { FlatList, InteractionManager, StyleSheet, View } from 'react-native';
import TaskCard from '../../components/TaskCard';
import Separator from '../../components/Separator';

const data = [
    {id:0, name:"Tirar o lixo", date:'05/02/2024', done:false},
    {id:1, name:"Estudar", date:'06/02/2024', done:false},
    {id:2, name:"Fazer commit", date:'08/02/2024',  done:false},
    {id:3, name:"Organizar coisas", date:'09/02/2024', done:false},
]

export default function Tasks({navigation})
{
 return (
  <View style={styles.container}>
    <FlatList
    data={data}
    keyExtractor={item=>String(item.id)}
    renderItem={({item})=> <TaskCard data={item}/>}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#101026',
    padding:10,
    flex:1
  }
})