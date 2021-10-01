import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = ({form, click}) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4qg5lvg', 
            'template_mqfgtc4', 
            e.target, 
            'user_ugXL2vGUUy3gGxrrazUiZ'
        ).then(result =>{
            console.log(result);
            alert("Votre Message a bien été envoyé! Je vous répondrai dans le splus brefs délais.");
        }).catch(error=> console.log(error));
        e.target.reset();
    }
    

    return (
        <div id="contactid" class="padb">
            <center><h2>Me contacter</h2>
            <div className="coord-flex t13rem">
                <FaEnvelope />
                <p>Mail: <a href="mailto:dandre.ben@gmail.com"><strong>dandre.ben@gmail.com</strong></a></p>
            </div>
            <div className="coord-flex t13rem">
                <FaGithub />
                <p>Github: <a href="https://github.com/BenDndr"><strong>BenDndr</strong></a></p>
            </div>
            <div className="coord-flex t13rem">
                <FaLinkedin />
                <p>LinkedIn: <a href="https://github.com/BenDndr"><strong>Benjamin DANDRE</strong></a></p>
            </div>
            
            <button onClick={click}>
                Formulaire
            </button></center>
            {form ?
            <div className="center">
                <div className="form-div">
                    <form onSubmit={sendEmail}>
                        
                        <div className="input-box">
                            <label className="details">Email*</label>
                            <input type="email" name="user_email" placeholder="Email" required />
                        </div>

                        <div className="input-box">
                        <label className="details">Prénom*</label>
                            <input type="text" name="first_name" placeholder="Prénom" required />
                        </div>

                        <div className="input-box">
                            <label className="details">Nom*</label>
                            <input type="text" name="last_name" placeholder="Nom" required />
                        </div>

                        <div className="input-box">
                            <label className="details">Entreprise</label>
                            <input type="text" name="company" placeholder="Entreprise"/>
                        </div>

                        <div className="input-text">
                            <label className="details">Message*</label>
                            <textarea type="text" name="message" placeholder="Votre message" rows="6"/>
                        </div>
                        <div className="center">
                            <input type="submit" value="Envoyer" className="wide-button"/> 
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