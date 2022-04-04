import React, {useState} from 'react';
import axios from 'axios';
import Canvas from './Canvas';
import './FormCanvas.css';
import { useEffect } from 'react';


function FormCanvas() {
  const [counter, setCounter] = useState(0);
  const [inputTexts, setInputTexts] = useState({topText: "Welcome", 
                                                bottomText: "I am Denis",
                                                thirdText: "",
                                                fourthText: "",
                                                x1: 120,
                                                y1: 30,
                                                x2: 120,
                                                y2: 116,
                                                x3: 50,
                                                y3: 100,
                                                x4: 70,
                                                y4: 50,
                                                t: 18});
  const [color, setColor] = useState("");
  const [memes, setMemes] = useState();
  const [addInputs, setAddInputs] = useState(false)

  useEffect(() =>{
    const getMemes = async()=>{
      const data = await (await axios.get('https://api.imgflip.com/get_memes')).data
      setMemes(data.data.memes.map(meme => meme.url))
    }
    getMemes()
  },[])

  
  const changeInputs = (event) =>
  {
    setInputTexts(prevTexts => {
      return{
        ...prevTexts,
        [event.target.name]: event.target.value
      }
    })
  }
  console.log(inputTexts.x1)

  const nextGenerateImg = () => {
    let auxCounter = counter < (memes.length -1)? counter + 1: 0;
    setCounter(auxCounter);
    
  }
  const prevGenerateImg = () => {
    let auxCounter = counter > 0? counter - 1: (memes.length -1);
    setCounter(auxCounter);
    
  }

  const submitTexts = (e) => {
    e.preventDefault();
  }
  
  const changeColor = (e) => {
    setColor(e.target.value)
  }
  const moreInputs = () => {
    if(addInputs){
      inputTexts.thirdText = ""
      inputTexts.fourthText  = ""
      setAddInputs(false)
    }
    else{
      setAddInputs(true)
    }
  }

  const moveTexts = (event, move) => {
    if(event.target.className === "x1")
    {
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "left"? inputTexts.x1 - 3 : inputTexts.x1 + 3
        }
      })
    }
    else if(event.target.className === "y1"){
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "up"? inputTexts.y1 - 3 : inputTexts.y1 + 3
        }
      })
    }
    else if(event.target.className === "x2")
    {
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "left"? inputTexts.x2 - 3 : inputTexts.x2 + 3
        }
      })
    }
    else if(event.target.className === "y2"){
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "up"? inputTexts.y2 - 3 : inputTexts.y2 + 3
        }
      })
    }
    else if(event.target.className === "x3")
    {
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "left"? inputTexts.x3 - 3 : inputTexts.x3 + 3
        }
      })
    }
    else if(event.target.className === "y3"){
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "up"? inputTexts.y3 - 3 : inputTexts.y3 + 3
        }
      })
    }
    else if(event.target.className === "x4")
    {
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "left"? inputTexts.x4 - 3 : inputTexts.x4 + 3
        }
      })
    }
    else if(event.target.className === "y4"){
      setInputTexts((prevText) => {
        
        return{
          ...prevText,
          [event.target.className] : move === "up"? inputTexts.y4 - 3 : inputTexts.y4 + 3
        }
      })
    }
  }

  return (
    <main>
      <div>
      <form onSubmit={submitTexts}>
        <div className='inputs'>
          <div>
            <label>Text: </label>
            <input type="text" name="topText" onChange={changeInputs} placeholder='topText' className='text' value={inputTexts.topText}/>
           
            <button onClick={(e) => moveTexts(e, "left")} className="x1">Left</button>
            <button onClick={(e) => moveTexts(e, "right")} className="x1">Right</button>
            <button onClick={(e) => moveTexts(e, "up")} className="y1">Up</button>
            <button onClick={(e) => moveTexts(e, "down")} className="y1">Down</button>        
            
          </div>
          <div>
            <label>Text: </label>
            <input type="text" name="bottomText" onChange={changeInputs} placeholder='bottomText' className='text' value={inputTexts.bottomText}/>
            
            
            <button onClick={(e) => moveTexts(e, "left")} className="x2">Left</button>
            <button onClick={(e) => moveTexts(e, "right")} className="x2">Right</button>
            <button onClick={(e) => moveTexts(e, "up")} className="y2">Up</button>
            <button onClick={(e) => moveTexts(e, "down")} className="y2">Down</button>
          </div>
          {addInputs && <>
            <div>
            <label>Text: </label>
            <input type="text" name="thirdText" onChange={changeInputs} placeholder='thirdText' className='text' value={inputTexts.thirdText}/>

            
            <button onClick={(e) => moveTexts(e, "left")} className="x3">Left</button>
            <button onClick={(e) => moveTexts(e, "right")} className="x3">Right</button>
            <button onClick={(e) => moveTexts(e, "up")} className="y3">Up</button>
            <button onClick={(e) => moveTexts(e, "down")} className="y3">Down</button>         
            
          </div>
          <div>
            <label>Text: </label>
            <input type="text" name="fourthText" onChange={changeInputs} placeholder='fourthText' className='text' value={inputTexts.fourthText}/>

            
            <button onClick={(e) => moveTexts(e, "left")} className="x4">Left</button>
            <button onClick={(e) => moveTexts(e, "right")} className="x4">Right</button>
            <button onClick={(e) => moveTexts(e, "up")} className="y4">Up</button>
            <button onClick={(e) => moveTexts(e, "down")} className="y4">Down</button>      
            
          </div>
          </>}
          
         
        </div>
      </form>
      <div className='btn_img'>
      <div className='btns'>
        <button onClick={moreInputs}>{addInputs ? "HIDE" : "ADD"}</button>
        <button onClick={prevGenerateImg}>Previuos</button> 
        <button onClick={nextGenerateImg}>Next</button>
        
      
      </div>
          <form className='change_color' onSubmit={submitTexts}>
            <label>Color:</label>
            <input onChange={changeColor} type="color"/>
            <label>Size:</label>
            <input onChange={changeInputs} name="t" type="number" className='size' value={inputTexts.t}/>
          </form>
        </div>
        <div className='note'>
          <p><b>¡NOTE!</b> You can download your meme :)
          </p>
        </div>
        </div>
       
    <div>
    <Canvas topText={inputTexts.topText} bottomText={inputTexts.bottomText} thirdText={inputTexts.thirdText} fourthText={inputTexts.fourthText} imgMeme={memes && memes[counter]} color={color} x1={inputTexts.x1} y1={inputTexts.y1} x2={inputTexts.x2} y2={inputTexts.y2} x3={inputTexts.x3} y3={inputTexts.y3} x4={inputTexts.x4} y4={inputTexts.y4} t={inputTexts.t}/>
    </div>
      
    </main>
  )
}

export default FormCanvas