import {useParams,useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {getCatById} from "../api";

const DetailPage = () => {

    const [cat, setCat] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getCatById(id).then(data => {
            console.log(data.cats[0]);
            setCat(data.cats[0]);
        })
    },[]);

    return (
        <div className="DetailPage">
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <img src={cat.url} alt=""/>
            <h3>Area: {cat.width}</h3>
            <h3>Category: {cat.height}</h3>
        </div>
    );
}
export default DetailPage;

