import React from 'react';
import './FeaturesSection.css';
import cashbackImage from '../../assets/one_percent_cashback.png';
import rewardFiveX from '../../assets/five_x_rewards.png';
import forexGlobe from '../../assets/forex_globe.png';

const ShowImage = (props) => {
    const { source } = props;
    return (
        <div className="infoImage">
            <div className="d-flex justify-content-center overflow-hidden">
                <div className="imageHolder">
                    <img src={source} alt="oops not available rn" className='imageProp' />
                </div>
            </div>
        </div>
    );
};

const ShowFeatures = (props) => {

    const {majorText, minorText, infoCaptions} =props;
    return (
        <div className="featureText">
            <div className="infoText">
                <div>
                    <span className='majorText'>{majorText}</span>
                    <span className="minorText">{minorText}</span>
                </div>
            </div>
            <div className="infoCaption">
                {infoCaptions}
            </div>
        </div>
    )
};

const FeaturesSection = () => {
    return (
        <div id="featuresSectionContainer">
            <div className="d-flex justify-content-center flex-column">
                <div className=" d-flex forwardRow commonRowStyle">
                    <ShowFeatures
                        majorText={"1% assured cashback on your spends."}
                        minorText={"The more you spend, the more you earn."}
                        infoCaptions={"Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions."}
                    />
                    <ShowImage source={cashbackImage} />
                </div>
                <div className=" d-flex forwardRow commonRowStyle">
                    <ShowImage source={rewardFiveX} />
                    <ShowFeatures 
                        majorText={"5x more value than your cashback,"}
                        minorText={" only at the Uni Store."}
                    />
                </div>
                <div className=" d-flex forwardRow commonRowStyle">
                    <ShowFeatures 
                        majorText={"Zero Forex Markup."}
                        minorText={"Go international, without any fees."}
                    />
                    <ShowImage source={forexGlobe} />
                </div>
                <div className="featureFooter">
                    <p>
                        Lifetime&nbsp;
                        <span className="freeFocus">free.&nbsp;</span>
                        <span className="d-block d-sm-inline-block joiningFee">No joining fee.</span>
                        <span className="d-block annual-charges">No annual charges.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;