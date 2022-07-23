import React from "react";

class Comparing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('productFeature: ', this.props.productFeature)
  }

  render() {
    let curProductName = this.props.productFeature.curProductName;
    let selProductName = this.props.productFeature.selProductName;
    let featureArr = this.props.productFeature.feature;

    if (!this.props.showModal) {
      return null;
    }

    return (
      <div className="compare_modal_wrapper">
        <div className="compare_modal">
          <h3> COMPARING </h3>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>{curProductName}</th>
                  <th></th>
                  <th>{selProductName}</th>
                </tr>
                {featureArr.length !== 0
                  ? featureArr.map((info, index) => (
                    <DisplayFeatures
                      feature={info.feature}
                      curValue={info.curValue}
                      selValue={info.selValue}
                      key={index} />
                  ))
                  : null}
              </tbody>
            </table>
          </div>
          <button className="closeModal_btn"
            onClick={()=> this.props.closeModal()}>Close</button>
        </div>
      </div>
    )
  }
}

const DisplayFeatures = (props) => {
  return (
    <tr>
      <td>{props.curValue ? props.curValue : ''}</td>
      <td>
        <em>
        {props.feature}
        </em>
      </td>
      <td>{props.selValue ? props.selValue : ''}</td>
    </tr>
  );
};

export default Comparing;

