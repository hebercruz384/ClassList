import "./styles.css";

function ListItem(personData) {
  return (
    <tr>
      <td>{personData.firstname}</td>
      <td>{personData.lastname}</td>
      <td>{personData.pronouns}</td>
      <td>{personData.school}</td>
    </tr>
  );
}
let classRoster = [
  {
    firstname: "First Name",
    lastname: "Last Name",
    pronouns: "Pronouns",
    school: "School"
  },
  {
    firstname: "Heber",
    lastname: "Cruz",
    pronouns: "he/him",
    school: "John Jay School for Law"
  },
  {
    firstname: "Chinaza",
    lastname: "Onwukanjo",
    pronouns: "she/her",
    school: "Frederick Douglass Academy"
  },
  { firstname: "Alex", lastname: "Sanchez", pronouns: "he/him", school: "" },
  {
    firstname: "Claudia",
    lastname: "Luna-Marcelino",
    pronouns: "she/her",
    school: "P-TECH"
  }
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
