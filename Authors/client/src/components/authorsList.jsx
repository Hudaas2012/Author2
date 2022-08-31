import axios from 'axios';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
//import React, { useEffect, useState } from 'react'

const AuthorsList = (props) => {
    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    
                
    return (
        <div>
            <h2>Favorite authors:</h2>
            <Link to={"/author/new/"}>
                Add an Author
            </Link>
            <h1>We have quotes by:</h1>

            <table>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                </thead>
                <tbody>
                    
            {props.authors.map((author, i) =>
                // <p key={i}><a href="http://localhost:3000/authors/"+{author._id}>{author.title}</a></p>
                <tr key={i}>
                    <td>
                 <Link to={"/author/" + author._id}>
                    {author.name}
                </Link>
                </td>
                <td>
                    <button style={{ marginLeft: '20px' }} onClick={(e) => { deleteAuthor(author._id) }}>
                        Delete
                    </button>
                    
                    <Link to={"/author/edite/" + author._id}>
                        Edit
                    </Link>
                    </td>

                </tr>
            )}
            </tbody>
            </table>
        </div>
    )
}

export default AuthorsList;