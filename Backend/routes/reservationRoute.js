import express from "express";
import { sendReservation, getAllReservations } from "../controller/reservation.js";
const router=express.Router();

// POST route
router.post("/send", sendReservation);

// GET route
router.get("/all", getAllReservations);


export default router;
