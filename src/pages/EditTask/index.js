import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Platform} from 'react-native';
import SubmitButton from '../../components/SubmitButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';



export default function EditTask({navigation}) 
{
    const route = useRoute()
    const {api} = useAuth()

    const id = route.params._id

    const [name, setName] = useState(route.params.name)
    const [dateTask, setDateTask] = useState(route.params.date)
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    
    async function handleEditTask()
    {
        await api.put(`/tasks/${id}`,{
            name,
            date: dateTask
        })

        navigation.navigate('Tasks')
    }



    function toggleDatePicker()
    {
        setShowPicker(!showPicker)
    }

    function onPickerChange({type}, selectedDate)
    {
        if(type == "set")
        {
            const currentDate = selectedDate
            setDate(currentDate)

            if(Platform.OS === "android")
            {

                toggleDatePicker()
                setDateTask(currentDate.toLocaleDateString('pt-br'))
            }
        }
        else
        {
            toggleDatePicker()
        }
    }

    return (
   <View style={styles.container} >
    <Text>Nova tarefa</Text>

    <Text style={styles.inputLabel}>Nome da tarefa</Text>
    <TextInput 
    style={styles.input}
    value={name}
    placeholder='Ex: Jogar lixo fora'
    placeholderTextColor={"#FFF"}
    onChangeText={setName}/>

    <Text style={styles.inputLabel}>Data</Text>
    {showPicker && (
            <DateTimePicker
            mode='date'
            display='spinner'
            value={date}
            onChange={onPickerChange}
            minimumDate={new Date()}
            />
    )}

    {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
            <TextInput 
            style={styles.input}
            placeholder='Ex: 20/05/2024'
            placeholderTextColor={"#FFF"}
            value={dateTask}
            onChangeText={setDateTask}
            editable={false}/>
        </Pressable>
    )}
    

    <SubmitButton
    buttonStyle={styles.buttonStyle}
    buttonFontStyle ={styles.buttonFontStyle}
    text ="Editar tarefa"
    onPress={()=>{
        handleEditTask()
    }}/>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#101026",
        padding:30,
        alignItems:'center',
        justifyContent:'center'
    },
    inputLabel:{
        fontSize:20,
        marginLeft:10,
        color:'#fff'
    },
    input:{
        borderWidth:0.2,
        borderColor:"#8a8a8a",
        color:"#fff",
        borderRadius:10,
        marginBottom:25,
        marginTop:10,
        width:360,
        height:60,
        padding:15
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        width:360,
        backgroundColor:'#6200EE',
        borderRadius:10,
        height:60,
        marginTop:30
    },
    buttonFontStyle:{
        fontSize:28,
        fontWeight:'400',
        color:"#fff"
    }
})