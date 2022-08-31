import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log(res.data);
                setName(res.data.name)
                
            })
    }, []);
    
    
    const updateAuthor = e => {
            e.preventDefault();
        axios.put('http://localhost:8000/api/author/edite/' + id, {
            name
        })
            .then(res => console.log(res))  
            .catch(err => console.error(err));
            history.push("/");
    }
    
    return (
        <div>
            <Link to={"/"}>
                        Home
                    </Link>
            <h1>Edite this Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;