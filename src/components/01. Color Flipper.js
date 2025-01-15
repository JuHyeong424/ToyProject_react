import React, {useState} from "react";
import colorFlipper from '../style/01. Color Flipper.module.css';


function ColorFlipper() {
    const changeColor =
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    const [Color, setColor] = useState();

    return (
        <div className={colorFlipper.colorflipper} style={{backgroundColor: Color}}>
            <div className={colorFlipper.header}>
                <h1 className={colorFlipper.left}>Color Flipper</h1>
                <h1 className={colorFlipper.right}> Simple Hex</h1>
            </div>
            <h1 className={colorFlipper.colorName}>Background Color: {Color}</h1>
            <button className={colorFlipper.button} style={{backgroundColor: Color}} onClick={() => {
                setColor(changeColor)}}> CLICK ME </button>
        </div>
    )
}


export default ColorFlipper;