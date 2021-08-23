import '../style/Navbar.css'
import { FaChessRook } from 'react-icons/fa'
import { FaChessKing } from 'react-icons/fa'
import { FaChessPawn } from 'react-icons/fa'
import { FaChessKnight } from 'react-icons/fa'
import { FaChessQueen } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="navb">
            <ul className="nav-list">
                <a href="#" class="nav-link">
                    <li className="nav-item">
                        <FaChessQueen />
                        <span className="link-text">Logo</span>
                    </li>
                </a>

                <a href="#" class="nav-link">
                <li className="nav-item">
                    <FaChessRook />
                    <span className="link-text">Home</span>
                </li>
                </a>

                <a href="#" class="nav-link">
                    <li className="nav-item">
                        <FaChessKing />
                        <span className="link-text">Presentation</span>
                    </li>
                </a>

                <a href="#" class="nav-link">
                    <li className="nav-item">
                        <FaChessPawn />
                        <span className="link-text">Projects</span>
                    </li>
                </a>

                <a href="#" class="nav-link">
                    <li className="nav-item">
                        <FaChessKnight />
                        <span className="link-text">Contact</span>
                    </li>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar
