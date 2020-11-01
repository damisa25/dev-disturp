import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import './index.scss';
import '../../index.scss'
import { useParams } from 'react-router-dom';
import MainMenu from '../../components/menuTab/index'
import { Row, Col, Button, Spin, notification } from 'antd';
import { CheckCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons'
import { getScolarshipById, postSubmitApplication, getScholarByStudentID } from '../../services/user.service'
import { formattedNumber } from '../../utils/numberFormat'
import { useHistory } from "react-router-dom";


const studentId = "5f9db92b8844700abddb3c0d"

interface IScholarship {
  _id: string
  name: string
    donor: {
      _id: string
      name: string
      email: string
      address: string
      phoneNumber: string
      isPersonal: boolean
      career: string
      position: string
      isCompany: boolean
      field: string
    }
    type: string
    description: string
    fullDescription: string
    objective: string
    educationLevel: string
    priceAmount: number
    scholarshipAmount: number
    isConditional: boolean
    isGiveAway: boolean
    isFetured: boolean
    condition: string
    criterias: [string]
}

const ScholarshipDetail = (props: any) => {

  const { id }: any = useParams()
  const [scholarship, setScholarship] = useState<IScholarship>(Object)
  const [applications, setApplications] = useState([])
  const [coverUrl, setCoverUrl] = useState('https://www.prachachat.net/wp-content/uploads/2020/01/82416410_2631246836923350_5365054154370711552_n.jpg')
  const [profileUrl, setProfileUrl] = useState('https://assets.brandinside.asia/uploads/2020/09/New-Project-2.jpg')
  const history = useHistory()

  useEffect(() => {
    console.log('use efect')
    getScolarshipById(id).then((result) => {
      setScholarship(result.data)
      getScholarByStudentID(studentId).then((result) => {
        console.log(result.data)
        setApplications(result.data)
      }).catch((error) => {
        alert(error)
      })
    }).catch((error) => {
      alert(error)
    })
  }, [])

  const submitApplication = () => {
    postSubmitApplication(studentId, id).then((result) => {
      if (result.status === 200) {
        notification["success"]({
          message: "คุณได้สมัครทุนนี้เรียบร้อยแล้ว",
        })
        history.push('/student/trackStatus')
      } else {
        notification["error"]({
          message: "เกิดข้อผิดพลาดในการสมัครทุน",
        })
      }
    }).catch((error) => {
      notification["error"]({
        message: error,
      })
    })
  }

  const isSumbmitted = applications.map((e: any) => e.scholarship._id).includes(id)

  const coverBackground = (
    <div className="cover-bg">
      <img src={coverUrl} />
    </div>
  )
  
  return (
    <div className="sch-detail">
      <MainMenu />
      {coverBackground}
      <div className="container">
          <div className="content">
            <div className="donor-profile">
              <img src={profileUrl}/>
            </div>
            <Spin spinning={!scholarship}>
              { scholarship.donor &&
                <>
                  <div className="title">
                    <h1>{scholarship.name}</h1>
                    <p>{scholarship.donor.name}</p>
                  </div>
                  <Row>
                    <Col span={8} style={{padding: '10px 40px 20px 0px'}}>
                      <div className="side-card">
                        <h3>ประเภท</h3>
                        <h2>ทุนเฉพาะทาง</h2>
                        <p> - ทุนเต็มจำนวน<br/> - ค่าใช้จ่ายรายเดือน</p>
                      </div>
                      <div className="side-card" style={{paddingBottom: '5px', paddingRight: '24px'}}>
                        <Row justify="space-between">
                          <Col>
                            <h3>จำนวนเงิน</h3>
                            <h2>{formattedNumber(scholarship.priceAmount)} บาท</h2>
                          </Col>
                          <Col>
                            <h3>จำนวน</h3>
                            <h2>{scholarship.scholarshipAmount} ทุน</h2>
                          </Col>
                        </Row>
                      </div>
                      <div className="side-card">
                        <h2>เกณฑ์การให้ทุน</h2>
                        {scholarship.criterias.map((value, index) => <div className="checklist">{index !== 2 ? <CheckCircleTwoTone twoToneColor="#00BB34"/> : <MinusCircleTwoTone twoToneColor="#eb2f96"/>}&nbsp;&nbsp;&nbsp;{value}</div> )}
                      </div>
                      {scholarship.condition && <div className="side-card">
                        <h2>เงื่อนไขการใช้ทุน</h2>
                        <p>{scholarship.condition}</p>
                      </div>}
                      <div className="side-card">
                        <h2>ติดต่อ</h2>
                        <p>{scholarship.donor.address}<br/>{scholarship.donor.phoneNumber}<br/>{scholarship.donor.email}</p>
                      </div>
                    </Col>
                    <Col span={16} style={{padding: '0px 30px 0px 15px'}}>
                      <ReactMarkdown source={scholarship.fullDescription} />
                      <Button disabled={isSumbmitted ? true : false} type="primary" className={isSumbmitted ? 'btn disabled' : 'btn enabled'} onClick={submitApplication}>
                        {isSumbmitted ? "คุณได้สมัครทุนนี้แล้ว" : "สมัครทุน"}
                      </Button>
                    </Col>
                  </Row>
                </>
              }
            </Spin>
          </div>
      </div>
    </div>
  )
}

export default ScholarshipDetail