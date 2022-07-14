const getImage = (stylesObj) => {
  let firstStyleObj = stylesObj.results[0];
  let url = firstStyleObj.photos[0]["thumbnail_url"];
  return url;
};

const addImage = (listArr, stylesArr) => {
  for (let i = 0; i < listArr.length; i++) {
    for (let j = 0; j < stylesArr.length; j++) {
      let listID = listArr[i].id;
      let stylesID = stylesArr[j]["product_id"]

      if (listID=== stylesID) {
        listArr[i].imgURL = stylesArr[j].results[0][photos][0]["thumbnail_url"];
      }
    }
  }
  return listArr;
}

exports.getImage = getImage;
exports.addImage = addImage;

  // const addImage = (relatedProductList, relatedProductStyles) => {
  //   console.log('hey: ', relatedProductList)
  //   console.log('hello: ', relatedProductStyles)

  //   for (let i = 0; i < relatedProductList.length; i++) {
  //     for (let j = 0; j < relatedProductStyles.length; j++) {
  //       if (relatedProductList[i].id === relatedProductStyles[j]["product_id"]) {
  //         relatedProductList[i].imgURL = relatedProductStyles[j].results[0][photos][0]["thumbnail_url"];
  //         console.log('inside the loop i: ',  relatedProductList[i].imgURL )
  //         console.log('inside the loop j: ',  relatedProductStyles[j].results[0][photos][0]["thumbnail_url"])
  //       }
  //     }
  //   }
  //   return relatedProductList;
  // }

  // let newRelatedProductList = addImage(relatedProductList, relatedProductStyles);