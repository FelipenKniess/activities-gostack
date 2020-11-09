import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api';

const App = () => {
    const [projects, setProject] = useState([]);
    const [title, setTitle]      = useState('');
    const [owner, setOwner]      = useState('');

    useEffect(() => {
        api.get('/projects').then(response => {
            setProject(response.data);
        })
    }, []);

    async function handleAddNewProject(){
 
        const response = await api.post('projects', {
            title,
            owner
        })
        const newProject = response.data;
        setProject([...projects, newProject])
    }

    return (
        <>  
            <Header title="Testee">
                <label htmlFor="title">
                    Title: 
                </label>
                <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} label="title"/>
                <br/>  
                <label htmlFor="owner">Owner</label>
                <input type="text" id="owner"onChange={(e) => setOwner(e.target.value)}/>  
                <br/>  
                <button type="button" onClick={handleAddNewProject}>Adicionar novo elemento</button>

                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                    </tr>
                    {projects.map(project => (
                        <tr key={project.id}>
                            <td>{project.title}</td>
                            <td>{project.owner}</td>
                        </tr>
                    ))}
                </table>
            </Header>
        </>
    )
}

export default App;