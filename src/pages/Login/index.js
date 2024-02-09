import { View,TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";
import SubmitButton from "../../components/SubmitButton";


export default function Login() {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <Text style={{color:"#fff"}}>{"<Logo aqui>"}</Text>
            <View style={styles.inputArea}>
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
        backgroundColor:"#1d1d2e",
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