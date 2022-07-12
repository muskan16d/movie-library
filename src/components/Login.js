import React ,{useState}from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign from "./Sign_img";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom'


export default function Login() {

   const history=useNavigate();


    const[inpval,setInpval]=useState({
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
        const getuserArr=localStorage.getItem("user");
        console.log(getuserArr);

        const {email,password}=inpval;
         if(email ===""){
            alert("email field is required")
        }else if(!email.includes("@")){
            alert("Please enter valid email address")
        }else if(password ===""){
            alert("Password field is required")
        }else if(password.length<5){
            alert("Password length greater five")
        }else{
            if(getuserArr && getuserArr.length){
                const userdata=JSON.parse(getuserArr);
                const userlogin=userdata.filter((el,k)=>{
                    return el.email === email && el.password===password
                });

                if(userlogin.length===0){
                    alert("Invalid details");
                }else{
                    console.log("User login sucessfully");
                    localStorage.setItem("user_login",JSON.stringify(userlogin));
                    history("/movie_details");
                }
            }
        }

  }

  return (
    <>
      <div className="container mt-4">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">SIGN IN</h3>
            <Form>

              <Form.Group className="mb-4 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  name='email' onChange={getdata}   placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-4 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  name='password' onChange={getdata}   placeholder="Password" />
              </Form.Group>

         <Button variant="primary"   onClick={addData}  className="col-log-6"  style={{background:"rgb(67,185,127)"}} type="submit">Submit</Button> 
        </Form>
        <p className="mg-3">You want to create account? <span><NavLink to="/">SignUp</NavLink></span></p>
      </div>
      <Sign/>
        </section>
      </div>
    </>
  )
}
