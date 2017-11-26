import React from 'react'
import PropTypes from 'prop-types'

import SearchBoxPresenter from '../../../components/searchBox'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      image: false,
      audio: false,
    }
    this.setValue = this.setValue.bind(this)
    this.setTick = this.setTick.bind(this)
    this.submit = this.submit.bind(this)
  }

  setValue(e) {
    this.setState({ searchTerm: e.target.value })
  }

  setTick(name, e) {
    this.setState({[name]: e.target.checked })
  }

  submit(e) {
    e.preventDefault()
    this.props.submit({
      q: this.state.searchTerm,
      audio: this.state.audio,
      image: this.state.image,
    })
  }

  render() {
    return <SearchBoxPresenter
      loading={this.props.loading}
      title={this.props.title}
      errorMessage={this.props.errorMessage}
      searchTerm={this.state.searchTerm}
      setValue={this.setValue}
      setTick={this.setTick}
      submit={this.submit}
      image={this.state.image}
      audio={this.state.audio}
    />
  }
}

SearchBox.propTypes = {
  title: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
}
