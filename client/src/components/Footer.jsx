import React from "react";
import styles from './Footer.module.css';
import linkedIn from '../Utils.js/img/linkedIn.png'
import Git from '../Utils.js/img/git.png'
import Gmail from '../Utils.js/img/gmail.png'
import Wsp from '../Utils.js/img/wsp.png'


export default function Footer(){

    return(
        <div className={styles.containerFooter}>
            <div className={styles.footerDescription}>Hola ¿cómo está? Espero que bien, de antemano quisiera agradecerle por su tiempo.
            <br />
            Durante la etapa final de Bootcamp Soy Henry se me solicitó realizar una página Web consumiendo la API REST de Spooncular.
            <br />
             Fue un gran desafío poner en práctica todas la herramientas aprendidas durante 6 meses de aprendizaje, en este caso se utilizó una plantilla React App, la cual obtuvo su funcionamiento con Javascript, React-router-dom, Redux y la información de las recetas fue obtenida desde la api únicamente usando el endpoint “Get”, realice los modelos necesarios del lado del Backend y entable sus “Entidad-Relación” con Node.js, Sequelize y PostgresORM.
            <br />
            Actualmente la web se encuentra subida a la nube y en continuo desarrollo, implementando nuevos frameworks y mejoras al código</div>

            <div className={styles.footerContactos} id="about">
            <a href="https://github.com/FerreyraLautaro" target="_blank"><img src={Git} className={styles.imgFooter} alt="GitHub" /></a>
            <a href='mailto:ferreyralautaro69@gmail.com'><img className={styles.imgFooter} src={Gmail} alt="Mail" /></a>
            <a href="https://www.linkedin.com/in/lautaro-ferreyra-6713201ba/" target="_blank"><img className={styles.imgFooter} src={linkedIn} alt="linkedIn" /></a>
            <a href="https://api.whatsapp.com/send?phone=3513348627" target="_blank"><img  className={styles.imgFooter} src={Wsp} alt="WhatsApp" /></a>
            </div>
        </div>
    )
} 