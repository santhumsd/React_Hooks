import React from "react";
import Person from './Person'
function NameList() {
  const People = [
    {
      id: 2,
      name: "san",
      age: 24,
      skill: "reactJs",
    },
    {
      id: 2,
      name: "Man",
      age: 25,
      skill: "Vue",
    },
    {
      id: 3,
      name: "Lan",
      age: 34,
      skill: "Angular",
    },
    {
      id: 4,
      name: "LMSA",
      age: 45,
      skill: "Node",
    },
  ];
  const namelists = People.map((person) => <Person key={person.id} person={person}/>);
  return <div>{namelists}</div>;
}

export default NameList;
