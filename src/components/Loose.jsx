import React from 'react';

import("../style/clicker.scss")

function Loose(props) {
    return (
        <div className={"MAIN__LOOSE"}><h1 className={"MAIN__LOOSE--h1"}>PERDU</h1><h2>Ton score est de {props.score}</h2><button onClick={props.tryAgain}>RÉESSAYER</button></div>);
}

export default Loose;
