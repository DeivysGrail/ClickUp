import React, {useEffect, useState} from 'react';
import '../style/clicker.scss'
function HardBoutonBonus(props) {




    function getRandomNumber(min, max) {

        return Math.random() * (max - min) + min;
    }


    const [triggerBox, setTriggerBox] = useState(function () {

        setTimeout(() => {
            return null
        }, 3000)

        return Math.round(getRandomNumber(1, 2))

    })

    const [ready, setReady] = useState(false)
    const [left, setLeft] = useState(Math.round((Math.random() * 80) ))
    const [top, setTop] = useState(Math.round((Math.random() * 80) ))

    function boxReady() {
        setReady(true)
        setTriggerBox(Math.round(getRandomNumber(1, 3)))
        setLeft(Math.round((Math.random() * 100) ))
        setTop(Math.round((Math.random() * 100) ))
        setTimeout(() => setReady(false), 1.1 * 1000)
    }


    useEffect(() => {
        const interval = setInterval(boxReady, 8.2 * 1000)
        return () => clearInterval(interval)

    }, [triggerBox])



    const HARD_BUTTON_1 = <div onClick={props.hard1} className={"HardButton-1"} style={{left: `${left}%`, top: `${top}%`}}>
        <button className="HardButton-1__button"
                onClick={() => setReady(false)}>
        </button>
    </div>

    const HARD_BUTTON_2 = <div onClick={props.hard2} className={"HardButton-2"} style={{left: `${left}%`, top: `${top}%`}}>
        <button className="HardButton-2__button"
                onClick={() => setReady(false)}>
        </button>
    </div>

    const HARD_BUTTON_3 = <div onClick={props.hard3} className={"HardButton-3"} style={{left: `${left}%`, top: `${top}%`}}>
        <button className="HardButton-3__button"
                onClick={() => setReady(false)}>
        </button>
    </div>




    return (
        <div className={"MAIN__HARD_BUTTON"}>
            {(ready && triggerBox === 1) && HARD_BUTTON_1}
            {(ready && triggerBox === 2) && HARD_BUTTON_2}
            {(ready && triggerBox === 3) && HARD_BUTTON_3}
        </div>
    );
}

export default HardBoutonBonus;