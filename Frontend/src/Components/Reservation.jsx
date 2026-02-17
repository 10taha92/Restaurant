import react from "react";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Reservation=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState(""); 
    const [phone,setPhone]=useState(0);
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");

    const navigate=useNavigate();
    const handleReservation=async(e)=>{
        e.preventDefault();
        try{
            const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/reservation/send`,
                {firstName,lastName,email,phone,date,time},
                {
                    headers:{
                        "Content-Type":"application/json"
                    },
                    withCredentials:true
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName(""); 
            setEmail("");
            setPhone(0);
            setDate("");
            setTime("");
            navigate("/success");
        }
        catch(err){
            toast.error(err.response.data.message);
        }
    }
    const handleGetList=async(e)=>{
        navigate("/reservations");
    }

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img src="./reservation.png" alt="reservation" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions Please Call</p>
                        <form>
                            <div>
                                <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                                <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                            </div>
                            <div>
                                <input type="date" placeholder="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                                <input type="time" placeholder="time" value={time} onChange={(e)=>setTime(e.target.value)}/>
                            </div>
                            <div>
                                <input type="email" placeholder="email" value={email} className="email_tag" onChange={(e)=>setEmail(e.target.value)}/>
                                <input type="number" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <button type="submit" onClick={handleReservation}>Reserve Now!{" "}
                                <span><HiOutlineArrowNarrowRight/></span>
                            </button>
                            <button type="submit" onClick={handleGetList} >Reservation History{" "}
                                <span><HiOutlineArrowNarrowRight/></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Reservation; 