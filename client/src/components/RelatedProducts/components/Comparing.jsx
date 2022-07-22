import React from "react";

class Comparing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comProductFeatures: [],
      curProductFeatures: this.props.currentCard.features,
      selProductFeatures: this.props.selectedCard.features,
      comProdFeat: this.props.comProdFeat,
      // curProdFeat: this.props.curProdFeat,
      // selProdFeat: this.props.selProdFeat,
    };
  }

  componentDidMount() {
    console.log('selectedCard: ', this.state.selProductFeatures)
    console.log('currentCard: ', this.state.curProductFeatures)

    console.log('comProdFeat: ', this.state.comProdFeat)
    // console.log('curProdFeat: ', this.state.curProdFeat)
    // console.log('selProdFeat: ', this.state.selProdFeat)
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
                {this.state.comProdFeat.length !== 0
                  ? this.state.comProdFeat.map((info, index) => (
                    <ComProductFeaturesGetter feature={info.feature} curValue={info.curValue} selValue={info.selValue} key={index} />
                  ))
                  : 'nothing in com!'}

                {/* {this.state.curProdFeat.length !== 0
                  ? this.state.curProdFeat.map((info, index) => (
                    <CurProductFeaturesGetter feature={info.feature} value={info.value} key={index} />
                  ))
                  : 'nothing in cur!'}

                {this.state.selProdFeat.length !== 0
                  ? this.state.selProdFeat.map((info, index) => (
                    <SelProductFeaturesGetter feature={info.feature} value={info.value} key={index} />
                  ))
                  : 'nothing in sel!'} */}

                {/* {this.state.curProductFeatures.length !== 0
                  ? this.state.curProductFeatures.map((info, index) => (
                    <CurProductFeaturesGetter feature={info.feature} value={info.value} key={index} />
                  ))
                  : null}

                {this.state.selProductFeatures.length !== 0
                  ? this.state.selProductFeatures.map((info, index) => (
                    <SelProductFeaturesGetter feature={info.feature} value={info.value} key={index} />
                  ))
                  : 'nothing'} */}
              </tbody>
            </table>
          </div>
          <button className="closeModal_btn" onClick={()=> this.props.closeModal()}>Close</button>
        </div>
      </div>
    )
  }
}

const ComProductFeaturesGetter = (props) => {
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

// const CurProductFeaturesGetter = (props) => {
//   return (
//     <tr>
//       <td>{props.value ? props.value : '✔️'}</td>
//       <td>
//         <em>
//         {props.feature}
//         </em>
//       </td>
//       <td></td>
//     </tr>
//   );
// };

// const SelProductFeaturesGetter = (props) => {
//   return (
//     <tr>
//       <td></td>
//       <td>
//         <em>
//         {props.feature}
//         </em>
//       </td>
//       <td>{props.value ? props.value : '✔️'}</td>
//     </tr>
//   );
// };


export default Comparing;

