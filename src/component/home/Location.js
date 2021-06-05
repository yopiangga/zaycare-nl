import { FiBookmark, FiDollarSign, FiHeart, FiMapPin, FiZoomIn } from 'react-icons/fi';
import example from './../../assets/images/example.jpg';

export default function Location() {
    return(
        <div className="location container">
            <div className="content">
                <div className="content-head">
                    <h2>Ontdek kinderopvang in verschillende steden</h2>
                    <p>Filter by category</p>
                </div>
                <div className="content-body">
                    <div className="card-product">
                        <div className="card-top">
                            <div className="bg">
                                <div className="box-icon">
                                    <FiDollarSign />
                                </div>
                            </div>
                            <img src={example} alt="" />
                        </div>
                        <div className="card-bottom">
                            <div className="title">
                                <h4>VGO - Boekel - Bexkens</h4>
                                <div className="title-info">
                                    <FiMapPin />
                                    <h5>Meewenlaan 36</h5>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="type-card">
                                    <div className="circle">
                                        <FiBookmark />
                                    </div>
                                        <h4>VGO</h4>
                                </div>
                                <div className="action-card">
                                    <div className="circle">
                                        <FiZoomIn />
                                    </div>
                                    <div className="circle">
                                        <FiHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-product">
                        <div className="card-top">
                            <div className="bg">
                                <div className="box-icon">
                                    <FiDollarSign />
                                </div>
                            </div>
                            <img src={example} alt="" />
                        </div>
                        <div className="card-bottom">
                            <div className="title">
                                <h4>VGO - Boekel - Bexkens</h4>
                                <div className="title-info">
                                    <FiMapPin />
                                    <h5>Meewenlaan 36</h5>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="type-card">
                                    <div className="circle">
                                        <FiBookmark />
                                    </div>
                                        <h4>VGO</h4>
                                </div>
                                <div className="action-card">
                                    <div className="circle">
                                        <FiZoomIn />
                                    </div>
                                    <div className="circle">
                                        <FiHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-product">
                        <div className="card-top">
                            <div className="bg">
                                <div className="box-icon">
                                    <FiDollarSign />
                                </div>
                            </div>
                            <img src={example} alt="" />
                        </div>
                        <div className="card-bottom">
                            <div className="title">
                                <h4>VGO - Boekel - Bexkens</h4>
                                <div className="title-info">
                                    <FiMapPin />
                                    <h5>Meewenlaan 36</h5>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="type-card">
                                    <div className="circle">
                                        <FiBookmark />
                                    </div>
                                        <h4>VGO</h4>
                                </div>
                                <div className="action-card">
                                    <div className="circle">
                                        <FiZoomIn />
                                    </div>
                                    <div className="circle">
                                        <FiHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}