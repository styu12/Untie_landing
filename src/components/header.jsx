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
                <h1 style={{ fontSize: "45px", marginBottom: "30px" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://www.figma.com/proto/t4g1QsRzxpfW0uoTq5RjUW/Untie?page-id=0%3A1&type=design&node-id=1-212&viewport=579%2C1112%2C0.33&scaling=min-zoom&starting-point-node-id=1%3A212"
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
