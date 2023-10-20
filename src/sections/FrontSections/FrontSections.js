import React from 'react';
import './FrontSections.css';
import down_arrow from '../../assets/down_arrow.svg';

const FrontSections = () => {
    return (
        <section>
            <div id="frontSectionIntro">
                <div id="introContent">
                    <p className="introLine">
                        Earn 1% assured cashback&nbsp;
                        <span className="focusOut">
                            on your spends. Get
                        </span>
                        5X
                    </p>
                    <p className="introLine">
                        more value than cashback&nbsp;
                        <span className="focusOut">
                            at the Uni Store. Enjoy
                        </span>
                    </p>
                    <p className="introLine">
                        round the clock&nbsp;
                        <span className="focusOut">
                            Whatsapp support.&nbsp;
                        </span>
                        And it's
                    </p>
                    <p className="introLine">
                        lifetime free
                        <span className="focusOut">
                            ; no joining fee, no annual charges.
                        </span>
                    </p>
                </div>
                <div className="d-flex" id="downArrow">
                    <div id="downArrowContainer">
                        <img id="downArrowStyle" alt="down arrow" src={down_arrow} loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrontSections;