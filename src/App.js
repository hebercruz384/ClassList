import "./styles.css";

function ListItem(firstName, lastName) {
  return (
    <li>
      {firstName} {lastName}
    </li>
  );
}
export default function App() {
  return <div className="App">{ListItem("Heber", "Cruz")} </div>;
}
