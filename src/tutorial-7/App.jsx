import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./styles.css";

function App() {
  const {handleSubmit, register, formState: {errors}, reset} = useForm();

  const onSubmit = (values) => console.log("ФОРМА!", values);

  return (
    <div className="App">
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register("firstName", {
            validate: (value) => value !== "admin" || "Nice try!",
            required: "Это обязательное поле!"
          })}
          helperText={errors.firstName && errors.firstName.message}
          error={!!errors.firstName}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register("lastName", {
            required: "Это обязательное поле!"
          })}
          helperText={errors.lastName && errors.lastName.message}
          error={!!errors.lastName}
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: "Это неверная почта!"
            },
            required: "Это обязательное поле!"
          })}
          helperText={errors.email && errors.email.message}
          error={!!errors.email}
          name="email"
          label="E-Mail"
          defaultValue=""
          fullWidth
        />
        <TextField
          {...register("password", {
            required: "Это обязательное поле!"
          })}
          helperText={errors.password && errors.password.message}
          error={!!errors.password}
          name="password"
          type="password"
          label="Пароль"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register("about", {
          required: "Это обязательное поле!"
        })}
          helperText={errors.about && errors.about.message}
          error={!!errors.about}
          type="about"
          name="about"
          label="Обо мне"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          Зарегистрироваться
        </Button>
        <Button
          onClick={() => reset({firstName: '', lastName: '', email: '', password: '', about: ''})}
          variant="contained" color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
}

export default App;
