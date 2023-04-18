import { Avatar, Box, Button, Card, CardActions, CardHeader, CardMedia, IconButton, LinearProgress, linearProgressClasses, Rating, styled } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from "@mui/material/colors";
import React from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  marginLeft: 15,
  marginRight: 15,
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

export const CourseCard = () => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Box sx={ { width: '25em', height: '25em', m: '2vh' } }>
      <Avatar sx={ { bgcolor: red[500], left: 20, width: 60, height: 60, zIndex: 1 } } aria-label="recipe" >
        R
      </Avatar>
      <Card sx={ { top: -25, position: 'relative' } }>
        <CardMedia
          component="img"
          height="194"
          image="https://hahow-production.imgix.net/63eae4a6e001d43a5bd4d4fb?w=300&sat=0&auto=format&s=bf14a6d850ab9a5d2900102ce8e2ca52"
          alt="course1"
        />
        <CardHeader
          action={
            <IconButton aria-label="share">
              <ExpandMoreIcon />
            </IconButton>
          }
          title="Course 1"
          subheader="Description:"
        />
        {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
        <BorderLinearProgress variant="determinate" value={ 50 } />
        <CardActions disableSpacing>
          {/* <Rating
            name="simple-controlled"
            value={ value }
            onChange={ (event, newValue) => {
              setValue(newValue);
            } }
          /> */}
        </CardActions>
        <Button variant="contained" fullWidth>Subscribe</Button>
      </Card>
    </Box>
  )
}
