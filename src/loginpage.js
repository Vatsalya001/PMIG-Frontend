import React from "react"
import { useState } from "react"

const LoginForm=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(username);
    };
    return(
        <>
        <form action="">
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" autoComplete="off"/>
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autocomplete="off"/>
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            </div>

            <button type="submit">Login</button>

        </form>
        
        </>
    )
}

export default LoginForm