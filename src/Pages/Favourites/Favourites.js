import React from "react";

import styles from "./Favourites.module.css";
import FavouriteCaseOne from "../../Components/Favorite Case One/FavouriteCaseOne";
import FavouriteCaseTwo from "../../Components/Favourite Case Two/FavouriteCaseTwo";

function Favourites() {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      {storedFavorites.length === 0 ? (
     <FavouriteCaseOne/>
      ) : (
       <FavouriteCaseTwo/>
      )}
    </div>
  );
}
export default Favourites;
