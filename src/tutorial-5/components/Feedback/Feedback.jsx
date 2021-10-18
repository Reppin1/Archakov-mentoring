import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import {v4 as uuidv4} from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

export default function Feedback({setComments}) {
  const classes = useStyles();
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [review, setReview] = React.useState('')

  const changeName = (event) => {
    setName(event.target.value)
  }

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changeText = (event) => {
    setReview(event.target.value)
  }

  const clear = () => {
    setName('')
    setEmail('')
    setReview('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name.trim() && email.trim() && review.trim()) {
      setComments((prev) => [...prev, {
        id: uuidv4(),
        fullName: name,
        email: email,
        createdAt: new Date(),
        text: review
      }])
    }
    clear()
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <h3>Обратная связь:</h3>
      </div>
      <div>
        <TextField required id="outlined-basic" value={name} onChange={changeName} label="Имя" variant="outlined"
                   placeholder="Введите имя" />
      </div>
      <div>
        <TextField required id="outlined-basic" type="email" value={email} onChange={changeEmail} label="Почта"
                   variant="outlined" placeholder="Введите почту" />
      </div>
      <div>
        <TextField required id="outlined-basic" value={review} onChange={changeText} label="Текст" variant="outlined"
                   placeholder="Оставьте отзыв" />
      </div>
      <Button type="submit" variant="contained">Отправить</Button>
    </form>
  );
};
