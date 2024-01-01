import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../features/sign_in';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
