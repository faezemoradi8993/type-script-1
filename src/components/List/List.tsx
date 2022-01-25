import React from "react";
import { IState as IProps } from "./../../App";

const List: React.FC<IProps> = ({ people }) => {
    console.log(people);
    
  const renderList = ()=> {
    return people.map((person) => {return(<li className="flex justify-center items-center w-1/5 bg-red-200"><h2 className="mr-3">{person.name}</h2><h1>{person.age}</h1></li>)});
  };
  return (<div className="p-5 ">
    <h1 className="font-bold text-lg">guests list</h1>
    <ul className="flex flex-col justify-between items-center space-y-3 w-full p-5">{renderList()}</ul>
  </div>);
};

export default List;
 