import { useState,useEffect} from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Accountlist } from './App';
import { Home2 } from "./Home2";
import { useContext } from 'react';
export function Loginnew({newuserdata, setuser, user ,log}) {

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [theme, settheme] = useState();  //  console.log(newuserdata.length)
  const addaccountlist = (index) => {

    setAnchorElUser(null);
    const user = index;
    return setuser(index);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (index, newuserdata, setnewuserdata) => {
    setAnchorElUser(null);
 
  };
  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Logout'];
  return (

    <div className='container-Loginnew'>
      <div className='navbar'>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  // onClose={handleCloseNavMenu}
                  
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >


                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>

                      <Typography textAlign="center">{page}</Typography>

                    </MenuItem>
                  ))}

                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{
                flexGrow: 1, display: {
                  xs: 'none', md: 'flex',

                  justifyContent: 'End',
                  padding: "10px"


                }
              }}>
                {/* <button onClick={() => settheme()}></button> */}
                {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
                <h2 className='home-profile'


                >Profile</h2>
              </Box>

              <Box sx={{ flexGrow: 0 }}>

                <Tooltip title="Open settings">

                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                >
                  <MenuItem textAlign="center"> <Button onClick={() => setAnchorElUser(null)}><ArrowBackIcon />Back</Button></MenuItem>
                  {newuserdata.map((nm, index) => (

                    <Accountlist nm={nm} user={user} newuserdata={newuserdata} key={index} index={index} setuser={setuser} handleCloseUserMenu={handleCloseUserMenu} addaccountlist={() => addaccountlist(index)} />

                  ))}
                  {/* {settings.map((setting,index) => (
              <MenuItem key={setting} onClick={()=>handleCloseUserMenu(index,newuserdata,setnewuserdata)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))} */}
                  <MenuItem textAlign="center" onClick={() => navigate("/Addprofile")}>Add Profile<AddIcon /></MenuItem>
                  <MenuItem textAlign="center" onClick={() => navigate("/")}>Log out<LogoutIcon /></MenuItem>
                </Menu>

              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      {/* <Link to="/2" >Home</Link> */}
    
      <Home2 newuserdata={newuserdata} val={user}  log={log}/>
     
    </div>

  );
}
