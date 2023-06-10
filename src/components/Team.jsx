import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            UNTIE의 팀원들을 만나보세요!
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <div style={{
                      width: '240px',
                      height: '240px',
                      borderRadius: '50%',
                      background: `url('${d.img}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }} />
                    {/* <img src={d.img} alt="..." className="team-img" /> */}
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
