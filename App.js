import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from './screens/TaskListScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lista"
          component={TaskListScreen}
          options={{ title: 'Mina uppgifter' }}
        />
        <Stack.Screen
          name="Detalj"
          component={TaskDetailScreen}
          options={{ title: 'Uppgift' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}