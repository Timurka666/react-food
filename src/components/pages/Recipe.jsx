import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../../api";
import { useEffect, useState } from "react";
import { Preloader } from "../Preloader";

export function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then(data => (setRecipe(data.meals[0])));
    }, [id]);
    const {
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        strInstructions
    } = recipe;
    
    return (
        <>
            <button className="btn yellow darken-3" onClick={goBack}>Go back</button>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe" style={{marginTop: "3rem"}}>
                    <img src={strMealThumb} alt={strMeal} className="recipe-img" />
                    <h1>{strMeal}</h1>
                    <h6>Category: {strCategory}</h6>
                    {strArea ? <h6>Area: {strArea}</h6> : null}
                    <h3>How to cook</h3>
                    <p>{strInstructions}</p>
                    <div className="ingredients">
                        <table className="centerd">
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if (key.includes('strIngredient') && recipe[key]) {
                                            return (
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>{
                                                        recipe[`strMeasure${key.slice(13)}`]
                                                    }</td>
                                                </tr>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}