import axios from "axios"
import React, { useState } from "react"
import Form from "./Form"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

const New = () => {
    const [errors, setErrors] = useState([]);
    let history = useHistory();
    const [name, setName] = useState("")
    const handleCreate = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
        axios.post("http://localhost:8000/create/author", { name: name })
            .then(response => history.push('/'))
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
                <p>Add a new author:</p>
                <Form handleSubmit={handleCreate} setName={setName} />
            </div>
        )
    }
    export default New