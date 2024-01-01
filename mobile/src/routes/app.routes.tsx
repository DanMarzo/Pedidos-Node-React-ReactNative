import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../features/dashboard';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
