import { Component } from 'react'
import { Row, Col, Layout, Icon } from 'antd'
import styles from './App.module.css'

import Video from './components/Video'
import videos from './mock'

const { Header, Content } = Layout

class App extends Component {
  render() {
    return (
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 12, offset: 6 }}>
          <Layout>
            <Header className={styles.header}><Icon type="rocket" /> DC</Header>
            <Content>
              {videos.map(v => {
                return <Video title={v.title} url={v.url} key={v.url}/>
              })}
            </Content>
          </Layout>
        </Col>
      </Row>
    )
  }
}

export default App
