import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

import api from "../services/api";

export default class Novo extends Component {

    static navigationOptions = {
        title: 'New Work',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }
    };

    state = {
        title: "",
        description: "",
        dataEvent: ""
    };

    handleSubmit = async () => {
        const response = await api.post("tarefas", {
            title: this.state.title,
            description: this.state.description,
            dateEvent: this.state.dataEvent
        });

        this.props.navigation.navigate("List");
    };

    render() {
        return (
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={this.state.title}
                    onChangeText={text => this.setState({ title: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={this.state.description}
                    onChangeText={text => this.setState({ description: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Data: Hoje, Amanhã, Em Breve..."
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.dataEvent}
                    onChangeText={text => this.setState({ dataEvent: text })}
                />

                <TouchableOpacity
                    style={styles.productButton}
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.productButtonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 20,
        paddingTop: 70
    },
    input: {
        height: 42,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#999",
        marginBottom: 30,
        paddingLeft: 15
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        backgroundColor: "#008b8b8b",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        shadowColor: "#00ced1",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 1,
        borderRadius: 20, 
        marginHorizontal: 30
    },
    productButtonText: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
        color: "#000"
    }
});
