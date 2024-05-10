import React, {useState} from 'react';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import {app} from "../firebaseConfig.js";


function FormulaireScore(props) {

    const [pseudo, setPseudo] = useState('')
    const [score, setScore] = useState('')


    return (

        <div>

            {/*<form action="POST" name={"scoreForm"} id={"scoreForm"} onSubmit={() => handleSubmit()}>*/}
            {/*    <label htmlFor="PSEUDO">Pseudo :*/}
            {/*        <input type="text" max={4} name="PSEUDO" id="PSEUDO"/>*/}
            {/*    </label>*/}
            {/*    <button type={"submit"} form={"scoreForm"}>Partager mon score</button>*/}


            {/*</form>*/}


        </div>
    );
}

export default FormulaireScore;