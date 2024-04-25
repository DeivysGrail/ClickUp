// export default function checkCollision(safeZone, deathZone, element) {
//
//
//     const keepSafeRect = safeZone.getBoundingClientRect();
//     const deathZoneRect = deathZone.getBoundingClientRect();
//
//     if (keepSafeRect.bottom >= deathZoneRect.top) {
//         // La div KEEP_SAFE a atteint ou dépassé la div DEATH_ZONE
//         // Vous pouvez exécuter votre fonction ici
//         // Exemple d'exécution d'une fonction
//
//         alert("Perdu !!")
//         element.style.background = "red"
//     } else {
//         // La collision n'a pas encore eu lieu, vérifiez à nouveau dans 1 seconde
//         setTimeout(checkCollision, 100); // Vérifiez toutes les secondes
//     }
// }
