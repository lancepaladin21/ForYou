import { Link } from 'react-router-dom';
import './App.css';

function Letter() {
    return (
        <div className="letter-page">
            <div className="letter-container">
                <h1>My Love Letter 💙</h1>

                <div className="letter-content">
                    <p>Hi My Love</p>
                    <p>
                        Happy twenty fifth Monthsary Im so proud of what we have achieved
                        and what we will achieve in the future
                    </p>
                    <p>
                        Everything is always a blast when I am with you I know I do not
                        sometimes meet your expectations but please know that I always try my
                        best for you because you deserve the best
                    </p>
                    <p>
                        Thank you for being so patient with me and for always understanding my
                        quirks I love you more than words can express and I am excited for
                        all the adventures that lie ahead of us
                    </p>
                    <p>
                        Here is to many more months and years of happiness together I love
                        you
                    </p>

                    <p className="signature">
                        Sincerely yours
                        <br />
                        Adrian
                    </p>
                </div>

                <Link to="/" className="back-btn">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Letter;
