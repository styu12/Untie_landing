import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro" style={{
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://d1e00ek4ebabms.cloudfront.net/production/2363c072-3131-4784-934e-f2c58970c927.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{ fontSize: "45px", marginBottom: "30px", lineHeight: "1.2" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span>UNTIE</span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://www.figma.com/proto/t4g1QsRzxpfW0uoTq5RjUW/Untie?page-id=0%3A1&type=design&node-id=220-9666&viewport=-6492%2C1655%2C0.61&scaling=min-zoom&starting-point-node-id=223%3A11836"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll" rel="noreferrer"
                >
                  Try it
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
