import {AppRegistry} from 'react-native';
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation'
import App from './App';
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";


const pages = StackNavigator(
    {
        WelcomePage: {
            screen: WelcomePage,
            navigationOptions: {
                header: null
            }
        },
        MainPage: {
            screen: MainPage,
            navigationOptions: {
                header: null
            }
        }
    })


AppRegistry.registerComponent('LeReader', () => pages);
