import Reviews from "./components/Reviews/Reviews";
import Feedback from "./components/Feedback/Feedback";
import React from "react";
import { Grid } from "@material-ui/core";

const App = () => {

  const [comments, setComments] = React.useState(JSON.parse(localStorage.getItem("comments")) || [])
  console.log(comments)

  React.useEffect(() =>{
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    ><Reviews reviews={comments} setComments={setComments} /><Feedback setComments={setComments} /></Grid>
  );
};

export { App };