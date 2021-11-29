import "./styles.css";

function ListItem(personData) {
  return (
    <tr>
      <td>{personData.firstname}</td>
      <td>{personData.lastname}</td>
      <td>{personData.pronouns}</td>
    </tr>
  );
}
let classRoster = [
  { firstname: "Heber", lastname: "Cruz", pronouns: "he/him" },
  { firstname: "Chinaza", lastname: "Onwukanjo", pronouns: "she/her" },
  { firstname: "Alex", lastname: "Sanchez", pronouns: "he/him" },
  { firstname: "Claudia", lastname: "Luna-Marcelino", pronouns: "she/her" }
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
