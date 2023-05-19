import "./PricingCardsStyles.css";

import React from 'react'
import { Link  } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="price">$100</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <Link to='/contact' className="btn">Purchase Now</Link> 
            </div>
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="price">$100</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <Link to='/contact' className="btn">Purchase Now</Link> 
            </div>
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="price">$100</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <p>- 3 days -</p>
                <Link to='/contact' className="btn">Purchase Now</Link> 
            </div>
        </div>
    </div>
  )
}

export default PricingCard