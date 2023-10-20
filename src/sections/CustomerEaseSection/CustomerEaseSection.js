import React from 'react';
import './CustomerEaseSection.css';
import circles from '../../assets/circles.png';
import screen1 from '../../assets/app_screen_1.webp';
import screen2 from '../../assets/app_screen_2.webp';

const CustomerEaseSection = () => {
    return (
        <section className="overallContainer">
            <img src={circles} alt="circles" className='overallImageContainer' />
            <div className="innerContainer">
                <div className='innerText'>
                    <p className="innerMajorContainer">We’ve all heard of instant groceries, now say hello to &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='uni-gradient-primary'>
                        <br></br>
                        instant credit.
                    </span>
                    </p>
                    <p className="innerMinorText">
                    0% hassle, 100% paperless. Get your&nbsp;&nbsp;
                    <br></br>
                    Uni Card instantly
                    </p>
                </div>
                <div className="innerImage">
                    <img src={screen1} alt="oops did not find it" loading="lazy" className="appImage" />
                </div>
            </div>
            <div className="innerContainer">
                <div className='innerText'>
                    <p className="innerMajorContainer">With Uni,
                    <span className='uni-gradient-primary'>
                        <br></br>
                        you're always in control
                    </span>
                    </p>
                    <p className="innerMinorText">
                    Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.
                    </p>
                </div>
                <div className="innerImage">
                    <img src={screen2} alt="oops did not find it" loading="lazy" className="appImage" />
                </div>
            </div>
        </section>
    );
};

export default CustomerEaseSection;