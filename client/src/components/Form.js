import React,{useState} from "react"
import { Link } from "react-router-dom"
const Form = (props) =>{
const {setName} = props
const {handleSubmit} = props
const {name} = props
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" className="form-control w-50" onChange={(e) => setName(e.target.value)} value={name}></input>
            <div className="mt-2">
                <Link to="/" className="btn btn-primary">Cancel</Link>
            <button type="submit" class="btn btn-primary mx-1">Submit</button>
            </div>
            </form>
        </div>
    )
}
export default Form