import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getImageUrlByType } from "../../utils";


const ThumbNail = ({data}) => {
  const mediaType = data.data[0].media_type
  if(mediaType === 'image' || mediaType === 'audio' ) {
    return <div className="thumbnail_gallery__image">
      {mediaType === 'image' &&
        <Link to={`/${data.data[0].nasa_id}`}><img src={getImageUrlByType('thumb', data.links)}/></Link>
      }
      {mediaType === 'audio' &&
        <Link to={`/${data.data[0].nasa_id}`}>Audio</Link>
      }
    </div>
  }
  return null
}

const ThumbNailGallery = ({thumbNails=[]}) => {
  return <div className="thumbnail_gallery">
          {thumbNails.map(thumbNail => {
            return <ThumbNail key={`${thumbNail.href}`} data={thumbNail} />
          })}
        </div>
}

ThumbNailGallery.propTypes = {
  thumbNails: PropTypes.array,
}

export default ThumbNailGallery
