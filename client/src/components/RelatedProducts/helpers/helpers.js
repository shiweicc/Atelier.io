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