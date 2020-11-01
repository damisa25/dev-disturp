import React, { useState } from "react";
import "./index.scss";
import { Button, Col, Row } from "antd";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const MainMenuFund = () => {
  const history = useHistory();
  const userIcon = <FontAwesomeIcon icon={faUser} className="user-icon" />;
  return (
    <div className="menu-tab-fund">
      <Row justify="space-between" className="main-menu-box">
        <Col>
          <Button
            className="button-menu"
            onClick={() => history.push("/funder/offerScholar")}
            autoFocus
          >
            ข้อเสนอทุน
          </Button>
        </Col>
        <Col>
          <Button className="button-menu" onClick={() => history.push("/")}>
            วิชา ชาญชนะ{userIcon}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MainMenuFund;
