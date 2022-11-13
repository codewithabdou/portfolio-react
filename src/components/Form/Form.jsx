import React from 'react';

import "./FormStyles.css";

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Name</label><br/>
            <input type="text"></input><br/>
            <label>Email</label><br/>
            <input type="email"></input><br/>
            <label>Subject</label><br/>
            <input type="text"></input><br/>
            <label>Message</label><br/>
            <textarea type="text" rows="6" placeholder='Type your message here'></textarea><br/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form