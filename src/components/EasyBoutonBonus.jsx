import React, {useEffect, useState} from 'react';
import "../style/BonusButton.scss"

function EasyBoutonBonus(props) {
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
    const [left, setLeft] = useState(Math.round((Math.random() * 95) ))
    const [top, setTop] = useState(Math.round((Math.random() * 100) ))

    function boxReady() {
        setReady(true)
        setTriggerBox(Math.round(getRandomNumber(1, 3)))
        setLeft(Math.round((Math.random() * 100) ))
        setTop(Math.round((Math.random() * 100) ))
        setTimeout(() => setReady(false), 3 * 1000)
    }


    useEffect(() => {
        const interval = setInterval(boxReady, 3 * 1000)
        return () => clearInterval(interval)

    }, [triggerBox])


    const EASY_BUTTON_1 = <div onClick={props.easy1} className={"EasyButton-1"} style={{left: `${left}vw`, top: `${top}vh`}}>
        <button className="EasyButton-1__button"
                onClick={() => setReady(false)}>+ 10pt
        </button>
    </div>

    const EASY_BUTTON_2 = <div onClick={props.easy2} className={"EasyButton-2"} style={{left: `${left}vw`, top: `${top}vh`}}>
        <button className="EasyButton-2__button"
                onClick={() => setReady(false)}>Stop 3s
        </button>
    </div>

    const EASY_BUTTON_3 = <div onClick={props.easy3} className={"EasyButton-3"} style={{left: `${left}vw`, top: `${top}vh`}}>
        <button className="EasyButton-3__button"
                onClick={() => setReady(false)}>⬆ 5px
        </button>
    </div>


    return (
        <div>
            {(ready && triggerBox === 1) && EASY_BUTTON_1}
            {(ready && triggerBox === 2) && EASY_BUTTON_2}
            {(ready && triggerBox === 3) && EASY_BUTTON_3}
        </div>
    );
}

export default EasyBoutonBonus;