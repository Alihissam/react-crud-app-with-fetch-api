import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Adduser = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const { name, username, email, phone, website } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/")
    }



    return (
        <div className="container">
            <div className="w-75px mx-auto shadow py-5">
                <h2 className="text-center mb-4">Add User</h2>
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
                    <button className="btn btn-primary update-button"> Add User</button>
                </form>
            </div>
        </div>
    )
}

export default Adduser
