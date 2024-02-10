import { StyleSheet, Text, View } from 'react-native';

export default function TaskCard({data}) {
  return (
    <View style={styles.container}>
      <Text>
        {data.nome}
      </Text>

      <Text>
        {data.email}
      </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:150,
    borderBottomWidth:1
  }
})