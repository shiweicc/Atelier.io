import React from 'react';
import $ from 'jquery';

class Style extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    var position = $(".POstyle").offset();
    var parentPosition = $("#POright").offset();
    $('.POcheckmark').css({ position:'absolute', top:position.top - 40, left: position.left - parentPosition.left + 30});
  }

  render () {
    return (
      <>
        <ul id='POstyles'>
          {
            this.props.styles.map((style, i) => {
              return (<li>
                {style.photos[0]['thumbnail_url']
                  ? <img class='POstyle' src={style.photos[0]['thumbnail_url']} height='50px' width='50px' onClick={this.props.handleClick} data-styleid={i}></img>
                  : <img class='POstyle' src={`https://source.unsplash.com/50x50/?${this.props.name}`} onClick={this.props.handleClick} data-styleid={i}></img>
                }
              </li>)
            })
          }
        </ul>
        <p class='POcheckmark'>&#10004;</p>
      </>
    )
  }
}

export default Style;