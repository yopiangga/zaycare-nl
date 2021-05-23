import logo1 from './../../assets/images/logo-1.png';
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="content">
                <div className="normal">
                    <div className="logo">
                        <img src={logo1} alt="Zaycare" />
                    </div>
                    <div className="search">
                        <div className="action-search">
                            <div className="text">
                                <h4>Start your search</h4>
                            </div>
                            <div className="circle">
                                <FiSearch />
                            </div>
                        </div>
                        <ul className="hidden">
                            <li><a>Explore</a><hr /></li>
                            <li><a>Blog</a><hr /></li>
                        </ul>
                    </div>
                    <div className="nav">
                        <div className="pricing">
                            <button>Add a Listing</button>
                        </div>
                        <div className="auth">
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>

                <div className="extend">
                    <div className="extend-content">
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}