import ComponentsScreen from './src/screens/ComponentsScreen'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen
  },
  {
    initialRouteName: 'Components',
    defaultNavigatorOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);