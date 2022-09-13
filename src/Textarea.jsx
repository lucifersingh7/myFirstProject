import React, { useState } from "react";

function Textarea(){
    
     const[state,setState]=useState('');

    const canType=(val)=>{
        setState(val.target.value);
    }


  return(
    <div className="container">
            <div class="mb-3 my-5">
          <label for="exampleFormControlTextarea1" class="form-label">Enter text here</label>
          <textarea class="form-control" value={state} id="exampleFormControlTextarea1" onChange={canType} rows="8"></textarea>
           </div>

           <button type="button" class="btn btn-primary mx-2 my-2" onClick={()=>{ setState(state.toUpperCase());}} >Convert to Uppercase</button>
           <button type="button" class="btn btn-primary mx-2 my-2" onClick={()=>{ setState(state.toLowerCase());}} >Convert to Lowercase</button>

    </div>    
    );
}

export default Textarea;