import './navbar.scss';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb';
import { useState } from 'react';
const Navbar = () => {
    const [active, setActive] = useState('navbar')
    const showNav = () =>{
        if(active === "navbar"){
            setActive('navbar activeNavbar')
        }else{
            setActive('navbar')
        }
        
    }
    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <MdOutlineTravelExplore className='icon' /> Demo.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className='btn'>
                            <a href="#"> BOOK NOW </a>
                        </button>
                    </ul>
                    <div className="closeNavbar" >
                        <AiFillCloseCircle className='icon' onClick={() => setActive('navbar')}/>
                    </div>
                </div>
                <div className="toggleNavbar">
                    <TbGridDots className='icon' onClick={showNav} />
                </div>
            </header>

        </section>
    );
};

export default Navbar;