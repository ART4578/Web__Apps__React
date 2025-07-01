import { useState, useReducer } from "react";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import "./App.css";
import uniqueNumberGenerate from "./uniqueNumberGenerate";
import React from "react";

export const MainContainerContext = React.createContext();
function reducer(cards, action) {
  switch (action.type) {
    case "add":
      return [
        ...cards,
        {
          id: new Date() + Math.random(),
          cardNumber: uniqueNumberGenerate(),
        },
      ];
    case "sort":
      return [
        ...cards.sort(function (a, b) {
          return a.cardNumber - b.cardNumber;
        }),
      ];
      case "deleteCard":
        return cards.filter((card) => card.cardNumber != action.payload.cardNumber)
    default:
      throw new Error();
      }
}

function App() {
  const [cards, dispatch] = useReducer(reducer, []);

  const addCardHandler = () => {
    dispatch({ type: "add" });
  };

  const sortCardsHandler = () => {
    dispatch({ type: "sort" });
  };

  const deleteButtonHandler = (cardNumber) => {
   dispatch({type:"deleteCard", payload : {
    cardNumber :cardNumber
   }})
  };

  return (
    <div className="container">
      <div className="container-first">
        <Header
          sortCardsHandler={sortCardsHandler}
          addCardHandler={addCardHandler}
        />
        <MainContainerContext.Provider value={deleteButtonHandler}>
          <MainContainer cards={cards} />
        </MainContainerContext.Provider>

        <Footer />
      </div>
      <Aside />
    </div>
  );
}

export default App;