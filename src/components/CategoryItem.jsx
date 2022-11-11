import { Link } from "react-router-dom";

export function CategoryItem(props) {
    const {
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;

    return (
        <div className="category-item card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${idCategory}`} className="btn">Watch category</Link>
            </div>
        </div>
    );
}