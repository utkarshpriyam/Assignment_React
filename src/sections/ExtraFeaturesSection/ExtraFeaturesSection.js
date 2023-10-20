import React from 'react';
import './ExtraFeaturesSection.css';
import whatsapp from '../../assets/whatsapp_bubble.webp';
import rupee from '../../assets/rupee_bubble.webp';
import antivirus from '../../assets/antivirus_bubble.webp';
import cert from '../../assets/pcidss_cert.svg';

const ExtraFeaturesSection =()=>{
    return (
        <section className="ExtraFeaturesContainer">
            <div className='extraFeaturesSectionsWrapper'>
                <div className="EFSubsection">
                    <div className="EFImageContainer">
                        <div className="EFImageInnerContainer">
                            <img src={whatsapp} alt="Whatsapp icon" className='EFImageInner'/>
                        </div>
                    </div>
                    <div className="EFContent">
                        <p className='EFMajorText'>Help, just a WhatsApp away. Anytime, Anyday.</p>
                        <p className="EFMinorText">
                            <span>During hectic work hours. On lazy sunday mornings. In the thick of
        night. Anytime.</span>
                        </p>
                    </div>
                </div>
                <div className="EFSubsection">
                    <div className="EFImageContainer">
                        <div className="EFImageInnerContainer">
                            <img src={rupee} alt="rupee icon" className='EFImageInner'/>
                        </div>
                    </div>
                    <div className="EFContent">
                        <p className='EFMajorText'>No hidden charges, no last minute surprises.</p>
                        <p className="EFMinorText">
                            <span>100% money back guarantee if a charge is applied without your knowledge.</span>
                        </p>
                    </div>
                </div>
                <div className="EFSubsection">
                    <div className="EFImageContainer">
                        <div className="EFImageInnerContainer">
                            <img src={antivirus} alt="Antivirus icon" className='EFImageInner'/>
                        </div>
                    </div>
                    <div className="EFContent">
                        <p className='EFMajorText'>Super secure. Because we care about your money.</p>
                        <p className="EFLogo">
                            <span>
                                <img src={cert} alt="Certificate of trust" style={{marginTop: '24px'}} />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraFeaturesSection;