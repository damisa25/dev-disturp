import React, { useState } from "react";
import "./createOffer.scss";
import "../../index.scss";
import {
  Button,
  Col,
  Input,
  Row,
  Form,
  Checkbox,
  Upload,
  Radio,
  message,
} from "antd";
import MainMenuFund from "../../components/menuTabFund";
import { InboxOutlined } from "@ant-design/icons";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useHistory } from "react-router-dom";

const CreateOffer = () => {
  const [mde, setMde] = useState({ mdeValue: "" });
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const history = useHistory();
  const handleChange = (value: any) => {
    console.log(value);
    setMde({ mdeValue: value });
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
            <Col span={12}>
              <Row>
                <div className="content-detail">
                  <Form.Item name="scholarship_name" label="ชื่อทุน">
                    <Input placeholder="ชื่อทุน" />
                  </Form.Item>
                </div>
              </Row>
              <Row>
                <div className="content-detail">
                  <Form.Item name="short_detail" label="รายละเอียดโดยย่อ">
                    <Input.TextArea placeholder="รายละเอียดโดยย่อ" />
                  </Form.Item>
                </div>
              </Row>

              <Row>
                <div className="content-detail">
                  <Form.Item name="types" label="ประเภททุน">
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
                </div>
              </Row>
            </Col>
            <Col span={12}>
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
                  <p className="ant-upload-text">อัพโหลดภาพหรือวิดีโอ</p>
                </Upload.Dragger>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <div className="content-detail-long">
              <Form.Item name="criteria" label="เกณฑ์">
                <Input.TextArea placeholder="เกณฑ์" />
              </Form.Item>
            </div>
          </Row>
          <Row>
            <div className="content-detail-long">
              <Form.Item name="condition" label="เงื่อนไข">
                <Input.TextArea placeholder="เงื่อนไข" />
              </Form.Item>
            </div>
          </Row>
          <Row>
            <div className="content-detail-long">
              <Form.Item name="details" label="รายละเอียด">
                <SimpleMDE onChange={handleChange} />
              </Form.Item>
            </div>
          </Row>
          <Row justify="start">
            <Col span={4}>
              <Button
                type="primary"
                className="create-btn"
                onClick={() => history.push("/funder/offerScholar")}
              >
                Submit
              </Button>
            </Col>
            <Col span={4}>
              <Button
                className="cancel-btn"
                onClick={() => history.push("/funder/offerScholar")}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateOffer;
