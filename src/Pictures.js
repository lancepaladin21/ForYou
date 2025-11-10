import { Link } from 'react-router-dom';
import Pic1 from "./images/pic1.jpg";
import Pic2 from "./images/pic2.jpg";
import Pic3 from "./images/pic3.jpg";
import './App.css';

function Pictures() {
    return (
        <div className="pictures-page">
            <div className="pictures-container">
                <h1>My Favorite Pictures 📸</h1>

                <div className="triangle-gallery">
                    <img src={Pic1} alt="Favorite 1" className="picture-item top" />
                    <img src={Pic2} alt="Favorite 2" className="picture-item bottom-left" />
                    <img src={Pic3} alt="Favorite 3" className="picture-item bottom-right" />
                </div>
                <div className="caption">
                    <p>To many more memories with you</p>
                </div>
                <Link to="/" className="back-btn">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Pictures;
