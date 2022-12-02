import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';



const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();

    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse())
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUser();
    }


    return (
        <div className="container pt-5">
            <h1>Home</h1>
            <table className="table">
                <thead>
                    <tr className="bg-warning text-center">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">user Name</th>
                        <th scope="col">Emails</th>
                        <th scope="col" className="action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr className="text-center">
                            <th scope="row">{index + 1}</th>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                            <td>
                                <Link className="btn btn-primary view-icon m-2 align-center" to={`/user/${users.id}`}><FaEye /></Link>
                                <Link className="btn btn-warning view-edit m-2" to={`/users/edit/${users.id}`}><FaEdit /></Link>
                                <Link className="btn btn-danger view-delete m-2" onClick={() => deleteUser(users.id)}><MdDelete /></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
