import React, { Component } from 'react';
import api from '../services/api';

import { TextInput, View, StyleSheet, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Tarefaslist extends Component {
    static navigationOptions = {
        title: 'My Works: Lista de tarefas',
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



    //state = {
    //docs: [],
    //};

    ComponentDidMount() {
        this.loadTarefas();
    }

    loadTarefas = async () => {
        const response = await api.get("/tarefas");

        const { docs } = response.data;

        console.log(docs);
        //this.setState({ docs });
    };

    render() {
        return (
            <View style={styles.container}>
            <Text>oi</Text>
                <Icon name="plus" size={30} color="#000" />
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#ecf0f1',
    },
    inputdata: {
        width: 300,
        height: 88,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#ecf0f1',
    },
});
