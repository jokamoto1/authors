import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import AuthorList from './AuthorList'
const Main = () =>{
    const[authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/display/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return(
        <div className="container">
            <h1>Favorite Authors</h1>
            <Link to="/new"><p>Add an Author</p></Link>
            <p>We have quotes by:</p>
            {loaded && <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}  setLoaded={setLoaded} />}
       </div>

    )
}
export default Main;