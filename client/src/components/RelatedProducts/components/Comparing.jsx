import React from "react";

class Comparing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProductFeatures: this.props.currentCard.features,
      selProductFeatures: this.props.selectedCard.features,
    };
  }

  componentDidMount() {
    console.log('selectedCard: ', this.state.selProductFeatures)
    console.log('currentCard: ', this.state.curProductFeatures)
  }

  render() {
    let curProductName = this.props.currentCard.name;
    let selProductName = this.props.selectedCard.name;


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

                {this.state.selProductFeatures.length !== 0
                  ? this.state.selProductFeatures.map((obj, index) => (
                    // console.log('feature: ', obj)
                    <SelProductFeaturesGetter feature={obj.feature} value={obj.value} key={index} />
                  ))
                  : 'nothing'}

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
      <td>{props.value ? props.value : '✔️'}</td>
      <td>
        <em>
        {props.feature}
        </em>
      </td>
      <td></td>
    </tr>
  );
};

const SelProductFeaturesGetter = (props) => {
  return (
    <tr>
      <td></td>
      <td>
        <em>
        {props.feature}
        </em>
      </td>
      <td>{props.value ? props.value : '✔️'}</td>
    </tr>
  );
};


export default Comparing;

