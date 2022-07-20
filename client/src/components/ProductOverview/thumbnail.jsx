import React from 'react';
import $ from 'jquery';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.clickedUp = this.clickedUp.bind(this);
    this.clickedDown = this.clickedDown.bind(this);
    this.clickedThumbnail = this.clickedThumbnail.bind(this);
  }

  clickedUp() {
    let start = this.props.start;
    let end = this.props.end;
    if (start !== 0) {
      this.props.updateThumbnail(start - 1, end - 1)
    }
  }

  clickedDown() {
    let start = this.props.start;
    let end = this.props.end;
    if (end !== this.props.sources.length - 1) {
      this.props.updateThumbnail(start + 1, end + 1)
    }
  }

  clickedThumbnail(e) {
    let start = this.props.start;
    let end = this.props.end;
    let index = parseInt(e.target.getAttribute('index'));
    if (this.props.image !== index) {
      this.props.updateImage(index, start, end);
    }
  }

  componentDidMount () {

  }

  render () {
    let start = this.props.start;
    let end = this.props.end;
    if (this.props.sources.length <= 7) {
      return (
        <div class='POthumbnail'>
          {
            this.props.sources.map((source, index) => {
              if (start + index === this.props.image) {
                return (<img class='POthumbnail-img-selected' index={start + index} src={source['thumbnail_url']} onClick={this.clickedThumbnail}></img>)
              }
              return (<img class='POthumbnail-img' index={start + index} src={source['thumbnail_url']} onClick={this.clickedThumbnail}></img>)
            })
          }
        </div>
      )
    } else {
      return (
        <div class='POthumbnail'>
        {
          this.props.start !== 0 && (<button id='POthumbnail-up' class='POthumbnail-button' onClick={this.clickedUp}>&and;</button>)
        }
        {
          this.props.sources.slice(start, end + 1).map((source, index) => {
            if (start + index === this.props.image) {
              return (<img class='POthumbnail-img-selected' index={start + index} src={source['thumbnail_url']} onClick={this.clickedThumbnail}></img>)
            }
            return (<img class='POthumbnail-img' index={start + index} src={source['thumbnail_url']} onClick={this.clickedThumbnail}></img>)
          })
        }
        {
          this.props.end !== (this.props.sources.length - 1) && (<button id='POthumbnail-down' class='POthumbnail-button' onClick={this.clickedDown}>&or;</button>)
        }
        </div>
      )
    }
  }
}

export default Thumbnail;