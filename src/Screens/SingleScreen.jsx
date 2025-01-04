import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleScreen = () => {
  const [recipe, setRecipe] = useState([]);
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
      <div>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} />
      </div>
      <div>
       <div>
       <h3 className="ingredients">Ingredients:</h3>
        <ul>
          {recipe.ingredients?.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
       </div>
        <div>
        <h3>Instruction</h3>
        <ol>
            {recipe.instructions?.map((list) => <li key={list.id}>{list}</li>)   }
        </ol>
        </div>
      </div>
    </div>
  );
};
