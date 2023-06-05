import React from "react";

export const Flow = (props) => {
  return (
    <div id="userflow" className="text-center" style={{
        padding: "100px 0",
    }}>
      <div className="container">
        <div className="section-title">
          <h2>User Flow</h2>
        </div>

        {props.data ? 
            props.data.map((d, i) => (
                <div style={{
                    display: "flex",
                    width: '100%',
                    height: '400px',
                    marginBottom: '130px',
                }}>
                {i % 2 === 0 ? (
                    <>
                        <div key={`${d.title}-${i}`} style={{
                            flex: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0 70px',
                            textAlign: 'center',
                        }}>
                            <h3 style={{
                                color: "#5ca9fb",
                                marginBottom: "20px",
                                fontSize: "22px",
                                fontWeight: "bold",
                            }}>{d.title}</h3>
                            <p>{d.text}</p>
                        </div>

                        <div style={{
                            background: `url(${d.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            flex: 1.5,
                            height: "100%",
                            borderRadius: "35px",
                            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
                        }} />
                    </>
                ) : (
                    <>
                        <div  style={{
                            background: `url(${d.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            flex: 1.5,
                            height: "100%",
                            borderRadius: "35px",
                            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
                        }}/>

                        <div key={`${d.title}-${i}`} style={{
                            flex: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0 70px',
                            textAlign: 'center',
                        }}>
                            <h3 style={{
                                color: "#5ca9fb",
                                marginBottom: "20px",
                                fontSize: "22px",
                                fontWeight: "bold",
                            }}>{d.title}</h3>
                            <p>{d.text}</p>
                        </div>
                    </>
                )}
                </div>
        )) : "Loading..."}

      </div>
    </div>
  );
};
