import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./Pages/Main";

function App() {
  let itemList = [
    {
      text: "Completed",
      icon: <AssignmentTurnedInIcon />,
      route: "/completed",
      // view: <Test />,
    },
    { text: "Incomplete", icon: <AssignmentLateIcon />, route: "/incomplete" },
  ];

  return (
    <div className="app">
      <Sidebar itemList={itemList} />
      <Main />
    </div>
  );
}

export default App;
