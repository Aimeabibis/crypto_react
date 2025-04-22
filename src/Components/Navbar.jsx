import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-white bg-gray-600 h-20 fixed shadow-lg top-0 left-0 right-0 w-screen px-10">
      <h2 className="text-2xl font-bold">AbibisCrypto</h2>
      <ul className="md:flex hidden list-none gap-14 cursor-pointer text-xl">
        <li><a href="#" className="">Accueil</a></li>
        <li><a href="#">Crypto</a></li>
        <li><a href="#">À propos</a></li>
      </ul>
      <div className="flex items-center justify-center gap-4">
        <button className="bg-green-800 p-2 rounded-sm hover:bg-amber-900 shadow-2xl ">
          Connexion
        </button>
        <button className="bg-green-800 p-2 rounded-sm hover:bg-amber-900 shadow-2xl">
          Inscription
        </button>
      </div>
    </div>
  );
};

export default Navbar;
