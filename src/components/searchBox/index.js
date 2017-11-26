import React from 'react'
import PropTypes from 'prop-types'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      image: false,
      audio: false,
    }
    this.setValue = this.setValue.bind(this)
    this.setTick = this.setTick.bind(this)
  }

  setValue(e) {
    this.setState({searchTerm: e.target.value})
  }

  setTick(name, e) {
    this.setState({[name]: e.target.checked})
  }

  render() {
    return (
      <div className="search_box">
        <h2>{this.props.title}</h2>
        {this.props.loading &&
          <p>loading...</p>
        }
        {!this.props.loading &&
          <div>
            <form>
              <input type="text" name="q" placeholder="Search...." value={this.state.searchTerm} onChange={this.setValue}/>
              <input type="submit" value="Search" onClick={(e) => {
                e.preventDefault()
                this.props.submit({q: this.state.searchTerm, audio: this.state.audio, image: this.state.image})
              }}/>
              <br/>
              <input type="checkbox" name="image" checked={this.state.image} onChange={e => this.setTick('image', e)}/>
              Image
              <input type="checkbox" name="audio" checked={this.state.audio} onChange={e => this.setTick('audio', e)}/>
              Audio
            </form>
            <p className="search_box__error_message">{this.props.errorMessage}</p>
          </div>

        }
      </div>
    )
  }
}

SearchBox.propTypes = {
  title: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,

}
