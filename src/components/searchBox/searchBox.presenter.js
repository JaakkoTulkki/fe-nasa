import React from 'react'
import PropTypes from 'prop-types'


const SearchBox = ({
  loading, title, errorMessage, searchTerm, setValue, submit, setTick, image, audio,
}) => (
  <div className="search_box">
    <h2>{title}</h2>
    {loading &&
    <p>loading...</p>
          }
    {!loading &&
    <div>
      <form>
        <input
          type="text"
          name="q"
          placeholder="Search...."
          value={searchTerm}
          onChange={setValue}
        />
        <input
          type="submit"
          value="Search"
          onClick={e => submit(e)}
        />
        <br />
        <input type="checkbox" name="image" checked={image} onChange={e => setTick('image', e)} />
                Image
        <input type="checkbox" name="audio" checked={audio} onChange={e => setTick('audio', e)} />
                Audio
      </form>
      <p className="search_box__error_message">{errorMessage}</p>
    </div>
    }
  </div>)

SearchBox.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  searchTerm: PropTypes.string,
  setValue: PropTypes.func,
  submit: PropTypes.func,
  setTick: PropTypes.func,
  image: PropTypes.bool,
  audio: PropTypes.bool,
}

export default SearchBox
