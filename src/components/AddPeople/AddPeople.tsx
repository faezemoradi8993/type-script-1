import React, { useState } from "react";
interface IProps {
    setPeople : React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        image: string;
        note?: string;
    }[]>>;
    people:{
        name: string;
        age: number;
        image: string;
        note?: string;
    }[];

}
interface IState {
    input:{
        name: string;
        age: number;
        image: string;
        note?: string;
    };
}

const AddPeople:React.FC<IProps>=({people,setPeople})=> {
  [input, setInput] = useState<IState>({});
  const clickHandler=()=>{
 
  }
  const changeHandler=(e:React.ChangeEvent<HTMLInputElement>):void=>{
 setInput({...input},[e.target.name]:[e.target.value])
  }
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
      <input type="number" placeholder="Age"   onChange={changeHandler} value={input?.age} name="age" />
      <input
        type="text"
        placeholder="Image URL"
        onChange={changeHandler}
        value={input?.image}
        name="image"
      />
      <textarea placeholder="Note (optional)"   onChange={changeHandler} value={input?.note} name="note" />
      <button onClick={(e)=>clickHandler()}>Add</button>
    </div>
  );
}

export default AddPeople;
