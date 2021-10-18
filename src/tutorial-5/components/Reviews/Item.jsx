import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Button } from "@material-ui/core";

const Item = ({review, deleteItem}) => {

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={review.fullName} secondary={review.text} />
      <Button
        variant="contained"
        onClick={() => deleteItem(review.id)}
        color="secondary"
      >Удалить</Button>
    </ListItem>
  );
};

export { Item };