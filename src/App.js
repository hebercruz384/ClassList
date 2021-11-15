import "./styles.css";

function ListItem(firstName, lastName) {
  let ListItem = [];
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
    </tr>
  );
}
let classRoster = [
  ["Heber", "Cruz"],
  ["Chinaza", "Onwukanjo"],
  ["Alex", "Sanchez"],
  ["Claudia", "Luna-Marcelino"]
];
classRoster.map(function (person) {
  return ListItem(person[0]);
});

export default function App() {
  return (
    <div className="App">
      <h1>Roster</h1>
    </div>
  );
}
