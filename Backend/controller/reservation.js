import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full Reservation Form!!", 400));
    }
    try{
        await Reservation.create({ firstName, lastName, email, phone, date, time } );
        res.status(200).json({
            success: true,
            message: "Reservation Done Successfully !",
        });
        
        
    }catch(error){
        if(error.name === 'ValidationError'){
            const validationErrors =Object.values(error.errors).map(err=>err.message);
            return next(new ErrorHandler(validationErrors.join(" , "), 400));
        }
         return next(error);
    }
};


// GET: Fetch all reservations
export const getAllReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation.find().sort({ date: -1, time: -1 }); // Latest first
        res.status(200).json({
            success: true,
            count: reservations.length,
            data: reservations,
        });
    } catch (error) {
        return next(error);
    }
};