import React from 'react'
import PropTypes from 'prop-types'

import { getAssetUrlByType } from '../../utils'

const AssetDetails = ({
  loading, assetId, mediaType, description, assets,
}) => (
  <div className="asset_details">
    {loading &&
    <div>Loading...</div>
        }
    {!loading &&
    <div>
      <h3>NASA ID: {assetId}</h3>
      <strong>Click the asset to download the original asset</strong>
      {mediaType === 'audio' &&
      <div><a href={getAssetUrlByType('128k.mp3', assets)}>Audio Link</a></div>
            }
      <p>{description}</p>
      {mediaType === 'image' &&
      <a href={getAssetUrlByType('orig', assets)}>
        <img src={getAssetUrlByType('small', assets)} alt="nasa" />
      </a>
            }
    </div>
        }
  </div>)

AssetDetails.propTypes = {
  loading: PropTypes.bool,
  assetId: PropTypes.string,
  mediaType: PropTypes.string,
  description: PropTypes.string,
  assets: PropTypes.array,
}

export default AssetDetails
