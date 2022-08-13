import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../actions/actions";
import styles from './SearchBar.module.css';
import { Link } from "react-router-dom";
export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName]= useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getRecipesByName(name))
        setName('');
    }
    
    return (
        <div className = {styles.container}>
            <input className = {styles.input} 
                value = {name}
                placeholder= 'Recipe...'
                type='text'                
                onChange={(e) => handleInputChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)}className = {styles.button}>Search</button>
                

        </div>
    )
}