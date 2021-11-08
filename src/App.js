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
export default function App() {
  return (
    <div className="App">
      <h1>Roster</h1>
      <table>
        {ListItem("Heber, Cruz")}
        {ListItem("Chinaza, Onwukanjo")}
        {ListItem("Alex, Sanchez")}
        {ListItem("Claudia, Luna-Marcelino")}
      </table>
    </div>
  );
}
