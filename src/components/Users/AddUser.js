import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "유효하지 않은 입력값입니다.",
        message: "유효한 이름과 나이를 입력해주세요. ",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "유효하지 않은 나이입니다.",
        message: "0보다 큰 숫자를 입력해주세요. ",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">이름</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">나이</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">추가</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
