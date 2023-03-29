const AddUser = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">이름</label>
      <input id="username" type="text" />

      <label htmlFor="age">나이</label>
      <input id="age" type="number" />
      <button type="submit">추가</button>
    </form>
  );
};
export default AddUser;
