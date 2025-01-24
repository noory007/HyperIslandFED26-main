import React from "react";
function Child({ person }) {
  console.log(person);
  return (
    <div>
      <h2>Name: {person.name}</h2>
      <h2>Age: {person.info.age} </h2>
      <h2>City: {person.info.city} </h2>
      <h2>Job: {person.info.job} </h2>
      <h2>Hobbies: {person.info.hobbies + ""} </h2>
    </div>
  );
}
export default Child;
