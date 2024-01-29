import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")

    }

    const handleClearClick = ()=>{
        let newText= '';
        setText(newText)
        props.showAlert("Text Cleared!","success")

    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")

    }
    const [text, setText]= useState("")

    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#2b485e', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-secondary mx-2 my-1' onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className='btn btn-secondary mx-2 my-1' onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className='btn btn-secondary mx-2 my-1' onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className='btn btn-secondary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-secondary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>


        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}

export default TextForm
