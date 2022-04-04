import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

function Canvas(props) {
  const canvas = useRef();
  const [urlImg, setUrlImg] = useState("");

  useEffect(() => {
    
    var canvasElement = canvas.current.getContext("2d");
    var im = new Image(100, 150);
    im.src = props.imgMeme;
    im.crossOrigin = "Anonymous";
    im.onload = () =>{
     
    canvasElement.beginPath();
    canvasElement.drawImage(im, 0, 0, 300, 150);

    
    canvasElement.font = props.t + 'px Verdana';
    canvasElement.fillStyle = props.color;
    canvasElement.fillText(props.topText, props.x1, props.y1);

    canvasElement.fillStyle = props.color;
    canvasElement.font = props.t + 'px Verdana';
    canvasElement.fillText(props.bottomText, props.x2, props.y2);

    canvasElement.fillStyle = props.color;
    canvasElement.font = props.t + 'px Verdana';
    canvasElement.fillText(props.thirdText, props.x3, props.y3);

    canvasElement.fillStyle = props.color;
    canvasElement.font = props.t + 'px Verdana';
    canvasElement.fillText(props.fourthText, props.x4, props.y4);
    
    var dataImg = canvas.current?.toDataURL(); // note `me` being used here
    
    setUrlImg(dataImg)
  }

  }

  , [props.topText, props.bottomText, props.thirdText, props.fourthText, props.imgMeme, props.color, props.x1, props.y1, props.x2, props.y2, props.x3, props.y3, props.x4, props.y4, props.t])
  return (<>
    <canvas className='canvas' ref={canvas}></canvas>
    <a href={urlImg} download className='download'>DOWNLOAD</a>
    </>
    )
}

export default Canvas