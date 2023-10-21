import React from 'react'
import './LoginSignup.css'
import photo from '../Assets/pig.svg'

export const LoginSignup = () => {
  return (
    <div>

    <div id="pic-container">
    <div id="pig-container">
      <img src={photo} alt="pig" id="pig"/>
    </div>
    </div>

    <div id="login-container">
      <form id="login-form">
        <span>Welcome to KhataNex</span>
        <input type="text" id="name" class="field" placeholder="Name"/>
        <input type="text" id="phone" class="field" placeholder="Phone No."/>
        <input type="submit" id="submit" class="field" name="Submit"/>
        <div >
          <span>New Member?</span>
          <span>Register Now</span>
        </div>
      </form>
    </div>
    
    </div>
  )
}
