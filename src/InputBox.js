import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Input = styled.input`
  justify-content: space-between;
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
`

class InputBox extends Component {
  render () {
    return (
      <Input
        type={this.props.type}
        onKeyDown={this.props.handleKeyDown}
        onChange={this.props.handleChange}
        onFocus={this.props.handleFocus}
        maxLength='1'
        name={this.props.name}
        innerRef={this.props.inputRef}
      />
    )
  }
}

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleKeyDown: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  inputRef: PropTypes.func
}

export default InputBox
