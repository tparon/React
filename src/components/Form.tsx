import React, { FC, FormEvent, useState } from "react";

interface Props {
  addPost: (task: string, date: string) => void;
}

const Form: FC<Props> = ({ addPost }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addPost(task, date)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
