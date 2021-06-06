import { FiCoffee, FiGift, FiHome, FiMap, FiSearch } from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";

export default function Main() {

    document.querySelector('.navbar').classList.add('light');

    return(
        <div className="main container">
            <div className="content">
                <div className="content-head">
                    <h2>Create Listing</h2>
                    <p>What type of listing would you like to add ?</p>
                </div>
                <div className="content-body">
                    <div className="card-listing card-purple">
                        <div className="cube__face cube__face--front">
                            <div className="circle">
                                <FiMap />
                            </div>
                            <h4>Locatie</h4>
                        </div>
                        <div className="cube__face cube__face--bottom">
                            <h4>Locatie</h4>
                        </div>
                    </div>

                    <div className="card-listing card-pink">
                        <div className="cube__face cube__face--front">
                            <div className="circle">
                                <FiGift />
                            </div>
                            <h4>Event</h4>
                        </div>
                        <div className="cube__face cube__face--bottom">
                            <h4>Event</h4>
                        </div>
                    </div>

                    <div className="card-listing card-blue">
                        <div className="cube__face cube__face--front">
                            <div className="circle">
                                <FiSearch />
                            </div>
                            <h4>Job</h4>
                        </div>
                        <div className="cube__face cube__face--bottom">
                            <h4>Job</h4>
                        </div>
                    </div>

                    <div className="card-listing card-orange">
                        <div className="cube__face cube__face--front">
                            <div className="circle">
                                <FiHome />
                            </div>
                            <h4>Real Estate</h4>
                        </div>
                        <div className="cube__face cube__face--bottom">
                            <h4>Real Estate</h4>
                        </div>
                    </div>

                    <div className="card-listing card-green">
                        <div className="cube__face cube__face--front">
                            <div className="circle">
                                <FaCarAlt />
                            </div>
                            <h4>Car</h4>
                        </div>
                        <div className="cube__face cube__face--bottom">
                            <h4>Car</h4>
                        </div>
                    </div>

                    <div className="card-listing card-purple">
                        <div className="cube__face cube__face--front">
                            <div className="circle">
                                <FiCoffee />
                            </div>
                            <h4>Restaurant</h4>
                        </div>
                        <div className="cube__face cube__face--bottom">
                            <h4>Restaurant</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}