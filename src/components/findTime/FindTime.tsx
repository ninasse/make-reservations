import React, { useReducer, ChangeEvent } from "react";
import axios from 'axios';


export interface BookingForm { 
  date: string;  
  seats: number; 
  time: string;  
}

export default function FindTime() {

  let defautValue: BookingForm = {date:'', seats: 0, time: ''}; 
  const [available, setAvailable] = useReducer(
    (state: BookingForm, newState: BookingForm) => 
    ({...state, ...newState}), 
    defautValue); 

  function findTime(e: ChangeEvent<any>) {
    let element = e.target.name; 
    let value = e.target.value;  
  
    setAvailable({[element]: value} as any); 
    console.log(available); 
  }

  return (
    <div className="main-container">
    <div className="placeholder">
      <form>
        <fieldset className="select-container">         
          <label>Lediga tider:</label>
          
          <div>
            <input type="radio" id="18" name="time" value="18" onChange={findTime}/>
            <label htmlFor="18">18.00</label>
          </div>
          <div>
            <input type="radio" id="21" name="time" value="21" onChange={findTime}/>
            <label htmlFor="21">21.00</label>
          </div>
        </fieldset> 
        <button type="button" onClick={findTime}>Nästa</button> 
      </form>
    </div>
  </div>
  );
}