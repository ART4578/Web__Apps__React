import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <h3>Conditional styling using <b>ClassNames</b> package in ReactJS</h3>
      <div className="box">
        <p onClick={onClickHeader} className="title">Click me! <i className="arrow-down"></i></p>
        <div className={`description ${isOpen ? "description-active" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos officia quidem eaque quaerat optio? Veniam consequatur molestias tempore ipsam repellat provident dolore, placeat reprehenderit voluptate nisi similique ducimus dolorum, fugiat ipsa quos dicta velit iusto cupiditate tempora quo esse necessitatibus ullam? Id praesentium ad quo iste dolorum debitis veritatis?
        </div>
      </div>
    </div>
  );
};

export default App;