import React from 'react';
import Cta from './Cta';
import './Header.css'
const Header = () => {
    return (
        <section className='home-container'>
        <div className='home-title lg:pb-32'>
        <h5>Hello I'm</h5>
        <h1>Ishtiaq Uddin</h1>
        <h5 className="text-light">Junior Web Developer</h5>
        <Cta></Cta>
        </div>
        <div className='py-16 px-10 rounded-full'>
        <img className='rounded-3xl ' src="https://i.ibb.co/98RrzLg/photo-2022-06-01-22-23-14.jpg" alt="" />
        </div>
    </section>
        );
};

export default Header;