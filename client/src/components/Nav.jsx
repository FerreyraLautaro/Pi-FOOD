import React from "react";
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import styles from './Nav.module.css' 

export default function LandingPage(){
    return(
        <div className = {styles.container}>
            <h1 className = {styles.title}>Recipes</h1>
            <SearchBar/>
            <Link to= '/recipe'><button className = {styles.createButton}>Create Recipe</button></Link> 

        </div>
    )
}