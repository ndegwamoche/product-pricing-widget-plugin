import {
  Flex,
  FlexItem,
  TextControl,
  Button,
  Icon,
  ToggleControl
} from "@wordpress/components";
import { useRef, useEffect, useState } from "react";
import { URLPopover } from "@wordpress/block-editor";
import { keyboardReturn } from "@wordpress/icons";

const Edit = (props) => {
  const { attributes, setAttributes } = props;
  const plans = ["plan1", "plan2", "plan3"];
  const prices = ["price1", "price2", "price3"];
  const [inputWidths, setInputWidths] = useState({ price1: 35, price2: 35, price3: 35 });
  const inputRefs = useRef({});
  const spanRefs = useRef({});
  const popoverRefs = useRef({});
  const buttonRefs = useRef({});
  const [isPopoverVisible, setPopoverVisible] = useState({});
  const [buttonURLs, setButtonURLs] = useState({});

  useEffect(() => {
    // Initialize button URLs from attributes
    const initialButtonURLs = {};
    plans.forEach((_, index) => {
      initialButtonURLs[index] = attributes[`buttonURL${index + 1}`] || "";
    });
    setButtonURLs(initialButtonURLs);
  }, [attributes]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsidePopover = Object.values(popoverRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );
      const isClickInsideButton = Object.values(buttonRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );

      if (!isClickInsidePopover && !isClickInsideButton) {
        setPopoverVisible({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleButtonMouseOver = (index) => {
    setPopoverVisible((prev) => ({
      ...prev,
      [index]: true
    }));
  };

  const handleURLChange = (index, value) => {
    setButtonURLs((prev) => ({ ...prev, [index]: value }));
  };

  const handleURLSubmit = (index) => {
    setAttributes({ [`buttonURL${index + 1}`]: buttonURLs[index] });
    setPopoverVisible((prev) => ({ ...prev, [index]: false }));
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
                      data-index={index}
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
                      onMouseOver={() => handleButtonMouseOver(index)}
                      ref={(el) => (buttonRefs.current[index] = el)}
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
                      {isPopoverVisible[index] && (
                        <URLPopover
                          ref={(el) => (popoverRefs.current[index] = el)}
                          onClose={() => setPopoverVisible((prev) => ({ ...prev, [index]: false }))}
                          renderSettings={() => (
                            <>
                              <ToggleControl
                                label="Open in new tab"
                                checked={attributes[`buttonOpenInNewTab${index + 1}`] || false}
                                onChange={(value) => setAttributes({ [`buttonOpenInNewTab${index + 1}`]: value })}
                              />
                              <ToggleControl
                                label="Add rel='nofollow'"
                                checked={attributes[`buttonNoFollow${index + 1}`] || false}
                                onChange={(value) => setAttributes({ [`buttonNoFollow${index + 1}`]: value })}
                              />
                            </>
                          )}
                        >
                          <TextControl
                            label="URL"
                            placeholder="link inside"
                            style={{ width: '100%', minWidth: '200px' }}
                            value={buttonURLs[index] || ""}
                            onChange={(value) => handleURLChange(index, value)}
                          />
                          <Button
                            icon={keyboardReturn}
                            label="Save URL"
                            isPrimary
                            onClick={() => handleURLSubmit(index)}
                            style={{ marginTop: '20px' }}
                          />
                        </URLPopover>
                      )}
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
