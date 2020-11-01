import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import './index.scss';
import '../../index.scss'
import { useParams } from 'react-router-dom';
import MainMenu from '../../components/menuTab/index'
import { Row, Col, Button, Spin } from 'antd';
import { CheckCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons'
import { getScolarshipById } from '../../services/user.service'
import { formattedNumber } from '../../utils/numberFormat'

const input = `
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`yarn start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### \`yarn test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`yarn build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`yarn eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
`

const testChecklists = [
  {
    label: "นักเรียนมัธยมปลาย",
    checked: true,
  },
  {
    label: "GAPX > 2.50",
    checked: true,
  },
  {
    label: "มีหำ",
    checked: false,
  }
]

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
  const [coverUrl, setCoverUrl] = useState('https://www.prachachat.net/wp-content/uploads/2020/01/82416410_2631246836923350_5365054154370711552_n.jpg')
  const [profileUrl, setProfileUrl] = useState('https://assets.brandinside.asia/uploads/2020/09/New-Project-2.jpg')
  const [checklists, setChecklist] = useState(testChecklists)

  useEffect(() => {
    console.log('use efect')
    getScolarshipById(id).then((result) => {
      console.log(result.data)
      setScholarship(result.data)
    }).catch((error) => {
      alert(error)
    })
  }, [])

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
                      <Button type="primary" className="submit-btn" onClick={() => {}}>
                        สมัครทุน
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