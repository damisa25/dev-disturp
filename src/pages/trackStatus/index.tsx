import React, { useState, useEffect } from "react";
import "./index.scss";
import "../../index.scss";
import MainMenu from "../../components/menuTab/index";
import { Row, Card, List, Button, Col, Spin } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchImage from "../../assets/mediamodifier_cropped_image-3.png";
import Search from "antd/lib/input/Search";
import { getScholarByStudentID } from "../../services/user.service";
import moment from "moment";

interface IAllScholars {
  name: String;
  description: String;
  priceAmount: Number;
  _id: String;
}
interface IStudentScholars {
  scholarship: IAllScholars;
  createdDate: Date;
  state: String;
  note: String;
}

const TrackStatus = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} className="user-icon" />;
  const [searchValue, setSearchValue] = useState<string>("");
  const [scholars, setScholars] = useState<IStudentScholars[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const handleSearch = (event: any) => {
    setSearchValue(event);
  };

  const allScholar = (
    <>
      <Row>{!searchValue ? "ทุนที่น่าสนใจ" : "ผลลัพธ์การค้นหา"}</Row>
      <List
        grid={{ gutter: 32, column: 4 }}
        dataSource={scholars.filter((data) => {
          if (searchValue === "") {
            return data;
          } else if (
            data.scholarship.name
              .toLowerCase()
              .includes(searchValue.toLowerCase())
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
    </>
  );
  const studentSc = async () => {
    try {
      const res = await getScholarByStudentID("5f9db92b8844700abddb3c0d"); //has 1 user for now
      setScholars(res.data);
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
    <div className="track-status">
      <Spin spinning={loading}>
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
                dataSource={scholars.filter((e) => {
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
                      {item.note ? null : <div className="badge"></div>}
                      <div className="card-detail">
                        <div>{item.scholarship.name}</div>
                        <div className="detail">
                          {item.scholarship.description}
                        </div>
                        <div className="money">
                          {item.scholarship.priceAmount + " บาท"}
                        </div>
                        <div className="detail">
                          {moment(item.createdDate).format("DD/MM/YYYY")}
                        </div>
                      </div>
                      <div className="button-card">
                        <Button
                          className={
                            item.note
                              ? "button-card wait"
                              : "button-card success"
                          }
                          disabled={item.note ? true : false}
                        >
                          {item.note ? "กำลังพิจารณา" : "ต้องการการติดต่อ"}
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
                dataSource={scholars.filter((e) => {
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
                        <div className="detail">
                          {item.scholarship.description}
                        </div>
                        <div className="money">
                          {item.scholarship.priceAmount + " บาท"}
                        </div>
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
              <Row className="header-content">ไม่ผ่านการพิจารณา</Row>
              <List
                grid={{ gutter: 32, column: 4 }}
                dataSource={scholars.filter((e) => {
                  return e.state === "unsuccess";
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
                        <div className="detail">
                          {item.scholarship.description}
                        </div>
                        <div className="money">
                          {item.scholarship.priceAmount + " บาท"}
                        </div>
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
      </Spin>
    </div>
  );
};

export default TrackStatus;
