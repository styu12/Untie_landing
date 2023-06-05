import React from "react";

export const Flow = (props) => {
  return (
    <div id="userflow" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>User Flow</h2>
        </div>

        {props.data ? 
            props.data.map((d, i) => (
                <div className="flow-container">
                {/* {i % 2 === 0 ? (
                    <> */}
                        <div className="col-md-5 col-xs-12 flow-text-box" key={`${d.title}-${i}`} >
                            <h3 className="flow-title">{d.title}</h3>
                            <p>{d.text}</p>
                        </div>

                        <div className="col-md-7 col-xs-12 flow-image-box" style={{
                            background: `url(${d.image})`,
                        }} />
                    {/* </>
                ) : (
                    <>
                        <div className="col-md-7 col-xs-12 flow-image-box" style={{
                            background: `url(${d.image})`,
                        }}/>

                        <div className="col-md-5 col-xs-12 flow-text-box" key={`${d.title}-${i}`}>
                            <h3 className="flow-title">{d.title}</h3>
                            <p>{d.text}</p>
                        </div>
                    </>
                )} */}
                </div>
        )) : "Loading..."}

      </div>
    </div>
  );
};
