import {
  Flex,
  FlexItem,
  TextControl,
  Button,
  Icon
} from "@wordpress/components";
import { useRef, useEffect, useState } from "react";

const Edit = (props) => {
  const { attributes, setAttributes } = props;
  const plans = ["plan1", "plan2", "plan3"];
  const prices = ["price1", "price2", "price3"];
  const [inputWidths, setInputWidths] = useState({ price1: 35, price2: 35, price3: 35 });
  const inputRefs = useRef({});
  const spanRefs = useRef({});

  useEffect(() => {
    plans.forEach((plan, index) => {
      const price = prices[index];
      if (spanRefs.current[price]) {
        setInputWidths((prevWidths) => ({
          ...prevWidths,
          [price]: spanRefs.current[price].offsetWidth + 10
        }));
      }
    });
  }, [attributes]);

  const addProperty = (plan) => {
    const newProperties = {
      ...attributes.properties,
      [plan]: [...attributes.properties[plan], "Feature"]
    };
    const newPropertyStates = {
      ...attributes.propertyStates,
      [plan]: [...attributes.propertyStates[plan], false]
    };
    setAttributes({ properties: newProperties, propertyStates: newPropertyStates });
  };

  const removeProperty = (plan, index) => {
    const newProperties = { ...attributes.properties };
    newProperties[plan].splice(index, 1);
    const newPropertyStates = { ...attributes.propertyStates };
    newPropertyStates[plan].splice(index, 1);
    setAttributes({ properties: newProperties, propertyStates: newPropertyStates });
  };

  const updateProperty = (plan, index, value) => {
    const newProperties = { ...attributes.properties };
    newProperties[plan][index] = value;
    setAttributes({ properties: newProperties });
  };

  const togglePropertyState = (plan, index) => {
    const newPropertyStates = { ...attributes.propertyStates };
    newPropertyStates[plan][index] = !newPropertyStates[plan][index];
    setAttributes({ propertyStates: newPropertyStates });
  };

  return (
    <section className="pricing">
      <div className="container">
        <Flex className="row">
          {plans.map((plan, index) => (
            <FlexItem key={plan} className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    <TextControl
                      value={attributes[plan]}
                      onChange={(value) => setAttributes({ [plan]: value })}
                      style={{ border: "none", textAlign: "center" }}
                    />
                  </h5>
                  <h6
                    className="card-price text-center"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "nowrap"
                    }}
                  >
                    <span className="currency-symbol">$</span>
                    <div style={{ position: "relative" }}>
                      <TextControl
                        value={attributes[prices[index]]}
                        onChange={(value) => setAttributes({ [prices[index]]: value })}
                        className="text-control"
                        style={{
                          border: "none",
                          fontSize: "3.1rem",
                          height: "3.2rem",
                          display: "inline-block",
                          paddingLeft: "0",
                          color: "#000000",
                          marginTop: "0.35rem",
                          flex: "1",
                          width: `${inputWidths[prices[index]]}px`,
                          alignSelf: "center"
                        }}
                        ref={(el) => (inputRefs.current[prices[index]] = el)}
                      />
                      <span
                        ref={(el) => (spanRefs.current[prices[index]] = el)}
                        style={{
                          position: "absolute",
                          visibility: "hidden",
                          height: "0",
                          overflow: "hidden",
                          whiteSpace: "pre",
                          fontSize: "3.1rem",
                          fontWeight: "normal",
                          fontFamily: "inherit"
                        }}
                      >
                        {attributes[prices[index]] || "0"}
                      </span>
                    </div>
                    <span className="period">/month</span>
                  </h6>
                  <hr />
                  <ul className="fa-ul">
                    {attributes.properties[plan].map((property, propIndex) => (
                      <li key={propIndex} className={attributes.propertyStates[plan][propIndex] ? "text-muted" : ""}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span className="fa-li">
                            <i className={attributes.propertyStates[plan][propIndex] ? "fas fa-times" : "fas fa-check"}></i>
                          </span>
                          <TextControl
                            value={property}
                            onChange={(value) => updateProperty(plan, propIndex, value)}
                            style={{ fontSize: "0.90rem", border: "0", paddingLeft: "0" }}
                          />
                          <Button
                            isSmall
                            onClick={() => togglePropertyState(plan, propIndex)}
                            style={{ marginLeft: "0", width: "1rem" }}
                          >
                            <Icon icon={attributes.propertyStates[plan][propIndex] ? "star-filled" : "star-empty"} />
                          </Button>
                          <Button
                            isSmall
                            isDestructive
                            onClick={() => removeProperty(plan, propIndex)}
                            style={{ marginLeft: "0" }}
                          >
                            <Icon icon="trash" />
                          </Button>
                        </div>
                      </li>
                    ))}
                    <li>
                      <Button
                        isSecondary
                        onClick={() => addProperty(plan)}
                      >
                        Add Property
                      </Button>
                    </li>
                  </ul>
                  <div className="d-grid">
                    <Button
                      className="btn-primary-custom"
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
                        transition: "all 0.2s",
                        position: "relative",
                        height: "3rem"
                      }}
                    >
                      <TextControl
                        value={attributes[`buttonLabel${index + 1}`]}
                        onChange={(value) => setAttributes({ [`buttonLabel${index + 1}`]: value })}
                        style={{
                          color: "#ffffff",
                          backgroundColor: "transparent",
                          border: "none",
                          fontSize: "inherit",
                          fontWeight: "inherit",
                          textTransform: "uppercase",
                          padding: "0",
                          paddingTop: "0.5rem",
                          margin: "0",
                          textAlign: "center",
                          width: "auto",
                          height: "auto",
                          verticalAlign: "middle"
                        }}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </FlexItem>
          ))}
        </Flex>
      </div>
    </section>
  );
};

export default Edit;
