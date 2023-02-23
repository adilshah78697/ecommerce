import React from 'react';
import './footer.scss';
import video from '../../assets/video1.mp4';
import {FiChevronRight, FiSend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import { } from 'react-icons/ai'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Footer = () => {
    useEffect(() =>{
        Aos.init({duration:2000})
    },[])
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video} type='video/mp4' autoPlay muted loop></video>
            </div>
            <div className="setContent container">
                <div className="contactDiv flex"  >
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div  className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className="btn flex" type='submit'>
                           SEND <FiSend className='icon' />
                        </button>
                    </div>
                </div>
                <div className="footerCard flex" >
                    <div className="footerIntro flex" >
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className='icon' /> Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempore dolor, suscipit sint voluptatum unde soluta veniam deserunt incidunt placeat, fugit nihil dolores sequi quas consectetur obcaecati quibusdam magnam debitis?
                        </div>
                        <div data-aos="fade-up" className="footerSocials">
                            <div>
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <AiFillInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                            </div>
                            
                        </div>
                    </div>
                    <div className="footerLinks ">
                        {/* one */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>
                        {/* two */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="4000">
                            <span className="groupTitle">
                                Partners
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                RentCars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                HostelWorlds
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>
                        {/* three */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="5000">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                India
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Africa
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small>BESt TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHT RESERVED-TECNOTEC PVT LTD</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;