import subscribe from './../../assets/images/subscribe.jpg';

export default function Feature() {
    return(
        <div className="feature container">
            <div className="content">
                <div className="content-head">
                    <h2>Vacatures</h2>
                    <p>Vind de meest recent vacatures voor "Pedagogisch Medewerker"</p>
                </div>
                <div className="content-body">
                    <img src={subscribe} alt="" />
                    <div className="form">
                        <h2>Get MyListing today!</h2>
                        <button className="big">Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}