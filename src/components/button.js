import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
  }

  render() {
    const { text, type, size } = this.props
    return <div className={styles.button + ' ' + styles[type] + ' ' + styles[size]}>{text}</div>
  }
}