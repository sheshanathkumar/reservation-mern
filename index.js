import express from "express"
import authRoute from './api/router/auth.js'
import hotelRoute from './api/router/hotels.js'
import dbclient from "./dbconnection.js";
// import userRoute from './api/router/users.js'
// import roomRoute from './api/router/rooms.js'

// connect to local postgres database 

// -------- DB Connected-----
// var query = await dbclient.query('select * from blog where blog_id = 2');
// query.rows.forEach(row=> {
//     console.log(row);
// })

const app = express();
app.listen(9090, () => {
    console.log("listening to port 9090");
})

app.get("/", (req, res)=> {
    res.send("hello from request");
})


// middlewares 
app.use(express.json())
app.use('/api/auth', authRoute);
app.use('/api/hotel', hotelRoute);

// app.use('/api/user', userRoute);
// app.use('/api/rooms', roomRoute);