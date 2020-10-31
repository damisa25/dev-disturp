import React from "react";
import "./index.scss";
import "../../index.scss";
import MainMenuFund from "../../components/menuTabFund";
import { Row, Card, List, Button, Col } from "antd";
import offerImage from "../../assets/mediamodifier_cropped_image.png";
import { useHistory } from "react-router-dom";

const wait1 = [
  {
    title: "ทุนโอ",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ2",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
];

const wait2 = [
  {
    title: "ทุนโอ",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ2",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
];

const success = [
  {
    title: "ทุนตู่",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ2",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
  },
];

const OfferScholar = () => {
  const history = useHistory();

  return (
    <div className="offer-status">
      <MainMenuFund />
      <Row justify="space-between" className="big-search-box">
        <Col>
          <div className="sub-search-box1">
            <Row>ข้อเสนอทุนทั้งหมดของคุณ</Row>
            <Row>
              <Button
                className="create-scholar-btn"
                onClick={() => history.push("/funder/offerScholar/create")}
              >
                สร้างข้อเสนอทุน
              </Button>
            </Row>
          </div>
        </Col>
        <Col>
          <div className="sub-search-box2">
            <img src={offerImage} alt="" className="box2" />
          </div>
        </Col>
      </Row>
      <div className="content">
        <Row className="header-content">รอได้รับการสนใจ</Row>
        <List
          grid={{ gutter: 32, column: 4 }}
          dataSource={wait1}
          renderItem={(item) => (
            <List.Item>
              {/* <Badge size="default" dot={item.status === 'success'? false : true} color="#fc7864"> */}
              <Card bordered={false} cover={<img alt="" src={item.img} />}>
                <div className="card-detail">
                  <div>{item.title}</div>
                  <div className="detail">{item.des}</div>
                  <div className="money">{item.money + " บาท"}</div>
                </div>
              </Card>
              {/* </Badge> */}
            </List.Item>
          )}
        />
        <Row className="header-content">รอการพิจารณา</Row>
        <List
          grid={{ gutter: 32, column: 4 }}
          dataSource={wait2}
          renderItem={(item) => (
            <List.Item>
              <Card bordered={false} cover={<img alt="" src={item.img} />}>
                <div className="card-detail">
                  <div>{item.title}</div>
                  <div className="detail">{item.des}</div>
                  <div className="money">{item.money + " บาท"}</div>
                </div>
              </Card>
            </List.Item>
          )}
        />
        <Row className="header-content">สำเร็จแล้ว</Row>
        <List
          grid={{ gutter: 32, column: 4 }}
          dataSource={success}
          renderItem={(item) => (
            <List.Item>
              <Card bordered={false} cover={<img alt="" src={item.img} />}>
                <div className="card-detail">
                  <div>{item.title}</div>
                  <div className="detail">{item.des}</div>
                  <div className="money">{item.money + " บาท"}</div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default OfferScholar;
