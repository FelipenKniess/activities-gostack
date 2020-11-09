import React, { useEffect, useState} from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Felipe Niehues Kniess'
        });

        const newProject = response.data;

        setProjects([...projects, newProject]);
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="red" />
            
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.title} key={project.id}> {project.title} </Text>
                    )}
                />

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.6} 
                    onPress={handleAddProject}>
                        <Text style={styles.buttonText}>Adicionar projecto</Text>
                </TouchableOpacity>
            </SafeAreaView>

            {/* <View style={styles.container}>
                { projects.map( project => (
                    <Text style={styles.title} key={project.id}> {project.title} </Text>
                ))}
            </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF3',
    },
    title : {
        color: 'black',
        fontSize: 32
    },
    button : {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText : {
        fontSize: 14,
        fontWeight: 'bold'
    }
});