import React from "react";
import { FaRegMoon } from "react-icons/fa";
import './style.css'

export default function Header(){
    return (
        <header>
            <h3>Where in the world?</h3>
            <a href="#"> <FaRegMoon/> Dark Mode  </a>
        </header>
    )
}