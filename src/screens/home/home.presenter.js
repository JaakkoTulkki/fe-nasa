import React from 'react'
import PropTypes from 'prop-types'

import SearchBox from './homeSearchBox'
import ThumbNailGallery from './../../components/thumbNailGallery'
import Pagination from './../../components/pagination'

const HomePresenter = ({
  submit,
  loading,
  errorMessage,
  thumbNails,
  paginationCallBack,
  paginationLinks,
}) => (
  <div>
    <SearchBox
      title=""
      submit={submit}
      loading={loading}
      errorMessage={errorMessage}
    />
    <ThumbNailGallery thumbNails={thumbNails} />
    <Pagination callBack={paginationCallBack} links={paginationLinks} />
  </div>
)

HomePresenter.propTypes = {
  submit: PropTypes.func,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  thumbNails: PropTypes.array,
  paginationCallBack: PropTypes.func,
  paginationLinks: PropTypes.array,
}

export default HomePresenter
