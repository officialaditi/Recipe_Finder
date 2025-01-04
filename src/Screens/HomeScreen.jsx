import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const store = await response.json();
    setRecipes(store.recipes);
    console.log(store)
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="mainContainer">
      {recipes.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
};
