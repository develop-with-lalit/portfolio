import * as React from "react";
import { Link } from "react-scroll";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = [
  { title: "About", path: "about" },
  { title: "Technologies", path: "technologies" },
  { title: "Timeline", path: "timeline" },
  { title: "My Work", path: "projects" },
  { title: "Work Experience", path: "experience" },
  { title: "Education", path: "education" },
  { title: "Contact Me", path: "contact" },
];

const PortfolioTitle = "Lalit's Portfolio";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "green" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* Mobile Icon */}
            <MenuIcon sx={{ mr: 2 }} />
            {PortfolioTitle}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {/* Desktop */}
            {PortfolioTitle}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.title} sx={{ color: "#fff" }}>
                <Link
                  to={item.path}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {/* <Link to=”about” smooth duration={500}>About Page</Link> */}
                  {item.title}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* Mobile Drawer */}
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              {PortfolioTitle}
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <Button key={item.title} sx={{ textAlign: "center" }}>
                    <Link
                      to={item.path}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {/* <Link to=”about” smooth duration={500}>About Page</Link> */}
                      {item.title}
                    </Link>
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}
