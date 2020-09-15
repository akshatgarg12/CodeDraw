import React, {useState} from 'react'
import CanvasDraw from "react-canvas-draw";
import CanvasButton from './CanvasButton'

export default function CustomDraw(){
  const [brushColor, setBrushColor] = useState('#444');
  const [brushRadius, setBrushRadius]=useState(8);
  const [board, setBoard] = useState();
  const canvasButtonData=[
    {
      id:9,
      color:"black",
      icon:"undo",
      onClick:()=>{
        if(board){
        board.undo();
        setBoard(board);
        }
      }
    },
    {
      id:1,
      color:"#333",
      icon:"eraser",
      onClick:()=>{  
        setBrushColor('#fff');
       }
    },
    {
      id:2,
      color:"black",
      icon:"plus-circle",
      onClick:()=>{
        setBrushRadius((Number(brushRadius)+1))
     }
    },
    {
      id:3,
      color:"black",
      icon:"minus-circle",
      onClick:()=>{
        setBrushRadius((Number(brushRadius)-1))
     }
    },
    {
      id:4,
      color:"#444",
      icon:"pen",
      onClick:()=>{
        setBrushColor('#444')
     }
    },
    {
      id:5,
      color:"red",
      icon:"pen",
      onClick:()=>{
        setBrushColor("red")
     }
    },
    {
      id:6,
      color:"blue",
      icon:"pen",
      onClick:()=>{
        setBrushColor("blue")
     }
    },
    {
      id:7,
      color:"green",
      icon:"pen",
      onClick:()=>{
        setBrushColor("green")
     }
    },
    {
      id:8,
      color:"black",
      icon:"trash",
      onClick:()=>{
        if(board){
        board.clear();
        setBoard();
        }
      }
    }
  ];
  function buttonMap(btnData){
    return <CanvasButton 
      key = {btnData.id}
      onClick={btnData.onClick}
      icon={btnData.icon}
      color={btnData.color}
    />
  }
  return <div className="canvas-container">
      <CanvasDraw 
        className="canvas"
         hideGrid={Boolean(true)}
         brushRadius={brushRadius}
         lazyRadius="0"
         canvasWidth="70vh"
         canvasHeight="60vh"
         brushColor={brushColor}
         onChange={(val)=>{
          setBoard(val);
         }}
       /> 

      <div className="canvas-button-div">
        {canvasButtonData.map(buttonMap)}
       </div>
        
  </div>
}