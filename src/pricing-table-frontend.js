// frontend.js
import React from 'react';
import ReactDOM from 'react-dom';

const FrontendPricingTable = (props) => {
    const { attributes } = props;

    const plans = ["plan1", "plan2", "plan3"];
    const prices = ["price1", "price2", "price3"];
    const buttonLabels = ["buttonLabel1", "buttonLabel2", "buttonLabel3"]; // Assuming these labels are defined

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
                                        <a
                                            href="#"
                                            className="btn btn-primary text-uppercase"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "1rem",
                                                borderRadius: "5rem",
                                                letterSpacing: "0.1rem",
                                                backgroundColor: "#0d6efd",
                                                borderColor: "#0d6efd",
                                                color: "#ffffff",
                                                textDecoration: "none",
                                                fontSize: "80%",
                                                fontWeight: "bold",
                                                opacity: "0.7",
                                                transition: "all 0.2s"
                                            }}
                                        >
                                            {attributes[buttonLabels[index]] || "Button " + (index + 1)}
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

const divsToUpdate = document.querySelectorAll(".product-pricing-table");
divsToUpdate.forEach(function (div) {
    // Parse attributes from JSON stored in the div's data-attributes attribute
    const attributes = JSON.parse(div.getAttribute('data-attributes'));

    // Render the React component with the attributes
    ReactDOM.render(<FrontendPricingTable attributes={attributes} />, div);

    // Remove the class to avoid re-rendering
    div.classList.remove("product-pricing-table");
});
