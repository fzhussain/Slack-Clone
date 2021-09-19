import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();  // Datalayer


export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

/*
NOTE:
children -> The entire App
StateContext.Provider -> Like a datalayer
Goal -> Push the 'user who will login' into the datalayer and pull back wherever we are in the datalayer. So that the user is globally accessible.
reducer -> Listens any kind of action that we shoot at the datalayer -> in our case, login the user
initialState -> What the datalayer looks like initially

useStateValue -> This is our own hook, and we will pull and push the information in the datalayer
*/