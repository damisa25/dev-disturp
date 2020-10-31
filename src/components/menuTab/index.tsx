import React, {useState} from 'react';
import './index.scss';
import {Button, Col, Row} from 'antd';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom";

const MainMenu = () => {

  const history = useHistory()
  const userIcon =<FontAwesomeIcon icon={faUser} className='user-icon'/>
  return (
    <div className='menu-tab'>
        <Row justify="space-between" className="main-menu-box">
            <Col>
              <Button className="button-menu" onClick={()=>history.push('/student/allScholar')}
            autoFocus
           >ทุนทั้งหมด</Button>
              <Button className="button-menu status" onClick={()=>history.push('/student/trackStatus')}
         >ติดตามสถานะ</Button>
            </Col>
            <Col>
              <Button className="button-menu"
            >ชาญชนะ วิชา{userIcon}</Button>
            </Col>
        </Row>
        
    </div>
  );
}

export default MainMenu;