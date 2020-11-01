import React, { useState } from "react";
import "./index.scss";
import { Button, Col, Row } from "antd";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const MainMenu = () => {
  const history = useHistory();
  const userIcon = <FontAwesomeIcon icon={faUser} className="user-icon" />;
  const [btn, setBtn] = useState("allScholar");

  const handleClick = (e: string) => {
    setBtn(e);
    if (e == "profile") {
      history.push(`/`);
    } else {
      history.push(`/student/${e}`);
    }
  };

  return (
    <div className="menu-tab">
      <Row justify="space-between" className="main-menu-box">
        <Col>
          <Button
            className={
              btn === "allScholar" ? "active-button-menu" : "button-menu"
            }
            onClick={() => handleClick("allScholar")}
            autoFocus
          >
            ทุนทั้งหมด
          </Button>
          <Button
            className={
              btn === "trackStatus"
                ? "active-button-menu status"
                : "button-menu status"
            }
            onClick={() => handleClick("trackStatus")}
          >
            ติดตามสถานะ
          </Button>
        </Col>
        <Col>
          <Button
            className={btn === "profile" ? "active-button-menu" : "button-menu"}
            onClick={() => handleClick("profile")}
          >
            ชาญชนะ วิชา{userIcon}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MainMenu;
