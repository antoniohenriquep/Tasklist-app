import { View } from 'react-native';

export default function PriorityFlag({priority}) {

  function setFlagColor(priority)
  {
    switch (priority) {
      case 'normal':
        return 'green';
        
      case 'important':
        return 'yellow';

      case 'urgent':
        return 'red';

    
      default:
        return 'green'
    }
  }

  return (
    <View style={{width:8,height:'100%',backgroundColor: setFlagColor(priority),left:30,borderTopRightRadius:10,borderBottomRightRadius:10}}/>
  );
}