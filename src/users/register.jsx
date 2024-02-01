/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { createUser } from "../services/userService";

export default function RegisterUser(){

    let [user,setUser] = useState({
        email:"",
        login:"",
        name:"",
        password: "",
        role:"USER_ROLE",
        active:true
    });

    function handleUser(e){
        setUser({...user,[e.target.name]: e.target.value})
    }

    function addUser(){
        createUser(user).then();
    }

    return (
        <div className="add-player">
            <form className="container mt-5">
                <h1>Register</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Email:</label>
                    <input type="text" className="form-control" name="email" onChange={handleUser} value={user.email} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Username:</label>
                    <input type="text" className="form-control" name="login" onChange={handleUser} value={user.login} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="team" className="form-label">Name:</label>
                    <input type="text" className="form-control" name="name" onChange={handleUser} value={user.name} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Password:</label>
                    <input type="password" className="form-control" name="password" onChange={handleUser} value={user.password} required/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={addUser}>Register</button>
            </form>

        </div>
    )
}