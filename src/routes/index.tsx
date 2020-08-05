import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';
import Lyrics from '../pages/Lyrics';

const App = createStackNavigator();

const AppRouthes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#fafafa',
      headerStyle: {
        backgroundColor: '#004231',
      },
      cardStyle: { backgroundColor: '#fafafa' },
    }}
  >
    <App.Screen
      name="Search"
      component={Search}
      options={{ headerShown: true }}
    />
    <App.Screen name="Lyrics" component={Lyrics} />
  </App.Navigator>
);

export default AppRouthes;
