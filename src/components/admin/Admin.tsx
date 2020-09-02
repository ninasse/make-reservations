import React, { useState, useEffect, MouseEvent } from "react";
import axios from 'axios';

export default function Admin() {

  function deleteBooking(e: MouseEvent<HTMLButtonElement>) {
    const id = e;
    console.log(e)
      try{
        axios.delete(`http://localhost:3001/bookings/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      } catch (e){
        console.log(e)
      }  
  }
  
   const [bookings, setBookings] = useState([]);

   useEffect(() => {
    axios.get("/bookings/").then((allBookings) => {
    console.log(allBookings.data);
    setBookings(
        allBookings.data.map((booking: any) => {
          return (<ul key={booking._id}>
          <button id="delete" onClick={() => deleteBooking(booking.bookingId)}>Delete</button>
          <li>Booking Id: {booking.bookingId}</li>
          <li>Seats: {booking.seats}</li> 
          <li>Date: {booking.date.split('T')[0]}</li>
          </ul>);
        })
      );
    });
   }, []);
  

  return (
    <div className="main-container">
      <div className="ulContainer">
        <li className="ulBooking">
          {bookings}
        </li>
      </div>
    </div>
  );
}


