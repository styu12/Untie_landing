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
              alignItems: "center",
              color: "white",
            }}>
              <div className="col-md-6">
                <h2 style={{ color: "white" }}>About Us</h2>
                {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
                <p>
                <strong>"Untie"는 비즈니스 법률 자문 AI입니다.</strong><br /> <br />
                
                 "이런 사소한 것까지 변호사에게 법률 자문을 받아야 하나?",<br />
                "당장 다음주까지 진행 여부를 결정해야 하는데, <br />신속하게 법률 자문을 구할 수 있는 곳이 없을까?" 이제는 이런 걱정 하실 필요 없습니다.<br /><br />
                
                Untie는 사업 진행 과정에서 마주할 수 있는 법률 관련 고민들을 신속, 정확하게 낮은 비용으로 제공하고 있습니다. 저희 서비스는 업무 및 의사결정 행위의 적법성, 관련 쟁점 및 향후 사업 진행에 대한 가이드라인을 제시합니다.<br />
                Untie는 최신 판례 및 법률 데이터를 바탕으로 법률 자문을 제공하는 AI 기반 서비스입니다. 저희 서비스의 품질은 클라이언트가 제공하는 정보와 최신 판례 및 법률 데이터에 대한 학습을 통해 향상됩니다.<br />
                때문에, Untie는 지속적인 학습 데이터 업데이트와 다양한 유저 케이스를 기반으로 모델 성능을 지속적으로 개선해나갈 것입니다. 정확하지 않거나, 불만족스러운 답변에 대해 피드백을 제공해주시면, 저희 서비스의 발전에 큰 도움이 됩니다.<br /><br />
                <strong>여러분의 법률 고민이 모두 해결되는 그날까지.</strong><br />
                <strong>Untie입니다.</strong>
                </p>
              </div>

              <div className="col-md-6">
                <h3 style={{ color: "white" }}>For Who?</h3>
                <p style={{ fontWeight: "bold" }}>비즈니스 업무 및 의사결정 행위에 대한 법률 고민을 갖고 있는 저희 Untie의 고객입니다.</p>
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
                  <p>그 외에도 모든 종류의 법률 고민이 저희 Untie와 함께 해결될 수 있기를 바랍니다. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
