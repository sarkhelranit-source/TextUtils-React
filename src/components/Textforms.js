import React, { useState } from 'react'


export default function Textforms(propt) {
    const changeit = event => {
        setText(event.target.value)
    }
    const uppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const [text, setText] = useState('');
    return (

        <div className={`container text-${propt.mode === "dark" ? "white" : "black"}`}>
            <div className='container0'>
                <h2 className='mt-3'>{propt.heading}</h2>
                <div className="mt-3">
                    <textarea className={`form-control bg-transparent text-${propt.mode === "dark" ? "white" : "black"}`} id="exampleFormControlTextarea1" placeholder='Enter a text here' value={text} onChange={changeit} rows="5"></textarea>
                </div>
                <center><button className="btn btn-info mt-3" onClick={uppercase}>Convert to UpperCase</button></center>
            </div>
            <div className="container1 my-3">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>You will take {0.008 * text.split(" ").length} minute on average to read this</p>
            </div>
            <div className="container3 my-3">
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text on the textbox above👆 to preview it here"}</p>
            </div>
        </div>

    )
}
