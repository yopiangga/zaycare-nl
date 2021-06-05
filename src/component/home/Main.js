import { FiMapPin, FiSearch } from 'react-icons/fi';
import bgMain1 from './../../assets/images/bg-main-1.jpg';

export default function Main() {
    return (
        <div className="main">
            <div className="bg-main">
                <img src={bgMain1} alt="" />
                <div className="filter"></div>
            </div>

            <div className="content">
                <div className="form-main active">
                    <div className="action-content">
                        <div className="choose-location choose">
                            <h5>Location</h5>
                            <h4>Find a location where</h4>
                        </div>
                        <hr />
                        <div className="choose-distance choose">
                            <h5>Distance</h5>
                            <h4>What is the distance?</h4>
                        </div>
                        <hr />
                        <div className="choose-type choose">
                            <h5>Type</h5>
                            <h4>What is teh type?</h4>
                        </div>
                        <div className="circle">
                            <FiSearch />
                        </div>
                    </div>

                    <form action="">
                        <div className="form-group location">
                            <div className="location-content">
                                <div className="box">
                                    <FiMapPin />
                                </div>
                                <div className="text">
                                    <h4>Search for a nearby place</h4>
                                </div>
                            </div>
                        </div>

                        <div className="form-group distance">
                            <div className="distance-content">
                                <div className="text">
                                    <h4>Afstand <span>0 KM</span></h4>
                                </div>
                                <div className="card-slider">
                                    <input type="range" className="slider" max="100" min="1" />
                                    <div className="bg-range" style={{ width: `10%` }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group type">
                            <div className="type-content">
                                <ul>
                                    <li><h4>VGO</h4> <p>lorem ipsum dolllor</p><hr/></li>
                                    <li><h4>KDV</h4> <p>lorem ipsum dolllor</p><hr/></li>
                                    <li><h4>BSO</h4> <p>lorem ipsum dolllor</p><hr/></li>
                                    <li><h4>GOB</h4> <p>lorem ipsum dolllor</p><hr/></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="title">
                    <h1>Ontdek & vergelijk de meest vertrouwde</h1>
                    <h1>Kinderopvang & BSO</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nulla dicta rerum quo maiores in iure voluptatum error Aliquam, reprehenderit.</p>
                    <button className="big">Explore Further</button>
                </div>
            </div>
        </div>
    )
}