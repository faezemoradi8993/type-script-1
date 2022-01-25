import React, { useState } from "react";
import { IState as Props } from "./../../App";
interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}
interface IState {
  input: {
    name: string;
    age: number;
    image: string;
    note?: string;
  };
}

const AddPeople: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    image: "",
    note: "",
  });
  const clickHandler = (): void => {
    if (!input.name || !input.age || !input.image) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        image: input.image,
        note: input.note,
      },
    ]);
  };
  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col">
      <input
        className=""
        type="text"
        placeholder="Name"
        onChange={changeHandler}
        value={input?.name}
        name="name"
      />
      <input
        type="number"
        placeholder="Age"
        onChange={changeHandler}
        value={parseInt(input?.age)}
        name="age"
      />
      <input
        type="text"
        placeholder="Image URL"
        onChange={changeHandler}
        value={input?.image}
        name="image"
      />
      <textarea
        placeholder="Note (optional)"
        onChange={changeHandler}
        value={input?.note}
        name="note"
      />
      <button onClick={(e) => clickHandler()}>Add</button>
    </div>
  );
};

export default AddPeople;
