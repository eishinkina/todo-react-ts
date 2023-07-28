import React, { ChangeEvent, useState } from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };
  return (
    <div className="input-field mt2">
      <input
        onKeyDown={keyDownHandler}
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder="Введите название дела"
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
