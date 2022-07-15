import React from "react";

class AddOutfit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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