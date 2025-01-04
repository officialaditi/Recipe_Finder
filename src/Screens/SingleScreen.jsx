import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleScreen = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  const fetchSingleData = async () => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const store = await response.json();
    setRecipe(store);
  };
  useEffect(() => {
    fetchSingleData();
  }, [id]);

  return (
    <div>
      <h1>{recipe.name}</h1>
    </div>
  );
};
