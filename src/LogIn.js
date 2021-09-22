import React, { useState } from "react";
import './App.css';
import axios from "axios";

function LogIn(){

    var [name, setname] = useState({

        email:"",
        password:"",
    });

    var [response, setresponse] = useState("");

    function inputValue(event){

        setname({...name, [event.target.name]: event.target.value});
    }

    function formSubmit(event){

        event.preventDefault();

        axios.post("/login", name)
        .then(function(response){

            setresponse(response.data);

                console.log(response.data);
        })
        .catch(function(error){

            setresponse(error);
        });
    }

    var cusstyle={
        background:"transparent",
        border:"none",
        borderBottom:"1px solid white"
    }

    return(
        <div className="container">
            <div className="bg-white d-flex row justify-content-md-center m-4 p-4">
                <div className="card m-3" style={{width: "300px", backgroundImage:`url(./bgLogin.jpg)`, backgroundSize:"cover"}}>
                <form>
                <br />
                    <h1 className="text-white">LogIn</h1>
                    <br />
                    <br />
                    <p className="bg-white text-danger">{ response }</p>
                    <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.email} onChange={inputValue} type="text" name="email" placeholder="Enter Email"/><br /><br />
                    <br />
                    <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.password} onChange={inputValue} type="text" name="password" placeholder="Enter Password"/><br /><br />
                    <br />
                    <div>
                    <a className="text-white">forgot password</a>
                    <br />
                    <br />
                        <button className="rounded text-white" style={{background:"transparent"}} onClick={formSubmit}>LogIn</button>
                    </div>
                    <br />
                    <a href="/register" className="text-white">Register Now</a><br /><br /><br />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;