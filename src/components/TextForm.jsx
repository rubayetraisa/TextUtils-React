import React,{useState} from 'react'


  
export default function TextForm(props) {


    const handleUpClick = () =>{
       // console.log('Uppercase was clicked');
        let newText = text.toUpperCase(); //text access allowed
        setText(newText);
        props.showAlert("Converted to uppercase!!", "success");
    }
    const handleLowClick = () =>{
       // console.log('Lowercase was clicked');
        let newText = text.toLowerCase(); //text access allowed
        setText(newText);
        props.showAlert("Converted to lowercase!!", "success");
    }
    const handleClear = () =>{
        let newText = ""; //text access allowed
        setText(newText);
         props.showAlert("Text is cleared!!", "warning");
    }

    const handleSpeak = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
    //   document.getSelection.removeAllRanges();
      props.showAlert("Text is copied to clipboard", "info");
      
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed Extra Spaces!!", "success");
    }

    const handleOnChange = (event) =>{
        //console.log('On change');
        setText(event.target.value);
    }

    const [text, setText] = useState(''); //default
    // setText("djfbjd"); //updating text
    return (
      <>
        <div className='container mt-5'>
        <h1 style={{color: `${props.mode === "light" ? "#0d1923" : "white"}`}}>{props.heading}</h1>
        <div className="mb-3">

            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor: `${props.mode === "dark" ? "#223543" : "white"}`, borderColor: `${props.mode === "light" ? "#0d1923" : "white"}`, color: `${props.mode === "light" ? "#0d1923" : "white"}`}}></textarea>
             
        </div>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleSpeak}>Pronounce</button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleCopy}>Copy Text to Clipboard</button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div> 
        <div className="container my-3" style={{color: `${props.mode === "light" ? "#0d1923" : "white"}`}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element )=>{ return element.length!== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element )=>{ return element.length!== 0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Nothing to preview"}</p>
        </div>
      </>
    )
}
