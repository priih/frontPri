import React, { Component } from 'react';
import api from '../services/api';
import tarefaslist from '../pages/tarefaslist';

import { 
    TextInput,
    View,
    StyleSheet,
    Text,
    Button,
    ScrollView,
    FlatList,
    TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component {
    static navigationOptions = {
        title: 'My Works',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            dateEvent: '',
        };
    }

    state = {
        counter: 0,
    };

    ComponentDidMount() {
        this.loadTarefas();
    }

    loadTarefas = async () => {
        const response = await api.get("/tarefas");

        const { docs } = response.data;

        this.setState({ counter : docs.lenght });
    };

    render() {
        return (
            <View style={styles.container}>

<Text>Pagina main: {this.state.counter}</Text>
                <Text style={{ color: 'cyan' }}>{this.state.title}</Text>
                <TextInput
                    value={this.state.title}
                    onChangeText={title => this.setState({ title })}
                    placeholder={'Insira o título da tarefa'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })}
                    placeholder={'Descrição'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.dateEvent}
                    onChangeText={dateEvent => this.setState({ dateEvent })}
                    placeholder={'Data do acontecimento (Hoje, Amanhã, Em breve)'}
                    style={styles.inputdata}
                />
                
                
                
            </View>
        
            
            //<View>
            //<Text>Página main: </Text>
            //{ this.state.docs.map(tarefa => {
            //return <Text>{tarefa.title}</Text>
            //})} 
            //</View>
        );
    };   
    
};


const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        width: 305,
        height: 44,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#ecf0f1',
    },
    inputdata: {
        width: 305,
        height: 88,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#ecf0f1',
    },
    container2: {
        flex: 1,
        flexDirection: 'column'
    },

    column: {
        flexDirection: 'column'
    },

    card: {
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: "rgba(82, 113, 255, 0.8)",
        height: 200
    },

    row: {
        flexDirection: 'row'
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 0
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 30,
        paddingRight: 15

    },

    description: {
        marginTop: 10,
        fontSize: 14,
        padding: 5,
        color: '#000',
        borderColor: 'black'
    },

    button: {
        width: 200,
        height: 35,
        margin: 0,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor: "#4BB0EE",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
    },

    barra: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'flex-end'
    },

    padding: {
        paddingRight: 3
    }
});
