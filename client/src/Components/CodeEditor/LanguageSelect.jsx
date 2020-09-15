import React from 'react'


export default function LanguageSelector(props){
  return <select name="language" id="language" value={props.language} onChange={(e)=>{
    props.onChange(e);
  }}>
    <option value="c++">C++</option>
    <option value="c">C</option>
    <option value="python">python</option>
    <option value="java">Java</option>
  </select>
}