import { useState } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import SubmitButton from '../../components/SubmitButton';
//npm install @react-native-community/datetimepicker --save


export default function NewTask({navigation}) {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
 return (
   <View style={styles.container} >
    <Text>Nova tarefa</Text>

    <Text style={styles.inputLabel}>Nome da tarefa</Text>
    <TextInput 
    style={styles.input}
    placeholder='Ex: Jogar lixo fora'
    placeholderTextColor={"#FFF"}
    onChangeText={setName}/>

    <Text style={styles.inputLabel}>Data</Text>
    <TextInput 
    style={styles.input}
    placeholder='Ex: Jogar lixo fora'
    placeholderTextColor={"#FFF"}
    onChangeText={setName}/>

    <SubmitButton
    buttonStyle={styles.buttonStyle}
    buttonFontStyle ={styles.buttonFontStyle}
    text ="Adicionar tarefa"
    onPress={()=>{
        navigation.navigate('Tasks')
    }}/>



    {/* <Text style={styles.inputLabel}>{name}</Text> */}
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