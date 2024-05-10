import React, {useEffect, useState} from 'react';
import close_button from "../assets/close_button.png";
import {collection, getDocs, getFirestore, orderBy, limit, query, addDoc} from 'firebase/firestore';
import {app} from "../firebaseConfig.js";

import("../style/clicker.scss")

function Loose(props) {


    const [scores, setScores] = useState([]);
    const [pseudo, setPseudo] = useState('')
    const [seeMore, setSeeMore] = useState(false)
    const [form, setForm] = useState(true)
    useEffect(() => {

        const fetchData = async () => {
            const db = getFirestore(app);
            const scoresCollectionRef = collection(db, 'score');

            // Crée une requête pour trier les scores par ordre décroissant et limiter aux 5 premiers
            const scoresQuery = query(scoresCollectionRef, orderBy('Score', 'desc'), limit(seeMore ? 9999 : 5));
            const scoresSnapshot = await getDocs(scoresQuery);
            const scoresData = scoresSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

            setScores(scoresData);
        };

        fetchData();
    }, );


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const db = getFirestore(app);
            const scoresCollectionRef = collection(db, 'score');

            // Ajoute un nouveau document avec le pseudo et le score saisis
            await addDoc(scoresCollectionRef, {
                Pseudo: pseudo,
                Score: props.score
            });

            // Efface les champs du formulaire après l'ajout
            setPseudo('');
            setForm(false)
            console.log('Score ajouté avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du score :', error);
        }
    };


    return (
        <div className={"MAIN__LOOSE"}><h1 className={"MAIN__LOOSE--text"}>PERDU</h1>
            <h2 className={"MAIN__LOOSE--score"}>Ton score est de {props.score}</h2>
            <p className={"MAIN__LOOSE--highScore"}>Meilleur score : {props.highScore}</p>
            <div className={"MAIN__LOOSE__TABLEAU_DES_SCORES"}>
                <h2 className={"MAIN__LOOSE__TABLEAU_DES_SCORES--title"}>Tableau des scores</h2>
                <ul className={"MAIN__LOOSE__TABLEAU_DES_SCORES__list"}>
                    {scores.map(score => (
                        <li className={"MAIN__LOOSE__TABLEAU_DES_SCORES__list--data"} key={score.id}>
                            {score.Pseudo} : {score.Score}
                        </li>
                    ))}
                </ul>
                <p className={"MAIN__LOOSE__TABLEAU_DES_SCORES--see-more"} onClick={() => setSeeMore(!seeMore)}>{seeMore ? 'voir moins...' : "voir plus..."}</p>
                {form && <form onSubmit={(e) => handleSubmit(e)} className={"MAIN__LOOSE__TABLEAU_DES_SCORES__form"}
                       id={"scoreForm"} method={"POST"}
                       name={'scoreForm'}>
                    <label className={"MAIN__LOOSE__TABLEAU_DES_SCORES__form--label"} htmlFor="scoreForm"
                           form={"scoreForm"}>Entre ton pseudo :
                        <input className={"MAIN__LOOSE__TABLEAU_DES_SCORES__form--input"} type="text" maxLength={4}
                               name="pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo} required={true}/>
                    </label>
                    <button className={"MAIN__LOOSE__TABLEAU_DES_SCORES__form--button"} type="submit"
                            form={'scoreForm'}>Envoyer
                    </button>
                </form>}
            </div>
            <button className={"MAIN__LOOSE--button"} onClick={props.tryAgain}>RÉESSAYER</button>
            <button className={"MAIN__LOOSE--openButton"} onClick={props.triggerInfo}>Info</button>
            <img src={close_button} style={props.actif ? {visibility: "visible"} : {visibility: "hidden"}}
                 className={"MAIN__LOOSE--closeButton"} onClick={props.trigger}/>

        </div>

    );
}
export default Loose;