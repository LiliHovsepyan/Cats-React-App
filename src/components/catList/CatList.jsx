import './CatList.css';
import CatItem from "../catItem";


const CatList = ({cats}) => {

    return (
        <div className="MealList">
            {
                cats.map(item => <CatItem key={item.id} {...item}/>)
            }
        </div>
    );
};

export default CatList;
