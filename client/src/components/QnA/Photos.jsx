import React from 'react';


const Photos = (props) => {
  //console.log(props.photo);
  const photo = props.photo;
  const urls = [];
  for (var i = 0; i < photo.length; i++) {
    urls.push(photo[i].url);
  }

  //console.log(urls);
  return (
    <div>
      {
        urls.map((url, index) => {
          const srcimg = { url }.url;
          // console.log(srcimg);

          return (< img id="picture" key={index}

            src={srcimg}>
          </img>)
        })
      }
    </div >
  )
}

export default Photos;