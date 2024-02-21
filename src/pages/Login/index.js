import { View,TextInput, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import Icon from  'react-native-vector-icons/AntDesign'

export default function Login({navigation}) {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hidePassword, setHidePassword] = useState(true)

    function handleLogin()
    {
        if(email === '' || password === '')
        {
            return
        }
        console.log(email, password);
    }

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

                <View style={styles.input}>
                    <TextInput
                    placeholderTextColor={"#FFF"}
                    style = {{width:300,color:'#fff'}} 
                    placeholder="Digite sua senha" 
                    secureTextEntry = {hidePassword}
                    onChangeText={setPassword}
                    />
                    <Pressable onPress={()=>setHidePassword(!hidePassword)}>
                        <Icon name={hidePassword ? 'eyeo' :'eye'} size={30} color='#fff'/>
                    </Pressable>
                </View>               
            </View>
            <SubmitButton 
            buttonStyle={styles.buttonStyle}
            buttonFontStyle ={styles.buttonFontStyle}
            text ="Login"
            onPress={handleLogin}/>


            <View style={{flexDirection:'row', marginTop:20,alignItems:'center'}}>
                <Text style={{color:'white'}}>Não tem uma conta?</Text>
                <Pressable onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{color:'#6200EE',fontWeight:'bold',fontSize:18,}}> Crie uma</Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#101026",
        alignItems:'center',
        justifyContent:'center',
        padding:50,
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
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems: 'center',
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
    },
})