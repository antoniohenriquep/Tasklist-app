import { View,TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { useAuth } from "../../contexts/AuthContext";


export default function Signup({navigation}) 
{
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {register} = useAuth()

    async function handleRegister()
    {

        if(name === '' ||email === '' || password === '')
        {
            return
        }

        await register({name,email,password})
        navigation.navigate('Login')
    }
    

    return (
        <View style={styles.container}>

            <Text style={{color:"#fff"}}>{"<Logo aqui>"}</Text>

            <View style={styles.inputArea}>
                
                <Text
                style={styles.inputLabel}>
                    Nome
                </Text>

                <TextInput 
                placeholderTextColor={"#FFF"}
                style = {styles.input} 
                placeholder="Digite seu nome"
                onChangeText={setName}/>

                <Text
                style={styles.inputLabel}>
                    Email
                </Text>
                <TextInput 
                placeholderTextColor={"#FFF"}
                style = {styles.input} 
                placeholder="Digite seu e-mail"
                onChangeText={setEmail}/>

                <Text
                style={styles.inputLabel}>
                    Senha
                </Text>
                <TextInput
                placeholderTextColor={"#FFF"}
                style = {styles.input} 
                placeholder="Digite sua senha" 
                secureTextEntry
                onChangeText={setPassword}
                />
                            
            </View>
            <SubmitButton 
            buttonStyle={styles.buttonStyle}
            buttonFontStyle ={styles.buttonFontStyle}
            text ="Registrar-se"
            onPress={handleRegister}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#101026",
        alignItems:'center',
        justifyContent:'center',
        padding:50
    },
    inputArea:{
        paddingTop:50
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
    inputLabel:{
        fontSize:20,
        marginLeft:10,
        color:'#fff'
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