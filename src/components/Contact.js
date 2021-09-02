import React from 'react'
import '../style/Contact.css'
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Contact = ({form, click}) => {
    return (
        <div>
            <center><h3>Mes Coordonnées</h3>
            <div className="coord-flex">
                <FaEnvelope />
                <p>Mail: <a href="mailto:dandre.ben@gmail.com"><strong>dandre.ben@gmail.com</strong></a></p>
            </div>
            <div className="coord-flex">
                <FaGithub />
                <p>Github: <a href="https://github.com/BenDndr"><strong>BenDndr</strong></a></p>
            </div>
            <div className="coord-flex">
                <FaLinkedin />
                <p>LinkedIn: <a href="https://github.com/BenDndr"><strong>Benjamin DANDRE</strong></a></p>
            </div>
            
            <button onClick={click}>
                Formulaire
            </button></center>
            {form ?
            <div className="center">
                <div className="form-div">
                    <form action="mailto:dandre.ben@gmail.com">
                        
                        <div className="input-box">
                            <label htmlFor="email">Email* </label>
                            <input type="text" placeholder="Email" required />
                        </div>

                        <div className="input-box">
                            <label htmlFor="first-name">Prénom* </label>
                            <input type="text" placeholder="Prénom" required />
                        </div>

                        <div className="input-box">
                            <label htmlFor="last-name">Nom* </label>
                            <input type="text" placeholder="Nom" required />
                        </div>

                        <div className="input-box">
                            <label htmlFor="company">Entreprise </label>
                            <input type="text" placeholder="Entreprise"/>
                        </div>

                        <div className="input-text">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" placeholder="Votre message"/>
                        </div>
                        <div className="center">
                            <button type="submit">Envoyer</button>
                        </div>
                        
                    </form>
                </div>
            </div> 
            :
            <></>
            }
        </div>
    )
}

export default Contact