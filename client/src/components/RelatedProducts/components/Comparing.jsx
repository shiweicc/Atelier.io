import React from "react";

class Comparing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('selectedCard: ', this.props.selectedCard.features[0].feature)
    console.log('currentCard: ', this.props.currentCard.features[0].feature)
  }

  render() {
    let curProductName = this.props.currentCard.name;
    let selProductName = this.props.selectedCard.name;

    let curFeatureOne = this.props.currentCard.features[0].value;
    let featureOne = this.props.currentCard.features[0].feature;

    let curFeatureTwo = this.props.currentCard.features[1].value;
    let featureTwo = this.props.currentCard.features[1].feature;

    let curFeatureThree = this.props.currentCard.features[2].value;
    let featureThree = this.props.currentCard.features[2].feature;

    // let selFeatureOneFunc = () => {this.props.selectedCard.features[0].value ? 'hi' : 'X'};
    // let selFeature = () => {this.props.selectedCard.features[0].feature ? 'what' : 'X'};

    // let selFeatureOne = selFeatureOneFunc();

    if (!this.props.showModal) {
      return null;
    }

    return (
      <div className="compare_modal_wrapper">
        <div className="compare_modal">
          <h3> COMPARING </h3>
          <div className="compare_modal_content" onClick={e => e.stopPropagation()}>
            <table className="compare_table">
              <tr className="compare_column">
                <th>{curProductName}</th>
                <th></th>
                <th>{selProductName}</th>
              </tr>
              <tr>
                <td>{curFeatureOne}</td>
                <td>{featureOne}</td>
                <td></td>
              </tr>
              <tr>
                <td>{curFeatureTwo}</td>
                <td>{featureTwo}</td>
                <td></td>
              </tr>
              <tr>
                <td>{curFeatureThree}</td>
                <td>{featureThree}</td>
                <td></td>
              </tr>
              <tr>
                {/* <td>{selFeatureOne}</td> */}
                {/* <td>{selFeature}</td> */}
                <td></td>
              </tr>
            </table>
          </div>
          <button className="closeModal_btn" onClick={()=> this.props.closeModal()}>Close</button>
        </div>
      </div>
    )
  }
}

export default Comparing;

