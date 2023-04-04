import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { SubscribedDialog } from './SubscribedDialog';



export const NavigationBar = () => {
  const data = [
    {name: 'excel', price: 159},
    {name: 'java', price: 237},
  ];
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Enrollment
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SubscribedDialog onClose={() => setOpen(false)} open={open} data={data} />
    </Box>
  )
}
