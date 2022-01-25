import "./App.css";
import React, { useState } from "react";
import List from "./components/List/List";
import AddPeople from "./components/AddPeople/AddPeople";
export interface IState {
  people: { name: string; age: number; image: string; note?: string }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "faeze", age: 15, image: "", note: "hello how are you baby" },
    { name: "ali", age: 20, image: "", note: "bye baby girl are you baby" },
    { name: "hasan", age: 10, image: "", note: "hi ali how are yow bro" },
  ]);
  return (
    <div className="App">
        <List people={people} />
        <AddPeople setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
