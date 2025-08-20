import React from 'react'
import { Link } from 'react-router-dom'

const TopPage = () => {
  return (
    <div class='topPage'>
        <h1 class='topPage-title'>SCHEDULER <span class='pro'>PRO</span></h1>
        <div class='topPage-buttons'>
            <Link><button class='topPage-btn1'>Sign Up</button></Link>
            <button class='topPage-btn2'> Sign In</button>
        </div>
    </div>
  )
}

export default TopPage
