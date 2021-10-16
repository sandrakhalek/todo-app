import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function MenuItem({ icon, text, route }) {
  return (
    <Link to={route}>
      <ListItem button key={text}>
        <ListItemIcon children={icon} />
        <ListItemText sx={{ color: "black" }} primary={text} />
      </ListItem>
    </Link>
  );
}

export default MenuItem;
