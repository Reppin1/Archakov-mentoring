const button = document.querySelector('button')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const todo = ['Задача 1']

const render = () => {
  ul.innerHTML = '';
  todo.map((el, index) => {
    const li = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.addEventListener("click", () => {
      handleClickRemove(index)
    })
    removeButton.innerText = 'Удалить'
    li.innerText = el
    ul.append(li)
    li.append(removeButton)
  })
}

const handleClickRemove = (index) => {
  todo.splice(index, 1)
  render()
}

const handleClickAdd = () => {
  if (input.value.trim()) {
    todo.push(input.value)
    input.value = ''
    render()
  }
}

button.addEventListener("click", () => {
  handleClickAdd()
})

render()