import React from 'react';
import './AtUniSection.css';
import SBM from '../../assets/SBM.svg';

const AtUniSection =() =>{
    return (
        <section className="AUSOverall">
            <p className="AUSContainer" >
            <span>
            At Uni, we’re committed to&nbsp;
            <span class="uni-gradient-primary">
            delivering an unmatched credit experience&nbsp;
            </span>
            for millions of indians.
            </span>
            </p>
            <p className='AUSSubheader'>
            On this mission, we’ve partnered with some of the best in the business.
            </p>
            <div className="AUSLogo">
                <div className='AUSLogoInner'>
                    <img src={SBM} alt="SBM logo" className="AUSImage"  />
                </div>
            </div>
        </section>
    );
};

export default AtUniSection;