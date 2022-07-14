import React from "react";

class AddOutfit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('obj: ', this.props.productObj)
    // console.log('func: ', this.props.updateOutfitCollection);
  }

  handleAddOutfit() {
    this.props.updateOutfitCollection(this.props.productObj);
  }

  render() {
    return (
      <div>
      <button className="addOutfit__btn" onClick={() => this.handleAddOutfit()}>➕ Add Your Outfit</button>
    </div>
    )
  }
}

export default AddOutfit;