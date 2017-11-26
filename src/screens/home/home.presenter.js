import React from 'react'

import SearchBox from './../../components/searchBox'
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
    <SearchBox title="NASA Search"
               submit={submit}
               loading={loading}
               errorMessage={errorMessage}
    />
    <ThumbNailGallery thumbNails={thumbNails} />
    <Pagination callBack={paginationCallBack} links={paginationLinks} />
  </div>
)

export default HomePresenter
