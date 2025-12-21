import React from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About=()=>{
    return (
        <div>
            <section className='about' id="about">  
                <div className="container">
                    <div className="banner">
                        <div className="top">
                            <h1 className="heading">
                                ABOUT US
                                <p>The Only Thing Wee Are Serious About Is Food.</p>
                            </h1>
                        </div>
                        <p className='mid'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, debitis? Ratione fugiat possimus debitis, 
                            necessitatibus autem a veritatis quasi nostrum ad obcaecati, molestias, minima quo provident quis iure voluptas beatae placeat?
                            Dolore alias, distinctio quia illo excepturi modi praesentium veniam possimus quo unde, delectus asperiores quidem quod atque
                            tempora nemo.\
                        </p>
                        <Link to={"/"}>
                            Explore Menu
                            <span>
                                <HiOutlineArrowNarrowRight />
                            </span>
                        </Link>
                    </div>
                    <div className="banner">
                        <img src="/about.png" alt="about" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;