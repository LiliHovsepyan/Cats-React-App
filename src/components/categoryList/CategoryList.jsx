import './CategoryList.css';
import CategoryItem from "../categoryItem";

const CategoryList = ({categories}) => {
    return (
        <div className="CategoryList">
            {
                categories.map(item => <CategoryItem key={item.id} item={item}/>)
            }
        </div>
    );
}


export default CategoryList;
