const EmptyBlock = () => {
  return (
    <div className="block empty-block"><img
      src="https://cdn.pixabay.com/photo/2019/02/09/13/53/emoji-3985178_1280.png"
      width="32px" height="32px" alt="Ghost" />
      <h2>Список фраз пустой</h2>
      <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
    </div>
  );
};

export { EmptyBlock };