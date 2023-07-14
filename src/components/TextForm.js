import React,{useState} from 'react'



export default function TextForm(props) {
 
const [text,setText]  = useState('');

 var a = text.split(" ")
 var i=0
 var count=0;
 if(a.length!=0)
 {
    for(let i=0;i<a.length;i++)
    {
      if(a[i] == "")
      {
        count++
      }
    }
 }
 a=a.length - count


  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }

  const handleLowClick = ()=>{
    setText(text.toLowerCase());
  }

  const handleOnChange = (e)=>{
    // console.log("Text Changed")
    setText(e.target.value)
  }

  const handleSelection = (e)=>{
    // console.log("Text Changed")
    var textarea = document.getElementById("myBox");
    var wholeText = textarea.value
    var startPosition = textarea.selectionStart;
    var endPosition = textarea.selectionEnd;
    var wholeText1 =  wholeText.slice(0,startPosition);
    var wholeText2 = wholeText.slice(endPosition,wholeText.length);
   
    var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var newText = wholeText1 + selectedText.toUpperCase() + wholeText2
    setText(newText);
    
    // var a = text.split(" ")
    // if(a[text.split(" ").length-1].length == 0)
    // {
    //        b = text.split(" ").length-1
    // }
    // else{
    //    b = text.split(" ").length
    // }
  }

  return (
    <>
    <div className='container'>
    <h1>
        {props.heading}
    </h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Enter Your Text Below</label> */}
        <textarea className="form-control"  onChange={handleOnChange} value={text} id="myBox" rows="12"></textarea>
        </div>

        <button className='btn btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn btn-primary mx-2' onClick={handleSelection}>Selected Uppercase</button>
    </div>

    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>
        
        {a}words {text.length}characters
      </p>
      <p>
        It will take {0.008 * text.split(" ").length} minutes to read the above text
      </p>
      <h2>{text}</h2>
    </div>

    
    </>
  )
}
