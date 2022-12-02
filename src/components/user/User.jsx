import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';




const User = () => {


    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }

    return (
        <div className="container py-4">
            <Link className='btn btn-primary' to="/">
                back to home
            </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className='list-group w-50'>
                <li className="list-group-item">Name:{user.name}</li>
                <li className="list-group-item">Name:{user.username}</li>
                <li className="list-group-item">Name:{user.email}</li>
                <li className="list-group-item">Name:{user.phone}</li>
                <li className="list-group-item">Name:{user.website}</li>
            </ul>
        </div>
    )
}

export default User
