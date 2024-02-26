import '../assets/css/Packagecss.css'

function PackagePage() {
  return (
    <div id="pricing-table" className="clear">
      <div className="plan">
        <h3>Basic<span>₹10,000</span></h3>
        <a className="signup" href="/">Sign up</a>
        <ul>
          <p>Cakes</p>
          <p>Chocolate</p>
          <p>Venue</p>
          <p>Chocolate</p>
        </ul>
      </div>
      <div className="plan" id="most-popular">
        <h3>Gold<span>₹15,000</span></h3>
        <a className="signup" href="/">Sign up</a>
        <ul>
          <p>Cakes</p>
          <p>Chocolate</p>
          <p>Venue</p>
          <p>Chocolate</p>
          <p>Decoration</p>
        </ul>
      </div>
      <div className="plan">
        <h3>Silver<span>₹20,000</span></h3>
        <a className="signup" href="/">Sign up</a>
        <ul>

            <p>Cakes</p>
            <p>Chocolate</p>
            <p>Venue</p>
            <p>Chocolate</p>
            <p>Album</p>
            <p>Photography</p>
            <p>Cakes</p>
            <p>Entertainment</p>
        </ul>
      </div>
      <div className="plan">
        <h3>Elite<span>₹30,000</span></h3>
        <a className="signup" href="/">Sign up</a>
        <ul>
            <p> CUSTOMIZABLE Services</p>
            <p>Decoration<p/>
            <p>Cakes</p>
            <p>Album</p>
            <p>Photography</p>
            <p>Cakes</p>
            <p>E-invite</p>
            <p>Entertainment</p>
            <p>Return Gift </p>
            </p>
        </ul>
      </div>
    </div>
  );
}

export default PackagePage;
