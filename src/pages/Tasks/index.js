import { FlatList, InteractionManager, View } from 'react-native';
import TaskCard from '../../components/TaskCard';

const data = [
    {id:0,nome:"Antonio", email:"antonio@a.com"},
    {id:1,nome:"Henrique", email:"henrique@a.com"},
    {id:2,nome:"Pedro", email:"pedro@a.com"},
    {id:3,nome:"Maria", email:"maria@a.com"},
    {id:4,nome:"Ana", email:"ana@a.com"},
]

export default function Tasks({navigation})
{
 return (
    <FlatList
    data={data}
    keyExtractor={item=>String(item.id)}
    renderItem={({item})=> <TaskCard data={item}/>}
    />

  );
}