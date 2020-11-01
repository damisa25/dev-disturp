import React, { useEffect, useState } from "react";
import "./index.scss";
import "../../index.scss";
import MainMenu from "../../components/menuTab/index";
import { Row, Checkbox, Col, Card, List, Spin } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchImage from "../../assets/mediamodifier_cropped_image-3.png";
import Search from "antd/lib/input/Search";
import { getAllScholars } from "../../services/user.service";
import { useHistory } from "react-router-dom";
interface IAllScholars {
  name: String;
  description: String;
  priceAmount: Number;
  _id: String;
}

const AllScholar = () => {
  const history = useHistory();
  const searchIcon = <FontAwesomeIcon icon={faSearch} className="user-icon" />;
  const [scholars, setScholars] = useState<IAllScholars[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  const allSc = async () => {
    try {
      const res = await getAllScholars();
      setScholars(res.data);
      if (res) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allSc();
  }, []);

  const suggestScholar = (
    <>
      <Row>ทุนที่เหมาะสำหรับคุณ</Row>
      <List
        grid={{ gutter: 32, column: 3 }}
        dataSource={scholars.slice(0, 3)}
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
              onClick={() => history.push(`/sholarships/${item._id}`)}
            >
              <div className="card-detail">
                <div>{item.name}</div>
                <div className="detail">{item.description}</div>
                <div className="money">{item.priceAmount + " บาท"}</div>
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
        dataSource={scholars.filter((data) => {
          if (searchValue === "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return data;
          }
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
              onClick={() => history.push(`/sholarships/${item._id}`)}
            >
              <div className="card-detail">
                <div>{item.name}</div>
                <div className="detail">{item.description}</div>
                <div className="money">{item.priceAmount + " บาท"}</div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </>
  );

  return (
    <div className="all-scholar">
      <Spin spinning={loading}>
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
      </Spin>
    </div>
  );
};

export default AllScholar;
