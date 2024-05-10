
function Score(props) {



    return (<div className={'MAIN__SCORE'}>
        <h2 className={"MAIN__SCORE--highScore"}>Meilleur score : {props.highScore}</h2>
        <h1 className={"MAIN__SCORE--score"}>Score : {props.score}</h1>
    </div>);
}

export default Score;
