function Score(props) {


    return (<div className={'MAIN__score'}>
        <h1 className={"MAIN__score--h1"}>{props.score}</h1>
        <h2 className={"MAIN__score--h2"}>{props.highScore}</h2>
    </div>);
}

export default Score;
