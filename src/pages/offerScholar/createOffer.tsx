import React, { useEffect, useState } from "react";
import "./createOffer.scss";
import "../../index.scss";
import {
  Button,
  Col,
  Input,
  Row,
  Form,
  Upload,
  Radio,
  InputNumber,
  notification,
} from "antd";
import MainMenuFund from "../../components/menuTabFund";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useHistory } from "react-router-dom";
import { postOfferScholar } from "../../services/user.service";

const CreateOffer = () => {
  const [mde, setMde] = useState({ mdeValue: "" });
  const history = useHistory();
  const openNotificationSuccess = () => {
    notification["success"]({
      message: "สร้างข้อเสนอทุนสำเร็จ",
    });
  };
  const openNotificationFail = () => {
    notification["error"]({
      message: "สร้างข้อเสนอทุนไม่สำเร็จ",
    });
  };
  const onFinish = (values: any) => {
    values.criterias = [values.criterias1].concat(values.criteriasN);
    console.log("Success:", values);
    postOfferScholar(values)
      .then(() => {
        openNotificationSuccess();
        history.push("/funder/offerScholar");
      })
      .catch(() => {
        openNotificationFail();
      });
  };

  const handleChange = (value: any) => {
    setMde({ mdeValue: value });
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
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
                  <Form.Item name="name" label="ชื่อทุน">
                    <Input placeholder="ชื่อทุน" />
                  </Form.Item>
                </div>
              </Row>
              <Row>
                <div className="content-detail">
                  <Form.Item name="description" label="รายละเอียดโดยย่อ">
                    <Input.TextArea placeholder="รายละเอียดโดยย่อ" />
                  </Form.Item>
                </div>
              </Row>
              <Row>
                <Col>
                  <Form.Item name="priceAmount" label="จำนวนเงิน">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={4}></Col>
                <Col>
                  <Form.Item name="scholarshipAmount" label="จำนวนทุน">
                    <InputNumber />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <div className="content-detail">
                  <Form.Item name="type" label="ประเภททุน">
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
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">อัพโหลดภาพหรือวิดีโอ</p>
              </Upload.Dragger>
            </Col>
          </Row>
          <Row>
            <div className="content-detail-fixed">
              <Form.Item name="criterias1" label="เกณฑ์">
                <Input placeholder="เกณฑ์" style={{ width: "300px" }} />
              </Form.Item>

              <Form.List name="criteriasN">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field) => (
                      <Form.Item
                        {...formItemLayout}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          noStyle
                        >
                          <Input
                            placeholder="เกณฑ์"
                            style={{ width: "300px" }}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
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
              <Form.Item name="fullDescription" label="รายละเอียด">
                <SimpleMDE className="simple-detail" onChange={handleChange} />
              </Form.Item>
            </div>
          </Row>
          <Row justify="start">
            <Col>
              <Form.Item>
                <Button
                  type="primary"
                  className="create-btn"
                  htmlType="submit"
                  //onClick={() => history.push("/funder/offerScholar")}
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col>
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
