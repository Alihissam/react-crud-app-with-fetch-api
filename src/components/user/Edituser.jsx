import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';

const Edituser = () => {

    const history = useHistory();
    const { id } = useParams();


    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    useEffect(() => {
        loadUser();

    }, []);

    const { name, username, email, phone, website } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }


    return (
        <>
            <div className="container">
                <div className="w-75px mx-auto shadow py-5">
                    <h2 className="text-center mb-4">Update User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group pb-3">
                            <input className="input-group"
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input className="input-group"
                                type="text"
                                placeholder="Enter your username"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input className="input-group"
                                type="text"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input className="input-group"
                                type="text"
                                placeholder="Enter your number"
                                name="phone"
                                value={phone}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input className="input-group"
                                type="text"
                                placeholder="Enter your website"
                                name="website"
                                value={website}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-primary update-button"> Update User</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edituser
