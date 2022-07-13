import React from 'react';
import $ from 'jquery';
// var Style = (props) => {
//   return (
//     <ul id='POstyles'>
//       {
//         props.styles.map((style, i) => {
//           return (<li>
//             {style.photos[0]['thumbnail_url']
//               ? <img class='POstyle' src={style.photos[0]['thumbnail_url']} height='50px' width='50px' onClick={props.handleClick} styleid={i}></img>
//               : <img class='POstyle' src={`https://source.unsplash.com/50x50/?${props.name}`} onClick={props.handleClick} styleid={i}></img>
//             }
//             <img class='checkmark' height='20px' width= '20px' src='data:image/png;base64,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'></img>
//           </li>)
//         })
//       }
//     </ul>
//   )
// }

class Style extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    var position = $(".POstyle").offset();
    $('.POcheckmark').css({ position:'absolute', top:position.top - 30, left: position.left + 35});
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