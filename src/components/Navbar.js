import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faLaptopCode, faVideo, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link to="topid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faHome} className="svg"></FontAwesomeIcon>
                        <span className="link-text">Accueil</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="presid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faUser} className="svg"></FontAwesomeIcon>
                        <span className="link-text">Présentation</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="skillid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faCode} className="svg"></FontAwesomeIcon>
                        <span className="link-text">Compétences</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="projectid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faLaptopCode} className="svg"></FontAwesomeIcon>
                        <span className="link-text">Projets</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="vidid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faVideo} className="svg"></FontAwesomeIcon>
                        <span className="link-text">Vidéo</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="contactid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FontAwesomeIcon icon={faEnvelope} className="svg"></FontAwesomeIcon>
                        <span className="link-text">Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
