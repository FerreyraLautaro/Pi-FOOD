import React from "react";
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import styles from './Nav.module.css' 
const Swal = require('sweetalert2')

export default function LandingPage(){

    function alert(){
        Swal.fire({
            title: 'Sorry!!',
            text: 'Page under construction🛠',
            icon: 'error',
            confirmButtonText: 'Done'
          })
     }  

    return(
        <div className = {styles.container}>
            <a href="/home"><h1 className = {styles.title}>Recipes</h1></a>
            <SearchBar/>
                <div className={styles.contactNav}>
                    <div className={styles.contactButton}>
                    <button onClick={alert} className={styles.buttonInfo} >About Me</button>
                    <a href="#about"><button className={styles.buttonInfo}>Contact & info</button></a>
                    </div>
                </div>
        </div>
    )
}