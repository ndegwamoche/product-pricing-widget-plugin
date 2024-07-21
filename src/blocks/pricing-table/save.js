const Save = (props) => {
  const { attributes } = props;

  // Destructure attributes
  const plans = ["plan1", "plan2", "plan3"];
  const prices = ["price1", "price2", "price3"];
  
  // Extract properties and property states from attributes
  const properties = attributes.properties || {
    plan1: ["Feature 1"],
    plan2: ["Feature 1"],
    plan3: ["Feature 1"]
  };

  const propertyStates = attributes.propertyStates || {
    plan1: [false],
    plan2: [false],
    plan3: [false]
  };

  return (
    <section className="pricing">
      <div className="container">
        <div className="row">
          {plans.map((plan, index) => (
            <div className="col-lg-4" key={plan}>
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    {attributes[plan] || `Default ${plan}`}
                  </h5>
                  <h6 className="card-price text-center">
                    ${attributes[prices[index]] || "0"}
                    <span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    {properties[plan].map((property, propIndex) => (
                      <li
                        key={propIndex}
                        className={propertyStates[plan][propIndex] ? "text-muted" : ""}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <span className="fa-li">
                          <i className={propertyStates[plan][propIndex] ? "fas fa-times" : "fas fa-check"}></i>
                        </span>
                        {property}
                      </li>
                    ))}
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Save;
