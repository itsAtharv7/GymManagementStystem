import { Link } from "react-router-dom";
import "../Styles/PricePlan.css"

function PricePlane({mood}) {
  return (
    <div className="price-plane-container" style={mood?{backgroundColor:'#18181b'}:{backgroundColor:'white'}}>
      <div className="price-planes">
        {/* Column 1 */}
        <div className="price-column">
        <h2 id="hh">2 Month ₹2100</h2>
          <p>lets build your self with our FitnessARC</p>
          <p>purches your plane now</p>

          <Link to={'/Dashboard'} className="price-btn">Buy Now</Link>
        </div>

        {/* Column 2 */}
        <div className="price-column" >
          <h2 id="hh">6 Month ₹5400</h2>
          <p>lets build your self with our FitnessARC</p>
          <p>purches your plane now</p>
          <Link to={'/Dashboard'} className="price-btn">Buy Now</Link>
        </div>

        {/* Column 3 */}
        <div className="price-column" >
          <h2 id="hh">12 Month ₹9999</h2>
          <p>lets build your self with our FitnessARC</p>
          <p>purches your plane now</p>

          <Link to={'/Dashboard'} className="price-btn">Buy Now</Link>
        </div>
      </div>
    </div>
  );
}

export default PricePlane;
