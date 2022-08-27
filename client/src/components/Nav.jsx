import React from "react";
import SearchBar from './SearchBar'
import styles from './Nav.module.css' 


export default function Nav(){


    return(
        <div className = {styles.container}>
            <a href="/home"><h1 className = {styles.title}>Recipes</h1></a>
            <SearchBar/>
                <div className={styles.contactNav}>
                    <div className={styles.contactButton}>
                    <a href="https://portfolio-dev-ferreyralautaro.vercel.app/" target="_blank"><button className={styles.buttonInfo} >About Me</button></a>
                    <a href="#about"><button className={styles.buttonInfo}>Contact & info</button></a>
                    </div>
                </div>
        </div>
    )
}