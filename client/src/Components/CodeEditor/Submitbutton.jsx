import React from 'react'

export default function SubmitButton(props){
  return <button className="submit" onClick={async()=>{await props.onClick()}}>submit</button>
}