import React, { useState,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

export default function Navbar() {
    const [expandNavBar, setexpandNavBar] = useState(false);
    const location = useLocation();

    useEffect(() =>{
        setexpandNavBar(false);
    },[location])

    return (
        <div className='navbar' id= { expandNavBar ? "open": "close"}>

            <div className='toggleButton'>
                <button onClick={() => { setexpandNavBar((prev) => !prev) }}><ReorderIcon></ReorderIcon></button>
            </div>

            <div className='links'>
                <Link to={"/"}> Home </Link>
                <Link to={"/map"}> GMap </Link>
            </div>

        </div>
    )
}
