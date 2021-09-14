import axios from "axios"
import React, { useState } from "react"
import Form from "./Form"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect } from "react";
const Update = () => {
    let history = useHistory()
    const { id } = useParams();
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/display/author/' + id)
            .then(res => {
                setName(res.data.Author.name)


            })
            .catch(err => {console.log(err)})
    }, []);
    
    const handleUpdate = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
        axios.put("http://localhost:8000/update/author/"+id, {name})
            .then(response => history.push("/"))
            .catch(err => {
                
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);

            })
    }
    return (
        <div className="container">
            {errors.map((err, index) => <p className="text-danger mt-2" key={index}>{err}</p>)}
            <h1>Favorite Authors</h1>
            <Link to="/"><p>Home</p></Link>
            <p>Update an author:</p>
            <Form handleSubmit={handleUpdate} name={name} setName = {setName} />
        </div>
    )
}
export default Update