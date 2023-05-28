import { Avatar, Box, Button, Card, CardHeader, CardMedia } from "@mui/material"
import classes from "./CourseCard.module.css"
import { useCallback, useEffect, useState } from "react"

export const CourseCard = (prop: any) => {
  // const [isSubscribed, setIsSubscribed] = useState(false);
  // let emptyStringArr: string[] = [];
  // const [subscribedCourse, setSubscribedCourse] = useState(emptyStringArr);

  // const subscribeHandler = async () => {
  //   const newSubscribedCourse = [prop.course.id].concat(subscribedCourse);
  //   await fetch('https://course-enrollment-370ed-default-rtdb.firebaseio.com/cart.json', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ subscribedCourse: newSubscribedCourse })
  //   })
  //   setIsSubscribed(true);
  // }

  // const checkSubscribedHandler = useCallback(
  //   async () => {
  //     const response = await fetch('https://course-enrollment-370ed-default-rtdb.firebaseio.com/cart.json');
  //     const cartCourse = await response.json();
  //     setSubscribedCourse((cartCourse?.subscribedCourse == null) ? [] : cartCourse.subscribedCourse);
  //   }, []
  // );

  // useEffect(() => {
  //   checkSubscribedHandler();
  // }, [checkSubscribedHandler]);

  return (
    <Box className={ classes.Box }>
      <Avatar className={ classes.Avatar } >
        { prop.course.name }
      </Avatar>
      <Card sx={ { top: -25, position: 'relative' } }>
        <CardMedia
          component="img"
        // height="194"
        // image="https://hahow-production.imgix.net/63eae4a6e001d43a5bd4d4fb?w=300&sat=0&auto=format&s=bf14a6d850ab9a5d2900102ce8e2ca52"
        // alt="course1"
        />
        <CardHeader title={ prop.course.title } />
        <Button variant="contained" fullWidth onClick={ () => prop.subscribeHandler(prop.course.title) } >
          Subscribe
        </Button>
      </Card>
    </Box>
  )
}
