import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../lib/font-awesome/css/all.min.css';
import WatchList from './WatchList';
import { ResultCard } from './ResultCard';
import {  Router,Route } from 'react-router';


export default function Main() {

    const [query,setQuery]=useState("");
    const [results,setResults]=useState([]);
    
     const onChange=(e)=>{
        e.preventDefault();
        setQuery(e.target.value);
    
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b77782fae03edb89d4ddb0406ec655c5&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        ).then(res=>res.json())
        .then((data)=>{
            if(!data.errors){
                setResults(data.results);
            }else{
             setResults([]);
            }
        });
     };

   const [logindata,setLoginData]=useState([]);

   const history=useNavigate();

   const getuser=localStorage.getItem("user");

  


   const effect=()=>{
    if(getuser && getuser.length){
        const user=JSON.parse(getuser);
        setLoginData(user);
       }

   }

    useEffect(()=>{
        effect();
    },[])

    const userlogout=()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

  return (
   <>
    <header>
        <div className="container">
            <div className="inner-content">
                <ul className='nav-links'>
                    <li> 
                        <Link to="add">Your Watch List</Link>
                    </li>
                </ul>

                <ul className='nav-links'>
                    <li> 
                    <button onClick={userlogout}>Log Out</button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <div className="add-page">
        <div className="container">
            <div className="add-content">
                <div className="input-wrapper">
                    <input type="text" placeholder='Search for Movie' value={query} onChange={onChange}/>
                   
                </div>

                {results.length>0 && 
                     <ul className='results'>
                        {results.map((movie)=>(
                            <li key={movie.id}>
                                <ResultCard movie={movie}/>
                            </li>
                        ))}
                     </ul>
                }
            </div>
        </div>
      </div>
  

  
 
   </>
  )
}
