import React from 'react'
import PropTypes from 'prop-types'
import AssetDetailsPresenter from './assetDetails.presenter'

import { getRequest } from '../../utils'

const getItemMatchingNasaId = (nasaId, items) => items.filter(item => item.data[0]
  .nasa_id === nasaId)[0]

class AssetDetails extends React.Component {
  constructor(props) {
    super(props)
    this.getAssets = this.getAssets.bind(this)
    this.getDescriptionAndMediaType = this.getDescriptionAndMediaType.bind(this)
    this.setLoading = this.setLoading.bind(this)

    this.state = {
      assets: [],
      loading: false,
      description: null,
      nasaId: props.match.params.id,
      mediaType: null,
    }
  }

  async componentDidMount() {
    this.setLoading(true)
    await Promise.all([this.getAssets(), this.getDescriptionAndMediaType()])
    this.setLoading(false)
  }

  setLoading(loading) {
    this.setState({ loading })
  }

  async getAssets() {
    const response = await getRequest(`https://images-api.nasa.gov/asset/${this.state.nasaId}`)
    this.setState({ assets: response.collection.items })
  }

  async getDescriptionAndMediaType() {
    // unfortunately the "/asset" endpoint does not give us the the description
    const nasaIdResponse = await getRequest(`https://images-api.nasa.gov/search?nasa_id=${this.state.nasaId}`)
    const nasaIdResponseItem =
      getItemMatchingNasaId(this.state.nasaId, nasaIdResponse.collection.items)
    this.setState({ description: nasaIdResponseItem.data[0].description })
    this.setState({ mediaType: nasaIdResponseItem.data[0].media_type })
  }

  render() {
    return (<AssetDetailsPresenter
      loading={this.state.loading}
      assetId={this.props.match.params.id}
      mediaType={this.state.mediaType}
      description={this.state.description}
      assets={this.state.assets}

    />)
  }
}

AssetDetails.propTypes = {
  match: PropTypes.object,
}

export default AssetDetails
