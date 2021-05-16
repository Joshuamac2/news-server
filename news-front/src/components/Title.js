import React from 'react'
import Logo from "../style/logo.png"

function Title() {
  return (
    <div className="title">
      <div className="logo">
        <img className="logo" alt="News lab logo" src={Logo}/>
          <h5 className="font-weight-light">{"All Sides | Balanced news"}</h5>
        </div>
        <div className="text">
          <h1 className="display-1 Century Gothic font-weight: bold">{"The News lab"}</h1>
        <div className="subText"><h5 className="font-weight-light" style={{ color: '#909090' }}>{"Get the latest news from the most popular news outlets from both political sides. Click on the articles to engage in debate about how other news outlets are covering the same news"}</h5></div>
      </div>
    </div>
  )
}

export default Title
