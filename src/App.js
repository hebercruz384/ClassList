import "./styles.css";

function ListItem(personData) {
  return (
    <tr>
      <td>{personData[0]}</td>
      <td>{personData[1]}</td>
      <td>{personData[2]}</td>
    </tr>
  );
}
let classRoster = [
  ["Heber", "Cruz", "he/him"],
  ["Chinaza", "Onwukanjo", "she/her"],
  ["Alex", "Sanchez", "he/him"],
  ["Claudia", "Luna-Marcelino", "she/her"]
];

let rosterList = classRoster.map(ListItem);

export default function App() {
  return (
    <div className="App">
      <h1>Roster</h1>
      <table>{rosterList}</table>
    </div>
  );
}
