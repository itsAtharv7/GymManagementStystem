import React from 'react'
import "../Styles/Efficiency.css"
import BoxGrid from './BoxGrid';


function Efficiency() {
    const totalBoxes = 200; 
    const filledBoxes = 79; 

    return (
        <>
     <div  className='efficiencyMain'>
          <center><h1>Parking Efficiency</h1></center>

          <div className="infomain">
          <div className="effiInfo">Total Vechicle Efficiency: <strong style={{color:'yellow'}}>{totalBoxes}  </strong> </div>
          <div className="effiInfo">Occupied By Vechicle :    <strong style={{color:'yellow'}}>  {filledBoxes}</strong></div>
          <div className="effiInfo">Remaining Space :         <strong style={{color:'yellow'}}>  {totalBoxes-filledBoxes}</strong></div>
          </div>

         <center style={{marginTop:'30px'}}> <BoxGrid filledBoxes={filledBoxes} totalBoxes={totalBoxes}  /></center>
         </div>
        </>
      );
}

export default Efficiency
