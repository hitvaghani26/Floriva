import React from 'react'
import { facebook, instagram, linkedin, pinterest } from '../assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <div className='footer'>
                <div className='footer-section'>
                    <div className='footer-l'>
                        <div className='footer-l-1'>


                            <div className='footer-title'>
                                <p>Quick Links</p>
                            </div>
                            <div className='footer-content  footer-content-text'>
                                <Link className='footerlinks' to="/plant">
                                    <p>Plants</p>
                                </Link>

                                <Link className='footerlinks' to="/blog">
                                    <p>Blog</p>
                                </Link>

                               

                                <Link className='footerlinks' to="/aboutus">
                                    <p>About Us</p>
                                </Link>

                                <Link className='footerlinks' to="/TermsandCond">
                                    <p>Terms and Conditions</p>
                                </Link>

                                <Link className='footerlinks' to="/CancellationandRefund">
                                    <p>Cancellation and Refund</p>

                                </Link>

                            </div>
                        </div>
                        <div className='footer-l-2'>
                            <div className='footer-title'>
                                <p>Follow Us</p>
                            </div>
                            <div className='footer-content footer-content-icons'>
                                <img src={facebook} alt='facebook' />
                                <img src={linkedin} alt='twitter' />
                                <img src={instagram} alt='instagram' />
                                <img src={pinterest} alt='pinterest' />
                                <img src={linkedin} alt='linkedin' />
                            </div>
                        </div>
                    </div>
                    <div className='footer-r'>
                        <div className='footer-r-1'>
                            <div className='footer-title'>
                                Subscribe
                            </div>
                            <div className='footer-content'>
                                <div className='input-subscribe' >
                                    <input type='text' />
                                    <div className='button-subscrive' >
                                        Send Email
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default Footer;