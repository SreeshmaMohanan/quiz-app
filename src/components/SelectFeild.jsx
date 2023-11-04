import React, { useState } from 'react'
import { Form } from 'react-router-dom'
export const SelectFeild = (props) => {
    const {label}=props
    const [value,setValue]=useState('')
    const handlechange=()=>{
       

    }
  return (
    <div className='mt-5 '>
        <>
        <Form.Control
              type="text"
              placeholder={label}
              aria-describedby="inputGroupPrepend"
              required
            />
             <Form.Select value={value} label={label} onchange={handlechange}>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </>
    </div>
  )
}

