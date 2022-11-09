import './HomePage.css';
import {useState, useEffect} from "react";
import {getAllCategories} from "../../api";
import CategoryList from "../../components/categoryList";

const HomePage = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            console.log(data.categories);
            setCategories(data.categories);
        });
    }, []);


    return (
        <div className="HomePage">
            <CategoryList categories={categories}/>
        </div>
    );
}


export default HomePage;
