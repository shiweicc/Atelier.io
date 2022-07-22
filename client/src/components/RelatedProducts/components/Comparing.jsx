import React from "react";

class Comparing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProductFeatures: this.props.currentCard.features,
    };
  }

  componentDidMount() {
    // console.log('selectedCard: ', this.props.selectedCard.features[0].feature)
    console.log('currentCard: ', this.props.currentCard.features)
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
          <div className="compare_modal_content">
            <table className="compare_table">
              <tbody>
                <tr>
                  <th>{curProductName}</th>
                  <th></th>
                  <th>{selProductName}</th>
                </tr>

                  {this.state.curProductFeatures.length !== 0
                    ? this.state.curProductFeatures.map((obj, index) => (
                      // console.log('feature: ', obj)
                      <CurProductFeaturesGetter feature={obj.feature} value={obj.value} key={index} />
                    ))
                    : null}

              </tbody>
            </table>
          </div>
          <button className="closeModal_btn" onClick={()=> this.props.closeModal()}>Close</button>
        </div>
      </div>
    )
  }
}

const CurProductFeaturesGetter = (props) => {
  return (
    <tr>
      <td>{props.value}</td>
      <td>
        <em>
        {props.feature}
        </em>
      </td>
      <td>X</td>
    </tr>
  );
};


export default Comparing;

