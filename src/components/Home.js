import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign from "./Sign_img";
import {NavLink} from 'react-router-dom'

export default function Home() {

    const[inpval,setInpval]=useState({
        name:"",
        number:"",
        email:"",
        password:""
    })

  const [data,setData]=useState([]);


  const getdata=(e)=>{
        //   console.log(e.target.value);

        const {value,name}=e.target;
        // console.log(value,name)

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
  }

  const addData=(e)=>{
        e.preventDefault();
        const {name,number,email,password}=inpval;
        if(name===""){
            alert("name field is required")
        }else if(email ===""){
            alert("email field is required")
        }else if(!email.includes("@")){
            alert("Please enter valid email address")
        }else if(number ===""){
            alert("date field is required")
        }else if(number.length < 10){
            alert("Please enter valid mobile number")
        }else if(password ===""){
            alert("Password field is required")
        }else if(password.length<5){
            alert("Password length greater five")
        }else{
            console.log("data added sucessfully");
            localStorage.setItem("user",JSON.stringify([...data,inpval]));
        }

  }


  return (
    <>
      <div className="container mt-4">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">SIGN UP</h3>
            <Form>

            <Form.Group className="mb-4 col-lg-6" controlId="formBasicName">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control type="text"  name='name'  onChange={getdata}  placeholder="Enter Your Name" />
            </Form.Group>

              <Form.Group className="mb-4 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  name='email' onChange={getdata}  placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-4 col-lg-6" controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="numer"  name='number' onChange={getdata}  placeholder="Enter Mobile Number" />
              </Form.Group>

              <Form.Group className="mb-4 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  name='password' onChange={getdata}  placeholder="Password" />
              </Form.Group>

         <Button variant="primary"  onClick={addData} className="col-log-6"  style={{background:"rgb(67,185,127)"}} type="submit">Submit</Button> 
        </Form>
        <p className="mg-3">Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
      </div>
      <Sign/>
        </section>
      </div>
    </>
  );
}
