import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

export default createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#008b8b"
        },
        headerTintColor: "#000"
    },
});

