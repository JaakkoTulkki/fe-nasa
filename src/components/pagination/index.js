import React from 'react'

const getLink = (rel, links) => links.filter(link => link.rel === rel)[0]

const Previous = ({ links, callBack }) => {
  const link = getLink('prev', links)
  return link ? <a className="prev" href="#" onClick={() => callBack(link.href)}>&#8592;Previous</a> : null
}

const Next = ({ links, callBack }) => {
  const link = getLink('next', links)
  return link ? <a className="next" href="#" onClick={() => callBack(link.href)}>Next&#8594;</a> : null
}

const Pagination = ({ links = [], callBack }) => (
  <div className="pagination">
    <Previous links={links} callBack={callBack} />
    <Next links={links} callBack={callBack} />
  </div>)

export default Pagination
