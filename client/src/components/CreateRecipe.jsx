import React, {Fragment} from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postNewRecipe, getDiets } from '../actions/actions'
import styles from './CreateRecipe.module.css';
import gif from '../images/GifLoader2Unscreen2.gif'
import NavToHome from './NavToHome'
import Footer from "./Footer";


function validate (input){
    let error= {};
    if(!input.name){
        error.name = 'Name is required!';
    }else if(!input.summary){
        error.summary = 'Summary is required!';
    }else if(input.score < 0 || input.score > 10){
        error.score = 'The Score cannot be less than 1 or greater than 10'
    }
    else if(input.healthLevel < 0 || input.healthLevel > 101){
        error.healthLevel = 'The health Level cannot be less than 1 or greater than 100'
    }
    return error;
}


export default function CreateRecipe(){
    const dispatch= useDispatch();          
    
    useEffect(()=>{
        dispatch(getDiets());
    }, []); //eslint-disable-line


    const loadState = useSelector((state) => state.diets)
    const diets = useSelector((state)=> state.diets)
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        summary:'',
        score:0,
        healthLevel:0,
        steps:'',
        image:'',
        diets:[],
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    }

    function handleSelect(e){
        setInput({
            ...input,
            diets:[...input.diets, e.target.value]
        })
    } 
    function handleDelete(e){
        setInput({
            ...input,
            diets: input.diets.filter(d=> d !== e)
        }) 
     }  

    function handleSubmit(e){
        e.preventDefault();
        if(error.name || error.summary || error.score || error.healthLevel || error.steps || error.diets || error.image){
            return alert("Missing parameters")
        }else{
            dispatch(postNewRecipe(input))        
        }
        setInput({
        name: '',
        summary:'',
        score:0,
        healthLevel:0,
        steps:'',
        image:'',
        diets:[],
        })
    }   

    return(

        <div>
            <NavToHome/>
        { 
            loadState.length > 0 ?
        <div className = {styles.container}>
            
            <form className={styles.form} onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <h1 className = {styles.title}>Your Own Recipe Here!</h1>
                    <p className = {styles.subtitles}>Name: </p>
                    <input className = {styles.inputName} 
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={(e)=>handleChange(e)}
                    />                    
                    {error.name && <p className = {styles.error}>{error.name}</p>}
                </div>
                <div>
                    <p className = {styles.subtitles}>Summary: </p>
                    <textarea className = {styles.text} 
                    type='text'
                    value={input.summary}
                    name= 'summary'
                    onChange={(e)=>handleChange(e)}
                    />
                    {error.summary && <p className = {styles.error}>{error.summary}</p>}
                </div>
                <div>
                    <p className = {styles.subtitles}>Score: </p>
                    <input className = {styles.inputNumbers} 
                    type= 'number'
                    value={input.score}
                    name='score'
                    onChange={(e)=> handleChange(e)}/>
                    {error.score && <p className = {styles.error}>{error.score}</p>}
                </div>
                <div>
                    <p className = {styles.subtitles}>Image: </p>
                    <input className = {styles.inputNumbers} 
                    type= 'text'
                    value={input.image}
                    name='image'
                    onChange={(e)=> handleChange(e)}/>
                    {error.image && <p className = {styles.error}>{error.image}</p>}
                </div>
                <div>
                    <p className = {styles.subtitles}>Health Level: </p>
                    <input className = {styles.inputNumbers} 
                    type= 'number'
                    value={input.healthLevel}
                    name='healthLevel'
                    onChange={(e)=> handleChange(e)}/>
                    {error.healthLevel && <p className = {styles.error}>{error.healthLevel}</p>}
                </div>
                <div>
                    <p className = {styles.subtitles}>Steps: </p>
                    <textarea className = {styles.text} 
                    type='textarea'
                    value={input.steps}
                    name='steps'
                    onChange={(e)=> handleChange(e)}/>                    
                </div>
                
                <p className = {styles.subtitles}>Diet Types: </p>
                <select className = {styles.select} onChange={(e)=> handleSelect(e)}>
                    {diets.map((d, index)=>(<option 
                    key={index}
                    value={d.name}>{d.name}</option>))}
                </select>      
                <div className = {styles.dietsList}>
                {input.diets.map(el=>
                    <div>
                        <p className = {styles.dietList2}>{el +"  -"}</p>                        
                    </div>)}   
                    </div>                         
                    <div className={styles.divButton}>
                        <button onClick={(e)=> handleDelete(e)} className = {styles.buttonDelete}>Clear</button>                
                        <button className = {styles.buttonCreate}>Create!</button>          

                    </div>
                <br />   
            <Link to='/home'><button className = {styles.button}>Back</button></Link>                      
            </form> 
            
        </div>:
        <div className = {styles.containerLoader}> 
        <Fragment>
        <img src={gif} className = {styles.imgLeader} />
        </Fragment>
        </div>
        }
        <Footer/>
        </div>
    )
}    