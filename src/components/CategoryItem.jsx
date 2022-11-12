import { Link } from "react-router-dom";

export function CategoryItem(props) {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;

    return (
        <div className="item card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn yellow darken-3">Watch category</Link>
            </div>
        </div>
    );
}