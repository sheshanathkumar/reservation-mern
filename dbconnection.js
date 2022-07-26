import pg from 'pg'
var conString = "postgres://postgres:12345@localhost:5432/hotel_booking";
var dbclient = new pg.Client(conString);
await dbclient.connect();
console.log('db connected');

export default dbclient;