import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[3,"First name must be at least 3 characters long"] ,
        maxLength:[30,"First name cannot exceed 30 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength:[3,"Last name must be at least 3 characters long"] ,
        maxLength:[30,"Last name cannot exceed 30 characters"]
    }  ,
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    phone:{
        type: String,
        required: true,
        minLength:[10,"Phone number must contain only 10 digits"] ,
        maxLength:[10,"Phone number must contain only 10 digits"]
    },
    date:{
        type: String,
        required: true,
     },
     time:{
        type: String,
        required: true,
     },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);