import React, { useState } from "react";
import './App.css';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";



function Register(){

    var [name, setname] = useState({
        fname:"",
        lname:"",
        phone:"",
        email:"",
        password:"",
        cpassword:"",
    });
    var [response, setresponse] = useState("");

    function inputValue(event){


        setname({...name, [event.target.name]: event.target.value});
    }


    function sendForm(event){

        event.preventDefault();

        axios.post("/register", name)
        .then(function(response){
            if(response.data === "saved"){
                history.push("/login");
            }else{
            setresponse(response.data)
            }
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

    const history = useHistory();

    return(
        
        <div className="container">
        <div className="bg-white d-flex row justify-content-md-center m-4 p-4">
            <div className="card m-3" style={{width: "500px", backgroundImage:`url(./bgRegister.jpg)`, backgroundSize:"cover"}}>
            <form method="post">
            <br />
                <h1 className="text-white">Sign Up</h1>
                <br />
                <br />
                <p className="bg-white text-danger">{ response }</p>
                <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.fname} onChange={inputValue} type="text" name="fname" placeholder="Enter First Name"/><br /><br />
                <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.lname} onChange={inputValue} type="text" name="lname" placeholder="Enter Last Name"/><br /><br />
                <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.phone} onChange={inputValue} type="tel" name="phone" placeholder="Enter Phone Number"/><br /><br />
                <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.email} onChange={inputValue} type="text" name="email" placeholder="Enter Email"/><br /><br />
                <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.password} onChange={inputValue} type="text" name="password" placeholder="Enter Password"/><br /><br />
                <input style={cusstyle} id="inputStyle" className="rounded text-white" autoComplete="off" value={name.cpassword} onChange={inputValue} type="text" name="cpassword" placeholder="Re-enter Password"/><br /><br /><br /><br />
                <div>
                    <button className="rounded m-2 text-white" style={{background:"transparent"}} onClick={sendForm}>Submit</button>
                    <button className="rounded m-2 text-white" style={{background:"transparent"}}>Reset</button>
                </div><br /><br />
                <a href="/login" className="text-white">Login</a><br /><br /><br /><br /><br /><br />
                </form>
            </div>
        </div>
    </div>
    )
}
export default Register;