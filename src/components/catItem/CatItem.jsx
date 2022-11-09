
import './CatItem.css';
import {Link, useNavigate} from "react-router-dom";

const CatItem = ({id, name}) => {

    const navigate = useNavigate();

    return(
        <div className="CatItem">
            <h3>{id}</h3>
            <h3>{name}</h3>
            <button onClick={()=>navigate('/cat' + id)}>Detail {name}...</button>
        </div>
    );
}

export default CatItem;
