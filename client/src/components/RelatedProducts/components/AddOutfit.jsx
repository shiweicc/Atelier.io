import React from "react";

// const AddOutfit = (props) => {
//   console.log('props in AddOutfit: ', props);
//   let handleClickAddOutfit = props.onClick;
//   // console.log('props in AddOutfit func: ', handleClickAddOutfit);

//   return (
//     <div>
//       <button className="addOutfit__btn" onClick={(props.productObj) => props.onClick(props.productObj)}>➕ Add Your Outfit</button>
//     </div>
//   )
// }


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
    // console.log('hello');
  }

  render() {
    return (
      <div>
      <button className="addOutfit__btn" onClick={()=> this.handleAddOutfit()}>➕ Add Your Outfit</button>
    </div>
    )
  }
}

export default AddOutfit;