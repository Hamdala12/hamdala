import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img.azee.png" alt="Azee Bello" />;
}

function Intro() {
  return (
    <div>
      <h1>Importation by Zee</h1>
      <p>
        Zee's import and customs solution allows you to expand to new markets
        without the problems that normally come with imports and dealing with
        customs authorities. We make the global expansioney feel as effortless
        as local shipping.
      </p>
    </div>
  );
}

function Skilllist() {
  return (
    <div className="skill-list">
      <Skill skill="Kitchen appliances" color="#1234" />
      <Skill skill="Footwear" color="orangered" />
      <Skill skill="Bags" color="#2344" />
      <Skill skill="Shoes" color="pink" />
      <Skill skill="Ladies care" color="yellow" />
      <Skill skill="Abayah" color="#f7f7" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
