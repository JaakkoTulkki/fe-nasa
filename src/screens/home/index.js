import React from 'react'

import SearchBox from './../../components/searchBox'
import ThumbNailGallery from './../../components/thumbNailGallery'
import Pagination from './../../components/pagination'
import {getRequest} from "../../utils";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.update = this.update.bind(this)
    this.state = {
      loading: false,
      errorMessage: '',
      thumbNails: [],
      links: [],
    }
  }

  async submitForm({q, image=false, audio=false}) {
    this.setState({loading: true})
    let url = `https://images-api.nasa.gov/search?q=${q}`
    let mediaTypes = []
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

    const response = await getRequest(url)
    console.log('response', response)

    this.setState({loading: false})
    this.setState({thumbNails: response.collection.items})
    this.setState({links: response.collection.links})
  }

  async update(url) {
    this.setState({loading: true})
    const response = await getRequest(url)

    this.setState({loading: false})
    this.setState({thumbNails: response.collection.items})
    this.setState({links: response.collection.links})
  }

  render() {
    return (
      <div>
        <SearchBox title="NASA Search"
                   submit={this.submitForm}
                   loading={this.state.loading}
                   errorMessage={this.state.errorMessage}
        />
        <ThumbNailGallery thumbNails={this.state.thumbNails} />
        <Pagination callBack={this.update} links={this.state.links} />
      </div>
    )
  }
}
