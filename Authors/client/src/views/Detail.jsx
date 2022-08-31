import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Link 
  } from "react-router-dom";
    
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <Link to={"/"}>
                        Home
                    </Link>
        <div>
            <h2>Author Name :{author.name}</h2>
            
        </div>
        <Link to={"/author/edite/" + author._id }>
        Edit
    </Link>
    </div>
    )
}
    
export default Detail;