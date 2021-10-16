import { Divider, Drawer, List } from "@mui/material";
import { Box } from "@mui/system";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuItem from "../menu-item/MenuItem";
import Title from "../title/Title";

function Sidebar({ itemList }) {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          display: { sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
        open
      >
        <Title text="TODO App" />
        <Divider />

        <List>
          {itemList.map((obj) => (
            <Router>
              <MenuItem text={obj.text} icon={obj.icon} route={obj.route} />
              <Switch>
                <Route path={obj.route}>{obj.view}</Route>
              </Switch>
            </Router>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
