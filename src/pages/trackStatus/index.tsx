import React, { useState } from "react";
import "./index.scss";
import "../../index.scss";
import MainMenu from "../../components/menuTab/index";
import { Row, Card, List, Button, Col } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchImage from "../../assets/mediamodifier_cropped_image-3.png";
import Search from "antd/lib/input/Search";

const waiting = [
  {
    title: "ทุนโอ",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
    date: "13 ตุลาคม 2563",
    status: "wait",
  },
  {
    title: "ทุนโอ2",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
    date: "13 ตุลาคม 2563",
    status: "success",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
    date: "13 ตุลาคม 2563",
    status: "success",
  },
  {
    title: "ทุนโอ3",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    des:
      "รายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิรายละเอียด อิอิอิอิอิ",
    money: "10,000",
    date: "13 ตุลาคม 2563",
    status: "success",
  },
];

const failed = [
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

const data = [
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

const TrackStatus = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} className="user-icon" />;
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = (event: any) => {
    setSearchValue(event);
  };

  const allScholar = (
    <>
      <Row>{!searchValue ? "ทุนที่น่าสนใจ" : "ผลลัพธ์การค้นหา"}</Row>
      <List
        grid={{ gutter: 32, column: 4 }}
        dataSource={data.filter((data) => {
          if (searchValue === "") {
            return data;
          } else if (
            data.title.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return data;
          }
        })}
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
    </>
  );

  return (
    <div className="track-status">
      <MainMenu />
      <Row justify="space-between" className="big-search-box">
        <Col>
          <div className="sub-search-box1">
            <Row>ติดตามสถานะ</Row>
            <Row>
              <Search
                placeholder="ค้นหา..."
                prefix={searchIcon}
                onSearch={handleSearch}
                allowClear
              />
            </Row>
          </div>
        </Col>
        <Col>
          <div className="sub-search-box2">
            <img src={searchImage} alt="" className="box2" />
          </div>
        </Col>
      </Row>
      <div className="content">
        {!searchValue ? (
          <>
            <Row className="header-content">กำลังพิจารณา</Row>
            <List
              grid={{ gutter: 32, column: 4 }}
              dataSource={waiting}
              renderItem={(item) => (
                <List.Item>
                  {/* <Badge size="default" dot={item.status === 'success'? false : true} color="#fc7864"> */}
                  <Card bordered={false} cover={<img alt="" src={item.img} />}>
                    {item.status === "success" ? null : (
                      <div className="badge"></div>
                    )}
                    <div className="card-detail">
                      <div>{item.title}</div>
                      <div className="detail">{item.des}</div>
                      <div className="money">{item.money + " บาท"}</div>
                      <div className="detail">{item.date}</div>
                    </div>
                    <div className="button-card">
                      <Button
                        className={
                          item.status === "success"
                            ? "button-card wait"
                            : "button-card success"
                        }
                        disabled={item.status === "success" ? true : false}
                      >
                        {item.status === "success"
                          ? "กำลังพิจารณา"
                          : "ต้องการการติดต่อ"}
                      </Button>
                    </div>
                  </Card>
                  {/* </Badge> */}
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
            <Row className="header-content">ไม่ผ่านการพิจารณา</Row>
            <List
              grid={{ gutter: 32, column: 4 }}
              dataSource={failed}
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
          </>
        ) : (
          allScholar
        )}
      </div>
    </div>
  );
};

export default TrackStatus;
