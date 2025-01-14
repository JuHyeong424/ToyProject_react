import React, {useState} from "react";
import 'C:/Users/asdf/Front-project/toyproject_react/src/style/01. Color Flipper.css';


function ColorFlipper() {
    const changeColor =
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    console.log(changeColor);

    const [Color, setColor] = useState('white');

    return (
        <div className="colorflipper" style={{backgroundColor: Color}}>
            <div className="header">
                <h1 className="left">Color Flipper</h1>
                <h1 className="right"> Simple Hex</h1>
            </div>
            <h1 className="colorName">Background Color: {changeColor}</h1>
            <button className="button" style={{backgroundColor: Color}} onClick={() => {
                setColor(changeColor)}}> CLICK ME </button>
        </div>
    )
}


export default ColorFlipper;