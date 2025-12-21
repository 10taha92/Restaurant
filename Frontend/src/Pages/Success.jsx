import React,{ useState,useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';


const Success=()=>{
    const [countDown,setCountDown]=useState(10);
    const navigate =useNavigate();
    useEffect(()=>{
        const timeOutId=setInterval(()=>{
            setCountDown((preCount)=>{
                if(preCount ===1 ){
                    clearInterval(timeOutId);
                    navigate('/');
                }
                return preCount-1;
            })
        },1000)
        return ()=>clearInterval(timeOutId);
    },[navigate]);

    return (
        <section className='notFound'>
            <div className='container'>
                <img src="/sandwich.png" alt="success" />
                <h1>REdirecting to Home Page in {countDown} seconds ...</h1>
                <Link to ={"/"}>Back To Home !<HiOutlineArrowNarrowRight/></Link>
            </div>
        </section>
    );
};

export default Success;