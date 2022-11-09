import './CategoryItem.css'
import {Link} from "react-router-dom";

const CategoryItem = ({item}) => {

    return (
        <div className="CategoryItem">
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <Link to={'/category/' + item.name}>Detail {item.name} Category...</Link>
        </div>
    );
}

export default CategoryItem;

