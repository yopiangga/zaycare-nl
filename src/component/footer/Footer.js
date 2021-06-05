import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";


export default function Footer() {
    return(
        <div className="footer">
            <div className="content">
                <div className="social-media">
                    <div className="circle">
                        <FiFacebook />
                    </div>
                    <div className="circle">
                        <FiYoutube />
                    </div>
                    <div className="circle">
                        <FiTwitter />
                    </div>
                </div>
                <div className="copyright">
                    <h4>2021 © Made by Zaycare BV</h4>
                </div>
            </div>
        </div>
    )
}