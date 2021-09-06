import '../style/Navbar.css'
import { FaChessRook } from 'react-icons/fa'
import { FaChessKing } from 'react-icons/fa'
import { FaChessPawn } from 'react-icons/fa'
import { FaChessKnight } from 'react-icons/fa'
import { FaChessQueen } from 'react-icons/fa'
import { FaChessBishop } from 'react-icons/fa'
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="topid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FaChessKing />
                        <span className="link-text">Back to Top</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="presid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FaChessQueen />
                        <span className="link-text">Présentation</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="skillid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FaChessBishop />
                        <span className="link-text">Compétences</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="projectid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FaChessKnight />
                        <span className="link-text">Projets</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="vidid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FaChessRook />
                        <span className="link-text">Vidéo</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="contactid" className="nav-link" spy={true} smooth={true} offset={0} duration={500}>
                        <FaChessPawn />
                        <span className="link-text">Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
