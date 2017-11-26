import React from 'react'
import PropTypes from 'prop-types'

const getLink = (rel, links) => links.filter(link => link.rel === rel)[0]

const Previous = ({ link, callBack }) => (link ? <a className="prev" href="#" onClick={() => callBack(link.href)}>&#8592;Previous</a> : null)

const Next = ({ link, callBack }) => (link ? <a className="next" href="#" onClick={() => callBack(link.href)}>Next&#8594;</a> : null)

Previous.propTypes = {
  link: PropTypes.object,
  callBack: PropTypes.func,
}

Next.propTypes = {
  link: PropTypes.object,
  callBack: PropTypes.func,
}

const Pagination = ({ links = [], callBack }) => (
  <div className="pagination">
    <Previous link={getLink('prev', links)} callBack={callBack} />
    <Next link={getLink('next', links)} callBack={callBack} />
  </div>)

Pagination.propTypes = {
  links: PropTypes.array,
  callBack: PropTypes.func,
}

export default Pagination
