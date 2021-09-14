import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AuthorList = (props) => {
    const { setAuthors } = props
    const { authors } = props
    const { setLoaded } = props
    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/delete/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }


    return (
        <table className="table table-bordered border w-auto">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {props.authors.map((author, i) =>
                    <tr>
                        <td key={i}>{author.name}</td>
                        <td className="d-flex">
                            <Link to={`/edit/${author._id}`} className="mx-2 link-primary">Update</Link>
                            <p className="link-primary" onClick={(e) => { deleteAuthor(author._id) }}><u>Delete</u></p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>



    )
}
export default AuthorList