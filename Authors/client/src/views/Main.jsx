import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/authorForm';
import AuthorsList from '../components/authorsList';
import axios from 'axios';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(res => {
                setAuthors(res.data.Authors);
                setLoaded(true);
                console.log(res.data.Authors)
                console.log(authors)
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }




    return (
        <div>
            
            
            {loaded && <AuthorsList authors={authors} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;