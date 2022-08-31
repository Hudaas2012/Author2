import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/authorForm';
import { useHistory, useParams } from "react-router-dom";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
    
const NewAuthor = (props) => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();
    
    // useEffect(()=>{
    //     axios.post('http://localhost:8000/api/author/new/')
    //         .then(res=>{
    //             setAuthors(res.data.Authors);
    //             history.push("/");
    //             setLoaded(true);
               
    //             console.log(res.data.Authors)
    //             console.log(authors)
                
    //         })
    //         .catch(err => console.error(err));
            
           
    // },[]);

    const createAuthor = (Authors) => {
        axios
          .post('http://localhost:8000/api/author/new/', Authors)
          .then((res) => {
            console.log(res.data.Authors);
            history.push("/");
          })
          .catch((error) => {
            const errorResponse = error.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
              // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
          });
      };

    
    
    return (
        <div>
            <Link to={"/"}>
                        Home
                    </Link>
            {errors.map((error, index) =>( <p className="text-danger" key={index}>{error}</p>))}
            <AuthorForm onSubmitProp={createAuthor} initialName=""/>
           
        </div>
    )
}
    
export default NewAuthor;