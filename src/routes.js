import { createStackNavigator } from 'react-navigation';

import List from "./pages/home";
import Novo from "./pages/novo"

export default createStackNavigator({
    List,
    Novo
}, {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#008b8b"
        },
        headerTintColor: "#000"
    },
});

