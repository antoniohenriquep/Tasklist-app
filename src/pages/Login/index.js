import { View,TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";
import SubmitButton from "../../components/SubmitButton";


export default function Login() {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <Text>{"<Logo aqui>"}</Text>
            <View style={styles.inputArea}>
                <Text
                style={styles.inputLabel}>
                    Email
                </Text>
                <TextInput 
                style = {styles.input} 
                placeholder="Digite seu e-mail"
                onChangeText={setEmail}/>

                <Text
                style={styles.inputLabel}>
                    Senha
                </Text>
                <TextInput
                style = {styles.input} 
                placeholder="Digite sua senha" 
                secureTextEntry
                onChangeText={setPassword}
                />
                            
            </View>
            <SubmitButton 
            buttonStyle={styles.buttonStyle}
            buttonFontStyle ={styles.buttonFontStyle}
            text ="Login"
            onPress={()=>{
                console.log('ola')
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:'center',
        justifyContent:'center',
        padding:50
    },
    inputArea:{
        paddingTop:50
    },
    input:{
        borderWidth:0.2,
        borderRadius:10,
        marginBottom:25,
        marginTop:10,
        width:400,
        height:60
    },
    inputLabel:{
        fontSize:20,
        marginLeft:10,
        color:'#000000'
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        width:400,
        backgroundColor:'#6200EE',
        borderRadius:10,
        height:60,
        marginTop:30
    },
    buttonFontStyle:{
        fontSize:28,
        fontWeight:'400',
        color:"#000000"
    }
})