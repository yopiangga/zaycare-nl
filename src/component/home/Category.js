
import example from './../../assets/images/example.jpg';
import cinema from './../../assets/images/cinema.jpg';
import explore from './../../assets/images/explore-place.jpg';
import fitnes from './../../assets/images/fitnes.jpg';
import history from './../../assets/images/history.jpg';
import nightlife from './../../assets/images/nightlife.jpg';
import restaurant from './../../assets/images/restaurant.jpg';
import event from './../../assets/images/event.jpg';
import outdoor from './../../assets/images/outdoor.jpg';
import { FiActivity, FiCoffee, FiFilm, FiGift, FiHome, FiMap, FiMapPin, FiMusic, FiYoutube } from 'react-icons/fi';

export default function Category() {
    return(
        <div className="category container">
            <div className="content">
                <div className="content-head">
                    <h2>Ontdek kinderopvang in verschillende steden</h2>
                    <p>Filter by category</p>
                </div>
                <div className="content-body">
                    <div className="box box-6">
                        <div className="bg bg-purple">
                            <FiMapPin />
                            <h4>Explore places</h4>
                        </div>
                        <img src={explore} alt="" />
                    </div>
                    <div className="box box-6">
                        <div className="bg">
                            <FiMusic />
                            <h4>Nightlife</h4>
                        </div>
                        <img src={nightlife} alt="" />
                    </div>
                    <div className="box box-3">
                        <div className="bg">
                            <FiFilm />
                            <h4>Cinema</h4>
                        </div>
                        <img src={cinema} alt="" />
                    </div>
                    <div className="box box-3">
                        <div className="bg">
                            <FiCoffee />
                            <h4>Restaurant</h4>
                        </div>
                        <img src={restaurant} alt="" />
                    </div>
                    <div className="box box-3">
                        <div className="bg">
                            <FiActivity />
                            <h4>Gym & Fitness</h4>
                        </div>
                        <img src={fitnes} alt="" />
                    </div>
                    <div className="box box-3">
                        <div className="bg">
                            <FiHome />
                            <h4>Art & History</h4>
                        </div>
                        <img src={history} alt="" />
                    </div>
                    <div className="box box-3">
                        <div className="bg">
                            <FiMap />
                            <h4>Outdoor Activities</h4>
                        </div>
                        <img src={outdoor} alt="" />
                    </div>
                    <div className="box box-3 box-text">
                        <p>To see a World a Grain of Sand And a Heaven in a Wild Flower Hold Infinity in the palm of your hand And Eternity in an hour</p>
                        <h4>William Blake</h4>
                    </div>
                    <div className="box box-6">
                        <div className="bg bg-purple">
                            <FiGift />
                            <h4>Discover Events</h4>
                        </div>
                        <img src={event} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}