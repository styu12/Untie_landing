import React from "react";

export const About = (props) => {
  return (
    <div id="about" style={{
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://solutions.rent/wp-content/uploads/2019/07/spotkanie-biznesowe.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}>
      <div className="container">
        <div className="row">
          {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div> */}
          <div className="col-12">
            <div className="about-text" style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              color: "white",
            }}>
              <div className="col-md-8 col-xs-12" style={{
                padding: "0 30px",
              }}>
                <h2 style={{ color: "white" }}>About Us</h2>
                {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
                <p>
                <strong>비즈니스 법률 자문 AI, "UNTIE"</strong><br /> <br />
                
                 "이런 사소한 것까지 변호사에게 자문을 받아야 하나?",<br />
                "당장 다음주까지 진행 여부를 결정해야 하는데, 신속하게 법률 자문을 구할 수 있는 곳이 없을까?"<br /><br />
                
                Untie로 사업 진행 과정에서 마주하는 법률 고민들을 신속하고, 정확하고, 편리하게 해소해보세요!<br /><br />

                Untie는 최신 판례 및 법률 데이터를 바탕으로 법률 자문을 제공하는 AI 기반 서비스로, 특정 사안에 대한 적법성, 관련 쟁점 및 향후 사업 진행에 대한 가이드라인을 제시합니다.<br />
                저희 서비스는 유저 데이터 및 최신 판례 및 법률에 대한 학습을 통해 성능을 향상시키고 있습니다. 때문에 Untie가 제공하는 답변에 대한 피드백을 제공해주시면, 저희 서비스의 발전에 큰 도움이 됩니다.<br /><br />
                <strong>여러분의 법률 고민이 모두 해결되는 그날까지.</strong><br />
                <strong>Untie</strong>
                </p>
              </div>

              <div className="col-md-4 col-xs-12" style={{
                padding: "0 30px",
              }}>
                <h3 style={{ color: "white" }}>For Who?</h3>
                <div className="list-style">
                  <div>
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
