import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import React from "react";
import {Item} from "./Item";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    maxWidth: 400,
    maxHeight: 350,
    overflowY: 'scroll',
    border: '1px solid gray',
    padding: '20px',
    borderRadius: '6px',
    backgroundColor: "white",
  },
}));

export default function Reviews({reviews, setComments}) {
  const classes = useStyles();

  const deleteItem = (id) => {
    const filteredReviews = reviews.filter((el) => el.id !== id)
    setComments(filteredReviews)
    localStorage.setItem('comments', JSON.stringify(filteredReviews))
  }

  return (
    <List className={classes.root}>
      <h3>Отзывы:</h3>
      {reviews.map((el, index) => <Item deleteItem={deleteItem} index={index} key={el.id} review={el} />)}
    </List>
  );
}

export {Reviews};
