import React from 'react'

import HomePresenter from './home.presenter'
import { getRequest } from '../../utils'


const constructUrl = ({ q, image = false, audio = false }) => {
  let url = `https://images-api.nasa.gov/search?q=${q}`
  const mediaTypes = []
  if (image) {
    mediaTypes.push('image')
  }
  if (audio) {
    mediaTypes.push('audio')
  }
  if (mediaTypes.length > 0) {
    url += '&media_type='
    url += mediaTypes.join(',')
  }
  return url
}

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.requestAssets = this.requestAssets.bind(this)
    this.state = {
      loading: false,
      errorMessage: '',
      thumbNails: [],
      links: [],
    }
  }

  async submitForm(searchParams) {
    const url = constructUrl(searchParams)
    await this.requestAssets(url)
  }

  async requestAssets(url) {
    this.setState({ loading: true })
    const response = await getRequest(url)

    this.setState({ loading: false })
    this.setState({ thumbNails: response.collection.items })
    this.setState({ links: response.collection.links })
  }

  render() {
    return (<HomePresenter
      submit={this.submitForm}
      loading={this.state.loading}
      errorMessage={this.state.errorMessage}
      thumbNails={this.state.thumbNails}
      paginationCallBack={this.requestAssets}
      paginationLinks={this.state.links}
    />)
  }
}
