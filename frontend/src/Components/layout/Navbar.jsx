import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src="" alt="" />
            <h2 className="webName"></h2>
        </div>
        <div className="midNav">
            <p>Browse</p>
            <p>How it works</p>
            <p>Cities</p>
            <p>Support</p>
        </div>
        <div className="getStarted">
            <button className="signIn">Sign in</button>
            <button className="getStarted">Get Started</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
