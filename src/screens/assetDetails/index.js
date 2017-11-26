import React from 'react'
import { getRequest, getAssetUrlByType } from '../../utils'


const getItemMatchingNasaId = (nasaId, items) => items.filter(item => item.data[0].nasa_id === nasaId)[0]

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
    const nasaIdResponseItem = getItemMatchingNasaId(this.state.nasaId, nasaIdResponse.collection.items)
    this.setState({ description: nasaIdResponseItem.data[0].description })
    this.setState({ mediaType: nasaIdResponseItem.data[0].media_type })
  }


  render() {
    return (<div>
      {this.state.loading &&
        <div>Loading...</div>
      }
      {!this.state.loading &&
        <div>
          <h3>NASA ID: {this.props.match.params.id}</h3>
          <strong>Click the asset to download the original asset</strong>
          {this.state.mediaType === 'audio' &&
            <div><a href={getAssetUrlByType('128k.mp3', this.state.assets)}>Audio Link</a></div>
          }
          <p>{this.state.description}</p>
          {this.state.mediaType === 'image' &&
            <a href={getAssetUrlByType('orig', this.state.assets)}>
              <img src={getAssetUrlByType('small', this.state.assets)} alt="nasa" />
            </a>
          }
        </div>
      }
    </div>)
  }
}

export default AssetDetails
