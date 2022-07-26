import express from "express"
import dbclient from "../../dbconnection.js";
import HotelModel from "../models/hotel-model.js";

const router = express.Router();
var hotels = [];


var query = await dbclient.query('select * from hotel');

router.get("/", async (req, res) => {
    try {
        hotels = getBlog();
        res.status(200).json(hotels)
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.get("/save", async (req, res) => {

//     try {
//         hotel = req.body;
        
//     } catch (err) {
//         res.status(500).json(err);;
//     }
// })


function getBlog() {

    query.rows.forEach(row => {
        let hotel = new HotelModel();
        hotel.name = row.name;
        hotel.rating = row.rating;
        hotel.desc = row.desc;
        hotels.push(hotel);
    })

    return hotels;
}



export default router;