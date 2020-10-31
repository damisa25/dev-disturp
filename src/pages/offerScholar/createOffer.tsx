import React from "react";
import "./createOffer.scss";
import "../../index.scss";
import { Button, Col, Input, Row, Form, Checkbox, Upload, Radio } from "antd";
import MainMenuFund from "../../components/menuTabFund";
import { InboxOutlined } from "@ant-design/icons";

const CreateOffer = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className="create-offer">
      <MainMenuFund />
      <div className="content">
        <Row>สร้างข้อเสนอทุน</Row>
        <Form layout="vertical" onFinish={onFinish}>
          <Row justify="space-between">
            <Col>
              <Row>
                ชื่อทุน
                <Form.Item name="scholarship_name">
                  <Input placeholder="ชื่อทุน" />
                </Form.Item>
              </Row>
              <Row>
                รายละเอียดโดยย่อ
                <Form.Item name="short_detail">
                  <Input placeholder="รายละเอียดโดยย่อ" />
                </Form.Item>
              </Row>

              <Row>
                ประเภททุน
                <Form.Item name="types">
                  <Radio.Group>
                    <Row>
                      <Radio value="1">ทุนเรียนดี</Radio>
                    </Row>
                    <Row>
                      <Radio value="2">ทุนเฉพาะทาง</Radio>
                    </Row>
                    <Row>
                      <Radio value="3">ทุนผู้ขาดแคลน</Radio>
                    </Row>
                    <Row>
                      <Radio value="4">ทุนผู้ด้อยโอกาส</Radio>
                    </Row>
                    <Row>
                      <Radio value="5">ทุนกิจกรรม</Radio>
                    </Row>
                  </Radio.Group>
                </Form.Item>
              </Row>
              <Row>
                เกณฑ์
                <Form.Item name="criteria">
                  <Input placeholder="เกณฑ์" />
                </Form.Item>
              </Row>
              <Row>
                เงื่อนไข
                <Form.Item name="condition">
                  <Input placeholder="เงื่อนไข" />
                </Form.Item>
              </Row>
              <Row>
                รายละเอียด
                <Form.Item name="details">
                  <Input placeholder="รายละเอียด" />
                </Form.Item>
              </Row>
            </Col>
            <Col>
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="primary">Submit</Button>
            </Col>
            <Col>
              <Button>Cancel</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateOffer;
