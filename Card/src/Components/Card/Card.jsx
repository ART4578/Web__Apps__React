import "./Card.css";
import {MainContainerContext} from "../../App";
import { useContext } from "react";

function Card({card}){
    const deleteButtonHandler = useContext(MainContainerContext);
    return <div className="uniqueCard">
        {card.cardNumber}
        <button className="delButton" onClick={()=>deleteButtonHandler(card.cardNumber)}>X</button>
    </div>
}

export default Card;