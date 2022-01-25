import React from "react";
import { IState as IProps } from "./../../App";

const List: React.FC<IProps> = ({ people }) => {
    console.log(people);
    
  const renderList = ()=> {
    return people.map((person) => {return(<li className="flex "><h1>{person.name}</h1><h1>{person.age}</h1></li>)});
  };
  return (<ul>{renderList( )}</ul>);
};

export default List;
 