import React from 'react'

export default function CanvasButton(props){
  let icon = `fas fa-${props.icon} fa-lg`
  let color = props.color;
  let inlineStyle = {
    color: color,
  }
  return <button style={inlineStyle} className="canvas-button" onClick={props.onClick}>
    <i className={icon}></i>
  </button>
}