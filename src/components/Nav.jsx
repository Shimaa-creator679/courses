import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import SchoolIcon from "@mui/icons-material/School";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";

const pages = ["Home", "Courses", "Instructors", "Blog", "About Us", "Contact"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav>
     
      <AppBar position="static" sx={{ backgroundColor: "#3594e8",overflowX: "hidden", }} >
        <Container maxWidth="xl">
         <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Logo (Desktop) */}
            <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
            
              }}
            >
              Learnix
            </Typography>

            {/* Burger menu (Mobile) */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo (Mobile) */}
            <SchoolIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
               
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: { xs: '14px', sm: '18px', md: '22px' }
                
              }}
            >
              Learnix
            </Typography>

            {/* Menu Items (Desktop) */}
            <Box   sx={{
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "center", // يوسّط العناصر أفقياً
    alignItems: "center",     // يوسّط العناصر عموديًا (لو في حاجة تحدد الارتفاع)
  }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                   
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Registration Button */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <button
                className="flex items-center gap-1  text-sm bg-white text-black rounded-3xl py-1 px-1 text-center"
                style={{ whiteSpace: "nowrap"  }}
              >
                Registration
                <div className="w-[18px] h-[18px] flex justify-center items-center bg-blue-500 text-black rounded-full">
                  <GoArrowUpRight size={12} />
                </div>
              </button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
    </nav>
  );
};

export default Nav;
