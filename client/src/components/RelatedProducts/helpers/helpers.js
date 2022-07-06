const getImage = (stylesObj) => {
  let firstStyleObj = stylesObj.results[0];
  let url = firstStyleObj.photos[0]["thumbnail_url"];

  return url;
};

exports.getImage = getImage;