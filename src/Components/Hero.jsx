import React from "react";
import bitcoin from "../assets/bitcoin-2007769_640.jpg";

const Hero = () => {
  return (
    <div className="bg-green-800 md:flex justify-center items-center p-10 mb-10 mt-20 ">
      <div className=" md:w-1/2 md:h-full flex flex-col justify-center items-start md:p-10 gap-4 mb-5 md:mb-0 text-white">
        <h1 className="font-bold text-3xl">
          Votre passerelle vers l’économie décentralisée
        </h1>
        <p>
          La crypto-monnaie est une forme de monnaie numérique qui utilise la
          cryptographie pour sécuriser les transactions, contrôler la création
          de nouvelles unités et vérifier le transfert d'actifs. Contrairement
          aux monnaies traditionnelles, elle fonctionne sur une technologie
          appelée blockchain, qui est un registre décentralisé et immuable.
        </p>
        <form action="#" method="#" className="flex justify-between gap-2 rounded-xl bg-white p-2 w-2/3 shadow-2xl">
          <input
            className="text-green-800 p-1 w-2/3"
            type="text"
            placeholder="Rechercher votre crypto"
          />
          <button type="submit" className="bg-green-800 p-2 rounded-sm shadow-2xl">Rechercher</button>
        </form>
      </div>
      <div className="md:w-1/2 md:p-20 flex justify-center items-center ">
        <img src={bitcoin} alt="" className="w-full h-full object-cover rounded-2xl" />
      </div>
    </div>
  );
};

export default Hero;
