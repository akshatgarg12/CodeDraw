import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import "codemirror/lib/codemirror.css";

export default function CodeMirrorComponent(props){
  return <CodeMirror
  className="code"
  onChange={(change)=>{
    props.onChange(change);
  }}
  height="70vh"
  width="70vh"
  options={{
    readOnly:false,
    theme: 'monokai',
    tabSize: 2,
    smartIndent:true,
    lineWrapping:true,
    spellcheck:true,
    cursorHeight:1,
    mode:`${props.language}`
  }}
/>
}