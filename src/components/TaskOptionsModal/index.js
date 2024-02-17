import { StyleSheet, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'


export default function TaskOptionsModal(props) {
return (
    <View style={styles.container}>
        <View style={styles.box}>

            <Pressable style={styles.closeButton} onPress={props.closeModal}>
                <Icon name='close' size={30} color='#fff'/>
            </Pressable>
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#fff', fontSize:28}}>O que pretende fazer?</Text>
            </View>
            <View style={styles.buttonsRow}>
                <Pressable style={styles.genericButton}>
                    <Text style={{color:'#ffd700',fontWeight:'bold',fontSize:20}}
                    >Editar</Text>
                </Pressable>

                <Pressable style={styles.genericButton}>
                    <Text style={{color:'green',fontWeight:'bold',fontSize:20}}
                    >Concluir</Text>
                </Pressable>
            </View>

            <Pressable style={styles.deleteButton}>
                <Text style={{color:'red',fontWeight:'bold',fontSize:20}}>Excluir</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
         opacity:1,
         justifyContent:'center',
         alignItems:'center'
        },
        box:{
            width:'90%',
            height:250,
            backgroundColor:'#101026',
            borderRadius:15,
            justifyContent:'flex-end'
        },
        deleteButton:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            paddingVertical:10,
            color:'red',
            borderTopWidth:0.2,
            borderColor:'#8a8a8a'
        },
        buttonsRow:{
            // borderTopWidth:0.2,
            // borderColor:'#8a8a8a',
            flexDirection:'row'
        },
        genericButton:{
            width:'50%',
            alignItems:'center',
            paddingVertical:10,
            color:'red',
        },
        closeButton:{
            marginTop:10,
            left:310,
            borderRadius:30,
            width:40,
            height:40,
            justifyContent:'center',
            alignItems:'center',
            //backgroundColor:'green'
            
        }

})