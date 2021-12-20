import "./styles.css";

function ListItem(personData) {
  return (
    <tr>
      <td>{personData.firstname}</td>
      <td>{personData.lastname}</td>
      <td>{personData.pronouns}</td>
      <td>{personData.school}</td>
      <td>{personData.media}</td>
      <td>{personData.animals}</td>
    </tr>
  );
}
let classRoster = [
  {
    firstname: "First Name",
    lastname: "Last Name",
    pronouns: "Pronouns",
    school: "School",
    media: "Youtube or Tiktok?",
    animals: "Cats or Dogs?"
  },
  {
    firstname: "Heber",
    lastname: "Cruz",
    pronouns: "he/him",
    school: "John Jay School for Law",
    media: "TikTok",
    animals: "Cats"
  },
  {
    firstname: "Chinaza",
    lastname: "Onwukanjo",
    pronouns: "she/her",
    school: "Frederick Douglass Academy",
    media: "Youtube",
    animals: "Dogs"
  },
  {
    firstname: "Alex",
    lastname: "Sanchez",
    pronouns: "he/him",
    school: "N/A......",
    media: "N/A.....",
    animals: "N/A....."
  },
  {
    firstname: "Claudia",
    lastname: "Luna-Marcelino",
    pronouns: "she/her",
    school: "P-TECH",
    media: "N/A.....",
    animals: "Cats"
  }
];
let rosterList = classRoster.map(ListItem);

export default function App() {
  return (
    <div className="App">
      <h1>Class Roster</h1>
      <table>{rosterList}</table>
    </div>
  );
}
