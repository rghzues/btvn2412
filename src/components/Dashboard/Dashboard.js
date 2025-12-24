import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  Paper,
} from "@mui/material";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
      <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Button color="inherit">Quản lý sản phẩm</Button>
          <Button color="inherit">Quản lý users</Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      
      <Box sx={{ p: 3 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" mb={2}>
            Danh sách sản phẩm (fake)
          </Typography>

          <List>
            <ListItem>Sản phẩm A</ListItem>
            <ListItem>Sản phẩm B</ListItem>
            <ListItem>Sản phẩm C</ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
}

export default Dashboard;
