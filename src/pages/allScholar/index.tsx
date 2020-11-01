import React, { useState } from "react";
import "./index.scss";
import "../../index.scss";
import MainMenu from "../../components/menuTab/index";
import { Row, Checkbox, Col, Card, List } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchImage from "../../assets/mediamodifier_cropped_image-3.png";
import Search from "antd/lib/input/Search";

const { Meta } = Card;

const data1 = [
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
];

const data2 = [
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
];

const AllScholar = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} className="user-icon" />;
  const onChangeScholar = (checkedValues: any) => {
    console.log("checked = ", checkedValues);
  };
  const onChangeMoney = (checkedValues: any) => {
    console.log("checked = ", checkedValues);
  };
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = (event: any) => {
    setSearchValue(event);
  };

  const suggestScholar = (
    <>
      <Row>ทุนที่เหมาะสำหรับคุณ</Row>
      <List
        grid={{ gutter: 32, column: 3 }}
        dataSource={data1}
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
  const allScholar = (
    <>
      <Row>{!searchValue ? "ทุนที่น่าสนใจ" : "ผลลัพธ์การค้นหา"}</Row>
      <List
        grid={{ gutter: 32, column: 3 }}
        dataSource={data2.filter((data) => {
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
    <div className="all-scholar">
      <MainMenu />
      <Row justify="space-between" className="big-search-box">
        <Col>
          <div className="sub-search-box1">
            <Row>ทุนการศึกษาทั้งหมด</Row>
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
        <div className="filter-box">
          <Row>ประเภททุน</Row>
          <Checkbox.Group onChange={onChangeScholar}>
            <Row>
              <Checkbox value="1">ทุนเรียนดี</Checkbox>
            </Row>
            <Row>
              <Checkbox value="2">ทุนเฉพาะทาง</Checkbox>
            </Row>
            <Row>
              <Checkbox value="3">ทุนผู้ขาดแคลน</Checkbox>
            </Row>
            <Row>
              <Checkbox value="4">ทุนผู้ด้อยโอกาส</Checkbox>
            </Row>
            <Row>
              <Checkbox value="5">ทุนกิจกรรม</Checkbox>
            </Row>
          </Checkbox.Group>
          <Row className="money-header">จำนวนเงิน</Row>
          <Checkbox.Group onChange={onChangeMoney}>
            <Row>
              <Checkbox value="1"> {"<"} 5000 บาท</Checkbox>
            </Row>
            <Row>
              <Checkbox value="2">5000 - 15000 บาท</Checkbox>
            </Row>
            <Row>
              <Checkbox value="3">15000 - 25000 บาท</Checkbox>
            </Row>
            <Row>
              <Checkbox value="4">25000 - 35000 บาท</Checkbox>
            </Row>
            <Row>
              <Checkbox value="5">35000 - 45000 บาท</Checkbox>
            </Row>
            <Row>
              <Checkbox value="6">{">"} 50000 บาท</Checkbox>
            </Row>
          </Checkbox.Group>
        </div>
        <div className="card-box">
          {!searchValue ? (
            <>
              {suggestScholar} {allScholar}
            </>
          ) : (
            allScholar
          )}
        </div>
      </div>
    </div>
  );
};

export default AllScholar;
