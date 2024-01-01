import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const isAuthenticated = false;
  const loading = false;
  if (loading) {
    <View style={estilo.styleView}>
      <ActivityIndicator size={60} color={'#1d1d2e'} />
    </View>;
  } else {
    return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
  }
};

export default Routes;

const estilo = StyleSheet.create({
  styleView: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
