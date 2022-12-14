import { useParams, useHistory } from "react-router-dom";
import { getFilteredCategory } from "../../api";
import { useEffect, useState } from "react";
import { Preloader } from "../Preloader";
import { MealList } from "../MealList";

export function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <button className="btn yellow darken-3" onClick={goBack}>Go back</button>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>;
}