import React from "react";
import { Link } from "react-router-dom";
import styles from './NavToHome.module.css' 
const Swal = require('sweetalert2')

export default function NavToHome(){

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
            <Link to="/home"><button className={styles.buttonHome}>Home</button></Link>
                <div className={styles.contactNav}>
                    <div className={styles.contactButton}>
                    <button onClick={alert} className={styles.buttonInfo} >About Me</button>
                    <a href="#about"><button className={styles.buttonInfo}>Contact & info</button></a>
                    </div>
                </div>
        </div>
    )
}