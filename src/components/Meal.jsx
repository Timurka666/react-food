import { Link } from "react-router-dom";

export function Meal(props) {
    const {
        strMeal,
        strMealThumb,
        idMeal
    } = props;

    return (
        <div className="item card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn yellow darken-3">Watch recipe</Link>
            </div>
        </div>
    );
}