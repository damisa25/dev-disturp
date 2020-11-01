import React from "react";
import "./index.scss";
import { Button, Col, Row } from "antd";
import homeImage from "../../assets/schoolbooks-colour1.svg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const userIcon = <FontAwesomeIcon icon={faUser} className="user-icon" />;
  return (
    <div className="main-app">
      <div className="main-container">
        <Row justify="end">
          <Button className="sign-in-button">เข้าสู่ระบบ{userIcon}</Button>
        </Row>
        <Row>
          <div className="box1">
            <Row className="web-name">Skola</Row>
            <Row className="web-detail">
              เราคือแพลตฟอร์มสำหรับเชื่อมต่อ
              <br />
              สร้างทางเลือก เพื่อเพิ่มโอกาสทางการศึกษา
            </Row>
            <Row className="two-button">
              <Col>
                <Button
                  className="find-scholar"
                  onClick={() => history.push("/student/allScholar")}
                >
                  ค้นหาทุนการศึกษา
                </Button>
              </Col>
              <Col span={2}></Col>
              <Col>
                <Button
                  className="give-scholar"
                  onClick={() => history.push("/funder/offerScholar")}
                >
                  มอบทุนการศึกษา
                </Button>
              </Col>
            </Row>
          </div>
          <div className="box-image">
            <img src={homeImage} alt="" className="box2" />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Home;
