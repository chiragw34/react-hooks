import React, { useReducer } from "react";

import Form from "./components/Form.js";
import People from "./components/People.js";
import NewestPerson from "./components/NewestPerson.js";

import PeopleContext from "./context/peopleContext.js";
import peopleReducer from "./context/peopleReducer.js";
import { ADD_PERSON } from "./context/types.js";

const App = () => {
  const initialState = {
    people: [
      {
        firstName: "john",
        lastName: "doe"
      },
      {
        firstName: "jane",
        lastName: "doe"
      }
    ]
  };

  const [state, dispatch] = useReducer(peopleReducer, initialState);

  const addPerson = person => {
    dispatch({
      type: ADD_PERSON,
      payload: person
    });
  };

  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        addPerson
      }}
    >
      <div className="container mt-4">
        <div className="row">
          <Form />
          <People />
          <NewestPerson />
        </div>
      </div>
    </PeopleContext.Provider>
  );
};

export default App;
