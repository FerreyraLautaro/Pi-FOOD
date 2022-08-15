import React, { Fragment } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/actions";
import { useEffect } from "react";
import styles from './Detail.module.css';
import gif from '../images/GifLoader2Unscreen2.gif'
import {reg, capitalizeFirstLetter} from '../Utils.js/Utils'
import Footer from "./Footer";

export default function Detail(){
  const {id} = useParams()
  const dispatch = useDispatch() 
  useEffect (() => {dispatch(getDetail(id))} ,[])
  const detailstate = useSelector((state) => state.detail)
  
  
    return(
      <div>
     { 
       detailstate.length > 0 ? 
       
       <div className = {styles.container}> 
           <h1 className = {styles.title}> {detailstate[0].name} </h1>
           <h5 className = {styles.diets}>Diets: { typeof(detailstate[0].diets[0]) == "string" ? 
           detailstate[0].diets.map(e => e + " - ") 
           : 
           detailstate[0].diets.map(e => e.name + " - ") } </h5>
           <div className = {styles.innercontainer}>
           <h3 className = {styles.info}>HealthLevel: {detailstate[0].healthLevel}</h3>
           <h3 className = {styles.info}>Score: {parseInt(detailstate[0].healthLevel * 2 / 3 +14)}</h3>
           </div>
           <h3 className = {styles.subtitles}>Summary:</h3>
           <p className = {styles.p}><img src={detailstate[0].image} alt = 'dish' className = {styles.img}/>{detailstate[0].summary.replace(reg, "")}</p>
              <h3 className = {styles.subtitles}>Steps: </h3>
              <p className = {styles.p}>{ Array.isArray(detailstate[0].steps) ? detailstate[0].steps.map(e => <li>{e.step}</li>) : "Steps not found!!" }</p>
           <Link to='/home'><button className = {styles.button}>Back to Home </button> </Link>
       </div> : 
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
             