import React from 'react'

export default function IObox(props){
  const data = props.output;
  return <div className="IO-box">
  <textarea className="input-area" rows="5" value={props.input} onChange={(e)=>{
    props.onChange(e)
  }} placeholder="Input:"></textarea>
  <textarea className="output-area" rows="5" value={data.output} placeholder="Output" readOnly></textarea>
  {/* <div>
  {data.cpuTime && <h6>CPU:{data.cpuTime}</h6>}
  {data.memory && <h6>CPU:{data.memory}</h6>}
  </div> */}
</div>
 
}