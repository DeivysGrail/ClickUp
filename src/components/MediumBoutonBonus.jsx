import React, {useEffect, useState} from 'react';
import '../style/clicker.scss'

export default function MediumBoutonBonus(props) {


    function getRandomNumber(min, max) {

        return Math.random() * (max - min) + min;
    }


        const [triggerBox, setTriggerBox] = useState(function () {
            setTimeout(() => {
                return null
            }, 3000)

            return Math.round(getRandomNumber(1, 3))

        })


        const [ready, setReady] = useState(false)

        const [left, setLeft] = useState(Math.round((Math.random() * 80)))
        const [top, setTop] = useState(Math.round((Math.random() * 80)))

        function boxReady() {
            setReady(true)
            setTriggerBox(Math.round(getRandomNumber(1, 3)))
            setLeft(Math.round((Math.random() * 100)))
            setTop(Math.round((Math.random() * 100)))
            setTimeout(() => setReady(false), 2 * 1000)
        }


        useEffect(() => {
            const interval = setInterval(boxReady, 6 * 1000)
            return () => clearInterval(interval)

        }, [triggerBox])


        const MEDIUM_BUTTON_1 = <div onClick={props.medium1} className={"MediumButton-1"}
                                     style={{left: `${left}%`, top: `${top}%`}}>
            <button className="MediumButton-1__button"
                    onClick={() => setReady(false)}>
            </button>
        </div>

        const MEDIUM_BUTTON_2 = <div onClick={props.medium2} className={"MediumButton-2"}
                                     style={{left: `${left}%`, top: `${top}%`}}>
            <button className="MediumButton-2__button"
                    onClick={() => setReady(false)}>
            </button>
        </div>

        const MEDIUM_BUTTON_3 = <div onClick={props.medium3} className={"MediumButton-3"}
                                     style={{left: `${left}%`, top: `${top}%`}}>
            <button className="MediumButton-3__button"
                    onClick={() => setReady(false)}>
            </button>
        </div>


        return ( <div className={"MAIN__MEDIUM_BUTTON"}>
                {(ready && triggerBox === 1) && MEDIUM_BUTTON_1}
                {(ready && triggerBox === 2) && MEDIUM_BUTTON_2}
                {(ready && triggerBox === 3) && MEDIUM_BUTTON_3}
            </div>
        )
}