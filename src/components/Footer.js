import { FaReact } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <p className="margin-bot"><strong>Benjamin Dandre © 2021</strong></p>
            <div className="link-footer">
               <a href="mailto:dandre.ben@gmail.com"><FaEnvelope /></a>
               <a href="https://www.linkedin.com/in/benjamin-dandre/"><FaLinkedin /></a>
               <a href="https://github.com/BenDndr"><FaGithub /></a>
            </div>
               
        </div>
    )
}

export default Footer
