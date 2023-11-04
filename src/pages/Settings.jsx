import { MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import Categories from '../Data/Categories'
import { Link } from 'react-router-dom';
export const Settings = ({ name,setName,qeastionFetch}) => {
    const [category,setCategory]=useState("");
    const [difficulty,setDifficulty]=useState("");
    const [error, setError] = useState(false);
    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
          setError(true);
          return;
        } else {
          setError(false);
          qeastionFetch(category, difficulty);   
        }
      };
  return (
    <div className='w-50 p-3 m-3 d-flex flex-column align-items-center fw-bolder'>
        <div className="w-75">
            {error && alert('please fill the feilds completely')}
        <TextField style={{marginBottom:'20px',width:'100%'}} id="outlined-basic" label="Enter your name" variant="outlined"
        onChange={(e)=>setName(e.target.value)} />       
        <TextField select style={{marginBottom:'20px',width:'100%'}} id="outlined-basic" label="Select category" variant="outlined"
        onChange={(e)=>setCategory(e.target.value)} value={category}
         > 
        {
            Categories.map((cat)=>(
                <MenuItem key={cat.category} value={cat.value}>{cat.category}
        </MenuItem>

            )

            )
        }
        
        </TextField>
        <TextField select style={{marginBottom:'20px',width:'100%'}} id="outlined-basic" label="Select difficulty" variant="outlined" 
        onChange={(e)=>setDifficulty(e.target.value)}  value={difficulty}> 
        <MenuItem key="Easy" value="easy" >
        Easy</MenuItem>
        <MenuItem key="Medium" value="medium" >
        Medium</MenuItem>
        <MenuItem key="Hard" value="hard" >
        Hard</MenuItem>
        </TextField>
        <button to='/quiz' className='d-grid btn btn-primary w-100'onClick={handleSubmit} >Start</button>

        </div>     

    </div>
  )
}
