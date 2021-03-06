import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import { useDispatch, useSelector } from 'react-redux';
import { logoutFunc } from '../redux/auhtRedux/actions';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const signOutFunc = () => {
    return currentUser && dispatch(logoutFunc());
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        // position="fixed"
        open={open}
        sx={{
          backgroundColor: '#000',
        }}
      >
        <Toolbar>
          <IconButton
            color="warning"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ color: '#F49B02' }} variant="h6" component="p">
            {!currentUser.displayName
              ? window.location.reload()
              : currentUser.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          backgroundColor: '#000',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        // variant="contained"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

          <div className="d-flex flex-column">
            <div style={{ marginLeft: '1rem' }}>
              <ListItem button>
                <NavLink to="/" className="btn btn-warning w-100">
                  Main Page
                </NavLink>
              </ListItem>
              {/* <ListItem button>
                <NavLink to="/orders" className="btn btn-warning w-100">
                  Orders Page
                </NavLink>
              </ListItem> */}
              <ListItem button>
                <NavLink to="/invoice" className="btn btn-warning w-100">
                  New invoice
                </NavLink>
              </ListItem>

              <ListItem button>
                <NavLink to="/invoicelist" className="btn btn-warning w-100">
                  Invoice List
                </NavLink>
              </ListItem>

              <ListItem button>
                <NavLink to="/selectcostumer" className="btn btn-warning w-100">
                  Select Costumer
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to="/addproduct" className="btn btn-warning w-100">
                  Add Product
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to="/viewproduct" className="btn btn-warning w-100">
                  View Products
                </NavLink>
              </ListItem>
            </div>
          </div>
        </List>
        <Divider />
        <div className="text-center ">
          {/* {currentUser.displayName ? (
            <Button className="btn btn-warning w-50 my-3" onClick={signOutFunc}>
              Sign Out
            </Button>
          ) : (
            window.location.reload()
          )} */}
          <Button className="btn btn-warning w-50 my-3" onClick={signOutFunc}>
            Sign Out
          </Button>
        </div>
      </Drawer>
    </Box>
  );
}
