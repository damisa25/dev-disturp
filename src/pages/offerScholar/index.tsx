import React, { useEffect, useState } from "react";
import "./index.scss";
import "../../index.scss";
import MainMenuFund from "../../components/menuTabFund";
import { Row, Card, List, Button, Col, Spin } from "antd";
import offerImage from "../../assets/mediamodifier_cropped_image.png";
import { useHistory } from "react-router-dom";
import { getOfferByDonor } from "../../services/user.service";
interface IAllScholars {
  name: String;
  description: String;
  priceAmount: Number;
  _id: String;
}
interface IDonersOffer {
  scholarship: IAllScholars;
  createdDate: Date;
  state: String;
  note: String;
}

const OfferScholar = () => {
  const history = useHistory();
  const [donors, setDonors] = useState<IDonersOffer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const studentSc = async () => {
    try {
      const res = await getOfferByDonor("5f9db92b8844700abddb3c0d"); //has 1 user for now
      setDonors(res.data);
      if (res) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    studentSc();
  }, []);

  return (
    <div className="offer-status">
      <Spin spinning={loading}>
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
            dataSource={donors.filter((e) => {
              return e.state === "pending";
            })}
            renderItem={(item) => (
              <List.Item>
                {/* <Badge size="default" dot={item.status === 'success'? false : true} color="#fc7864"> */}
                <Card
                  bordered={false}
                  cover={
                    <img
                      alt=""
                      src="https://assets.brandinside.asia/uploads/2020/09/New-Project-2.jpg"
                    />
                  }
                >
                  <div className="card-detail">
                    <div>{item.scholarship.name}</div>
                    <div className="detail">{item.scholarship.description}</div>
                    <div className="money">
                      {item.scholarship.priceAmount + " บาท"}
                    </div>
                  </div>
                </Card>
                {/* </Badge> */}
              </List.Item>
            )}
          />
          <Row className="header-content">สำเร็จแล้ว</Row>
          <List
            grid={{ gutter: 32, column: 4 }}
            dataSource={donors.filter((e) => {
              return e.state === "success";
            })}
            renderItem={(item) => (
              <List.Item>
                <Card
                  bordered={false}
                  cover={
                    <img
                      alt=""
                      src="https://assets.brandinside.asia/uploads/2020/09/New-Project-2.jpg"
                    />
                  }
                >
                  <div className="card-detail">
                    <div>{item.scholarship.name}</div>
                    <div className="detail">{item.scholarship.description}</div>
                    <div className="money">
                      {item.scholarship.priceAmount + " บาท"}
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
          <Row className="header-content">ยกเลิกแล้ว</Row>
          <List
            grid={{ gutter: 32, column: 4 }}
            dataSource={donors.filter((e) => {
              return e.state === "cancel";
            })}
            renderItem={(item) => (
              <List.Item>
                <Card
                  bordered={false}
                  cover={
                    <img
                      alt=""
                      src="https://assets.brandinside.asia/uploads/2020/09/New-Project-2.jpg"
                    />
                  }
                >
                  <div className="card-detail">
                    <div>{item.scholarship.name}</div>
                    <div className="detail">{item.scholarship.description}</div>
                    <div className="money">
                      {item.scholarship.priceAmount + " บาท"}
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </Spin>
    </div>
  );
};

export default OfferScholar;
