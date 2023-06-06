import "./Header.css";
function Header({addCardHandler,sortCardsHandler}) {

  return (
    <div className="header-container">
      <div className="button-container">
        <button className="button" onClick={addCardHandler}>Add Card</button>
        <button className="button" onClick={sortCardsHandler}>Sort Cards</button>
      </div>
    </div>
  );
}

export default Header;