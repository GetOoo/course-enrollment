import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, IconButton, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useState } from 'react';
import { PendedDialog } from './PendedDialog';
import { Link } from 'react-router-dom';

const DUMMY_DATA = [
  { name: 'Courses 1', price: 159 },
  { name: 'Courses 2', price: 237 },
]

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
            Course Enrollment
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 2 } }
            component={ Link } to="/"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 2 } }
            onClick={ () => setOpen(true) }
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 2 } }
            component={ Link } to="/courses"
          >
            <HistoryEduIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <PendedDialog onClose={ () => setOpen(false) } open={ open } data={ DUMMY_DATA } />
    </Box>
  )
}
