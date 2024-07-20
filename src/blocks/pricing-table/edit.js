import {
  Flex,
  FlexItem,
  TextControl
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
  }, []);

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
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                     <TextControl value="Single User" style={{fontSize: "0.96rem", border: "0", paddingLeft: "0"}}/>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <TextControl value="5GB Storage" style={{fontSize: "0.96rem", border: "0", paddingLeft: "0"}}/>
                      
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      <TextControl value="Unlimited Public Projects" style={{fontSize: "0.96rem", border: "0", paddingLeft: "0"}}/>
                      
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Community Access
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Free Subdomain
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Monthly Status Reports
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
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
