import './CategoryPage.css'
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {getFilteredCategories} from "../../api";
import CatList from "../../components/catList";


const CategoryPage = () => {

    const {name} = useParams();
    const [cats, setCats] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        getFilteredCategories(name).then(data => {
            console.log(data.cats);
            setCats(data.cats);
        });
    }, []);


    return (
        <div className="CategoryPage">
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <CatList cats={cats}/>
        </div>
    );
}

export default CategoryPage;

