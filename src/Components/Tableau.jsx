import axios from "axios"; // On importe la bibliothèque axios qui va nous permettre de faire des requêtes HTTP.
import React, { useState } from "react"; // On importe la bibliothèque React et le hook useState.

const Tableau = () => {
    // On crée une variable d'état qui va contenir les informations liées aux cryptomonnaies.
    const[cryptos, setCryptos]= useState([]);
    // On crée une fonction asynchrone pour récupérer les données de l'API.
    const recupCryptos = async () => {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
                params: {
                    vs_currency: "usd", // On précise la devise dans laquelle on veut récupérer les données.
                    order: "market_cap_desc", // On précise l'ordre dans lequel on veut récupérer les données.
                    per_page: 100, // On précise le nombre de données que l'on veut récupérer.
                    page: 1, // On précise la page que l'on veut récupérer.
                    sparkline: false, // On précise si on veut récupérer les données sous forme de graphique ou non.
                },
            })
            console.log(response.data); // On affiche les données récupérées dans la console.
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error); // On affiche une erreur dans la console si la requête échoue.
        }
    }
   recupCryptos(); // On appelle la fonction pour récupérer les données de l'API.
    
    // On crée une fonction qui va nous permettre de créer un tableau contenant les informations liées aux cryptomonnaies.
    return (
        <div className="p-10 flex justify-center items-center bg-green-50">
            {/* Création du tableau qui va contenir les informations liées aux cryptomonnaies. */}
            <table className="w-full border-collapse border border-green-800 rounded-lg overflow-hidden shadow-lg">
                {/* L'entête du tableau */}
                <thead>
                    <tr className="bg-green-800 text-white">
                        <th className="text-left p-2">Classement</th>
                        <th className="text-left p-2">Nom de la crypto</th>
                        <th className="text-left p-2">Symbole</th>
                        <th className="text-left p-2">Prix</th>
                        <th className="text-left p-2">Fluctuation 24h</th>
                        <th className="text-left p-2">Capitalisation boursière</th>
                    </tr>
                </thead>
                {/* Le corps du tableau */}
                <tbody>
                    {/* La première ligne du corps du tableau */}
                    <tr>
                        <td className="border-b border-green-800 hover:bg-green-100 p-2">1</td>
                        <td className="border-b border-green-800 hover:bg-green-100 p-2">Bitcoin</td>
                        <td className="border-b border-green-800 hover:bg-green-100 p-2">BTC</td>
                        <td className="border-b border-green-800 hover:bg-green-100 p-2">$</td>
                        <td className="border-b border-green-800 hover:bg-green-100 p-2">%</td>
                        <td className="border-b border-green-800 hover:bg-green-100 p-2">$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
// On exporte le tableau pour l'utiliser dans d'autres fichiers.
export default Tableau;












// const Tableau = () => {
//     return (
//         <div className="p-10 flex justify-center items-center bg-green-50">
//             <table className="w-full border-collapse border border-green-800 rounded-lg overflow-hidden shadow-lg">
//                 <thead>
//                     <tr className="bg-green-800 text-white">
//                         <th className="text-left p-2">Nom de la crypto</th>
//                         <th className="text-left p-2">Prix</th>
//                         <th className="text-left p-2">Volume</th>
//                         <th className="text-left p-2">Changement 24h</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="border-b border-green-800 hover:bg-green-100">
//                         <td className="p-2">Bitcoin</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">%</td>
//                     </tr>
//                     <tr className="border-b border-green-800 hover:bg-green-100">
//                         <td className="p-2">Ethereum</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">%</td>
//                     </tr>
//                     <tr className="border-b border-green-800 hover:bg-green-100">
//                         <td className="p-2">Litecoin</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">%</td>
//                     </tr>
//                     <tr className="border-b border-green-800 hover:bg-green-100">
//                         <td className="p-2">Ripple</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">%</td>
//                     </tr>
//                     <tr className="border-b border-green-800 hover:bg-green-100">
//                         <td className="p-2">Cardano</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">$</td>
//                         <td className="p-2">%</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Tableau;