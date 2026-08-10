import React from 'react';

function Pricing() {
  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="plan">
        <h3>Basic</h3>
        <p>$10/month</p>
        <button>Choose Plan</button>
      </div>
      <div className="plan">
        <h3>Pro</h3>
        <p>$30/month</p>
        <button>Choose Plan</button>
      </div>
      <div className="plan">
        <h3>Enterprise</h3>
        <p>Contact us</p>
        <button>Contact Sales</button>
      </div>
    </section>
  );
}

export default Pricing;