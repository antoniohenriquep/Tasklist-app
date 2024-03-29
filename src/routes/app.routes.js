import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tasks from "../pages/Tasks";
import NewTask from "../pages/NewTask";
import EditTask from "../pages/EditTask";

const Stack = createNativeStackNavigator()

export default function AppRoutes()
{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Tasks" component={Tasks}/>
            <Stack.Screen name="New Task" component={NewTask}/>
            <Stack.Screen name='Edit Task' component={EditTask}/>
        </Stack.Navigator>
    )
}