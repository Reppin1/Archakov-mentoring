const Form = () => {

  let login = ''
  let password = ''

  const changeValue = (event) => {
    if(event.target.name === 'login') {
      login = event.target.value
    }
    else {
      password = event.target.value
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(login.trim() && password.trim()) {
      console.log(`Логин: ${login} Пароль: ${password}`)
      event.target.reset()
    }
    else {
      alert('заполните поля')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="login" type="text" onChange={ changeValue } placeholder="Введите логин" />
        <input name="password" type="password" onChange={ changeValue } placeholder="Введите пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export { Form };
