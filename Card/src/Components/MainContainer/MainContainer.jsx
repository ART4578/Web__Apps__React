import "./MainContainer.css"
import Card from "../Card/Card";

function MainContainer({cards}){
    return <div className="main-container">
        {
            cards.map((card)=><Card card={card} key={card.id}/>)
        }
    </div>
}

export default MainContainer;