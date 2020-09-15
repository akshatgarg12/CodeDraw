import CodeMirrorComponent from './CodeEditor/CodeMirror'
import IObox from './CodeEditor/IObox';
import LanguageSelector from './CodeEditor/LanguageSelect';
import SubmitButton from './CodeEditor/Submitbutton';
import React,{useState} from 'react'
import axios from 'axios'
export default function CodeEditor(){
  const [code, setCode] = useState();
  const [input, setInput] = useState();
  const [language, setLanguage]= useState('c++');
  const [output, setOutput] = useState({
    output:"",
    memory:"",
    cpuTime:"",
    statusCode:""
  });
  function postData(data){
    return new Promise((res,rej)=>{
      axios.post("http://localhost:5000/execute",data).then((result)=>{
        res(result);
      }).catch(e => console.log(e));
      
    })
  
  }
  function codeChange(change){
    setCode(change.getValue());
  }
  function inputChange(e){
    setInput(e.target.value);
  }
  function languageChange(e){
    setLanguage(e.target.value);
  }
  async function codeSubmit(){
    setOutput({output:"Compiling..."});
    let sendLanguage = 'cpp'
    switch(language){
      case 'c++':
        sendLanguage = "cpp"
        break;
      case 'c':
        sendLanguage = 'c';
        break;
      case 'python':
        sendLanguage = "python3";
        break;
      case 'java':
          sendLanguage = "java";
          break;
     default:
        break;
    }
    let data={
      "script":code,
      "language":sendLanguage,
      "stdin":input
    }
    if(code){
    console.log(data);  
    let response = await postData(data);
    console.log(data);
    setOutput(response.data);
    }else{
      setOutput({
        output:"",
        memory:"",
        cpuTime:"",
        statusCode:""
      });
    }
    // post this code to compiler APIs
  }
  return <div className="codeEditor">
    <LanguageSelector  value={language} onChange={languageChange} />
    <CodeMirrorComponent 
     onChange={codeChange}
      language = {language}
     />
    <SubmitButton onClick={codeSubmit} />
    <IObox value={input} onChange={inputChange} output={output} />

  </div>
}