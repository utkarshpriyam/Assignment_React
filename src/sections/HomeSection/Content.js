import React from 'react';
import './HomeSection.css';
import cardImage from '../../assets/nx_wave_hero.png';
import bgVideo from '../../assets/nxt_wave_bg.mp4'

const AddSymbol = () => {
    return (
        <svg className="addSvg" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000" style={{"mix-blend-mode":"darken"}}>
                                </path>
                            </svg>
    );
};

const Content = () => {
    return (
        <div id="contentContainer">
            <div className="d-flex flex-column flex-md-row-reverse mx-auto bg-transparent justify-content-center z-1" id="imageWrapper">
                <img className="h-auto z-1" id="imageContainer" src={cardImage} alt="card asset" />
                <div className="d-flex flex-column px-4" id="imageCaption">
                    <h1 className="fw-normal" id="captionHeader" >
                        <span><strong>NX Wave.</strong> The next-gen credit card for those who love rewards.</span>
                    </h1>
                    <div className="mt-4 mt-md-0">
                        <p id="imageSubCaptions">
                            1% Cashback
                            {AddSymbol()}
                            5X Rewards
                            {AddSymbol()}
                            Zero Forex Markup
                        </p>
                    </div>
                    <div className='d-none d-md-block'>
                        <div id="introFooterContainer">
                            <div className='d-flex flex-column'>
                                <form>
                                <div id="contactForm">
                                    <div className="d-flex align-items-center">
                                        <input id="inputContainer" placeholder='Enter Phone Number' value={""} />
                                        <span id="extraSpace"></span>
                                    </div>
                                    <button type="submit" id="submitContacts">
                                        <span>Apply Now</span>
                                    </button>
                                </div>
                                </form>
                                <div id="consentSection">
                                    <input type="checkbox" checked id="consent-msg"></input>
                                    <label for="consent-msg" id="consentText">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <video autoplay={true} muted={true} loop={true} playsinline={true} id="backgroundVideo" >
                <source src={bgVideo} type="video/mp4"  />
            </video>
        </div>
    );
};

export default Content;
