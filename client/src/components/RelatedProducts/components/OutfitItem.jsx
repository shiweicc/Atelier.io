import React from "react";

class OutfitItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('???', this.props.eachOutfitInfo.productInfo.id);
    // console.log('func???', this.props.deleteOutfitItem);
    // this.handleDeleteOutfit(this.props.outfitCollection)
  }

  handleDeleteOutfit(outfitCollection) {
    let selectedProductID = this.props.eachOutfitInfo.productInfo.id;

    for (let i = 0; i < outfitCollection.length; i++) {
      let curID = outfitCollection[i].productInfo.id;
      if (curID === selectedProductID) {
        outfitCollection.splice(i, 1);
      }
    }

    this.props.deleteOutfitItem(outfitCollection);
  }

  render() {
    let info = this.props.eachOutfitInfo.productInfo;
    let imgURL = this.props.eachOutfitInfo.productStyles;

    let img = (<>
      {
        imgURL ?
        <img src={imgURL} className="card__image" />
        : <img src={`https://source.unsplash.com/1000x1000/?${info.name}`} className="card__image"/>
      }
    </>)

    return (
      <div className="card">
        <div className="card__body">
          {img}
          <p className="card__category">{info.category}</p>
          <em className="card__name">{info.name}</em>
          <p className="card__price">${info.default_price}</p>
          <p className="card__rating">⭐⭐⭐⭐⭐</p>
        </div>
        <button className="card__btn" onClick={() => this.handleDeleteOutfit(this.props.outfitCollection)}>❌</button>
      </div>
    )
  }
}

// const OutfitItem = (props) => {
//   // console.log('props in OutfitItem: ', props);

//   let info = props.eachOutfitInfo.productInfo;
//   console.log('name: ', info.name)

//   let imgURL = props.eachOutfitInfo.productStyles;
//   console.log('imgURL: ', imgURL)

//   let img = (<>
//     {
//       imgURL ?
//       <img src={imgURL} className="card__image" />
//       : <img src={`https://source.unsplash.com/1000x1000/?${info.name}`} className="card__image"/>
//     }
//   </>)

//   return (
//     <div className="card">
//       <div className="card__body">
//         {img}
//         <p className="card__category">{info.category}</p>
//         <em className="card__name">{info.name}</em>
//         <p className="card__price">${info.default_price}</p>
//         <p className="card__rating">⭐⭐⭐⭐⭐</p>
//       </div>
//       <button className="card__btn">❌</button>
//       {/* <p>__________________________________</p> */}
//     </div>
//   )
// }

export default OutfitItem;