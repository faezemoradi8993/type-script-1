import React, { useState } from "react";
import { IState as Props } from "./../../App";
interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
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
    <div className="flex flex-col items-center justify-center p-5 shadow-lg mt-4 bg-green-200">
      <input
        className="w-full bg-green-100 border-2 border-green-300 p-1 my-2 rounded-md active:bg-white "
        type="text"
        placeholder="Name"
        onChange={changeHandler}
        value={input?.name}
        name="name"
      />
      <input
        className="w-full bg-green-100 border-2 border-green-300 p-1 my-2 rounded-md active:bg-white "
        type="number"
        placeholder="Age"
        onChange={changeHandler}
        value={parseInt(input?.age)}
        name="age"
      />
      <input
        className="w-full bg-green-100 border-2 border-green-300 p-1 my-2 rounded-md active:bg-white "
        type="text"
        placeholder="Image URL"
        onChange={changeHandler}
        value={input?.image}
        name="image"
      />
      <textarea
        className="w-full bg-green-100 border-2 border-green-300 p-1 my-2 rounded-md active:bg-white "
        placeholder="Note (optional)"
        onChange={changeHandler}
        value={input?.note}
        name="note"
      />
      <button className="bg-green-400 rounded-lg px-7 py-3 mt-2 hover:shadow-md hover:bg-green-600 text-white" onClick={clickHandler}>Add</button>
    </div>
  );
};

export default AddPeople;
