import React from "react";
import styles from './Card.module.css'
import { capitalizeFirstLetter } from "../Utils.js/Utils";

export default function Card({img, name, diets}){

    return(
        <div className={styles.container}>
            <h1 className={styles.nameRecipe}>{name}</h1>
            <div className={styles.containerSub}>
                <img className={styles.img}src= {img} alt='img'></img>   
            </div>
            
            {diets.map(e =><h4 className={styles.h4} style={{ display: "inline" }}>{Object.values(/*capitalizeFirstLetter(e)*/e)} - </h4>)}                          
        </div>
    );
}
