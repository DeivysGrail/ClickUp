import React from 'react';
import close_button from "../assets/close_button.png";

import("../style/clicker.scss")

function Loose(props) {
    return (
        <div className={"MAIN__LOOSE"}><h1 className={"MAIN__LOOSE--text"}>PERDU</h1>
        <h2 className={"MAIN__LOOSE--score"}>Ton score est de {props.score}</h2>
        <p className={"MAIN__LOOSE--highScore"}>Meilleur score : {props.highScore}</p>
        <button className={"MAIN__LOOSE--button"} onClick={props.tryAgain}>RÉESSAYER</button>
        <button className={"MAIN__LOOSE--openButton"} onClick={props.triggerInfo}>Info</button>
            <img src={close_button} style={props.actif ? {visibility:"visible"} : {visibility: "hidden"}} className={"MAIN__LOOSE--closeButton"} onClick={props.trigger}/>

        </div>

    );
}

export default Loose;
