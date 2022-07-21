import React from "react";

class Comparing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('show: ', this.props.showModal)
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }

    return (
      <div className="compare_modal">
        <h3> COMPARING </h3>
        <div className="compare_modal_content" onClick={e => e.stopPropagation()}>
          <table className="compare_table">
            <tr className="compare_column">
              <th>Current Product</th>
              <th></th>
              <th>Selected Product</th>
            </tr>
            <tr>
              <td>Canvas</td>
              <td>Fabric</td>
              <td>Rubber</td>
            </tr>
            <tr>
              <td></td>
              <td>Stitching</td>
              <td>Double Stitch</td>
            </tr>
            <tr>
              <td>Canvas</td>
              <td>Fabric</td>
              <td>Rubber</td>
            </tr>
            <tr>
              <td></td>
              <td>Stitching</td>
              <td>Double Stitch</td>
            </tr>
          </table>
        </div>
        <button className="closeModal_btn" onClick={()=> this.props.closeModal()}>Close</button>
      </div>
    )
  }
}

export default Comparing;

