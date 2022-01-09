import React, {createContext, useContext, useReducer} from 'react';

//Prepapres the dataLayer
export const StateContext = createContext();


//Wrap the app  and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);