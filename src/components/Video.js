import { Component } from 'react'
import { Card } from 'antd'
import plyr from 'plyr'
import PropTypes from 'prop-types'

import 'plyr/dist/plyr.css'
import styles from './Video.module.css'

import { normalize } from '../utils'

class Video extends Component {

  static protoTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      player: null
    }
  }

  componentDidMount() {
    const player = plyr.setup(this._el)[0]
    this.setState({
      player
    })
    player.source({
      type: 'video',
      title: this.props.title,
      sources: [normalize(this.props.url)]
    })
  }

  componentWillUnmount() {
    this.state.player.destroy()
  }

  render() {
    return (
      <Card title={this.props.title} bordered={true} className={styles.card}>
        <video ref={el => this._el = el} />
      </Card>
    )
  }
}

export default Video
