function Score(props) {


    return (<div className={'MAIN__SCORE'}>
        <h2 className={"MAIN__SCORE--highScore"}>{props.highScore}</h2>
        <h1 className={"MAIN__SCORE--score"}>{props.score}</h1>
    </div>);
}

export default Score;
