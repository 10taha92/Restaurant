import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound=()=>{
    return (
        <div>
            <section className='notFound'>
                <div className="container">
                    <img src="/notFound.svg" alt="NotFound"/>
                    <h1>LOOKS LIKE YOU'RE LOST !!!</h1>
                    <p>We can't see you find the page you're searching for!!</p>
                    <Link to={"/"}>Back To Home<span><HiOutlineArrowNarrowRight /></span></Link>
                </div>
            </section>
        </div>
    );
}


export default NotFound;