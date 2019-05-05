import React, { Component } from 'react';
import api from '../services/api';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: 'My Works',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }
    };

    state = {
        docs: []
    };

    async componentDidMount() {
        this.loadTarefas();
    }

    loadTarefas = async () => {
        const response = await api.get("/tarefas");

        this.setState({ docs: response.data });

        console.log(this.state.docs)
    };

    renderItem = ({ item }) => {
        return (
            <View style={styles.productContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>

                <TouchableOpacity
                    style={styles.productButton}
                    onPress={() => {
                        // (rota de deleção)
                    }}
                >
                    <Text style={styles.productButtonText}>Deletar</Text>
                </TouchableOpacity>
            </View>
        );
    };

    handleNew = () => {
        this.props.navigation.navigate("Novo")
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
                <View style={styles.barra}>
                    <TouchableOpacity onPress={this.handleNew}>
                        <Icon name="plus" size={40} color="#000" />
                        <Text>Novo</Text></TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="file-text" size={40} color="#000" />
                        <Text>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 2
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 1
    },
    productButtonText: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold"
    },

    barra: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'flex-end'
    },
});